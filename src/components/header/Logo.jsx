import React from 'react';
import logo from './../../assets/img/logo.png'

const Logo = () => {
  return (
    <div className='logo last'>
      <img src={logo} alt="logo" className="logo__img" />
      <p className="logo__text">
        крупный интегратор CRM в Росcии и ещё 8 странах
      </p>
    </div>
  );
};

export default Logo;