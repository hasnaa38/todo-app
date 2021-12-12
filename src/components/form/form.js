import React, { useEffect, useState, useContext } from 'react';
// import { settingsContext } from '../../context/settings.js';
import useForm from '../../hooks/form';
import { v4 as uuid } from 'uuid';
import { Button } from "@blueprintjs/core";

export default function Form(props) {
    const { addItem } = props;
    const { handleChange, handleSubmit } = useForm(submitNewItem);

    function submitNewItem(item) {
        item.id = uuid();
        item.complete = false;
        if (!item.difficulty) item.difficulty = 3;
        addItem(item);
    }

    return (
        <form onSubmit={handleSubmit}>

            <h2 data-testid='formHeader'>Add To Do Item</h2>

            <label class="bp3-label">
                <span>To Do Item</span>
                <input class="bp3-input" onChange={handleChange} name="text" type="text" placeholder="Item Details" />
            </label>

            <label class="bp3-label">
                <span>Assigned To</span>
                <input class="bp3-input" onChange={handleChange} name="assignee" type="text" placeholder="Assignee Name" />
            </label>

            <label class="bp3-label">
                <span>Difficulty</span>
                <input onChange={handleChange} defaultValue={3} type="range" min={1} max={5} name="difficulty" />
            </label>

            <label>
                <Button class="bp3-button" type="submit">Add Item</Button>
            </label>
            </form >
    )
}