import { useState } from 'react';
import styles from './Score.module.css';

interface scoreProps {
	time: number;
	found: number;
	toBeFound: number;
}

function Score({
	time,
	found,
	toBeFound
}: scoreProps) {
	function toHHMMSS(time: number) {
		let hours = ~~(time / 3600) as number | string;
		let minutes = ~~(time / 60) as number | string;
		let seconds = (time % 60) as number | string;
		if (hours as number < 10) {
			hours = '0' + hours;
		}
		if (minutes as number < 10) {
			minutes = '0' + minutes;
		}
		if (seconds as number < 10) {
			seconds = '0' + seconds;
		}
		return hours + ':' + minutes + ':' + seconds;
	}

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
