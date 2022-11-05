import React from 'react';
import * as Icon from 'react-feather';

import avatar from '../../../assets/images/avatar.jpg';
import style from './styles.module.scss';

export default function Avatar() {
  return (
    <div className={style.avatarWrap}>
      <div className={style.avatar}>
        <img src={avatar} alt='' />
      </div>
      <p>
        Hi, <span>Latte</span>
      </p>
      <Icon.ChevronDown size={20} strokeWidth={1} />
    </div>
  );
}
