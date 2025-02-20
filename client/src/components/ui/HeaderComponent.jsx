import styles from './HeaderComponent.module.css';
function HeaderComponent() {
  return (
    <div className={styles.header}>
      <h1 className={styles.headerText}>Кадровое агентство QuickSort</h1>
    </div>
  );
}

export default HeaderComponent;
