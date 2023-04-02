import { toHHMMSS } from '../../../../util';
import styles from './Finish.module.css';

interface propTypes {
	time: number;
}

function Finish({ time }: propTypes) {

    function handleSubmit(e: React.FormEvent<HTMLFormElement>){

    }
	return (
		<div className={styles.Finish}>
			<form method='post' onSubmit={handleSubmit} className={styles.container}>
				<h1>Congratulations!</h1>
				<h3>You finished in {toHHMMSS(time)}</h3>
				<div className={styles.inputContainer}>
					<label htmlFor='input' className={styles.label}>Enter your name here:</label>
					<input type='text' id='input' className={styles.input}></input>
				</div>
                <button>To Leaderboards</button>
			</form>
		</div>
	);
}

export default Finish;
