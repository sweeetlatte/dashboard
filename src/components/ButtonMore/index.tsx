import { useState } from 'react';

import useComponentVisible from '../../utils/hooks/useComponentVisible';
import styles from './styles.module.scss';

export default function ButtonMore() {
  const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false);
  const [showDropdown, setShowDropdown] = useState<boolean>(false);

  return (
    <div className={styles.container} ref={ref}>
      <div
        className={styles.dotsContainer}
        onClick={() => {
          setShowDropdown(true);
          setIsComponentVisible(!isComponentVisible);
        }}
      >
        <div className={styles.dots}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <span className={styles.tooltip}>More</span>
      </div>
      {showDropdown && isComponentVisible ? (
        <div
          className={styles.dropdownContainer}
          onClick={() => {
            setShowDropdown(false);
            setIsComponentVisible(false);
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
