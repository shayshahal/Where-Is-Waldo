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
			if(name)
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
				<div className={styles.info}>
					Your time is <div className={styles.time}>{toHHMMSS(time)}</div>
				</div>
				<div className={styles.inputContainer}>
					<label
						htmlFor='input'
						className={styles.label}
					>
						Enter your name here:<br/>
					</label>
					<input
						type='text'
						id='input'
						name='input'
						className={styles.input}
					></input>
				</div>
				<button className={styles.button}>To Leaderboards ➔</button>
				{errorMessage!==''&&<div>{errorMessage}</div>}
			</form>
		</div>
	);
}

export default Finish;
