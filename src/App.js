import React from 'react';
import Settings from './context/settings';
import Auth from './context/auth';
import ToDo from './components/todo/todo';
import LogIn from './components/login/login';
import './App.scss';

export default function App() {
  return (
    <Auth>
      <Settings>
        <LogIn />
        <ToDo />
      </Settings>
    </Auth>
  )
}