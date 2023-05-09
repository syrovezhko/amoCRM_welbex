import React from 'react';
import Logo from './Logo'
import Nav from './Nav';
import Phone from './../UI/Phone';
import Messengers from './../UI/Messengers';

const Header = () => {
  return (
    <header className='header'>
      <Logo />
      <div className="header__nav">
        <Nav />
        <div className="header__nav__contacts last">
          <Phone style={'last phone header__item'}/>
          <Messengers  style={'last messengers'}/>
        </div>
      </div>
    </header>
  );
};

export default Header;