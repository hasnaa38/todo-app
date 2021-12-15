import React from 'react';
import Settings from './context/settings';
import Auth from './context/auth';
import ToDoContextComponent from './context/todo';
import Header from './components/header/header';
import ToDo from './components/todo/todo';
import LogIn from './components/login/login';
import SignUp from './components/signup/signup';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {

  return (
    <Router>
      <Auth>
        <Settings>
          <ToDoContextComponent>
            <Header />
            <Switch>
              <Route exact path="/todo-app/">
                <LogIn />
                <ToDo />
              </Route>
              <Route path="/todo-app/signup">
                <SignUp />
              </Route>
            </Switch>
          </ToDoContextComponent>
        </Settings>
      </Auth>
    </Router>

  )
}
