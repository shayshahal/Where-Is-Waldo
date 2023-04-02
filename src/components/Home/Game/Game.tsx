import { collection, getDocs, query, where } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { firestore } from '../../../main';
import styles from './Game.module.css';
import Score from './Score/Score';
import Tag from './Tag/Tag';
interface Position {
	x: number;
	y: number;
}
interface Pandaman {
	position: Position;
	found: boolean;
}

function Game() {
	const { gameType } = useParams();
	const originalWidth = gameType === 'fanmade' ? 2048 : 1840;
	const originalHeight = gameType === 'fanmade' ? 2048 : 1300;

	useEffect(() => {
		getDocs(collection(firestore, (gameType as string).slice(1))).then(
			(querySnapshot) => {
				setPandamans(
					querySnapshot.docs.map((doc) => {
						return {
							position: { x: doc.data().x, y: doc.data().y },
							found: false,
						};
					})
				);
			}
		);
	}, []);
	const [pandamans, setPandamans] = useState<Pandaman[]>([]);

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
	function checkFound(x: number, y: number) {
		const i = pandamans.findIndex(
			(pandaman) =>
				pandaman.position.x >= x - 37.5 &&
				pandaman.position.x <= x + 37.5 &&
				pandaman.position.y >= y - 37.5 &&
				pandaman.position.y <= y + 37.5 &&
				pandaman.found !== true
		);
		console.log(x, y);
		return i;
	}
	async function handleClick(e: React.MouseEvent<HTMLImageElement>) {
		if (!tag) {
			const rect = e.currentTarget.getBoundingClientRect();
			setTag({
				// Get coordinates relative to image
				x: e.clientX - rect.left,
				y: e.clientY - rect.top,
			});
			const ind = checkFound(
				// divide by current size and multiply by original size to get the coordinates relative to the original size
				((e.clientX - rect.left) / rect.width) * originalWidth,
				((e.clientY - rect.top) / rect.height) * originalHeight
			);
			if (ind !== -1) {
				setFound((prev) => prev + 1);
				setPandamans((prev) => {
					let after = [...prev];
					after[ind].found = true;
					return after;
				});
			}
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
