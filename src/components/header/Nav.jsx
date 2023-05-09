import React from 'react';

const Nav = () => {
  return (
    <ul className='nav'>
      <li className='header__item nav__item'>
        Услуги
      </li>
      <li className='header__item nav__item'>
        Виджеты
      </li>
      <li className='header__item nav__item'>
        Интеграции
      </li>
      <li className='header__item nav__item'>
        Кейсы
      </li>
      <li className='header__item nav__item nav--last last'>
        Сертификаты
      </li>
    </ul>
  );
};

export default Nav;