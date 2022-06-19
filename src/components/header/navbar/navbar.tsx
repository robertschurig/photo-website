import { NavLink } from 'react-router-dom';

import styles from './navbar.module.css';

type Props = {
  isActive: boolean;
  onItemClick: () => void;
};

const linkStyle = ({ isActive }: { isActive: boolean }) =>
  styles.item + ' ' + (isActive ? styles.itemActive : '');

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
            to="/portrait"
            className={linkStyle}
            onClick={() => onItemClick()}
          >
            Portrait
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/art"
            className={linkStyle}
            onClick={() => onItemClick()}
          >
            Art(18+)
          </NavLink>
        </li>
        {/* <li>
          <NavLink
            to="/sport"
            className={isActiveElement}
            onClick={() => onItemClick()}
          >
            Sport
          </NavLink>
        </li> */}
        <li>
          <NavLink
            to="/contact"
            className={linkStyle}
            onClick={() => onItemClick()}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
