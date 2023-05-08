import React from 'react';

const Phone = ({style}) => {
  return (
    <a className={style} href='tel:+75555555555'>
      +7 555 555-55-55
    </a>
  );
};

export default Phone;