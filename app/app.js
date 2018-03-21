// import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import App from './containers/App.js'
import createReducer from './reducers';

const configureStore = (initState) => {
    const initStore = createStore(createReducer());
    return initStore;
}

const initialState = {};
const store = configureStore(initialState);

const render = () => {
    ReactDOM.render(
        <Provider store={store}>
            <MuiThemeProvider>
                <App />
            </MuiThemeProvider>
        </Provider>,
        document.getElementById('app')
    );
};

render();