import * as Icon from 'react-feather';

import styles from './styles.module.scss';

export default function Summary() {
  const summary = [
    {
      id: 0,
      name: 'Customers',
      number: '39,354',
      change: -9,
      icon: <Icon.Users size={22} />,
    },
    {
      id: 1,
      name: 'Products',
      number: '4,396',
      change: 23,
      icon: <Icon.Package size={22} />,
    },
    {
      id: 2,
      name: 'Sales',
      number: '42,339',
      change: 38,
      icon: <Icon.BarChart size={22} />,
    },
    {
      id: 3,
      name: 'Refunds',
      number: '835',
      change: -12,
      icon: <Icon.RefreshCw size={22} />,
    },
  ];
  return (
    <>
      {summary.map((summary) => (
        <div key={summary.id} className={styles.summaryItem}>
          <div className={styles.iconContainer}>{summary.icon}</div>
          <div className={styles.numbers}>
            {summary.number}{' '}
            {summary.change > 0 ? (
              <span className={styles.up}>+{summary.change}%</span>
            ) : (
              <span className={styles.down}>{summary.change}%</span>
            )}
          </div>
          <div className={styles.text}>{summary.name}</div>
        </div>
      ))}
    </>
  );
}
