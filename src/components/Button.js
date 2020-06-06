import React from 'react';

const Button = (props) => {
    return <button onClick={props.clickFunction} className="material-icons">{props.icon}</button>
}

export { Button }