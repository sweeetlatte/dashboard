import React, { useState } from 'react';
import * as Icon from 'react-feather';

import avatar from '../../../assets/images/avatar.jpg';
import { toggleMask } from '../../../redux/actions';
import { useAppDispatch, useAppSelector } from '../../../redux/store';
import style from './styles.module.scss';

export default function Avatar() {
  const details = [
    {
      id: 1,
      icon: <Icon.User size={18} />,
      text: 'My Profile',
      subtext: 'Account Settings',
    },
    {
      id: 2,
      icon: <Icon.MessageSquare size={18} />,
      text: 'My Inbox',
      subtext: 'Messages & Emails',
    },
    {
      id: 3,
      icon: <Icon.List size={18} />,
      text: 'My Tasks',
      subtext: 'To-do & Daily Tasks',
    },
  ];
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const maskOn = useAppSelector((state) => state.mask);

  return (
    <div className={style.userWrap}>
      <div
        className={style.avatarWrap}
        onClick={() => {
          if (showDropdown === false) {
            setShowDropdown(true);
            dispatch(toggleMask());
          } else setShowDropdown(false);
        }}
      >
        <div className={style.avatar}>
          <img src={avatar} alt='' />
        </div>
        <p>
          Hi, <span>Latte</span>
        </p>
        <Icon.ChevronDown size={20} strokeWidth={1} />
      </div>
      {showDropdown && maskOn ? (
        <>
          <div className={style.avatarDropdown}>
            <p className={style.title}>User Profile</p>
            <div className={style.info}>
              <div className={style.avatar}>
                <img src={avatar} alt='' />
              </div>
              <div className={style.textGroup}>
                <div className={style.title}>Latte</div>
                <p>Administrator</p>
                <div className={style.email}>
                  <Icon.Mail size={18} />
                  <p>latte@coffee.com</p>
                </div>
              </div>
            </div>
            <div className={style.detail}>
              {details.map((detail) => (
                <div key={detail.id} className={style.item}>
                  <div className={style.icon}>{detail.icon}</div>
                  <div className={style.text}>
                    <p>{detail.text}</p>
                    <p className={style.subtext}>{detail.subtext}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className='button'>Logout</button>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
