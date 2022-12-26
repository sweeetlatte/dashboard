import * as Icon from 'react-feather';

import styles from './styles.module.scss';

export default function Purchases() {
  return (
    <>
      <div className={styles.title}>
        <div>Purchases</div>
        <div className={styles.iconContainer}>
          <Icon.ShoppingBag />
        </div>
      </div>
      <div>
        <div className={styles.number}>2,345</div>
        <div className={styles.subtext}>Monthly Sales</div>
      </div>
    </>
  );
}
