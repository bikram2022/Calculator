import React from "react";

function getClass(value) {
    switch (value) {
        case '=': return "equal";
                    break;
        case '+':
        case '-':
        case '/':
        case '%':
        case '*':   return "operator"
        default: return "";
    }
}

function Button(props) {
    return <button className={`${getClass(props.value)} button`} value={props.value}>{props.children}</button>
}
export default Button;