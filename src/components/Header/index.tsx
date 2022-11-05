import React from 'react';
import * as Icon from 'react-feather';

import logo from '../../assets/images/logo.png';
import Avatar from './Avatar';
import style from './styles.module.scss';

export default function Header() {
  return (
    <header className={style.headerWrap}>
      <div className={style.left}>
        <div className={style.logo}>
          <img src={logo} alt='' />
        </div>
        <div className={style.iconWrap}>
          <Icon.Menu size={20} />
          <Icon.Search size={20} />
        </div>
      </div>
      <div className={style.right}>
        <div className={style.iconWrap}>
          <Icon.MessageSquare size={20} />
          <Icon.Bell size={20} />
        </div>
        <Avatar />
      </div>
    </header>
  );
}
