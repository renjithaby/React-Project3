/**
 * Created by rabby on 23/07/17.
 */
import React from "react";
import { BrowserRouter as Router, Route , Link,hashHistory } from 'react-router-dom';

import Header from "./Header.js";
import { HashRouter } from 'react-router-dom'
import {MainBody} from "./MainBody.js";


const Main = () => (
    <Router>
    <div>
        <Header/>
        <MainBody/>
    </div>
    </Router>
);

export default Main;