import React from 'react';
import part1 from './../../assets/img/part1.svg'
import part2 from './../../assets/img/part2.svg'

const Logo = () => {
  return (
    <div className='logo last'>
    <div className="logo__img">
      <img src={part1} alt="logo" className="logo__img_part1" />
      <img src={part2} alt="logo" className="logo__img_part2" />
    </div>
      <p className="logo__text">
        крупный интегратор CRM в Росcии и ещё 8 странах
      </p>
    </div>
  );
};

export default Logo;