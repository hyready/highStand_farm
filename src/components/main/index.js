import React, {Component} from 'react';
import {Route, Switch, Link} from 'react-router-dom';
import {withRouter} from "react-router-dom";
import {BrowserRouter as Router} from 'react-router-dom'
import {Redirect} from "react-router";
import {Menu, Breadcrumb, Icon, Layout, Tabs, Select} from 'antd';
import './index.less';
import {sideMenus, headerMenus, pages} from './menus.js';
import {browserHistory} from 'react-router';
import {connect} from 'react-redux'
import top from "./img/header.png";

const TabPane = Tabs.TabPane;
const {Header, Content, Sider} = Layout;
const Option = Select.Option;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class App extends Component {
    constructor(...args) {
        super(...args);
        this.state = {
            subSides: [],
            defaultSubSide: sideMenus[0].childs[0].key,
            firstMenuKey: [],
            secondMenuKey: [],
            openMenu: sideMenus[0].key,
            selectKey: sideMenus[0].childs[0].key
        };
    }

    renderSide = (baseUrl) => {
        return sideMenus.map((sideMenu, index) => {
            return (
                <SubMenu key={sideMenu.key}
                         title={<Link to={`${baseUrl}/${sideMenu.key}`}>
                             <Icon type={sideMenu.icon}/><span>{sideMenu.name}</span></Link>}>
                    {sideMenu.childs.map((child) => {
                        return <Menu.Item key={child.key}><Link to={`${baseUrl}/${sideMenu.key}/${child.key}`}
                                                                text={child.name}>
                            {child.name}
                        </Link></Menu.Item>
                    })}
                </SubMenu>
            );
        });
    }

    renderRouter(baseUrl) {
        var _this = this;
        return sideMenus.map((page, index) => {
            return page.childs.map((child, index) => {
                return (<Route key={index} path={`${baseUrl}/${page.key}/${child.key}`}
                               component={child.component}></Route>);
            })
        });
    }

    changeSubSide = (item, key, keyPath) => {
        let pathname = this.props.location.pathname;
        this.props.history.push(`${this.props.match.path}/${item.key}`);
        var subSide = sideMenus.filter((sideMenu, index) => {
            return sideMenu.key == item.key;
        })[0];

        let secondMenuKey = [subSide.childs[0].key];
        var sideMenu = subSide.childs.map((child) => {
            if (pathname.indexOf(`/${child.key}`) > -1) {
                secondMenuKey = [child.key]
            }
            return <Menu.Item key={child.key}>
                <Link to={`/main/${item.key}/${child.key}`} text={child.name}>
                    {child.name}
                </Link></Menu.Item>
        })
        this.setState({
            subSides: sideMenu,
            defaultSubSide: subSide.childs[0].key,
            firstMenuKey: [item.key],
            secondMenuKey: secondMenuKey
        })
    }

    componentDidMount() {
        let pathname = this.props.location.pathname;
        let firstMenuKey = [], sideMenuItem = sideMenus[0];
        sideMenus.forEach(sideMenu => {
            if (pathname.indexOf(`/${sideMenu.key}`) > -1) {
                firstMenuKey = [sideMenu.key];
                sideMenuItem = sideMenu;
            }
        });
        sideMenus.map((sideMenu, index) => {
            if (pathname.indexOf(sideMenu.key) > -1) {
                this.setState({
                    openMenu: sideMenu.key,
                    selectKey: sideMenu.childs[0].key
                })
            }
        });
        this.setState({
            firstMenuKey: firstMenuKey
        })
        this.changeSubSide(sideMenuItem)
    }

    loginOut = () => {
        this.props.history.push('/login')
    }
    changeKey = (keys) => {
        if (keys.length == 0) {
            this.setState({
                openMenu: '',
            })
            return
        }
        var sideMenu = sideMenus.filter((sideMenu, index) => {
            return sideMenu.key == keys[1]
        })[0];
        this.setState({
            openMenu: sideMenu.key,
            selectKey: sideMenu.childs[0].key
        })
        this.props.history.push(`/main/${sideMenu.key}/${sideMenu.childs[0].key}`);
    }
    selectKey = ({item, key, keyPath}) => {
        this.setState({
            selectKey: key
        })
    }

    render() {
        return (
            <Layout>
                <Header className="layout-header-primary">
                    <div className="layout-header" style={{background: "#252A39", backgroundSize: '100% 100%'}}>
                        <div className="layout-header-position">
                            <div className="layout-header-left">
                                <img className="logoimg" src="/images/logo-head.png"/>
                                <div className="logo"><span className='title' style={{color: '#D6D6D9'}}>农田建设项目管理平台</span>
                                </div>
                            </div>
                            <div className="user-exit">
                                <div className='user-div'>
                                    <Icon type="user"/>
                                    <span className='user-name'>admin</span>
                                </div>
                                <span className="separator">|</span>
                                <a className="exit" onClick={this.loginOut.bind(this)}>退出</a>
                            </div>
                        </div>
                    </div>
                </Header>
                <Layout>
                    <Sider width={200} style={{}} className='mainSider'>
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={['home']}
                            defaultOpenKeys={['homePage']}
                            selectedKeys={[this.state.selectKey]}
                            openKeys={[this.state.openMenu]}
                            onOpenChange={this.changeKey.bind(this)}
                            onClick={this.selectKey.bind(this)}
                            style={{height: '100%', borderRight: 0}}>
                            {this.renderSide(this.props.match.path)}
                        </Menu>
                    </Sider>
                    <Layout className='body' style={{overflow: 'hidden'}}>
                        <Switch className='content_box'>
                            <Redirect exact path="/main" to="/main/homePage"/>
                            <Redirect exact path="/main/homePage" to="/main/homePage/home"/>
                            <Redirect exact path="/main/homePage/home" to="/main/homePage/home/qygcsl"/>
                            <Redirect exact path="/main/projectManage" to="/main/projectManage/projectList"/>
                            <Redirect exact path="/main/gh" to="/main/gh/jbntbt"/>
                            <Redirect exact path="/main/oneMap" to="/main/oneMap/special"/>
                            <Redirect exact path="/main/dataManage" to="/main/dataManage/dataQuery"/>
                            <Redirect exact path="/main/archivesManage" to="/main/archivesManage/fileList"/>
                            <Redirect exact path="/main/dynamicManage" to="/main/dynamicManage/list"/>
                            <Redirect exact path="/main/userManage" to="/main/userManage/userList"/>
                            <Redirect exact path="/main/logManage" to="/main/logManage/handle"/>
                            {this.renderRouter(this.props.match.path)}
                        </Switch>
                    </Layout>
                </Layout>
            </Layout>
        );
    }
}

const mapStateToProps = (state, ownProps) => {

    const {firstLogin} = state
    return {
        firstLogin
    }
}
const mapDispatchToProps = (dispatch, ownProps) => ({
    sendPermissionCodes: (value) => dispatch({
        type: 'user_permissionCodes',
        permissionCodes: value
    }),
    sendUserInfo: (value) => dispatch({
        type: 'user_detail',
        userInfo: value
    }),
    notFirstLogin: (value) => {
        return dispatch({
            type: 'first_login',
            firstLogin: value
        })

    }
})
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))