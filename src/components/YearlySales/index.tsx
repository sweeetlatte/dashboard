import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

import styles from './styles.module.scss';

ChartJS.register(ArcElement, Tooltip, Legend);

const optionsChart = {
  responsive: true,
  maintainAspectRatio: true,
  plugins: {
    legend: {
      display: false,
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
  labels: ['Red', 'Blue', 'Yellow', 'Grey'],
  datasets: [
    {
      data: [18, 18, 18, 18],
      backgroundColor: ['#cec266', '#ba6039', '#eeb736', '#87898e'],
      borderWidth: 0,
    },
  ],
};

export default function YearlySales() {
  return (
    <>
      <div className={styles.leftContainer}>
        <div>
          <div className={styles.number}>43,246</div>
          <div className={styles.text}>Yearly sales</div>
        </div>
        <div className={styles.labelGroup}>
          <div className={styles.row}>
            <div>
              <span></span>2021
            </div>
            <div>
              <span></span>2022
            </div>
          </div>
          <div className={styles.row}>
            <div>
              <span></span>2023
            </div>
            <div>
              <span></span>2024
            </div>
          </div>
        </div>
      </div>
      <div className={styles.rightContainer}>
        <Doughnut options={optionsChart} data={dataChart} />
      </div>
    </>
  );
}
