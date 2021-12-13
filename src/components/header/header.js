import React from 'react';
import './header.scss'

function header(props) {
    const { incomplete } = props;
    return (
        <header>
            <h1>ToDo List Manager</h1>
            <h2>{incomplete} items pending</h2>
        </header>
    )
}

export default header;
