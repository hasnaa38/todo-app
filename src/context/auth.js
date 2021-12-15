import React, { useState, useEffect } from 'react';
import superagent from 'superagent';
import base64 from 'base-64';
import jwt from 'jsonwebtoken';
import cookie from 'react-cookies';

export const authContext = React.createContext();

function Auth(props) {
    // const BackendURL = process.env.BACKEND_SERVER;
    const [isLoggedIn, setIsLoggedIn] = useState(false); // HERE
    const [user, setUser] = useState({ });

    const signupFunction = async (user) => {
        try {
            const response = await superagent.post(`http://localhost:4000/signup`, user);
            console.log('signed up');
        } catch (error) {
            console.log(error);
        }
    }
    
    const lofInFunction = async (username, password) => {
        try {
            const response = await superagent.post(`http://localhost:4000/signin`).set('authorization', `Basic ${base64.encode(`${username}:${password}`)}`);
            validateMyToken(response.body);
        } catch (error) {
            console.log(error);
        }
    }

    const validateMyToken = async (input) => {
        let token = input?.token;
        if (token) {
            let validUser = await superagent.post(`http://localhost:4000/user`).set('authorization', `Bearer ${token}`);
            setIsLoggedIn(true);
            setUser(validUser.body.user);
            cookie.save('token', validUser.body.token);
        } else {
            setIsLoggedIn(false); // HERE
            setUser({});
        }
    }

    const logOutFunction = () => {
        setIsLoggedIn(false);
        setUser({});
        cookie.remove('token');
        cookie.remove('user');
    }

    const markAsLoggedIn = () => {
        setIsLoggedIn(true);
    }

    const can = (capability) => {
        console.log(user);
        user.capabilities = user?.capabilities === undefined ? ['read', 'write', 'edit', 'delete'] : user?.capabilities;
        return user?.capabilities?.includes(capability);
    }

    useEffect(() => {
        const tokenCookie = cookie.load('token');
        validateMyToken({token: tokenCookie });
    }, [])

    const state = {
        isLoggedIn: isLoggedIn,
        user: user,
        lofInFunction: lofInFunction,
        logOutFunction: logOutFunction,
        can: can,
        setUser: setUser,
        markAsLoggedIn: markAsLoggedIn,
        signupFunction: signupFunction
    }

    return (
        <authContext.Provider value={state}>
            {props.children}
        </authContext.Provider>
    )
}

export default Auth;
