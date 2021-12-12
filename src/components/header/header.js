import React from 'react'

function header(props) {
    const { incomplete } = props;
    return (
        <header>
            <h1>To List Manager</h1>
            <h2>To Do List: {incomplete} items pending</h2>
        </header>
    )
}

export default header
