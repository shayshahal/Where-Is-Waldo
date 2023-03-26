import styles from './Score.module.css';

interface scoreProps {
	time: number;
	found: number;
	toBeFound: number;
}

function Score({ time, found, toBeFound }: scoreProps) {

	return (
		<div className={styles.Score}>
			<span data-testid='time'>{time}</span> <span>{found + '/' + toBeFound}</span>
		</div>
	);
}

export default Score;
