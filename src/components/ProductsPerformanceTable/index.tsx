import * as Icon from 'react-feather';

import avatar from '../../assets/images/avatar.jpg';
import styles from './styles.module.scss';

export default function ProductsPerformanceTable() {
  const tableData = [
    {
      id: 0,
      img: avatar,
      name: 'Butterscotch Ice-cream',
      ingres: ['Ice-Cream', 'Milk', 'Powder'],
      sold: 98,
      earned: 780000,
    },
    {
      id: 1,
      img: avatar,
      name: 'Fresh Tomato',
      ingres: ['Tomato'],
      sold: 81,
      earned: 546000,
    },
    {
      id: 2,
      img: avatar,
      name: 'Candy',
      ingres: ['Chocolate', 'Sugar'],
      sold: 54,
      earned: 457000,
    },
    {
      id: 3,
      img: avatar,
      name: 'Ice-cream Sandwich',
      ingres: ['Ice-Cream', 'Bread'],
      sold: 24,
      earned: 125000,
    },
  ];

  return (
    <>
      <div className={styles.title}>Products Performance</div>
      <table>
        <tr>
          <th style={{ width: '59%' }}></th>
          <th style={{ width: '18%' }}></th>
          <th style={{ width: '18%' }}></th>
          <th style={{ width: '5%' }}></th>
        </tr>
        {tableData &&
          tableData.map((row) => (
            <tr key={row.id}>
              <td>
                <div className={styles.imgContainer}>
                  <img src={row.img} alt='' />
                </div>
                <div className={styles.textContainer}>
                  <p className={styles.name}>{row.name}</p>
                  <p className={styles.ingres}>{row.ingres.join(', ')}</p>
                </div>
              </td>
              <td>
                {row.sold >= 90 ? (
                  <p>Excellent</p>
                ) : row.sold < 90 && row.sold >= 80 ? (
                  <p>Good</p>
                ) : row.sold < 80 && row.sold >= 50 ? (
                  <p>Average</p>
                ) : (
                  <p>Poor</p>
                )}
                <span className={styles.fullBar}>
                  <span className={styles.progressBar}></span>
                </span>
                <p className={styles.sold}>{row.sold}% sold</p>
              </td>
              <td>earning</td>
              <td>
                <Icon.Trash size={16} />
              </td>
            </tr>
          ))}
      </table>
    </>
  );
}
