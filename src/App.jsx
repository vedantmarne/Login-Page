import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import Login from '../src/shared/template/Login'
import './App.css'
import Home from '../src/shared/template/Home'
import SignUp from './shared/template/SignUp'

const App = () => {
    return (
        <div>
            <Redirect from="/" to="/Login" exact></Redirect>
            <Route path="/Login" component={Login}></Route>
            <Route path="/home" component={Home}></Route>
            <Route path="/SignUp" component={SignUp}></Route>
        </div>
    );
}

export default App;
