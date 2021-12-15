import React, { useState, useContext } from 'react';
import { toDoContext } from '../../context/todo';
import Auth from '../auth/auth';
import { Button, Navbar, Classes, Drawer } from "@blueprintjs/core";
import SettingsForm from '../settingsForm/settingsForm';
import { authContext } from '../../context/auth';
import { When } from 'react-if';
import { Link } from 'react-router-dom'

export default function Header() {
    const auth = useContext(authContext);
    const toDoInfo = useContext(toDoContext);
    const [isOpen, setIsOpen] = useState(false);

    let handleCloseDrawer = () => {
        setIsOpen(false);
    }

    return (
        <>
            <Navbar class="bp3-navbar bp3-dark" style={{ background: '#008075' }}>
                <Navbar.Group>
                    <Navbar.Heading ><strong>ToDo List Manager</strong></Navbar.Heading>
                    <Navbar.Divider />
                    <Auth capability='read'>
                        <strong>{toDoInfo.incomplete} items pending</strong>
                    </Auth>
                </Navbar.Group>
                <Navbar.Group className="bp3-navbar-group bp3-align-right">
                    <When condition={!auth.isLoggedIn}>
                        <Link to='/todo-app/signup'>
                            <Button className="bp3-minimal" icon="new-person" text="Signup" />
                        </Link>
                        <Link to='/todo-app/'>
                            <Button className="bp3-minimal" icon="log-in" text="Login" />
                        </Link>
                    </When>
                    <When condition={auth.isLoggedIn}>
                        <Button className="bp3-minimal" icon="home" text="Home" />
                        <Button className="bp3-minimal " icon="cog" text="Settings" onClick={() => setIsOpen(true)} />
                        <Link to="/todo-app/">
                            <Button className="bp3-minimal" icon="log-out" text="Logout" onClick={auth.logOutFunction} />
                        </Link>
                    </When>
                </Navbar.Group>
            </Navbar>

            <Drawer style={{ left: '30' }}
                isOpen={isOpen}
                onClose={handleCloseDrawer}
                size={'300px'}
                usePortal={true}
                hasBackdrop={true}
                canOutsideClickClose={true}
            >
                <div className={Classes.DRAWER_BODY}>
                    <div className={Classes.DIALOG_BODY}>
                        <SettingsForm handleCloseDrawer={handleCloseDrawer} />
                    </div>
                </div>
            </Drawer>
        </>
    )
}
