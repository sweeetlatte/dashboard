import * as Icon from 'react-feather';

import styles from './styles.module.scss';

export default function WeeklyStats() {
  return (
    <>
      <div className={styles.topContainer}>
        <div className={styles.title}>
          <div>Weekly Stats</div>
          <div>...</div>
        </div>
        <div className={styles.rowContainer}>
          <div className={styles.row}>
            <div className={styles.leftContainer}>
              <div className={styles.icon1}>
                <Icon.ShoppingCart size={20} />
              </div>
              <div className={styles.info}>
                <div>Top Sales</div>
                <div className={styles.detail}>Latte without sugar</div>
              </div>
            </div>
            <div className={styles.percent}>+57%</div>
          </div>
          <div className={styles.row}>
            <div className={styles.leftContainer}>
              <div className={styles.icon2}>
                <Icon.Star size={20} />
              </div>
              <div className={styles.info}>
                <div>Best Seller</div>
                <div className={styles.detail}>Latte without sugar</div>
              </div>
            </div>
            <div className={styles.percent}>+57%</div>
          </div>
          <div className={styles.row}>
            <div className={styles.leftContainer}>
              <div className={styles.icon3}>
                <Icon.MessageSquare size={20} />
              </div>
              <div className={styles.info}>
                <div>Most Commented</div>
                <div className={styles.detail}>Latte without sugar</div>
              </div>
            </div>
            <div className={styles.percent}>+57%</div>
          </div>
        </div>
      </div>

      <div>chart</div>
    </>
  );
}
