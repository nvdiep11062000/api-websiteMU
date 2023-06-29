import React from 'react';
import ReactDOM from 'react-dom/client';
import './src/sass/global.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from './src/layout/Layout.jsx';
import { Provider } from 'react-redux';
import store from './src/redux/Store';
ReactDOM.createRoot(document.getElementById('root')).render(
    <Router>
        <Provider store={store}>
            <Layout />
        </Provider>
    </Router>,
);
