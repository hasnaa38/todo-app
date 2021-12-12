import React from 'react';
import ReactDOM from 'react-dom';

import App from './App.js';

import 'normalize.css/normalize.css';
import '@blueprintjs/core/lib/css/blueprint.css';

class Main extends React.Component {
  render() {
    return <App />;
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<Main />, rootElement);