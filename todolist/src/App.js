import { useState } from "react";
import "./App.css";
import Input from "./Components/Input/index.js";
import Item from "./Components/List Item/index.js";
import initialList from "./Components/List data/data.js";

function App() {
	const [list, setList] = useState(initialList);
	const [text, setText] = useState(" ");

	function handleChange(event) {
		setText(event.target.value);
	}

	function handleAdd() {
		const newList = [...list];
		newList.push({ id: list.length + 1, text });
		// const newList = list.concat([{ id: list.length + 1, text }]);
		setList(newList);

		setText("");
	}

	function deleteAdd(id) {
		const deleteList = list.filter((item) => item.id !== id);
		setList(deleteList);
		console.log(deleteList);
	}
/*value prop in input component not actually needed is saying give the input field a value of the text state but this is being captured by the handleChange function
	which will get what is typed and change the text state as needed, so is basically duplicating something already handled and will not do anything 
	as value is a placeholder so what you type in value will actually appear in the field box, so in the actual component
	file if you put value="hello" this will be what will appear in the input field 
	and you cannot remove it as saying the value of the input field should be the string "hello" not what you type, 
	so as you type in the input field the state is chanegd by event handler and also placeholder
	text being changed to this too but wil obvs look like same entry in the input field
	so this prop can be removed and will not affect how app runs */
	return (
		<div className="App">
			<h1>To Do List</h1>
			<Input handleChange={handleChange} value={text}></Input>
			<button type="button" onClick={handleAdd}>
				Add
			</button>
			<ul>
				{list.map(function (item) {
					return (
						<Item
							key={item.id}
							text={item.text}
							onClick={() => deleteAdd(item.id)}
						/>
					);
				})}
			</ul>
		</div>
	);
}

export default App;
