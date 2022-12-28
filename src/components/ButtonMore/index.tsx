import { useState } from 'react';

import { toggleMask } from '../../redux/actions';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import styles from './styles.module.scss';

interface Props {
  componentId: number;
}

export default function ButtonMore({ componentId }: Props) {
  const dispatch = useAppDispatch();
  const mask = useAppSelector((state) => state.mask);
  const [showDropdown, setShowDropdown] = useState<boolean>(false);

  return (
    <div className={styles.container}>
      <div
        className={styles.dotsContainer}
        onClick={() => {
          setShowDropdown(true);
          dispatch(toggleMask());
        }}
      >
        <div className={styles.dots}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <span className={styles.tooltip}>More</span>
      </div>
      {showDropdown && mask ? (
        <div
          className={styles.dropdownContainer}
          onClick={() => {
            setShowDropdown(false);
            dispatch(toggleMask());
          }}
        >
          <div>Action</div>
          <div>Another action</div>
          <div>Something else</div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
