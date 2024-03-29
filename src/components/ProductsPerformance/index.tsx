import avatar from '../../assets/images/avatar.jpg';
import CustomSelectBox from '../CustomSelectBox';
import styles from './styles.module.scss';

export default function ProductPerformance() {
  const tableData = [
    {
      id: 0,
      avatar: avatar,
      name: 'Latte',
      job: 'Web Developer',
      task: 'New Theme',
      priority: 'High',
      budget: '$24.4k',
    },
    {
      id: 1,
      avatar: avatar,
      name: 'Latte',
      job: 'Web Developer',
      task: 'New Theme',
      priority: 'Medium',
      budget: '$24.4k',
    },
    {
      id: 2,
      avatar: avatar,
      name: 'Latte',
      job: 'Web Developer',
      task: 'New Theme',
      priority: 'Low',
      budget: '$24.4k',
    },
    {
      id: 3,
      avatar: avatar,
      name: 'Latte',
      job: 'Web Developer',
      task: 'New Theme',
      priority: 'Medium',
      budget: '$24.4k',
    },
  ];

  return (
    <>
      <div className={styles.title}>
        <div>Product Performance</div>
        <div className={styles.selectBox}>
          <CustomSelectBox />
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th style={{ width: '40%' }}>Assigned</th>
            <th style={{ width: '30%' }}>Task</th>
            <th style={{ width: '18%' }}>Priority</th>
            <th style={{ width: '12%', textAlign: 'right' }}>Budget</th>
          </tr>
        </thead>
        <tbody>
          {tableData &&
            tableData.map((row) => (
              <tr key={row.id}>
                <td>
                  <div className={styles.avatar}>
                    <img src={row.avatar} alt='' width={'100%'} />
                  </div>
                  <div className={styles.info}>
                    <div className={styles.name}>{row.name}</div>
                    <div className={styles.job}>{row.job}</div>
                  </div>
                </td>
                <td>{row.task}</td>
                <td>
                  <div
                    className={
                      row.priority === 'Low'
                        ? styles.low
                        : row.priority === 'Medium'
                        ? styles.medium
                        : styles.high
                    }
                  >
                    {row.priority}
                  </div>
                </td>
                <td>{row.budget}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
}
