import React, { useEffect, useContext, useState } from 'react';
import { settingsContext } from '../../context/settings.js';
import { Button, Switch } from "@blueprintjs/core";

export default function SettingsForm(props) {
    let { handleCloseDrawer } = props;
    const settings = useContext(settingsContext);
    const [tempFlag, setTempFlag] = useState(settings.displayCompleted);

    const handleSubmit = (e) => {
        e.preventDefault();
        let pageSettings = {
            displayCompleted: tempFlag,
            pageLimit: e.target.pageLimit.value || settings.pageLimit
        };
        localStorage.setItem('pageSettingsContext', JSON.stringify(pageSettings));
        settings.setSubmitFlag(!settings.submitFlag);
        handleCloseDrawer();
    }

    const toggleSwitch = () => {
        setTempFlag(tempFlag === true ? false : true);
    }

    return (

        <form onSubmit={handleSubmit}>
            <h4 data-testid='formHeader'>Page Settings</h4><hr/><br/>

            <Switch checked={tempFlag === true} label="Display Completed" onChange={toggleSwitch} /><br/>
            <label class="bp3-label">
                <span>Items Per Page</span>
                <input class="bp3-input" name="pageLimit" type="number" /><br/>
                <p><strong>Current Items Per Page: {settings.pageLimit}</strong></p>
            </label><br/>
            <label>
                <Button class="bp3-button" type="submit">Save Changes</Button>
            </label>
        </form >
    )
}