import React from 'react';
import FooterItem from './FooterItem';

const FooterList = ({title, list}) => {
  return (
    <div className='footer-list'>
      <h3 className="footer-list__title">{title}</h3>
      <div className="footer-list__block">
        {list.map((i) =>
          <FooterItem
            text={i.text}
            key={i.id}
            id={i.id}/>
        )}
      </div>
    </div>
  );
};

export default FooterList;