import React from 'react';
import FooterItem from './FooterItem';

const FooterList = ({title, list}) => {
  console.log(list)
  return (
    <div className='footer-list'>
      <h3 className="footer-list__title">{title}</h3>
      <div className="footer-list__block">
        {list.map((text) =>
          <FooterItem text={text.text}/>
        )}
      </div>
    </div>
  );
};

export default FooterList;