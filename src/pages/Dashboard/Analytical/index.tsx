import CardHello from '../../../components/CardHello';
import styles from './styles.module.scss';

export default function Analytical() {
  return (
    <>
      <div className={styles.analytical1}>
        <CardHello />
        <CardHello />
        <CardHello />
      </div>
    </>
  );
}
