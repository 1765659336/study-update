import React from 'react';
import ReactDOM from 'react-dom';

const data = [
	{id:1,value:111},
	{id:2,value:222},
	{id:3,value:333}
]

// key必须要加，且必须是唯一的，尽量不用用item作为key
const title = (
		<ul>
			{data.map(item => <li key={item.id}>{item.value}</li>)}
		</ul>
)

ReactDOM.render(title,document.getElementById('root'))