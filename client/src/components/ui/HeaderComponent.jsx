import { Link } from 'react-router';
import styles from './HeaderComponent.module.css';
function HeaderComponent() {
  return (
    <div className={styles.header}>
      <img
        src="../../../public/logoQ.webp"
        alt="Логотип"
        style={{ width: '150px', height: '90px' }}
      />
      <h1 className={styles.headerText}>Кадровое агентство QuickSort</h1>
      <Link
        to="/signin"
        style={{
          fontSize: '30px',
          color: 'white',
          textDecoration: 'none',
          marginRight: '30px',
        }}
      >
        Войти
      </Link>
    </div>
  );
}

export default HeaderComponent;
