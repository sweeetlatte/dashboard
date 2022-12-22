// import ReactApexChart from 'react-apexcharts';
import * as Icon from 'react-feather';

import styles from './styles.module.scss';

export default function MonthlySales() {
  //   const options = {
  //     dataLabels: {
  //       enabled: false,
  //     },
  //     stroke: {
  //       curve: 'smooth',
  //       width: 1,
  //     },
  //   };

  //   const series = [
  //     {
  //       name: 'series1',
  //       data: [32, 48, 27, 50, 42, 112, 100],
  //     },
  //   ];

  return (
    <div className={styles.monthlySalesContainer}>
      <div className={styles.title}>
        <div>
          <div className={styles.text}>Monthly Sales</div>
          <div className={styles.number}>3,596</div>
        </div>
        <div className={styles.iconContainer}>
          <Icon.ShoppingBag />
        </div>
      </div>
      <div>
        {/* <ReactApexChart options={options} series={series} type='area' height={150} /> */}
      </div>
    </div>
  );
}
