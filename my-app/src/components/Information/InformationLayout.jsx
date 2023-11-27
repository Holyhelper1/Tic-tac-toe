import React from 'react';
import { Information } from './Information';
import PropTypes  from 'prop-types';

export const InformationLayout = ({ isDraw, isGameEnded, currentPlayer }) => {
	return (
		<>
			<Information
				isDraw={isDraw}
				isGameEnded={isGameEnded}
				currentPlayer={currentPlayer}
			/>
		</>
	);
};

InformationLayout.propTypes ={
	isDraw: PropTypes.bool,
	isGameEnded: PropTypes.bool,
	currentPlayer: PropTypes.bool,
}
