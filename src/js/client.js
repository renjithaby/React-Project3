/**
 * Created by rabby on 19/07/17.
 */
import React from "react";
import ReactDOM from "react-dom";
import Main  from "./componenets/Main.js";
import { createStore } from 'redux';
import TodoApp from './reducers';
import { Provider } from 'react-redux'

let store = createStore(TodoApp);

const app = document.getElementById("app");
ReactDOM.render(
    <Provider store={store}>
    <Main/>
    </Provider>
    , app);

