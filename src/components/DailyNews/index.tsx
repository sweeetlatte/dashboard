import latte from '../../assets/images/avatar.jpg';
import ButtonMore from '../ButtonMore';
import styles from './styles.module.scss';

export default function DailyNews() {
  return (
    <>
      <div className={styles.title}>
        <p>Daily News</p>
        <ButtonMore />
      </div>
      <div className={styles.imgContainer}>
        <img src={latte} alt='' />
      </div>
      <h4>React 18 coming soon!</h4>
      <p className={styles.author}>By Latte</p>
      <p>
        This will be the small description for the news you have shown here. There could be some
        great info.
      </p>
      <button>Read More</button>
    </>
  );
}
