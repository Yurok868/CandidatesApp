/* eslint-disable react/jsx-key */
import { Link } from 'react-router';
import styles from './HeaderComponent.module.css';
import axiosInstance from '../../api/axiosInstance';
import { useNavigate } from 'react-router-dom';
function HeaderComponent({ user, setUser }) {
  const nav = useNavigate();
  console.log(user);
  const logoutHandler = () => {
    axiosInstance.get('/auth/logout').then(() => setUser(null));
    nav('/');
  };
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
        <a href='/help'>Чат помощи</a>
        <h1 className={styles.headerText}>Кадровое агентство QuickSort</h1>
        {user ? (
          <div onClick={logoutHandler}>
            <Link
              style={{
                fontSize: '30px',
                color: 'white',
                textDecoration: 'none',
                marginRight: '30px',
              }}
            >
              <span className="text-white"> Привет, {user.name} ! </span>
              Выйти
            </Link>
          </div>
        ) : (
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
        )}
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        {statusArr.map((el) => (
          <Link
            to={`/candidates/${el[0]}`}
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
          </Link>
        ))}
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <a href="/signupCandidate" style={{ textDecoration: 'none', color: 'black' }}>
          <div
            style={{
              backgroundColor: 'grey',
              borderRadius: '10px',
              width: '230px',
              height: '50px',
              textAlign: 'center',
            }}
          >
            Создать нового кандидата
          </div>
        </a>
        <a href="/signup" style={{ textDecoration: 'none', color: 'black', margin: '10px' }}>
          <div
            style={{
              backgroundColor: 'grey',
              borderRadius: '10px',
              width: '230px',
              height: '50px',
              textAlign: 'center',
            }}
          >
            Создать нового hr
          </div>
        </a>
      </div>
    </div>
  );
}

export default HeaderComponent;
