/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

import { toggleTheme } from '../../redux/actions';
import { useAppDispatch } from '../../redux/store';
import styles from './styles.module.scss';

function ThemeToggle() {
  const dispatch = useAppDispatch();
  const handleToggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <div className={styles.themeToggleContainer}>
      <div>Dark</div>
      <div className={styles.checkboxWrapper5}>
        <div className={styles.check}>
          <input id='check-5' type='checkbox' onChange={handleToggle} />
          <label htmlFor='check-5'></label>
        </div>
      </div>
      <div>Light</div>
    </div>
  );
}

export default ThemeToggle;
