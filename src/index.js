import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import './scss/index.scss';
import Main from './components/Main'
import Header from './components/layout/Header'

import { BrowserRouter as Router} from 'react-router-dom';

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Header />
            <main className="container-fluid">
                <Main />
            </main>
        </Router>
        {/* Footer ?? */}
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
