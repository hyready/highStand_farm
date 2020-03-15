import React, {Component} from "react";
import {Tabs, Button, DatePicker} from 'antd';
import {Route, Switch, Link,withRouter} from 'react-router-dom';
import {Redirect} from "react-router";

import './index.less';
import Ghgk from './pages/ghgk';
import Ghjd from './pages/ghjd';
import Ghzl from './pages/ghzl';
const TabPane = Tabs.TabPane;
const { MonthPicker, RangePicker, WeekPicker } = DatePicker;
class ProjectPlan extends Component {
    pageChange =(activeKey)=>{
        this.props.history.push(`/main/projectManage/projectPlan/${activeKey}`);
    }
    render() {
        return (
            <div style={{height: '100%'}} className='projectManage_projectPlan'>
                <div className='header'>
                    <Tabs defaultActiveKey="projectgk" onChange={this.pageChange.bind(this)}>
                        <TabPane tab="项目规划概况" key="projectgk"></TabPane>
                        <TabPane tab="项目规划进度" key="projectjd"></TabPane>
                        <TabPane tab="项目规划资料" key="projectzl"></TabPane>
                    </Tabs>
                </div>
                <div className='body'>
                    <Switch className='content_box'>
                        <Redirect exact path="/main/projectManage/projectPlan" to="/main/projectManage/projectPlan/projectgk"/>
                        <Route key='1' path="/main/projectManage/projectPlan/projectgk" component={Ghgk}></Route>
                        <Route key='2' path="/main/projectManage/projectPlan/projectjd" component={Ghjd}></Route>
                        <Route key='3' path="/main/projectManage/projectPlan/projectzl" component={Ghzl}></Route>
                    </Switch>
                </div>
            </div>
        );
    }
}
export default withRouter(ProjectPlan);