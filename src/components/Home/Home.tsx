import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Home.module.css';

type gameChoice = 'official' | 'fanmade' | '';

function Home() {
	const [gameChoice, setGameChoice] = useState<gameChoice>('');
	function handleChoiceClick(e: React.MouseEvent<HTMLInputElement>) {
		setGameChoice(e.currentTarget.id as gameChoice);
	}

	const navigate = useNavigate();
	function handlePlayClick(e: React.MouseEvent<HTMLButtonElement>) {
		navigate('/:' + gameChoice);
	}

	let description: string =
		'An interactive Where\'s Waldo game based on the One Piece! ';
	if (gameChoice === 'official') {
		description =
			"Official art from the One Piece and Where' waldo collab.";
	} else if (gameChoice === 'fanmade') {
		description = 'A fan made art made by @JesseMartin.';
	}

	return (
		<div className={styles.Home}>
			<div className={styles.container}>
				<h1 className={styles.title}>Where's Wally?</h1>
				<h2 className={styles.edition}>One Piece Edition!</h2>
				<div className={styles.buttons}>
					<label
						htmlFor='official'
						className={styles.radioLabel}
					>
						<input
							type='radio'
							name='choice'
							id='official'
							onClick={handleChoiceClick}
							className={styles.radio}
						/>
						Official
					</label>
					<label
						htmlFor='fanmade'
						className={styles.radioLabel}
					>
						<input
							type='radio'
							name='choice'
							id='fanmade'
							onClick={handleChoiceClick}
							className={styles.radio}
						/>
						Fanmade
					</label>
				</div>
				<div className={styles.playContainer}>
					<span className={styles.description}>{description}</span>
					<button
						className={styles.button}
						disabled={gameChoice === ''}
						onClick={handlePlayClick}
					>
						Play ➔
					</button>
				</div>
				<div className={styles.credit}>
					<a
						href='https://github.com/shayshahal'
						target='_blank'
					>
						<img
							src='/images/github.svg'
							alt='github-logo'
						/>
					</a>
					<span>Made by Shay Shahal</span>
				</div>
			</div>
			<div className={styles.imageContainer}>
				<img
					src={`/images/${
						gameChoice !== '' ? gameChoice : 'placeholder'
					}.png`}
					alt=''
				/>
			</div>
		</div>
	);
}

export default Home;
