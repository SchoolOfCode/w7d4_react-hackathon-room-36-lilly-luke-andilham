import React from 'react';

function Item({text, onClick}) {
return <li>{text} <button onClick={onClick}>Delete</button></li>
}

export default Item;