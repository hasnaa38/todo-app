import React, { useEffect, useState, useContext } from 'react';
import { settingsContext } from '../../context/settings.js';
import { toDoContext } from '../../context/todo';
import { authContext } from '../../context/auth';
import './todo.scss';
import Form from '../form/form';
import List from '../list/list';
import Auth from '../auth/auth';
import { Container, Row, Col } from "react-bootstrap";
import { Button } from "@blueprintjs/core";

const ToDo = () => {

    const settings = useContext(settingsContext);
    const toDoInfo = useContext(toDoContext);
    const auth = useContext(authContext);
    const localStorageList = JSON.parse(localStorage.getItem('list')) || [];
    const localStorageCompletedList = JSON.parse(localStorage.getItem('completedList')) || [];
    const [list, setList] = useState(localStorageList);
    const [completedList, setCompletedList] = useState(localStorageCompletedList);
    const [incomplete, setIncomplete] = useState([]);
    const [pageElements, setPageElements] = useState([]);
    const [completedPageElements, setCompletedPageElements] = useState([]);
    const [currentPage1, setCurrentPage1] = useState(1);
    const [currentPage2, setCurrentPage2] = useState(1);
    const [pages1, setPages1] = useState([]);
    const [pages2, setPages2] = useState([]);


    function addItem(item) {
        setList([item, ...list]);
        setLocalStorage(list);
    }

    function setLocalStorage(list) {
        localStorage.setItem('list', JSON.stringify(list));
    }

    function deleteItem(id) {
        const items = list.filter(item => item.id !== id);
        setList(items);
    }

    function toggleComplete(id) {
        let fullList = [...list, ...completedList];
        fullList.map(item => {
            if (item.id === id) {
                item.complete = !item.complete;
            }
            return item;
        });
        const completedItems = fullList.filter(item => item.complete);
        setCompletedList([...completedItems]);
        const updatedList = fullList.filter(item => !item.complete);
        setList([...updatedList]);
        localStorage.setItem('completedList', JSON.stringify([...completedItems]));
        localStorage.setItem('list', JSON.stringify([...updatedList]));
    }

    function chunk(array, stringChunkSize) {
        const res = [];
        let chunkSize = Number(stringChunkSize);
        for (let i = 0; i < array.length; i += chunkSize) {
            const chunk = array.slice(i, i + chunkSize);
            res.push(chunk);
        }
        return res;
    }

    function handleChangePage1(pageNumber) {
        setCurrentPage1(pageNumber);
    }

    function handleChangePage2(pageNumber) {
        setCurrentPage2(pageNumber);
    }

    function pagination(listArray, pagesSetter, arraySetter, currentpage) {
        let numberOfPages = Math.ceil(listArray.length / settings.pageLimit);
        let pagesArray = Array.from({ length: numberOfPages }, (v, k) => k + 1);
        pagesSetter(pagesArray);
        let chunks = chunk(listArray, settings.pageLimit);
        arraySetter(chunks[currentpage - 1]);
    }



    useEffect(() => {
        let incompleteCount = list.length;
        setIncomplete(incompleteCount);
        toDoInfo.setIncomplete(incompleteCount);
        document.title = `To Do List: ${incomplete}`;
        pagination(list, setPages1, setPageElements, currentPage1);
        pagination(completedList, setPages2, setCompletedPageElements, currentPage2);
    }, [list, completedList, currentPage1, currentPage2]);



    return (
        <>
            {/* <Header incomplete={incomplete} /> */}

            <Container id='homepage'>
                <Row>
                    <Col>
                        <Auth capability='create'>
                            <Form addItem={addItem} />
                        </Auth>
                    </Col>
                    <Col>
                        <Auth capability='read'>
                            <h5>Uncompleted Tasks</h5>
                            <div id='pageNumbers'>
                                {pages1?.map(pageNumber => (
                                    <div style={{ padding: '5px' }} >
                                        <Button className="bp3-button" style={{ cursor: 'pointer' }} onClick={() => handleChangePage1(pageNumber)}> {pageNumber} </Button>
                                    </div>
                                ))}
                            </div>
                            {pageElements?.map(item => (
                                <List key={item.id} item={item} toggleComplete={toggleComplete} />
                            ))}
                            <br />
                            {settings.displayCompleted && <div>
                                <h5>Completed Tasks</h5>
                                <div id='pageNumbers'>
                                    {pages2?.map(pageNumber => (
                                        <div style={{ padding: '5px' }} >
                                            <Button className="bp3-button" style={{ cursor: 'pointer' }} onClick={() => handleChangePage2(pageNumber)}> {pageNumber} </Button>
                                        </div>
                                    ))}
                                </div>
                                {completedPageElements?.map(item => (
                                    <List key={item.id} item={item} toggleComplete={toggleComplete} />
                                ))}
                            </div>}
                        </Auth>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default ToDo;