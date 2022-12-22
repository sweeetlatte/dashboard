import styles from './styles.module.scss';

export default function ECommerce() {
  return (
    <div className={styles.ecomContainer}>
      <div className={styles.ecom1}>
        <div className={styles.ecom1_leftComponent}>left</div>
        <div className={styles.ecom1_rightComponent}>right</div>
      </div>
      <div className={styles.ecom2}>
        <div className={styles.ecom2_leftComponent}>left</div>
        <div className={styles.ecom2_rightContainer}>
          <div className={styles.ecom2_topComponent}>top</div>
          <div className={styles.ecom2_bottomComponent}>bottom</div>
        </div>
      </div>
      <div className={styles.ecom3}>
        <div className={styles.ecom3_leftComponent}>left</div>
        <div className={styles.ecom3_rightComponent}>right</div>
      </div>
      <div className={styles.ecom4}>
        <div>left</div>
        <div>middle</div>
        <div>right</div>
      </div>
    </div>
  );
}
