import * as Icon from 'react-feather';

import latte from '../../assets/images/avatar.jpg';
import styles from './styles.module.scss';

export default function News() {
  const data = {
    id: 0,
    createdAt: 'Dec 24, 2022',
    title: '10 Great Make-Ahead Holiday Appetizers',
    tags: ['Recipe', 'Holiday'],
    authors: [
      {
        id: 0,
        avatar: latte,
        name: 'Latte',
      },
      {
        id: 1,
        avatar: latte,
        name: 'Cappuccino',
      },
      {
        id: 2,
        avatar: latte,
        name: 'Macchiato',
      },
    ],
  };
  return (
    <>
      <div className={styles.img}>
        <img src={latte} alt='' />
      </div>

      {data && (
        <div key={data.id} className={styles.detail}>
          <div className={styles.createdAt}>
            <Icon.Clock size={14} />
            <div>{data.createdAt}</div>
          </div>
          <div className={styles.title}>{data.title}</div>
          <div className={styles.tags}>
            {data.tags.map((tag, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <div key={index}>{tag}</div>
            ))}
          </div>
          <div className={styles.bottom}>
            <div className={styles.authors}>
              {data.authors.map((author) => (
                <div key={author.id} className={styles.imgContainer}>
                  <img src={author.avatar} alt='' />
                  <span className={styles.tooltip}>{author.name}</span>
                </div>
              ))}
            </div>
            <div className={styles.imgContainer}>
              <Icon.MessageCircle />
              <span className={styles.tooltip}>Add a Comment</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
