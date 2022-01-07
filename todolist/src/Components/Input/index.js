import React from 'react';

function Input({onChange, text}) {
return <input type= 'text' onChange={onChange} value={text}></input>
}

export default Input;