import React from "react";

function Input({ handleChange, text }) {
	return <input type="text" onChange={handleChange} value={text}></input>;
}

export default Input;
