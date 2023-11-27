import React from 'react';
import styles from './Information.module.css';
import PropTypes  from 'prop-types';

export function whoIsWinner(field) {
	const lines = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];
	for (let i = 0; i < lines.length; i++) {
		const [a, b, c] = lines[i];
		if (field[a] && field[a] === field[b] && field[a] === field[c]) {
			return field[a];
		}
	}
}

export const Information = ({ isDraw, isGameEnded, currentPlayer }) => {
	const whosNext = () => {
		if (isDraw === true) {
			return <p>Ничья!</p>;
		}
		if (isDraw === false && isGameEnded === true) {
			return <p>Победа: {currentPlayer ? '0' : 'X'}</p>;
		}
		if (isDraw === false && isGameEnded === false) {
			return <p>Сейчас ходит: {currentPlayer ? 'X' : '0'}</p>;
		}
	};

	return <h2 className={styles.whatPlayer}>{whosNext()}</h2>;
};

Information.propTypes ={
	isDraw: PropTypes.bool,
	isGameEnded: PropTypes.bool,
	currentPlayer: PropTypes.bool,
}
