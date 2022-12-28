import * as Icon from 'react-feather';

import styles from './styles.module.scss';

export default function RecentTransactions() {
  const transactions = [
    {
      id: 0,
      icon: <Icon.DollarSign />,
      title: 'PayPal Transfer',
      subtitle: 'Money added',
      change: 350,
    },
    {
      id: 1,
      icon: <Icon.Shield />,
      title: 'Wallet',
      subtitle: 'Bill payment',
      change: -560,
    },
    {
      id: 2,
      icon: <Icon.CreditCard />,
      title: 'Credit Card',
      subtitle: 'Money reversed',
      change: 350,
    },
    {
      id: 3,
      icon: <Icon.Check />,
      title: 'Bank Transfer',
      subtitle: 'Money added',
      change: 350,
    },
    {
      id: 4,
      icon: <Icon.RefreshCw />,
      title: 'Refund',
      subtitle: 'Payment sent',
      change: -50,
    },
  ];

  return (
    <>
      <div className={styles.title}>Recent Transactions</div>
      <div className={styles.container}>
        {transactions.map((transaction) => (
          <div key={transaction.id} className={styles.row}>
            <div className={styles.titleContainer}>
              <div className={styles.iconContainer}>{transaction.icon}</div>
              <div>
                <div className={styles.title}>{transaction.title}</div>
                <div className={styles.subtitle}>{transaction.subtitle}</div>
              </div>
            </div>
            {transaction.change > 0 ? (
              <div className={styles.up}>+${transaction.change}</div>
            ) : (
              <div className={styles.down}>
                {Intl.NumberFormat('en-US', {
                  style: 'currency',
                  currency: 'USD',
                  maximumFractionDigits: 0,
                }).format(transaction.change)}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className={styles.bottom}>
        <button>Add</button>
        <div>36 Recent Transactions</div>
      </div>
    </>
  );
}
