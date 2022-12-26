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

import styles from './styles.module.scss';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
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
    },
    y: {
      grid: {
        display: false,
      },
    },
  },
  barPercentage: 0.9,
  categoryPercentage: 0.3,
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June'];

const data = {
  labels,
  datasets: [
    {
      label: 'Latte',
      data: [12, 3, 8, 10, 7, 11],
      backgroundColor: '#ba6039',
      borderRadius: 4,
    },
    {
      label: 'Espresso',
      data: [9, 7, 11, 1, 6, 8],
      backgroundColor: '#cec266',
      borderRadius: 4,
    },
  ],
};

export default function SalesOverview() {
  return (
    <>
      <div className={styles.title}>Sales Overview</div>
      <Bar options={options} data={data} height={188} />
    </>
  );
}
