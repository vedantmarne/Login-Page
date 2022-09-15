import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Myprofile from '../../shared/component/MyProfile';
import Dashboard from './Dashboard';
import Report from './Report';
import Attendance from './Attendance';

const Employee = () => {
    return (
        <div>
            Employee Component
            <Switch>
                    <Route path='/home/employee/dashboard' component={Dashboard}></Route>
                    <Route path='/home/employee/attendance' component={Attendance}></Route>
                    <Route path='/home/employee/report' component={Report}></Route>
                    <Route path='/home/employee/MyProfile' component={Myprofile}></Route>
            </Switch>
        </div>
    );
}

export default Employee;
