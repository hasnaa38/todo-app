import React, { useState, useContext } from 'react';
import { authContext } from '../../context/auth';
import { When } from 'react-if';

export default function Auth(props) {
    const auth = useContext(authContext);
    const isLoggedIn = auth.isLoggedIn;
    const doHaveCapabilities = auth.can(props.capability)
    return (
        <>
        <When condition={isLoggedIn && doHaveCapabilities}>
            {props.children}
        </When>
        </>
    )
}
