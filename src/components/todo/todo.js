import React, { useEffect, useState, useContext } from 'react';
import { settingsContext } from '../../context/settings.js';
import './todo.scss';
import Header from '../header/header';
import Form from '../form/form';
import List from '../list/list';
import SettingsForm from '../settingsForm/settingsForm';

const ToDo = () => {

    const settings = useContext(settingsContext);
    const [list, setList] = useState([]);
    const [incomplete, setIncomplete] = useState([]);
    const [completedList, setCompletedList] = useState([]);
    const [pages, setPages] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageElements, setPageElements] = useState([]);

    function addItem(item) {
        setList([item, ...list]);
    }

    function deleteItem(id) {
        const items = list.filter(item => item.id !== id);
        setList(items);
    }

    function toggleComplete(id) {
        list.map(item => {
            if (item.id === id) {
                item.complete = !item.complete;
            }
            return item;
        });
        const completedItems = list.filter(item => item.complete);
        setCompletedList([...completedItems, ...completedList]);
        const updatedList = list.filter(item => !item.complete);
        setList(updatedList);
    }

    function chunk(array, chunkSize) {
        const res = [];
        for (let i = 0; i < array.length; i += chunkSize) {
            const chunk = array.slice(i, i + chunkSize);
            res.push(chunk);
        }
        return res;
    }

    function handleChangePage(pageNumber) {
        setCurrentPage(pageNumber);
    }

    useEffect(() => {
        let incompleteCount = list.length;
        setIncomplete(incompleteCount);
        document.title = `To Do List: ${incomplete}`;
        let numberOfPages = Math.ceil(list.length / settings.pageLimit);
        let pagesArray = Array.from({ length: numberOfPages }, (v, k) => k + 1);
        setPages(pagesArray);
        let chunks = chunk(list, settings.pageLimit);
        setPageElements(chunks[currentPage - 1]);
    }, [list, currentPage]);

    return (
        <>
            <Header incomplete={incomplete}/>
            <Form addItem={addItem} />
            {pageElements?.map(item => (
                <List key={item.id} item={item} toggleComplete={toggleComplete} />
            ))}
            <dev id='pageNumbers'>{pages.map(pageNumber => (
                <p style={{cursor:'pointer'}} onClick={() => handleChangePage(pageNumber)}>{pageNumber}  &nbsp;</p>
            ))}</dev>
            {settings.displayCompleted && <div>
                <h3>Completed list:</h3>
                {completedList.map(item => (
                    <List key={item.id} item={item} toggleComplete={toggleComplete} />
                ))}
            </div>}
            <SettingsForm />
        </>
    );
};

export default ToDo;