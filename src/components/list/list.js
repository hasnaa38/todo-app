import React from 'react';
import { Button, Card, Elevation } from "@blueprintjs/core";
import './list.scss';
import Auth from '../auth/auth';

export default function List(props) {
    const { item, toggleComplete } = props;
    return (
        <>
            <Card interactive={true} elevation={Elevation.TWO}>
                <h5>{item.text}</h5>
                <p>Assigned to: {item.assignee}</p>
                <p>Difficulty: {item.difficulty}</p>
                <Auth capability='update'>
                    Completed: <Button class="bp3-button" onClick={() => toggleComplete(item.id)}>{item.complete.toString()}</Button>
                </Auth>
            </Card>
            {/* <hr /> */}
            <br />
        </>
    )
}

