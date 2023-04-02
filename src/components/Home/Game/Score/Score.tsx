import styles from './Score.module.css';
import { toHHMMSS } from '../../../../util';
interface scoreProps {
	time: number;
	found: number;
	toBeFound: number;
}

function Score({ time, found, toBeFound }: scoreProps) {

	return (
		<div className={styles.Score}>
			<div>
				<span data-testid='time'>{toHHMMSS(time)}</span>{' '}
				<span>{found + '/' + toBeFound}</span>
			</div>
		</div>
	);
}

export default Score;
