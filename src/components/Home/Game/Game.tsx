import { useState } from 'react';
import styles from './GameMap.module.css';
import Tag from './Tag/Tag';

interface GameMapProps {
	onFound: (fnc: (n: number) => number) => void;
	difficulty: 'easy' | 'hard';
}

interface Tag {
	x: number;
	y: number;
	character: string;
}

interface Tags {
	[key: string]: Tag;
}

function GameMap({ onFound, difficulty }: GameMapProps) {
	const [tags, setTags] = useState<Tags>({});
	function handleClick(e: React.MouseEvent<HTMLImageElement>) {
		setTags({
			...tags,
			[e.pageX + '' + e.pageY]: {
				x: e.pageX,
				y: e.pageY,
				character: 'Pandaman',
			} as Tag,
		});
	}

	return (
		<div className={styles.GameMap}>
			<img
				className={styles.img}
				alt='gameMap'
				onClick={handleClick}
				src='/src/assets/img.jpg'
			></img>
			{Object.entries(tags).map(([key, tag]) => (
				<Tag
					key={key}
					x={tag.x}
					y={tag.y}
					character={tag.character}
				/>
			))}
		</div>
	);
}

export default GameMap;
