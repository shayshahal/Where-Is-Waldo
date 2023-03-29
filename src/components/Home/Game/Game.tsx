import { useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './Game.module.css';
import Score from './Score/Score';
import Tag from './Tag/Tag';

interface Position {
	x: number;
	y: number;
}

function Game() {
	const { gameType } = useParams();
	const [time, setTime] = useState(0);
	const [timer, setTimer] = useState<number | undefined>(undefined);
	if (timer === undefined) {
		setTimer(
			window.setInterval(() => {
				setTime((prev) => prev + 1);
			}, 1000)
		);
	}

	const [tag, setTag] = useState<Position>();
	function handleClick(e: React.MouseEvent<HTMLImageElement>) {
		if (!tag) {
			const rect = e.currentTarget.getBoundingClientRect();
			console.log(
				e.clientX,
				e.clientY,
				rect.left,
				rect.top,
				rect.width,
				rect.height,
				((e.clientY - rect.top) / rect.height) * 100
			);
			setTag({
				x: (e.clientX - rect.left),
				y: (e.clientY - rect.top),
			});
		} else setTag(undefined);
	}

	const [found, setFound] = useState(0);

	return (
		<div className={styles.Game}>
			<img
				src={`/images/${gameType?.slice(1)}.png`}
				alt='game image'
				onClick={handleClick}
				className={styles.img}
			/>
			<Score
				time={time}
				found={found}
				toBeFound={5}
			/>
			{tag && <Tag position={tag} />}
		</div>
	);
}

export default Game;
