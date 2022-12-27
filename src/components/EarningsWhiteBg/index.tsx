import * as Icon from 'react-feather';

import styles from './styles.module.scss';

export default function EarningsWhiteBg() {
  return (
    <>
      <div className={styles.title}>
        <div>
          <div className={styles.text}>Earnings</div>
          <div className={styles.number}>$69,154,309</div>
        </div>
        <div className={styles.iconContainer}>
          <Icon.DollarSign />
        </div>
      </div>
      <button>Download</button>
    </>
  );
}
