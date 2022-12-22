import * as Icon from 'react-feather';

import styles from './styles.module.scss';

export default function Earning() {
  return (
    <div className={styles.earningContainer}>
      <div className={styles.title}>
        <div>Earnings</div>
        <div className={styles.iconContainer}>
          <Icon.DollarSign />
        </div>
      </div>
      <div className={styles.revenue}>$69,154,309</div>
      <div className={styles.text}>Monthly Revenue</div>
    </div>
  );
}
