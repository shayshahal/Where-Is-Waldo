import { useState } from 'react';
import styles from './GameMap.module.css';

function GameMap() {
	const [position, setPosition] = useState(0);
	const [zoom, setZoom] = useState(0);
	return <div className={styles.GameMap}></div>;
}

export default GameMap;
