import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Nav.module.css';

function Nav() {
	const [isShowing, setIsShowing] = useState(false);
	return (
		<nav className={styles.Nav}>
			<button
				onClick={() => {
					setIsShowing((prev) => !prev);
				}}
			>
				☰
			</button>
			{isShowing && (
				<div data-testid='nav-links'>
					<NavLink to='/'>Game</NavLink>
					<NavLink to='/Leaderboards'>Leaderboards</NavLink>
					<NavLink to='/Info'>Info</NavLink>
				</div>
			)}
		</nav>
	);
}

export default Nav;
