import makeLogger from '../makeLogger';
import sendFromBackground from '../senders/fromBackground';

const logger = makeLogger('listenFromBackground');
// listen from background
const listenFromBackground = () => {
  chrome.runtime.onMessage.addListener(function (message, sender, reply) {
    logger('onMessage', { message, sender, reply });
    // chrome.runtime.onMessage.removeListener(event);
    sendFromBackground('TEST_CODE_FROM_BACKGROUND');
    reply({ message: 'hello from background!' });
    // return true;
  });
};

export default listenFromBackground;
