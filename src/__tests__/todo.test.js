'use strict';

import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import List from '../components/list/list';

it('loads and displays the starting app', async () => {
    let item = {
        text: 'test',
        assignee: 'tester',
        difficulty: 5,
        id: 1,
        complete: false
    }

    let toggleComplete = (id) => {
        console.log('hello');
    }

    let isLoggedIn = true;

    render(<List key={item.id} item={item} toggleComplete={toggleComplete}/>);
    const todoHeader = screen.getByTestId('todoHeader');
    expect(todoHeader).toHaveTextContent('test');
});