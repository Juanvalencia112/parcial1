import React from 'react';
import { FormattedMessage } from 'react-intl';

function Header() {
  return (
    <header>
      <h1><FormattedMessage id="header.title" /></h1>
      <img src={'https://img.freepik.com/vector-premium/conjunto-lindos-robots-vintage_331172-1430.jpg?w=996'} alt="Robots" />
    </header>
  );
}

export default Header;
