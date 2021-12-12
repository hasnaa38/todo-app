import React from 'react';
import Settings from './context/settings';
import ToDo from './components/todo/todo';

export default function App(){
  return(
    <Settings>
      <ToDo/>
    </Settings>
  )
}