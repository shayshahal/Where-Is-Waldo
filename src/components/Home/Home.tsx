import React, { useState } from 'react';
import Game from './Game/Game';
import Score from './Game/Score/Score';
import styles from './Home.module.css';

type gameChoice = 'official' | 'fanmade' | '';

function Home() {
	const [gameChoice, setGameChoice] = useState<gameChoice>('');

	function handleClick(e: React.MouseEvent<HTMLInputElement>) {
		setGameChoice(e.currentTarget.id as gameChoice);
	}

	let description: string = 'An interactive Where is Waldo game based on the anime One Piece! ';
	if (gameChoice === 'official') {
		description =
			"The Official Art from the One Piece and Where' waldo collab";
	} else if (gameChoice === 'fanmade') {
		description =
			'A fan made art made by @JesseMartin featuring One Piece characters, youtubers and 5 pandamans';
	}

	return (
		<div className={styles.Home}>
			<h1 className={styles.title}>Where Is Wally?</h1>
			<h2 className={styles.edition}>One Piece Edition!</h2>
			<p className={styles.description}>{description}</p>
			<div className={styles.buttons}>
				<input
					type='radio'
					name='choice'
					id='official'
					onClick={handleClick}
					className={styles.radio}
				/>
				<label
					htmlFor='official'
					className={styles.radioLabel}
				>
					Official
				</label>
				<input
					type='radio'
					name='choice'
					id='fanmade'
					onClick={handleClick}
					className={styles.radio}
				/>
				<label
					htmlFor='fanmade'
					className={styles.radioLabel}
				>
					Fanmade
				</label>
				<button className={styles.button}>Play</button>
			</div>
			{gameChoice !== '' ? (
				<div
					className={styles.imageContainer}
					style={{
						backgroundImage: 'url(/images/' + gameChoice + '.png)',
					}}
				></div>
			) : <div className={styles.placeholder}></div>}
		</div>
	);
}

export default Home;
