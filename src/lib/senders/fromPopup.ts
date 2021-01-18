import makeLogger from '../makeLogger';

const logger = makeLogger('popupSend');
const popupSend = (code = 'NO_CODE') => {
  logger('message sent', code);
  chrome.runtime.sendMessage({ code }, function (response) {
    logger('response of message', response);
    // response.farewell
  });
};

export default popupSend;
