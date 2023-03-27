import { useState } from 'react';
import Game from './Game/Game';
import styles from './Home.module.css';
import Score from './Game/Score/Score';

type GameState = 'inactive' | 'easy' | 'hard';

function Home() {
	const [gameState, setGameState] = useState('inactive' as GameState);
	const [gameTime, setGameTime] = useState(0);
	const [amountFound, setAmountFound] = useState(0);
	let timer: number;

	function startTimer() {
		timer = window.setInterval(() => {
			setGameTime((prev) => prev + 1);
		}, 1000);
	}

	return (
		<div className={styles.Home}>

		</div>
	);
}

export default Home;
