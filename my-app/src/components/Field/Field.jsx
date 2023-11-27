import React from 'react';
import styles from './field.module.css';
import PropTypes  from 'prop-types';

export const Field = ({ field, index, hadleClickCeil }) => {
	return (
		<>
			<div className={styles.fild} onClick={() => hadleClickCeil(index)}>
				{field}
			</div>
		</>
	);
};

Field.propTypes ={
	field: PropTypes.array.isRequired,
	index: PropTypes.number,
	hadleClickCeil: PropTypes.func,
}
