import React from 'react';

function Input({onChange, text, button}) {
return <input type= 'text' onChange={onChange} value={text} className={button}></input>
}

export default Input;