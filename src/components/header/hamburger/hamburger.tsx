import styles from './hamburger.module.css';

type Props = { isActive: boolean; onClick: () => void };

export const Hamburger = ({ isActive, onClick }: Props) => {
  return (
    <button
      aria-label={`${isActive ? 'close navigation' : 'open navigation'}`}
      aria-pressed={isActive}
      aria-expanded={isActive}
      aria-controls="app-navigation"
      tabIndex={0}
      className={`${styles.hamburger} ${
        isActive ? styles.hamburgerActive : ''
      }`}
      type="button"
      onClick={() => onClick()}
    >
      <span className={styles.hamburgerBox}>
        <span
          className={`${styles.hamburgerContent} ${
            isActive ? styles.hamburgerContentActive : ''
          }`}
        ></span>
      </span>
    </button>
  );
};
