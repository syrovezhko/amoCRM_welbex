import React from 'react';
import MainCard from './MainCard';
import Button from '../UI/Button';

const MainSecond = () => {

  const cards = [
    {id:1, title: 'Виджеты', text: '30 готовых решений'},
    {id:2, title: 'Dashboard', text: 'с показателями вашего бизнеса'},
    {id:3, title: 'Skype Аудит', text: 'отдела продаж и CRM системы'},
    {id:4, title: '35 дней', text: 'использования CRM'},
  ]
  
  return (
    <div className='main-second'>
      <p className="main-second__title text__left_big">
      Вместе с <span className='text-color'>бесплатной консультацией</span> мы дарим:
      </p>
      <div className="main-second__cards">
        {cards.map((card) =>
          <MainCard
            title={card.title}
            text={card.text}
            key={card.id}/>
          )}
        </div>
        <Button />
    </div>
  );
};

export default MainSecond;