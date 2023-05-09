import React from 'react';

const FooterItem = (text) => {
  console.log('text', text)
  return (
    <p className='footer-item'>
      {text.text}
    </p>
  );
};

export default FooterItem;