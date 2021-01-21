import React from 'react';
import logo from '../../assets/img/logo.svg';
import './Popup.css';
import popupSend from '@/lib/senders/fromPopup';
import { MSG_COLOR_CHANGE } from '../../constants';

const Popup = () => {
  const sendMessage = () => {
    popupSend('TEST_MESSAGE');
    popupSend(MSG_COLOR_CHANGE, 'black');
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/pages/Popup/Popup.js</code> and save to reload.
        </p>
        <button onClick={sendMessage}>send Message</button>
      </header>
    </div>
  );
};

export default Popup;
