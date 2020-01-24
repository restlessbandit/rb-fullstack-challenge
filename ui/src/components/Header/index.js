import React from 'react';
import { css } from 'styled-components';

import logo from './logo.svg';

const Header = () => (
  <div
    css={css`
      display: flex;
      justify-content: center;

      position: sticky;
      top: 0;

      padding: 16px;

      border-bottom: 1px solid lightgray;
      background-color: white;
    `}
  >
    <img alt="Restless Bandit" src={logo} width={140} />
  </div>
);

export default Header;
