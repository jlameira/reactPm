import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import MenuLateral from './MenuLateral';
import Testeeee from './testtt';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('c'));
ReactDOM.render(<MenuLateral />, document.getElementById('c1'));
ReactDOM.render(<Testeeee />, document.getElementById('spa'));
registerServiceWorker();
