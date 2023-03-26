import { useState } from 'react';
import styles from './Game.module.css';
import GameMap from './GameMap/GameMap';
import Score from './Score/Score';

type GameState = 'inactive' | 'easy' | 'hard';

function Game() {
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
		<div className={styles.Game}>
			{gameState === 'inactive' ? (
				<div>
					<h1>Where's Pandaman?</h1>
					<button
						data-testid='easy-button'
						onClick={() => {
							setGameState('easy');
							startTimer();
						}}
					>
						play
					</button>
				</div>
			) : (
				<div>
					<Score
						time={gameTime}
						found={amountFound}
						toBeFound={gameState === 'easy' ? 5 : 45}
					/>
					<GameMap
						onFound={() => setAmountFound((prev) => prev + 1)}
					/>
				</div>
			)}
		</div>
	);
}

export default Game;
