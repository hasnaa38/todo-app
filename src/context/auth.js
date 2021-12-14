import React, { useState, useEffect } from 'react';
import superagent from 'superagent';
import base64 from 'base-64';
import jwt from 'jsonwebtoken';
import cookie from 'react-cookies';

export const authContext = React.createContext();

function Auth(props) {
    const BackendURL = '';
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState({ email: '', capabilities: [] });

    const lofInFunction = async (username, password) => {
        const response = await superagent.post(`${BackendURL}/signin`).set('authorization', `Basic ${base64.encode(`${username}:${password}`)}`);
        validateMyToken(response.body.token)
    }

    const validateMyToken = (token) => {
        if(token){
            let user = jwt.decode(token);
            setIsLoggedIn(true);
            setUser(user);
            cookie.save('token', token);
        }else{
            setIsLoggedIn(false);
            setUser({});
        }
    }
    
    const logOutFunction = () => {
        setIsLoggedIn(false);
        setUser({});
        cookie.remove('token');
    }

    const state = {
        isLoggedIn: isLoggedIn,
        user: user,
        lofInFunction: lofInFunction,
        logOutFunction: logOutFunction
    }

    return (
        <authContext.Provider value={state}>
            {props.children}
        </authContext.Provider>
    )
}

export default Auth;
