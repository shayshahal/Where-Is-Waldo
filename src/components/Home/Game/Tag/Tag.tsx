import styles from './Tag.module.css';

interface TagProps {
	position: Position;
}

interface Position
{
	x: number;
	y: number;
}

function Tag({ position}: TagProps) {
	return (
		<div
			style={{ left: position.x + 'px', top: position.y + 'px' }}
			className={styles.Tag}
		>
		</div>
	);
}

export default Tag;
