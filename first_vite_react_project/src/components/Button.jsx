import React from "react";
import '../assets/button.css'
 
const Button = (props) => {
    return <button onClick={props.callApi}>
        Click to laugh.
    </button>;
}
 
export default Button;