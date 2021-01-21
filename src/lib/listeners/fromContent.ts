import makeLogger from '../makeLogger';
import { MSG_CHANGE_COLOR } from '../../constants';
import storage from '../storage';

const logger = makeLogger('listenFromContent');

const onChangeColor = async (message: msgColorChange) => {
  await storage.set('color', message.color);
  logger('color set to ', message.color);
};

const actions: { [key: string]: Function } = {
  [MSG_CHANGE_COLOR]: onChangeColor,
};

const onListen = async (
  message: chromeMessage,
  sender: chrome.runtime.MessageSender,
  reply: (response: any) => void
) => {
  logger('onMessage', { message, sender, reply });
  // chrome.runtime.onMessage.removeListener(event);
  const targetAction = actions[message.code];
  if (!targetAction) logger(`${message.code} action does not available`);
  else await targetAction(message);
  reply({ message: 'hello from content!' });
};

// listen from background
const listenFromBackground = () => {
  chrome.runtime.onMessage.addListener(onListen);
};

export default listenFromBackground;
