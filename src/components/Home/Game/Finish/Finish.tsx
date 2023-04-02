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
			<form method='post' onSubmit={handleSubmit} className={styles.form}>
				<h1 className={styles.title}>Congratulations!</h1>
				<h3 className={styles.time}>You finished in {toHHMMSS(time)}</h3>
				<div className={styles.inputContainer}>
					<label htmlFor='input' className={styles.label}>Enter your name here:</label>
					<input type='text' id='input' className={styles.input}></input>
				</div>
                <button className={styles.button}>To Leaderboards</button>
			</form>
		</div>
	);
}

export default Finish;
