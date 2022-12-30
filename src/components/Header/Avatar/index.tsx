import { useState } from 'react';
import * as Icon from 'react-feather';

import avatar from '../../../assets/images/avatar.jpg';
import useComponentVisible from '../../../utils/hooks/useComponentVisible';
import styles from './styles.module.scss';

export default function Avatar() {
  const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false);
  const [showDropdown, setShowDropdown] = useState<boolean>(false);

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

  return (
    <div ref={ref} className={styles.userWrap}>
      <div
        className={styles.avatarWrap}
        onClick={() => {
          if (showDropdown === false || isComponentVisible === false) {
            setShowDropdown(true);
            setIsComponentVisible(true);
          } else {
            setTimeout(() => {
              setShowDropdown(false);
              setIsComponentVisible(false);
            }, 500);
          }
        }}
      >
        <div className={styles.avatar}>
          <img src={avatar} alt='' />
        </div>
        <p>
          Hi, <span>Latte</span>
        </p>
        <Icon.ChevronDown size={20} strokeWidth={1} />
      </div>
      {showDropdown && isComponentVisible ? (
        <>
          <div className={styles.avatarDropdown}>
            <p className={styles.title}>User Profile</p>
            <div className={styles.info}>
              <div className={styles.avatar}>
                <img src={avatar} alt='' />
              </div>
              <div className={styles.textGroup}>
                <div className={styles.title}>Latte</div>
                <p>Administrator</p>
                <div className={styles.email}>
                  <Icon.Mail size={18} />
                  <p>latte@coffee.com</p>
                </div>
              </div>
            </div>
            <div className={styles.detail}>
              {details.map((detail) => (
                <div key={detail.id} className={styles.item}>
                  <div className={styles.icon}>{detail.icon}</div>
                  <div className={styles.text}>
                    <p>{detail.text}</p>
                    <p className={styles.subtext}>{detail.subtext}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className={styles.button}>Sign Out</button>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
