import React from 'react';
import Media from 'react-media'
import MainCard from './MainCard';
import Button from '../UI/Button';

const MainSecond = () => {

  const cardsXL = [
    {id:1, title: 'Виджеты', text: '30 готовых решений'},
    {id:2, title: 'Dashboard', text: 'с показателями вашего бизнеса'},
    {id:3, title: 'Skype Аудит', text: 'отдела продаж и CRM системы'},
    {id:4, title: '35 дней', text: 'использования CRM'},
  ]
  const cardsSM = [
    {id:1, title: 'Skype аудит'},
    {id:2, title: 'Dashboard'},
    {id:3, title: '30 виджетов'},
    {id:4, title: 'Месяц аmoCRM'},
  ]
  
  return (
    <div className='main-second'>
      <p className="main-second__title text__left_big">
      Вместе с <span className='text-color'>бесплатной консультацией</span> мы дарим:
      </p>
      <div className="main-second__cards">
        <Media queries={{ small: { maxWidth: 1050 } }}>
          {matches => 
            matches.small ? (
              cardsSM.map((card) =>
                <MainCard
                  title={card.title}
                  text=''
                  key={card.id}/>
                ))
            : (
              cardsXL.map((card) =>
                <MainCard
                  title={card.title}
                  text={card.text}
                  key={card.id}/>
                )
            )
          }
        </Media>
        </div>
        <Button />
    </div>
  );
};

export default MainSecond;