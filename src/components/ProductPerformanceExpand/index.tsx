import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js';
import { Bar, Line } from 'react-chartjs-2';

import styles from './styles.module.scss';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

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

const optionsBarChart = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
      align: 'end' as const,
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
      grid: {
        display: false,
      },
      stacked: true,
    },
    y: {
      grid: {
        display: false,
      },
      stacked: true,
    },
  },
  barPercentage: 0.9,
  categoryPercentage: 0.3,
};

const dataBarChart = {
  labels,
  datasets: [
    {
      label: 'Latte',
      data: [12, 3, 8, 10, 7, 11, 27, 9, 24],
      backgroundColor: '#ba6039',
      borderRadius: 4,
    },
    {
      label: 'Espresso',
      data: [9, 7, 11, 1, 6, 8, 17, 9, 21],
      backgroundColor: '#cec266',
      borderRadius: 4,
    },
  ],
};

export default function ProductPerformanceExpand() {
  return (
    <>
      <div className={styles.title}>Products Performance</div>
      <div className={styles.bodyContainer}>
        <div className={styles.leftContainer}>
          <div className={styles.body}>
            <div>
              <div className={styles.number}>
                $93,438 <span>23%</span>
              </div>
              <div className={styles.subtitle}>Budget</div>
            </div>
            <div>
              <div className={styles.number}>$32,839</div>
              <div className={styles.subtitle}>Expense</div>
            </div>
            <Line options={options} data={data} height={30} />
            <div>
              <button>Download Report</button>
            </div>
          </div>
        </div>
        <div className={styles.rightContainer}>
          <Bar options={optionsBarChart} data={dataBarChart} height={160} />
        </div>
      </div>
    </>
  );
}
