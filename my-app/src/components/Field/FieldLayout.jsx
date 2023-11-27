import React from 'react';
import styles from './field.module.css';
import { Field } from './Field';
import PropTypes  from 'prop-types';

export const FieldLayout = ({ fields, hadleClickCeil }) => {

	return (
		<div className={styles.fildWrapper}>
			{fields.map(( field, index ) => (
				<Field key={index} index={index} field={field} hadleClickCeil={hadleClickCeil} />
			))}
		</div>
	);
};

FieldLayout.propTypes ={
	field: PropTypes.array.isRequired,
	hadleClickCeil: PropTypes.func,
}
