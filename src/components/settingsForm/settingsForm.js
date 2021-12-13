import React, { useEffect, useContext, useState } from 'react';
import { settingsContext } from '../../context/settings.js';
import { Button, Switch } from "@blueprintjs/core";

export default function SettingsForm() {
    const settings = useContext(settingsContext);
    const [tempFlag, setTempFlag] = useState(settings.displayCompleted);

    const handleSubmit = (e) => {
        e.preventDefault();
        let pageSettings = {
            displayCompleted: tempFlag,
            pageLimit: e.target.pageLimit.value
        };
        localStorage.setItem('pageSettingsContext', JSON.stringify(pageSettings));
        settings.setSubmitFlag(!settings.submitFlag);
    }

    const toggleSwitch = () => {
        setTempFlag(tempFlag === true ? false : true);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <h2 data-testid='formHeader'>Page Settings</h2>

                <Switch checked={tempFlag===true} label="Display Completed" onChange={toggleSwitch} />
                <label class="bp3-label">
                    <span>Items Per Page</span>
                    <input class="bp3-input" name="pageLimit" type="number" />
                </label>
                <label>
                    <Button class="bp3-button" type="submit">Save Changes</Button>
                </label>
            </form >
        </>
    )
}