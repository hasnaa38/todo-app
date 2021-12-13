import React from 'react';
import { Button, Card, Elevation } from "@blueprintjs/core";
import './list.scss';

export default function List(props) {
    const { item, toggleComplete } = props;
    return (
        <>
            <Card interactive={true} elevation={Elevation.TWO}>
                <h4>{item.text}</h4>
                <p>Assigned to: {item.assignee}</p>
                <p>Difficulty: {item.difficulty}</p>
                Completed: <Button class="bp3-button" onClick={() => toggleComplete(item.id)}>{item.complete.toString()}</Button>
            </Card>
            {/* <hr /> */}
            <br/>
        </>
    )
}

