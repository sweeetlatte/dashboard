import Earning from '../../../components/Earnings';
import EarningsWhiteBg from '../../../components/EarningsWhiteBg';
import MedicalProBranding from '../../../components/MedicalProBranding';
import ProductPerformanceExpand from '../../../components/ProductsPerformanceExpand';
import RecentTransactions from '../../../components/RecentTransactions';
import Summary from '../../../components/Summary';
import WeeklyStats from '../../../components/WeeklyStats';
import YearlySales from '../../../components/YearlySales';
import styles from './styles.module.scss';

export default function ECommerce() {
  return (
    <div className={styles.ecomContainer}>
      <div className={styles.ecom1}>
        <div className={styles.ecom1_leftComponent}>
          <EarningsWhiteBg />
        </div>
        <div className={styles.ecom1_rightComponent}>
          <Summary />
        </div>
      </div>
      <div className={styles.ecom2}>
        <div className={styles.ecom2_leftComponent}>
          <ProductPerformanceExpand />
        </div>
        <div className={styles.ecom2_rightContainer}>
          <div className={styles.ecom2_topComponent}>
            <Earning />
          </div>
          <div className={styles.ecom2_bottomComponent}>
            <YearlySales />
          </div>
        </div>
      </div>
      <div className={styles.ecom3}>
        <div className={styles.ecom3_leftComponent}>
          <RecentTransactions />
        </div>
        <div className={styles.ecom3_rightComponent}>right</div>
      </div>
      <div className={styles.ecom4}>
        <div className={styles.ecom4_leftComponent}>
          <WeeklyStats />
        </div>
        <div className={styles.ecom4_middleComponent}>
          <MedicalProBranding />
        </div>
        <div>right</div>
      </div>
    </div>
  );
}
