import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import * as Icon from 'react-feather';

import styles from './styles.module.scss';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

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
  barPercentage: 0.9,
  categoryPercentage: 0.3,
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
  'October',
  'November',
  'December',
];

const data = {
  labels,
  datasets: [
    {
      label: 'Latte',
      data: [24, 17, 21, 23, 9, 22, 24, 9, 6, 18, 27, 30],
      backgroundColor: '#87898e',
      borderRadius: 2,
    },
  ],
};

export default function MonthlyEarnings() {
  return (
    <>
      <div className={styles.title}>Monthly Earnings</div>
      <Bar options={options} data={data} height={50} />
      <div className={styles.number}>
        $39,358{' '}
        <span>
          <Icon.ArrowUpLeft size={14} />
        </span>
        <span>+9%</span>
      </div>
    </>
  );
}
