import Earning from '../../../components/Earnings';
import Hello from '../../../components/Hello';
import MonthlySales from '../../../components/MonthlySales';
import News from '../../../components/News';
import ProductPerformance from '../../../components/ProductPerformance';
import SalesOverview from '../../../components/SalesOverview';
import TotalSales from '../../../components/TotalSales';
import styles from './styles.module.scss';

export default function Analytical() {
  return (
    <div className={styles.analyticalContainer}>
      <div className={styles.analytical1}>
        <div className={styles.analytical1_leftContainer}>
          <div className={styles.analytical1_topComponent}>
            <Hello />
          </div>
          <div className={styles.analytical1_bottomContainer}>
            <Earning />
            <MonthlySales />
          </div>
        </div>
        <div className={styles.analytical1_rightComponent}>
          <SalesOverview />
        </div>
      </div>
      <div className={styles.analytical2}>
        <div className={styles.analytical2_leftComponent}>
          <TotalSales />
        </div>
        <div className={styles.analytical2_rightComponent}>
          <ProductPerformance />
        </div>
      </div>
      <div className={styles.analytical3}>
        <div className={styles.analytical3_leftComponent}>
          <News />
        </div>
        <div className={styles.analytical3_middleComponent}>middle</div>
        <div className={styles.analytical3_rightComponent}>right</div>
      </div>
    </div>
  );
}
