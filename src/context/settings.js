import React from 'react';

export const settingsContext = React.createContext();

export default function Settings(props){
    const state = {
        displayCompleted: true,
        pageLimit: 3,
        sortField: 'oldest to newest'
    };
    return(
        <settingsContext.Provider value={state}>
            {props.children}
        </settingsContext.Provider>
    )
}



// import React, { Component } from 'react';

// export const settingsContext = React.createContext();

// class settings extends Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             isCompleted: true,
//         }
//     }
//     render() {
//         return (
//             <settingsContext.Provider value={this.state}>
//                {this.props.children} 
//             </settingsContext.Provider>
//         )
//     }
// }

// export default settings;