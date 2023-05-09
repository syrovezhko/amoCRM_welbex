import React from 'react';
import Phone from '../UI/Phone';
import Messengers from '../UI/Messengers';

const FooterContacts = () => {
  return (
    <div className='footer-contacts'>
      <h3 className="footer-contacts__title">Контакты</h3>
      <div className="footer-contacts__container">
        <Phone style={'header__item phone'} />
        <Messengers style={'messengers'} />
        <h3 className="footer-contacts__address">
          Москва, Путевой проезд 3с1, к 902
        </h3>
      </div>
    </div>
  );
};

export default FooterContacts;