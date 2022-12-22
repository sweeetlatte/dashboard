import styles from './styles.module.scss';

export default function Modern() {
  return (
    <div className={styles.modernContainer}>
      <div className={styles.modern1}>
        <div className={styles.modern1_leftComponent}>left</div>
        <div className={styles.modern1_middleComponent}>middle</div>
        <div className={styles.modern1_rightComponent}>right</div>
      </div>
      <div className={styles.modern2}>
        <div className={styles.modern2_leftComponent}>left</div>
        <div className={styles.modern2_rightContainer}>
          <div className={styles.modern2_topComponent}>top</div>
          <div className={styles.modern2_bottomComponent}>bottom</div>
        </div>
      </div>
      <div className={styles.modern3}>
        <div className={styles.modern3_leftComponent}>left</div>
        <div className={styles.modern3_rightComponent}>right</div>
      </div>
      <div className={styles.modern4}>
        <div>left</div>
        <div>right</div>
      </div>
      <div className={styles.modern5}>
        <div>left</div>
        <div>middle</div>
        <div>right</div>
      </div>
    </div>
  );
}
