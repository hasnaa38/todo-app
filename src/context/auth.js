import React, { useState, useEffect } from 'react';
import superagent from 'superagent';
import base64 from 'base-64';
import jwt from 'jsonwebtoken';
import cookie from 'react-cookies';

export const authContext = React.createContext();

function Auth(props) {
    const BackendURL = 'https://jam3ey.herokuapp.com';
    const [isLoggedIn, setIsLoggedIn] = useState(false); // HERE
    const [user, setUser] = useState({ email: '', capabilities: [] });
    
    user.capabilities = ['read', 'create', 'update', 'delete'];

    const lofInFunction = async (username, password) => {
        try {
            const response = await superagent.post(`${BackendURL}/signin`).set('authorization', `Basic ${base64.encode(`${username}:${password}`)}`);
            console.log(response);
            validateMyToken(response.body.token)
        } catch (error) {
            console.log(error);
        }
    }
    const validateMyToken = (token) => {
        if (token) {
            let user = jwt.decode(token);
            setIsLoggedIn(true);
            setUser(user);
            cookie.save('token', token);
        } else {
            setIsLoggedIn(false); // HERE
            setUser({});
        }
    }

    const logOutFunction = () => {
        setIsLoggedIn(false);
        setUser({});
        cookie.remove('token');
    }

    const markAsLoggedIn = () => {
        setIsLoggedIn(true);
    }

    const can = (capability) => {
        return user?.capabilities?.includes(capability);
    }

    useEffect(() => {
        const tokenCookie = cookie.load('token');
        validateMyToken(tokenCookie);
    }, [])

    const state = {
        isLoggedIn: isLoggedIn,
        user: user,
        lofInFunction: lofInFunction,
        logOutFunction: logOutFunction,
        can: can,
        setUser: setUser,
        markAsLoggedIn: markAsLoggedIn
    }

    return (
        <authContext.Provider value={state}>
            {props.children}
        </authContext.Provider>
    )
}

export default Auth;
