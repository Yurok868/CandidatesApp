import React from 'react';
import styles from './NotFound.module.css';

export default function NotFoundPage() {
  const handlerGetBack = () => {
    window.history.back();
  };

  return (
    <div className={styles.container}>
      <div className={styles.buttonWrapper}>
        <button onClick={handlerGetBack} className={styles.backButton}>
          {'<- Вернуться назад'}
        </button>
      </div>
      <h1 className={styles.heading}>Не найдено!</h1>
      <p className={styles.message}>
        Страница, которую вы ищете, не существует или была удалена.
      </p>
    </div>
  );
}
