import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Nav.module.css';

function Nav() {
	const [isShowing, setIsShowing] = useState(false);
	return (
		<nav className={styles.Nav}>
			{<button
				onClick={() => {
					setIsShowing((prev) => !prev);
				}}
				className={styles.button} 
			>
				☰
			</button>}
			{isShowing && (
				<div data-testid='nav-links' className={styles.navLinks} >
					<NavLink className={styles.navLink} to='/'>Game</NavLink>
					<NavLink className={styles.navLink} to='/Leaderboards'>Leaderboards</NavLink>
					<NavLink className={styles.navLink} to='/Info'>Info</NavLink>
				</div>
			)}
		</nav>
	);
}

export default Nav;
