import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Myprofile from '../../shared/component/MyProfile';
import Dashboard from './Dashboard';
import Report from './Report';

const Manager = () => {
    return (
        <div>
            Manager Component
            <div>
            <Switch>
                    <Route path='/home/manager/dashboard' component={Dashboard}></Route>
                    <Route path='/home/manager/report' component={Report}></Route>
                    <Route path='/home/manager/MyProfile' component={Myprofile}></Route>
                </Switch>
            </div>
        </div>
    );
}

export default Manager;
