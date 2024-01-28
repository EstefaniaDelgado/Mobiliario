import LogoVivanti from '../../assets/logo-vivanti.svg';
import { Icon } from '@iconify/react';
import styles from './NavBar.module.css';
import { useState } from 'react';
import SearchBar from './components/SearchBar';

const Navbar = () => {
  const [openMenu, setMenuAbierto] = useState(false);
  console.log(openMenu);

  const toggleMenu = () => {
    setMenuAbierto(!openMenu);
  };

  return (
    <header>
      {/* LOGO */}
      <div>
        <img src={LogoVivanti} alt="logo-vivanti" />
      </div>
      {/* MENU */}

      <nav className={`${styles.menu} ${openMenu ? styles.show : null}`}>
        {
          <ul className={styles.containerMenu}>
            <li className={styles.itemMenu}>
              <a href="" className={styles.navLink}>
                Sobre Nosotros
              </a>
            </li>
            <li className={styles.itemMenu}>
              <a href="" className={styles.navLink}>
                Proyectos
              </a>
            </li>
            <li className={styles.itemMenu}>
              <a href="" className={styles.navLink}>
                Servicios
              </a>
            </li>
            <li className={styles.itemMenu}>
              <a href="" className={styles.navLink}>
                Productos
              </a>
            </li>
            <li className={styles.itemMenu}>
              <a href="" className={styles.navLink}>
                Clientes
              </a>
            </li>
          </ul>
        }
      </nav>

      {/* Comp. SearchBar */}
      <SearchBar />

      {/* Icons */}
      <div className={styles.containerIcons}>
        <Icon
          icon="iconamoon:search-fill"
          className={`${styles.iconMenu} ${styles.searchIcon}`}
        />
        <Icon icon="ph:heart-bold" className={styles.iconMenu} />
        <Icon
          icon="ph:heart-bold"
          color="#eb4034"
          className={`${styles.iconMenu} ${styles.heartFilled}`}
        />
        <Icon icon="gg:profile" className={styles.iconMenu} />
        <Icon icon="pepicons-pop:cart" className={styles.iconMenu} />
      </div>

      {/* icon menu */}
      <div className={styles.containerBurguerMenu}>
        <Icon
          icon="mingcute:menu-fill"
          className={`${styles.iconMenuBurguer} ${
            openMenu ? styles.iconColor : null
          }`}
          onClick={toggleMenu}
        />
      </div>
    </header>
  );
};

export default Navbar;
