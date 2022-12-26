import * as Icon from 'react-feather';

import styles from './styles.module.scss';

export default function TotalEarnings() {
  return (
    <>
      <div className={styles.title}>
        <div>Total Earnings</div>
        <div className={styles.iconContainer}>
          <Icon.DollarSign />
        </div>
      </div>
      <div>
        <div className={styles.revenue}>$69,154,309</div>
        <div className={styles.text}>Monthly Revenue</div>
      </div>
    </>
  );
}
