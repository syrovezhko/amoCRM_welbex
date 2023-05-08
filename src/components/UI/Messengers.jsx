import React from 'react';
import telegram from './../../assets/icons/telegram.svg';
import viber from './../../assets/icons/viber.svg';
import whatsapp from './../../assets/icons/whatsapp.svg';

const Messengers = ({style}) => {
  return (
    <div className={style}>
      <img src={telegram} alt="telegram" className="messengers__item" />
      <img src={viber} alt="viber" className="messengers__item" />
      <img src={whatsapp} alt="whatsapp" className="messengers__item" />
    </div>
  );
};

export default Messengers;