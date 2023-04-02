import { addDoc, collection } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { firestore } from '../../../../main';
import { toHHMMSS } from '../../../../util';
import styles from './Finish.module.css';

interface propTypes {
	time: number;
	gameType: 'official' | 'fanmade' | undefined;
}

function Finish({ time, gameType }: propTypes) {
	const navigate = useNavigate()
	let errorMessage = '';
	async function addToLeaderboards(name: string) {
		await addDoc(collection(firestore, gameType + '-leaderboards'), {
			name: name,
			time: time,
		});
	}
	function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		console.log('hi')
		const name = (e.target as HTMLFormElement).input.value;
		try {
			addToLeaderboards(name);
			errorMessage = '';
			navigate('/leaderboards', {state: gameType});
		} catch {
			errorMessage = "Couldn't add to leaderboards";
		}
	}
	return (
		<div className={styles.Finish}>
			<form
				method='post'
				onSubmit={handleSubmit}
				className={styles.form}
			>
				<h1 className={styles.title}>Congratulations!</h1>
				<h3 className={styles.time}>
					You finished in {toHHMMSS(time)}
				</h3>
				<div className={styles.inputContainer}>
					<label
						htmlFor='input'
						className={styles.label}
					>
						Enter your name here:
					</label>
					<input
						type='text'
						id='input'
						name='input'
						className={styles.input}
					></input>
				</div>
				<button className={styles.button}>To Leaderboards</button>
				<div>{errorMessage}</div>
			</form>
		</div>
	);
}

export default Finish;
