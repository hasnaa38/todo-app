import React from 'react';
import useForm from '../../hooks/form';
import { v4 as uuid } from 'uuid';
import { Button } from "@blueprintjs/core";
import './form.scss';
import superagent from 'superagent';

export default function Form(props) {
    const { addItem } = props;
    const { handleChange, handleSubmit } = useForm(submitNewItem);
    // const BackendURL = process.env.BACKEND_SERVER;

    async function submitNewItem(item) {
        item.frontend_id = uuid();
        item.complete = false;
        if (!item.difficulty) item.difficulty = 3;
        console.log(item);
        let response = await superagent.post(`https://todo-backend-h3.herokuapp.com/items`, item);
        addItem(response.body);
    }

    return (

        <form id='newForm' onSubmit={handleSubmit}>

            <h4 data-testid='formHeader'>Add a New ToDo</h4>

            <label class="bp3-label">
                <span>Title</span>
                <input class="bp3-input" onChange={handleChange} name="text" type="text" placeholder="Item Details" />
            </label>

            <label class="bp3-label">
                <span>Assigned To</span>
                <input class="bp3-input" onChange={handleChange} name="assignee" type="text" placeholder="Assignee Name" />
            </label>

            <label class="bp3-label">
                <span>Difficulty</span>&nbsp;
                <input onChange={handleChange} defaultValue={3} type="range" min={1} max={5} name="difficulty" />
            </label>

            <label>
                <Button class="bp3-button" type="submit">Add Item</Button>
            </label>
        </form >
    )
}