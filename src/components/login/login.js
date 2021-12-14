import React, {useState, useContext} from 'react';
import {authContext} from '../../context/auth';
import { When } from 'react-if';

export default function LogIn() {
    const auth = useContext(authContext);
    const [user, setUser] = useState({
        username: '',
        password: ''
    });

    const handleChange = (e) => {
        e.preventDefault();
        setUser({[e.target.name]:e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        auth.lofInFunction(user.username, user.password);
    }
    return (
        <>
        <When condition={!auth.isLoggedIn}>
            <form onSubmit={handleSubmit}>
                <input type="text" name="username" placeholder="username" onChange={handleChange}/>
                <input type="password" name="password" placeholder="password" onChange={handleChange}/>
                <button type="submit">login</button>
            </form>
        </When>
        <When condition={auth.isLoggedIn}>
            <strong>{auth.user.email}</strong>
            <button onClick={auth.logOutFunction}>logout</button>
        </When>
        </>
    )
}
