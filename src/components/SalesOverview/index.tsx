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

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
    tooltip: {
      enabled: false,
    },
  },
  scales: {
    x: {
      // display: false,
      grid: {
        display: false,
      },
    },
    y: {
      // display: false,
      grid: {
        display: false,
      },
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June'];

const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [12, 2, 6, 5, 1, 7],
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: [10, 12, 7, 4, 9, 6],
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

export default function SalesOverview() {
  return <Bar options={options} data={data} />;
}
