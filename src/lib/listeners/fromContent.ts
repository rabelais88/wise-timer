import makeLogger from '../makeLogger';

const logger = makeLogger('listenFromContent');
// listen from background
const listenFromBackground = () => {
  chrome.runtime.onMessage.addListener(function (message, sender, reply) {
    logger('onMessage', { message, sender, reply });
    // chrome.runtime.onMessage.removeListener(event);
    reply({ message: 'hello from content!' });
    // return true;
  });
};

export default listenFromBackground;
