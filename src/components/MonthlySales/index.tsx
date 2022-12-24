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
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [1, 5, 2, 9, 4, 3, 7],
      borderColor: '#cec266',
      backgroundColor: 'white',
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
      <div>
        <Line options={options} data={data} />
      </div>
    </div>
  );
}
