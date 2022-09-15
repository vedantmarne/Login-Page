import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Myprofile from '../../shared/component/MyProfile';
import Dashboard from './Dashboard';
import Order from './Order';
import Product from './Product';

const Customer = () => {
    return (
        <div>
            Customer Component
            <div>
                <Switch>
                    <Route path='/home/customer/dashboard' component={Dashboard}></Route>
                    <Route path='/home/customer/order' component={Order}></Route>
                    <Route path='/home/customer/product' component={Product}></Route>
                    <Route path='/home/customer/MyProfile' component={Myprofile}></Route>
                </Switch>
            </div>
            <div>
                
            </div>
        </div>
    );
}

export default Customer;
