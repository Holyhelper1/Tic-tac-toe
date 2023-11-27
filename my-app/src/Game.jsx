import styles from './game.module.css';
import React from 'react';
import { useState } from 'react';
import { FieldLayout } from './components/Field/FieldLayout';
import { InformationLayout } from './components/Information/InformationLayout';
import { whoIsWinner } from './components/Information/Information';

export const Game = () => {
	const [isGameEnded, setIsGameEnded] = useState(false);
	const [isDraw, setIsDraw] = useState(false);
	const [fields, setFields] = useState(Array(9).fill(''));
	const [currentPlayer, setCurrentPlayer] = useState(true);
	const winner = whoIsWinner(fields);

	const hadleClickCeil = (index) => {
		let coppyArrayFields = fields.slice();
		if (winner || coppyArrayFields[index]) return setIsGameEnded(true);

		coppyArrayFields[index] = currentPlayer ? 'X' : '0';
		setFields(coppyArrayFields);
		setCurrentPlayer(!currentPlayer);
		const hasEmptyValue = coppyArrayFields.some((value) => value === '');
		setIsDraw(!hasEmptyValue);
	};

	const startNewGame = () => {
		return (
			<button
				className={styles.newGameBtn}
				onClick={() => {
					setFields(Array(9).fill(''));
					setIsGameEnded(false);
					setIsDraw(false);
					setCurrentPlayer(true);
				}}
			>
				Новая Игра
			</button>
		);
	};

	return (
		<div className={styles.app}>
			{startNewGame()}
			<FieldLayout fields={fields} hadleClickCeil={hadleClickCeil} />
			<InformationLayout
				isDraw={isDraw}
				isGameEnded={isGameEnded}
				currentPlayer={currentPlayer}
			/>
		</div>
	);
};

export default Game;
