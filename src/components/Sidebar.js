import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './Sidebar.css';

// ...
export default props => {
  return (
    <Menu>
      <a className="menu-item" href="/">
        Hjem
      </a>
      <a className="menu-item" href="/info">
        Info
      </a>
    </Menu>
  );
};