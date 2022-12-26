import * as Icon from 'react-feather';

import reading from '../../assets/illustrations/review-report.png';
import styles from './styles.module.scss';

export default function Congratulation() {
  return (
    <div className={styles.congratsContainer}>
      <div className={styles.text}>
        <div>Congratulation Latte! </div>
        <div className={styles.number}>
          $39,358{' '}
          <span>
            <Icon.ArrowUpLeft size={14} />
          </span>
          <span>+9%</span>
        </div>
        <button>Download</button>
      </div>
      <div className={styles.img}>
        <img width='100%' src={reading} alt='' />
      </div>
    </div>
  );
}
