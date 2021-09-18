import { NavLink } from 'react-router-dom';
import styles from './navbar.module.css';

type Props = {
  isActive: boolean;
  onItemClick: () => void;
};

export const NavBar = ({ isActive, onItemClick }: Props) => {
  return (
    <nav
      id="app-navigation"
      aria-label="Primary"
      className={isActive ? styles.navIsActive : styles.nav}
    >
      <ul className={styles.menu} aria-label="website pages">
        <li>
          <NavLink
            to="/portraits"
            activeClassName={styles.itemActive}
            className={styles.item}
            onClick={() => onItemClick()}
          >
            Portrait
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/sports"
            activeClassName={styles.itemActive}
            className={styles.item}
            onClick={() => onItemClick()}
          >
            Sports
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            activeClassName={styles.itemActive}
            className={styles.item}
            onClick={() => onItemClick()}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
