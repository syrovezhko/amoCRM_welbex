import React from 'react';
import Media from 'react-media'

const FooterItem = ({text, id}) => {
  let displayText = id === 7 ? "Благодарность клиентов" : text
  return (
    <Media queries={{ small: { maxWidth: 1050 } }}>
    {matches => 
      matches.small ? (
        <p className='footer-item'>
          {displayText}
        </p>
      )
      : (
        <p className='footer-item'>
          {text}
        </p>
      )
    }
  </Media>
  );
};

export default FooterItem;