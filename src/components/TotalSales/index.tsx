import CustomSelectBox from '../CustomSelectBox';
import styles from './styles.module.scss';

export default function TotalSales() {
  const data = [
    {
      value: '2021',
      label: 'Dec 2021',
    },
    {
      value: '2022',
      label: 'Dec 2022',
    },
    {
      value: '2023',
      label: 'Dec 2023',
    },
  ];

  return (
    <>
      <div className={styles.title}>
        <div>Total Sales</div>
        <div className={styles.selectBox}>
          <CustomSelectBox
            data={data}
            placeholder={data[0].label}
            width='max-content'
            height='50px'
          />
        </div>
      </div>
      <div className={styles.detail}>
        <div className={styles.text}>Sales Yearly</div>
        <div className={styles.number}>8,364,398</div>
      </div>
      <div>chart</div>
    </>
  );
}
