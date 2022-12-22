import reading from '../../assets/illustrations/review-report.png';
import styles from './styles.module.scss';

export default function CardHello() {
  return (
    <div className={styles.helloContainer}>
      <div className={styles.text}>
        <div>Hey Latte, </div>
        <div>The latest report is available here.</div>
        <button>Download</button>
      </div>
      <div className={styles.img}>
        <img width='100%' src={reading} alt='' />
      </div>
    </div>
  );
}
