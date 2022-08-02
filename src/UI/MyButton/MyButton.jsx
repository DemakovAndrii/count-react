import React from 'react';
import classes from './MyButton.module.css';

const MyButton = ({ ...props }) => {
	return (
		<button {...props} className={classes.myButton}></button>
	);
};

export default MyButton;