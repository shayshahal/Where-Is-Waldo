import { collection, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { firestore } from '../../../main';
import Finish from './Finish/Finish';
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
type Status = 'success' | 'failure' | 'idle';
type GameType = 'official' | 'fanmade' | undefined;

function Game() {
	const gameType: GameType = useParams().gameType?.slice(1) as GameType;
	const originalWidth = gameType === 'fanmade' ? 2048 : 1840;
	const originalHeight = gameType === 'fanmade' ? 2048 : 1300;

	useEffect(() => {
		getDocs(collection(firestore, gameType as string)).then(
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
	const found = pandamans.reduce((res, p) => (p.found ? res + 1 : res), 0);
	const isGameFinished = found === pandamans.length && pandamans.length !== 0;

	const [time, setTime] = useState(0);
	const [timer, setTimer] = useState<number | undefined>(undefined);
	if (timer === undefined) {
		setTimer(
			window.setInterval(() => {
				setTime((prev) => prev + 1);
			}, 1000)
		);
	} else {
		if (isGameFinished) {
			window.clearInterval(timer);
		}
	}

	const [tag, setTag] = useState<Position>();
	const [tagStatus, setTagStatus] = useState<Status>('idle');

	function checkFound(x: number, y: number) {
		const i = pandamans.findIndex(
			(pandaman) =>
				// Tag box size is 75px
				pandaman.position.x >= x - 37.5 &&
				pandaman.position.x <= x + 37.5 &&
				pandaman.position.y >= y - 37.5 &&
				pandaman.position.y <= y + 37.5 &&
				pandaman.found !== true
		);
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
				setPandamans((prev) => {
					let after = [...prev];
					after[ind].found = true;
					return after;
				});
				setTagStatus('success');
			} else setTagStatus('failure');
		} else {
			setTag(undefined);
			setTagStatus('idle');
		}
	}

	return (
		<div className={styles.Game}>
			<img
				src={`/images/${gameType}.png`}
				alt='game image'
				onClick={handleClick}
				className={styles.img}
			/>
			<Score
				time={time}
				found={found}
				toBeFound={pandamans.length}
				status={tagStatus}
			/>
			{tag && (
				<Tag
					position={tag}
					status={tagStatus}
				/>
			)}
			{isGameFinished && (
				<Finish
					time={time}
					gameType={gameType}
				/>
			)}
		</div>
	);
}

export default Game;
