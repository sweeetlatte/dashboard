import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import * as Icon from 'react-feather';

import styles from './styles.module.scss';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const options = {
  responsive: true,
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
  scales: {
    x: {
      display: false,
    },
    y: {
      display: false,
    },
  },
  elements: {
    line: {
      tension: 0.4,
    },
    point: {
      radius: 0,
    },
  },
};

const labels = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
];

const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [2, 12, 1, 4, 3, 11, 5, 6, 9],
      borderColor: '#cec266',
    },
  ],
};

export default function WeeklyStats() {
  return (
    <>
      <div className={styles.topContainer}>
        <div className={styles.title}>
          <div>Weekly Stats</div>
          <div>...</div>
        </div>
        <div className={styles.rowContainer}>
          <div className={styles.row}>
            <div className={styles.leftContainer}>
              <div className={styles.icon1}>
                <Icon.ShoppingCart size={20} />
              </div>
              <div className={styles.info}>
                <div>Top Sales</div>
                <div className={styles.detail}>Latte without sugar</div>
              </div>
            </div>
            <div className={styles.percent}>+57%</div>
          </div>
          <div className={styles.row}>
            <div className={styles.leftContainer}>
              <div className={styles.icon2}>
                <Icon.Star size={20} />
              </div>
              <div className={styles.info}>
                <div>Best Seller</div>
                <div className={styles.detail}>Latte without sugar</div>
              </div>
            </div>
            <div className={styles.percent}>+57%</div>
          </div>
          <div className={styles.row}>
            <div className={styles.leftContainer}>
              <div className={styles.icon3}>
                <Icon.MessageSquare size={20} />
              </div>
              <div className={styles.info}>
                <div>Most Commented</div>
                <div className={styles.detail}>Latte without sugar</div>
              </div>
            </div>
            <div className={styles.percent}>+57%</div>
          </div>
        </div>
      </div>
      <Line options={options} data={data} height={120} />
    </>
  );
}
