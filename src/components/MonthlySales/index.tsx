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

export default function MonthlySales() {
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
      <div className={styles.chartContainer}>
        <Line options={options} data={data} height={116} />
      </div>
    </div>
  );
}
