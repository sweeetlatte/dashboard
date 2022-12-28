import ButtonMore from '../ButtonMore';
import styles from './styles.module.scss';

export default function DailyActivities() {
  const componentId = 1;

  const data = [
    {
      id: 0,
      time: '09.50',
      task: 'Meeting with Co.',
    },
    {
      id: 1,
      time: '09.50',
      task: 'Meeting with Co.',
    },
    {
      id: 2,
      time: '09.50',
      task: 'Meeting with Co.',
    },
    {
      id: 3,
      time: '09.50',
      task: 'Meeting with Co.',
    },
    {
      id: 4,
      time: '09.50',
      task: 'Meeting with Co.',
    },
  ];

  return (
    <>
      <div className={styles.title}>
        <div>Daily Activities</div>
        <ButtonMore componentId={componentId} />
      </div>
      <div className={styles.timelineContainer}>
        {data &&
          data.map((data) => (
            <div key={data.id} className={styles.timeline}>
              <div>{data.time}</div>
              <div className={styles.seperator}>
                <span className={styles.circle}></span>
                <span className={styles.line}></span>
              </div>
              <div>{data.task}</div>
            </div>
          ))}
      </div>
    </>
  );
}
