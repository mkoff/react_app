import React from 'react';
import './Person.css'

const person = (props) => {
	return (
		<div className="Person">			
			<p onClick={props.click}>Person {props.name} = {Math.floor(Math.random() * 30)}!</p>
			<p>{props.children}</p>
			<input type="text" onChange={props.changed} />
		</div>	
		)
};

export default person;