import { NavLink } from 'react-router-dom';
import styles from './Nav.module.css';

function Nav() {
	return (
		<nav className={styles.Nav}>
			<NavLink className={styles.navLink} to='/'>Home</NavLink>
			<NavLink className={styles.navLink} to='/Leaderboards'>Leaderboards</NavLink>
		</nav>
	);
}

export default Nav;
