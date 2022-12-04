import React from 'react';
import './state.css';
import { useState } from 'react'

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
		</section>
	)
}

export default State;