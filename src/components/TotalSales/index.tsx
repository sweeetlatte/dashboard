import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

import CustomSelectBox from '../CustomSelectBox';
import styles from './styles.module.scss';

ChartJS.register(ArcElement, Tooltip, Legend);

const optionsChart = {
  responsive: true,
  maintainAspectRatio: true,
  plugins: {
    legend: {
      position: 'bottom' as const,
    },
    title: {
      display: false,
    },
    tooltip: {
      enabled: false,
    },
  },
};

const dataChart = {
  labels: ['Red', 'Blue', 'Yellow'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3],
      backgroundColor: ['#cec266', '#ba6039', '#949db2'],
      borderWidth: 0,
    },
  ],
};

export default function TotalSales() {
  return (
    <>
      <div className={styles.title}>
        <div>Total Sales</div>
        <div className={styles.selectBox}>
          <CustomSelectBox width='max-content' height='50px' />
        </div>
      </div>
      <div className={styles.detail}>
        <div className={styles.text}>Sales Yearly</div>
        <div className={styles.number}>8,364,398</div>
      </div>
      <div className={styles.chartContainer}>
        <Doughnut options={optionsChart} data={dataChart} />
      </div>
    </>
  );
}
