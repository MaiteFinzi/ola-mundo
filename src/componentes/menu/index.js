import MenuLink from '../menuLink';
import styles from './menu.module.css';


export default function Menu() {

      return (
        <header>
            <nav className={styles.navegacao}>
                <MenuLink to="/">
                    Início
                </MenuLink>
                <MenuLink to="/sobremim">
                    Sobre Mim
                </MenuLink>

            </nav>
        </header>
    )
}