import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Customer from '../../components/customer/Customer';
import Employee from '../../components/employee/Employee';
import Manager from '../../components/manager/Manager';
import Footer from './Footer';
import Header from './Header';
import MyCartMenu from './MyCartMenu';
import './Template.css'

const Home = () => {

    const [currentUser, setCurrentUser] = useState({

    })

    useEffect(
        () => {
            setCurrentUser(JSON.parse(localStorage.getItem('USER')))
        }, []);

    return (
        <div>
            <div className="header">
                <Header currentUser={currentUser}/>
            </div>
            {/* <div className="menu">
                <MyCartMenu role={currentUser.role}/>
            </div> */}
            <div className="body">
                <Switch>
                    <Route path="/home/employee" component={Employee}></Route>
                    <Route path="/home/customer" component={Customer}></Route>
                    <Route path="/home/manager" component={Manager}></Route>
                </Switch>
            </div>
            <div className="footer">
                <Footer />
            </div>

        </div>

    );
}

export default Home;
