import React, { useEffect, useState, useContext } from 'react';
import { settingsContext } from '../../context/settings.js';
import './todo.scss';
import Header from '../header/header';
import Form from '../form/form';
import List from '../list/list';
import SettingsForm from '../settingsForm/settingsForm';
import { Button, Classes, Drawer } from "@blueprintjs/core";

const ToDo = () => {

    const settings = useContext(settingsContext);
    const [list, setList] = useState([]);
    const [incomplete, setIncomplete] = useState([]);
    const [completedList, setCompletedList] = useState([]);
    const [pages, setPages] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageElements, setPageElements] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
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
                item.complete = 'true';
            }
            return item;
        });
        completedList.map(item => {
            if (item.id === id) {
                item.complete = 'false';
                setList([item, ...list]);
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

    let handleCloseDrawer = () => {
        setIsOpen(false);
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
    }, [list, currentPage, completedList]);

    return (
        <>
            <Header incomplete={incomplete} />
            <Form addItem={addItem} />
            <dev>
                <dev id='pageNumbers'>
                    <p>Pages &nbsp;</p>{pages.map(pageNumber => (
                        <p style={{ cursor: 'pointer' }} onClick={() => handleChangePage(pageNumber)}>{pageNumber}  &nbsp;</p>
                    ))}</dev>
                <Button id='pageSettingsButton' icon="cog" onClick={() => setIsOpen(true)}></Button>
            </dev>
            {pageElements?.map(item => (
                <List key={item.id} item={item} toggleComplete={toggleComplete} />
            ))}

            {settings.displayCompleted && <div>
                <h3>Completed list:</h3>
                {completedList.map(item => (
                    <List key={item.id} item={item} toggleComplete={toggleComplete} />
                ))}
            </div>}

            <Drawer style={{ left: '30' }}
                isOpen={isOpen}
                onClose={handleCloseDrawer}
                size={'300px'}
                usePortal={true}
                hasBackdrop={true}
                canOutsideClickClose={true}
            >
                <div className={Classes.DRAWER_BODY}>
                    <div className={Classes.DIALOG_BODY}>
                        <SettingsForm handleCloseDrawer={handleCloseDrawer} />
                    </div>
                </div>
            </Drawer>
        </>
    );
};

export default ToDo;