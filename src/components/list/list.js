import React from 'react';
import { Button, Card, Elevation } from "@blueprintjs/core";

export default function List(props) {
    const { item, toggleComplete } = props;
    return (
        <div >
            <Card interactive={true} elevation={Elevation.TWO}>
                <h5><a href="#">{item.text}</a></h5>
                <p>Assigned to: {item.assignee}</p>
                <p>Difficulty: {item.difficulty}</p>
                Completed: <Button class="bp3-button" onClick={() => toggleComplete(item.id)}>{item.complete.toString()}</Button>
            </Card>
            {/* <hr /> */}
            <br/>
        </div>
    )
}

