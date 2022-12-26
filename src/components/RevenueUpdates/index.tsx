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

import CustomSelectBox from '../CustomSelectBox';
import styles from './styles.module.scss';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const options = {
  responsive: true,
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
  elements: {
    line: {
      tension: 0.4,
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August'];

const data = {
  labels,
  datasets: [
    {
      label: 'Latte',
      data: [3, 7, 2, 4, 12, 15, 14, 24],
      borderColor: '#cec266',
    },
    {
      label: 'Espresso',
      data: [23, 27, 5, 3, 7, 6, 4, 28],
      borderColor: '#ba6039',
    },
  ],
};

export default function RevenueUpdates() {
  return (
    <>
      <div className={styles.title}>
        <div>Product Performance</div>
        <div className={styles.selectBox}>
          <CustomSelectBox />
        </div>
      </div>
      <Line options={options} data={data} height={75} />
    </>
  );
}
