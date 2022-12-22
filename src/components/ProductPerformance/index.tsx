import CustomSelectBox from '../CustomSelectBox';
import styles from './styles.module.scss';

export default function ProductPerformance() {
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
        <div>Product Performance</div>
        <div className={styles.selectBox}>
          <CustomSelectBox
            data={data}
            placeholder={data[0].label}
            width='max-content'
            height='50px'
          />
        </div>
      </div>
      <div className={styles.table}>
        <table>
          <tr>
            <th style={{ width: '42%' }}>Assigned</th>
            <th style={{ width: '28%' }}>Name</th>
            <th style={{ width: '18%' }}>Priority</th>
            <th style={{ width: '12%', textAlign: 'right' }}>Budget</th>
          </tr>
          <tr>
            <td>
              <div>avatar</div>
              <div className={styles.info}>
                <div>name</div>
                <div>job</div>
              </div>
            </td>
            <td>Maria Anders</td>
            <td>Moderateee</td>
            <td>$24.5k</td>
          </tr>
          <tr>
            <td>
              <div>avatar</div>
              <div>
                <div>name</div>
                <div>job</div>
              </div>
            </td>
            <td>Maria Anders</td>
            <td>Moderateee</td>
            <td>$24.5k</td>
          </tr>
        </table>
      </div>
    </>
  );
}
