import styles from './Tag.module.css';

interface TagProps {
	position: Position;
	status: Status;
}

interface Position {
	x: number;
	y: number;
}
type Status = 'success' | 'failure' | 'idle';

function Tag({ position, status }: TagProps) {
	return (
		<div
			style={{
				left: position.x + 'px',
				top: position.y + 'px',
				borderColor:
					status === 'success'
						? 'green'
						: status === 'failure'
						? 'red'
						: 'black',
			}}
			className={styles.Tag}
		></div>
	);
}

export default Tag;
