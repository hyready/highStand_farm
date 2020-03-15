import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import { withRouter } from "react-router-dom";
import { Layout, Menu } from 'antd';


import './index.less';

const { Header } = Layout;


class Test extends Component {

    render() {
        debugger
        return (
            <Layout className='vstretch'>
                <Header className="layout-header-primary">
                    <div className="logo" ><span className='title'>fsfdfsdfsdfffs</span></div>
                </Header>
                {/* <Footer className='htcenter'>
                    四川鱼鳞图信息技术股份有限公司 ©2018 版权所有
                </Footer> */}
            </Layout>
        );
    }
}

export default withRouter(Test);