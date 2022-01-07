import {useState} from 'react';
import './App.css';
import Input from './Components/Input/index.js';
import Item from './Components/List Item/index.js';
import initialList from './Components/List data/data.js';


function App() {
  const [list, setList] = useState(initialList);
  const [text, setText] = useState(' ');

  function handleChange(event) {
    setText(event.target.value)
  }

  function handleAdd() {
    const newList = [...list]
    newList.push({ id: list.length + 1, text });
    // const newList = list.concat([{ id: list.length + 1, text }]);
    setList(newList);

    setText(''); 
  }

  function deleteAdd() {
    const deleteList = [...list]
    deleteList.pop();
    setList(deleteList)
  }

  return (
    <div className="App">
    <Input onChange={handleChange} value={text}></Input>
    <button type="button" onClick={handleAdd}>
          Add
        </button>
    <button type="button" onClick={deleteAdd}>Delete</button>
    <ul>
      {list.map(function(item){
        return <Item key={item.id} text={item.text} />
      })}
    </ul>
    </div>
  );
}

export default App;

