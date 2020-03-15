import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import { withRouter } from "react-router-dom";
import { BrowserRouter as Router } from 'react-router-dom'
import {Redirect} from "react-router";
import {Menu, Breadcrumb, Icon, Layout,Tabs ,Select  } from 'antd';
import './index.less';
import {sideMenus,headerMenus,pages} from  './menus.js';



const TabPane = Tabs.TabPane;
const { Header, Content, Sider } = Layout;
const Option = Select.Option;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class Main extends Component {
    renderSide = (baseUrl) =>{
        var me = this;
        return sideMenus.map((sideMenu, index) => {
            return (
                <SubMenu key={sideMenu.key} title={<span><Icon type={sideMenu.icon} />{sideMenu.name}</span>}>
                    {sideMenu.childs.map((child)=>{
                        return <Menu.Item key={child.key}><Link to={`${baseUrl}/${sideMenu.key}/${child.key}`} text={child.name}>
                            {child.name}
                        </Link></Menu.Item>
                    })}
                </SubMenu>
            );
        });
    }
    changePage = ()=>{

        debugger
    }
    renderRouter(baseUrl) {
        var _this = this;
        return pages.map((page, index) => {
            return (
                <Route key={index} path={`${baseUrl}/${page.parentKey}/${page.key}`}
                       component={page.component}></Route>
            );
        });
    }
    render() {
        return (
            <Layout>
                <Header className="layout-header-primary">
                    <div className="layout-header">
                        <div className="layout-header-position">
                            <div className="logo" ><span className='title'>一张图后台管理系统</span></div>
                            <div className="user-exit">
                                <div className='user-div'>
                                    <Icon type="user" />
                                    <span className='user-name'>admin</span>
                                </div>
                                <span className="separator">|</span>
                                <a className="exit">退出</a>
                            </div>
                        </div>
                    </div>
                </Header>
                <Layout>
                    <Sider width={200} style={{ background: '#fff' }}>
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={['nysjgl']}
                            defaultOpenKeys={['sjgl']}
                            style={{ height: '100%', borderRight: 0 }}>
                            {this.renderSide(this.props.match.path)}
                        </Menu>
                    </Sider>
                    <Layout>
                        <Switch>
                            <Redirect exact path="/main" to="/main/sjgl/nysjgl"/>
                            <Redirect exact path="/main/sjgl" to="/main/sjgl/nysjgl"/>
                            {this.renderRouter(this.props.match.path)}
                        </Switch>
                    </Layout>
                </Layout>
            </Layout>
        );
    }
}
export default withRouter(Main);