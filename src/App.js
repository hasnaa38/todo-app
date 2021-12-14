import React from 'react';
import Settings from './context/settings';
import Auth from './context/auth';
import ToDoContextComponent from './context/todo';
import Header from './components/header/header';
import ToDo from './components/todo/todo';
import LogIn from './components/login/login';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
    <Auth>
      <Settings>
        <ToDoContextComponent>
        <Header/>
        <LogIn />
        <ToDo />
        </ToDoContextComponent>
      </Settings>
    </Auth>
  )
}