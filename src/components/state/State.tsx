import React from 'react';
import './state.css';
import { useState } from 'react';

function NameList () {
	const [list, setList] = useState(['Classes', 'Functions', 'Arrays']);
	const [name, setName] = useState(() => 'Lisp');

	function addName() {
		setList([...list, name]);
		setName('');
	}

	return(
		<div>
			<ul>
				{list.map(name => (
					<li key={name}>{name}</li>
				))}
			</ul>
			<input
				type="text"
				value={name}
				onChange={(e) => {setName(e.target.value)}} 
			/>
			<input 
				type="submit" 
				value="Add Name"
				onClick={addName}
			/>
		</div>
	)
}

const State = () => {
	let [count, setCount] = useState(10);

	function addOne(){
		setCount(count + 1)
	}

	return (
		<section>
			<button onClick={addOne}>
				Count = {count}
			</button>
			<NameList />
		</section>
	)
}

export default State;