import * as Icon from 'react-feather';

import { removeProduct } from '../../redux/actions';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import styles from './styles.module.scss';

export default function ProductsPerformanceTable() {
  const dispatch = useAppDispatch();
  const tableData = useAppSelector((state) => state.product.products);

  return (
    <>
      <div className={styles.title}>Products Performance</div>
      <table>
        <thead>
          <tr>
            <th style={{ width: '59%' }}></th>
            <th style={{ width: '18%' }}></th>
            <th style={{ width: '18%' }}></th>
            <th style={{ width: '5%' }}></th>
          </tr>
        </thead>
        <tbody>
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
                    <span
                      style={{ width: `${row.sold}px` }}
                      className={
                        row.sold >= 90
                          ? styles.progressBar_excellent
                          : row.sold < 90 && row.sold >= 80
                          ? styles.progressBar_good
                          : row.sold < 80 && row.sold >= 50
                          ? styles.progressBar_average
                          : styles.progressBar_poor
                      }
                    ></span>
                  </span>
                  <p className={styles.sold}>{row.sold}% sold</p>
                </td>
                <td>
                  <p className={styles.subtext}>Earnings</p>
                  <p className={styles.number}>
                    {Intl.NumberFormat('en-US', {
                      style: 'currency',
                      currency: 'USD',
                      maximumFractionDigits: 0,
                    }).format(row.earned)}
                  </p>
                </td>
                <td>
                  <div onClick={() => dispatch(removeProduct(row.id))}>
                    <Icon.Trash size={16} />
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
}
