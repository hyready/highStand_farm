import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Redirect } from 'react-router';
import { Layout, Modal } from 'antd';
import Main from './components/main';
import Login from './components/login';
import Test from './components/test';
import MyTable from './components/pages/table';
class App extends Component {
    render() {
        return (
            <Layout className='vstretch'>
                <Switch>
                    <Redirect exact path='/' to='/login'/>
                    <Route path='/main' component={Main}></Route>
                    <Route path='/login' component={Login}></Route>
                    <Route path='/test' component={Test}></Route>
                    <Route path='/table' component={MyTable}></Route>
                </Switch>
            </Layout>
        );
    }
}
export default App;
