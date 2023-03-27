import styles from './Tag.module.css';

interface TagProps {
	x: number;
	y: number;
	character: string;
}

function Tag({ x, y, character }: TagProps) {
	return (
		<div
			style={{ left: x + 'px', top: y + 'px' }}
			className={styles.Tag}
		>
			{character}
		</div>
	);
}

export default Tag;
