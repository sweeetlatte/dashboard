import avatar from '../../assets/images/avatar.jpg';
import ButtonMore from '../ButtonMore';
import styles from './styles.module.scss';

export default function MedicalProBranding() {
  const teams = [
    {
      id: 0,
      name: 'Tailwinds',
    },
    {
      id: 1,
      name: 'React',
    },
  ];

  const leaders = [
    {
      id: 0,
      avatar: avatar,
    },
    {
      id: 1,
      avatar: avatar,
    },
    {
      id: 2,
      avatar: avatar,
    },
    {
      id: 3,
      avatar: avatar,
    },
  ];

  return (
    <>
      <div className={styles.title}>
        <div>MedicalPro Branding</div>
        <ButtonMore />
      </div>
      <div className={styles.tag}>24 DEC, 2022</div>
      <div className={styles.detailsContainer}>
        <div className={styles.detail}>
          <div className={styles.subtitle}>Due Date</div>
          <div>Jan 23, 2023</div>
        </div>
        <div className={styles.detail}>
          <div className={styles.subtitle}>Budget</div>
          <div>$98,500</div>
        </div>
        <div className={styles.detail}>
          <div className={styles.subtitle}>Expense</div>
          <div>$63,000</div>
        </div>
      </div>
      <div className={styles.teamsContainer}>
        <div className={styles.subtitle}>Teams</div>
        <div className={styles.teams}>
          {teams.map((team) => (
            <div key={team.id} className={styles.tag}>
              {team.name}
            </div>
          ))}
        </div>
      </div>
      <div className={styles.leadersContainer}>
        <div className={styles.subtitle}>Leaders</div>
        <div className={styles.avatarContainer}>
          {leaders.map((leader) => (
            <div key={leader.id} className={styles.avatar}>
              <img src={leader.avatar} alt='' />
            </div>
          ))}
        </div>
      </div>
      <div className={styles.bottom}>
        <button>Add</button>
        <div>36 Recent Transactions</div>
      </div>
    </>
  );
}
