import styles from './styles.module.scss';

export default function Analytical() {
  return (
    <div className={styles.analyticalContainer}>
      <div className={styles.analytical1}>
        <div className={styles.analytical1_leftContainer}>
          <div className={styles.analytical1_topComponent}>up</div>
          <div className={styles.analytical1_bottomComponent}>
            <div>left</div>
            <div>right</div>
          </div>
        </div>
        <div className={styles.analytical1_rightComponent}>right</div>
      </div>
      <div className={styles.analytical2}>
        <div className={styles.analytical2_leftComponent}>left</div>
        <div className={styles.analytical2_rightComponent}>right</div>
      </div>
      <div className={styles.analytical3}>
        <div className={styles.analytical3_leftComponent}>left</div>
        <div className={styles.analytical3_middleComponent}>middle</div>
        <div className={styles.analytical3_rightComponent}>right</div>
      </div>
    </div>
  );
}
