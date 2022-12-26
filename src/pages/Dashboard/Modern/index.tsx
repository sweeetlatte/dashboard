import Congratulation from '../../../components/Congratulation';
import DailyActivities from '../../../components/DailyActivities';
import News from '../../../components/News';
import ProductPerformance from '../../../components/ProductPerformance';
import Purchases from '../../../components/Purchases';
import SalesOverview from '../../../components/SalesOverview';
import TotalSales from '../../../components/TotalSales';
import WeeklyStats from '../../../components/WeeklyStats';
import styles from './styles.module.scss';

export default function Modern() {
  return (
    <div className={styles.modernContainer}>
      <div className={styles.modern1}>
        <div className={styles.modern1_leftComponent}>
          <Congratulation />
        </div>
        <div className={styles.modern1_middleComponent}>
          <Purchases />
        </div>
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
        <div className={styles.modern3_leftComponent}>
          <TotalSales />
        </div>
        <div className={styles.modern3_rightComponent}>
          <ProductPerformance />
        </div>
      </div>
      <div className={styles.modern4}>
        <div>
          <DailyActivities />
        </div>
        <div>
          <SalesOverview />
        </div>
      </div>
      <div className={styles.modern5}>
        <div className={styles.modern5_leftComponent}>
          <News />
        </div>
        <div className={styles.modern5_middleComponent}>
          <WeeklyStats />
        </div>
        <div>right</div>
      </div>
    </div>
  );
}
