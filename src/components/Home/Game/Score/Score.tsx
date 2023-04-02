import { toHHMMSS } from '../../../../util';
import styles from './Score.module.css';
interface scoreProps {
	time: number;
	found: number;
	toBeFound: number;
	status: TagStatus;
}

type TagStatus = 'success' | 'failure' | 'idle';

function Score({ time, found, toBeFound, status }: scoreProps) {
	return (
		<div className={styles.Score}>
			<div>
				<span data-testid='time'>{toHHMMSS(time)}</span>
				{'  '}
				<span>{found + '/' + toBeFound}</span>
				<div
					style={{
						color:
							status === 'success'
								? 'green'
								: status === 'failure'
								? 'red'
								: 'inherit',
					}}
				>
					{status === 'success'
						? 'You found one!'
						: status === 'failure'
						? "Nope, that's not it"
						: ''}
				</div>
			</div>
		</div>
	);
}

export default Score;
