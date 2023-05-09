import React from 'react';
import FooterList from './FooterList';
import FooterContacts from './FooterContacts';
import FooterLegal from './FooterLegal';

const Footer = () => {
  const about = [
    {id: 1, text: "Партнёрская программа"},
    {id: 2, text: "Вакансии"}
  ]
  const menu = [
    {id: 1, text: "Расчёт стоимости"},
    {id: 2, text: "Услуги"},
    {id: 3, text: "Виджеты"},
    {id: 4, text: "Интеграции"},
    {id: 5, text: "Наши клиенты"},
    {id: 6, text: "Кейсы"},
    {id: 7, text: "Благодарственные письма"},
    {id: 8, text: "Сертификаты"},
    {id: 9, text: "Блог на Youtube"},
    {id: 10, text: "Вопрос / Ответ"},
  ]

  return (
    <div className="footer-container">
      <footer className='footer'>
        <div className="footer__row">
          <div className="list-container">
            <FooterList 
              title={'О компании'}
              list={about}
            />
            <FooterList 
              title={'Меню'}
              list={menu}
            />
          </div>
          <FooterContacts />
        </div>

        <FooterLegal />
      </footer>
    </div>
  );
};

export default Footer;