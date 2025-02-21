/* eslint-disable react/jsx-key */
import { Link } from 'react-router';
import styles from './HeaderComponent.module.css';
function HeaderComponent() {
  const statusArr = [
    ['all', 'Все'],
    ['techinterview', 'Тех интервью'],
    ['invited', 'Отправлено приглашение'],
    ['offer', 'Оффер'],
    ['screening', 'Скрининг'],
    ['videointerview', 'Видео интервью'],
    ['worked', 'Работают'],
    ['rejected', 'Отказ'],
  ];
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
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
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        {statusArr.map((el) => (
          <a
            href={`/candidates/${el[0]}`}
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <div
              style={{
                backgroundColor: 'grey',
                borderRadius: '10px',
                width: '100px',
                height: '60px',
                textAlign: 'center',
                margin: '10px',
              }}
            >
              <p>{el[1]} </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default HeaderComponent;
