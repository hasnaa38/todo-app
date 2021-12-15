import React, { useState, useContext } from 'react';
import { authContext } from '../../context/auth';
import { When } from 'react-if';
import '../login/form.scss';
import { Link } from 'react-router-dom'

export default function SignUp() {
    const auth = useContext(authContext);
    const [user, setUser] = useState({
        username: '',
        email: '',
        password: '',
        role: 'user'
    });

    const handleChange = (e) => {
        e.preventDefault();
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        auth.signupFunction(user);
        console.log(user);

    }

    return (
        <>
            <When condition={!auth.isLoggedIn}>
                <form id='newForm' onSubmit={handleSubmit}>
                    <h2>Sign Up Form</h2>
                    <label class="bp3-label">
                        <span>username</span>
                        <input class="bp3-input" type="text" name="username" placeholder="username" onChange={handleChange} />
                    </label>
                    <label class="bp3-label">
                        <span>email</span>
                        <input class="bp3-input" type="text" name="email" placeholder="email" onChange={handleChange} />
                    </label>
                    <label class="bp3-label">
                        <span>password</span>
                        <input class="bp3-input" type="password" name="password" placeholder="password" onChange={handleChange} />
                    </label>
                    <label class="bp3-label">
                        <span style={{ margin: '5px' }} >role</span>
                        <select name="role" onChange={handleChange}>
                            <option name="role" value="user">user</option>
                            <option name="role" value="writer">writer</option>
                            <option name="role" value="editor">editor</option>
                            <option name="role" value="admin">admin</option>
                        </select>
                    </label>
                    <div>
                        <button style={{ margin: '5px' }} class="bp3-button" type="submit">SignUp</button>
                    </div>

                </form>
            </When>
        </>
    )
}
