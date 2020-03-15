import React, {
	Component
} from "react";
import { Route, Switch, Link,withRouter } from "react-router-dom";
import { Icon,Tabs } from 'antd';
import {Redirect} from "react-router";
// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts';
import ReactEcharts from 'echarts-for-react';
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import './index.less';

import Qygcsl from "./pages/qygcsl";
import Ntjsgh from "./pages/ntjsgh";
import Jsqk from "./pages/jsqk";
import Jsfx from "./pages/jsfx";
import Gczjzb from "./pages/gczjzb";
import Gbzntzb from "./pages/gbzntzb";

const TabPane = Tabs.TabPane;
class Home extends Component {
	callback=(activeKey)=>{
        this.props.history.push(`/main/homePage/home/${activeKey}`);
    }
	constructor(props) {
		super(props);
		this.state = {

		}
	}
	componentDidMount(){
	}
	render() {
		return(
			<div className='homePage_home'>
				<div className='top'>
					<div className='part part1' style={{background:"rgb(86,150,225)"}}>
						<div className="left">	
							<div className="">项目数量</div>
							<img src="/images/number.png"/>
						</div>
						<div className="center">
							<div className="numa">210<span>个</span></div>
							<div>已建项目:</div>
							<div>规划项目:</div>
							<div>在建项目:</div>
						</div>
						<div className="right">
							<div><span>40</span>个</div>
							<div><span>120</span>个</div>
							<div><span>50</span>个</div>
						</div>
                   </div>
                   <div className='part part2' style={{background:'rgb(229,180,107)'}}>
						<div className="left">
							<div>建设面积</div>
							<img src="/images/s.png"/>
						</div>
						<div className="center">
							<div className="numa">400<span>万亩</span></div>
							<div>土地平均坡度:</div>
							<div>土地平均厚度:</div>
						</div>
						<div className="right">
							<div><span>3.2</span>个</div>
							<div><span>30</span>厘米</div>
						</div>
                   </div>
                   <div className='part part3' style={{background:'rgb(60,211,145)'}}>
						<div className="left">
							<div>项目资金</div>
							<img src="/images/money.png"/>
						</div>
						<div className="center">
							<div className="numa">2000<span>万</span></div>
							<div>社会投入:</div>
							<div>财政投入:</div>
						</div>
						<div className="right">
							<div><span>500</span>万</div>
							<div><span>1500</span>万</div>
						</div>
                   </div>
                   <div className='part part4' style={{background:'rgb(237,154,123)'}}>
						<div className="left">
							<div>更多项目</div>
							<img src="/images/more.png"/>
						</div>
						<div className="right">
							<div>植树: <span>20</span>万株</div>
							<div>田间工程: <span>122</span>千米</div>
							<div>各级灌溉渠道: <span>2000</span>千米</div>
							<div>土地平整面积: <span>122</span>万平方千米</div>
						</div>
                   </div>
                </div>
                <div className="xian"></div>
                <div className='daohang'>
                    <Tabs defaultActiveKey="qygcsl" onChange={this.callback.bind(this)}>
                        <TabPane tab="区域工程数量" key="qygcsl"></TabPane>
                        <TabPane tab="农田建设规划" key="ntjsgh"></TabPane>
                        <TabPane tab="建设情况" key="jsqk"></TabPane>
                        <TabPane tab="建设分析" key="jsfx"></TabPane>
                        <TabPane tab="工程资金占比" key="gczjzb"></TabPane>
                        <TabPane tab="高标准农田占比" key="gbzntzb"></TabPane>
                    </Tabs>
                </div>
                
                <div className='body'>
                    <Switch className='content_box'>
                        <Redirect exact path="/main/homePage/home" to="/main/homePage/home/qygcsl"/>
                        <Route key='qygcsl' path="/main/homePage/home/qygcsl" component={Qygcsl}></Route>
                        <Route key='ntjsgh' path="/main/homePage/home/ntjsgh" component={Ntjsgh}></Route>
                        <Route key='jsqk' path="/main/homePage/home/jsqk" component={Jsqk}></Route>
                        <Route key='jsfx' path="/main/homePage/home/jsfx" component={Jsfx}></Route>
                        <Route key='gczjzb' path="/main/homePage/home/gczjzb" component={Gczjzb}></Route>
                        <Route key='gbzntzb' path="/main/homePage/home/gbzntzb" component={Gbzntzb}></Route>
                    </Switch>
                </div>
			</div>
		);
	}
}
export default withRouter(Home);