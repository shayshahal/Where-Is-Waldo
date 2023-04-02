import { collection, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { firestore } from '../../main';
import { toHHMMSS } from '../../util';
import styles from './Leaderboards.module.css';

type leaderBoardType = 'fanmade' | 'official';

function Leaderboards() {
	const { state } = useLocation();
	const [currentLeaderBoardType, setCurrentLeaderBoardType] =
		useState<leaderBoardType>(state ?? 'official');
	const [currentLeaderBoard, setCurrentLeaderBoard] = useState<
		{ name: string; time: number }[]
	>([]);
	let errorMessage = '';
	useEffect(() => {
		async function getCurrentLeaderBoard() {
			const querySnapshot = await getDocs(
				collection(firestore, currentLeaderBoardType + '-leaderboards')
			);
			setCurrentLeaderBoard(
				querySnapshot.docs.map((doc) => {
					return { name: doc.data().name, time: doc.data().time };
				})
			);
		}
		try {
			getCurrentLeaderBoard();
			console.log(currentLeaderBoard);

			errorMessage = '';
		} catch {
			errorMessage = 'could not get leaderBoard from database';
		}
	}, [currentLeaderBoardType]);
	return (
		<div className={styles.Leaderboards}>
			<div className={styles.head}>
				<button
					className={styles.leftButton}
					style={{
						visibility:
							currentLeaderBoardType === 'fanmade'
								? 'visible'
								: 'hidden',
					}}
					onClick={() => {
						setCurrentLeaderBoardType('official');
					}}
				>
					⇐
				</button>
				<h1 className={styles.title}>{currentLeaderBoardType}</h1>
				<button
					className={styles.rightButton}
					style={{
						visibility:
							currentLeaderBoardType === 'official'
								? 'visible'
								: 'hidden',
					}}
					onClick={() => {
						setCurrentLeaderBoardType('fanmade');
					}}
				>
					⇒
				</button>
			</div>
			<table className={styles.table}>
				<thead>
					<tr>
						<th>Name</th>
						<th>Time</th>
					</tr>
				</thead>
				<tbody>
					{currentLeaderBoard.map((x) => (
						<tr>
							<th>{x.name}</th>
							<th>{toHHMMSS(x.time)}</th>
						</tr>
					))}
				</tbody>
			</table>
			<div>{errorMessage}</div>
		</div>
	);
}

export default Leaderboards;
