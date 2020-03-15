import React, {Component} from "react";
import {Route, Switch, withRouter} from "react-router-dom";
import {Table, Icon, Button, Input, InputNumber, Popconfirm, Form, Modal, Divider, Tag, Tabs} from 'antd';
import Archives from "./archives";
import Map from "./map";
import History from "./history";
import SubProject from "./subProject";
import {Redirect} from "react-router";
import './index.less';
import FetchHelper from "../../../../framework/fetch-helper";

const {TabPane} = Tabs;

class projectDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //    data:{name:'',id:'',zk:''},
            data: '',
            type: 'down',
            dataDetail: '',
            pjj:''
        }
    }

    componentWillReceiveProps(nextProps, nextContext) {
        var _this = this
        if (nextProps.data) {
            //this.props.history.push(`/main/projectManage/projectList/subProject/${this.props.data.xmbh}`);
            FetchHelper.getJson('/api/project/getTdzhzzDetail?id=' + nextProps.data.id).then(resp => {
                if (resp && resp.status == 200) {
                    this.setState({
                        data: resp.data
                    })
                }
            })
        }
    }
    componentWillMount(){
         if(!this.props.data){
             return
         }else{
             if(this.props.pj){
                this.props.history.push(`/main/projectManage/projectAssessment/subProject/${this.props.data.xmbh}/${this.props.data.id}/${this.props.data.xmzt}`);
                this.setState({
                    pjj:<Switch className='content_box'>
                   
                    <Route key='subProject' path="/main/projectManage/projectAssessment/subProject/:xmbh/:id/:xmzt"
                           component={SubProject}></Route>
                    <Route key='map' path="/main/projectManage/projectAssessment/map/:id" component={Map}></Route>
                    <Route key='archives' path="/main/projectManage/projectAssessment/archives/:id/:xmmc" component={Archives}></Route>
                    <Route key='history' path="/main/projectManage/projectAssessment/history/:id" component={History}></Route>
                    
                </Switch>
                })
             }else{
                this.props.history.push(`/main/projectManage/projectList/subProject/${this.props.data.xmbh}/${this.props.data.id}/${this.props.data.xmzt}`);
                this.setState({
                    pjj:<Switch className='content_box'>
                   
                    <Route key='subProject' path="/main/projectManage/projectList/subProject/:xmbh/:id/:xmzt"
                           component={SubProject}></Route>
                    <Route key='map' path="/main/projectManage/projectList/map/:id" component={Map}></Route>
                    <Route key='archives' path="/main/projectManage/projectList/archives/:id/:xmmc" component={Archives}></Route>
                    <Route key='history' path="/main/projectManage/projectList/history/:id" component={History}></Route>
                    
                </Switch>
                })
             }
            
         }
    }

    changePage(activeKey) {
        var id = this.state.data.id
        var xmmc = this.state.data.xmmc
        var xmbh = this.state.data.xmbh
        if(this.props.pj){
            if (activeKey == 'archives') {
                this.props.history.push(`/main/projectManage/projectAssessment/${activeKey}/${id}/${xmmc}`);
            }else if(activeKey == 'history' || activeKey == 'map'){
                this.props.history.push(`/main/projectManage/projectAssessment/${activeKey}/${id}`);
            }else if(activeKey == 'subProject'){
                // this.props.history.push(`/main/projectManage/projectList/${activeKey}`);
                this.props.history.push(`/main/projectManage/projectAssessment/subProject/${this.props.data.xmbh}/${this.props.data.id}/${this.props.data.xmzt}`);
            }else{
                this.props.history.push(`/main/projectManage/projectAssessment/${activeKey}`);
            }
         }else{
            if (activeKey == 'archives') {
                this.props.history.push(`/main/projectManage/projectList/${activeKey}/${id}/${xmmc}`);
            }else if(activeKey == 'history' || activeKey == 'map'){
                this.props.history.push(`/main/projectManage/projectList/${activeKey}/${id}`);
            }else if(activeKey == 'subProject'){
                // this.props.history.push(`/main/projectManage/projectList/${activeKey}`);
                this.props.history.push(`/main/projectManage/projectList/subProject/${this.props.data.xmbh}/${this.props.data.id}/${this.props.data.xmzt}`);
            }else{
                this.props.history.push(`/main/projectManage/projectList/${activeKey}`);
            }
         }
        
    }

    showMore(e) {
        if (this.state.type == "up") {
            this.setState({
                type: 'down'
            })
            document.querySelector('.projectTable').style.height = '90px';
            document.querySelector('.more span').innerHTML = '查看详情';
        } else {
            this.setState({
                type: 'up'
            })
            document.querySelector('.projectTable').style.height = 'auto';
            document.querySelector('.more span').innerHTML = '收起详情';

        }
    }

    render() {
        //var id = this.state.data.id
        var {data} = this.state
        return (
            <div className='projectDetail'>
                <div className='header'>
                    <div className='back' onClick={this.props.showList}><img src='/images/back.png'></img><a>返回列表</a>
                    </div>
                    <div className='title'>
                        <span>{this.state.data.xmmc}</span>
                        <span> # {this.state.data.xmbh}</span>
                        <span> {this.state.data.xmzt}</span>
                    </div>
                    <div className='body'>
                        <ul className='projectData projectTable' style={{height:'90px'}}>
                            <li>
                                <ul>
                                    <li><span>项目类型：</span><span>{data.xmlx}</span></li>
                                    <li><span>项目建设规模：</span><span>{data.xmjsgm}</span><span>公顷</span></li>
                                    <li><span>项目建设地点：</span><span>{data.xmjsdd}</span></li>
                                    <li><span>项目总投资：</span><span>{data.xmztz}</span><span>万元</span></li>
                                </ul>
                            </li>
                            <li>
                                <ul>
                                    <li><span>计划开始时间：</span><span>{data.jhkssj}</span></li>
                                    <li><span>计划结束时间：</span><span>{data.jhjssj}</span></li>
                                    <li><span>实际开始时间：</span><span>{data.kssj}</span></li>
                                    <li><span>实际结束时间：</span><span>{data.jssj}</span></li>
                                </ul>
                            </li>
                            <li>
                                <ul>
                                    <li><span>项目建设规模：</span><span>{data.xmjsgm}</span><span>万元</span></li>
                                    <li><span>整理规模：</span><span>{data.zlgm}</span><span>公顷</span></li>
                                    <li><span>基本农田整理规模：</span><span>{data.jbntzlgm}</span><span>公顷</span></li>
                                    <li><span>复垦规模：</span><span>{data.fkgm}</span><span>公顷</span></li>
                                </ul>
                            </li>



                            <li>
                                <ul>
                                    <li><span>开发规模：</span><span>{data.kfgm}</span><span>公顷</span></li>
                                    <li><span>建成高标准基本农田：</span><span>{data.jcgbzjbnt}</span><span>公顷</span></li>
                                    <li><span>高标准基本农田建设条件：</span><span>{data.gbzntjstj}</span></li>
                                    <li><span>新增耕地面积：</span><span>{data.xzgdmj}</span><span>公顷</span></li>
                                </ul>
                            </li>
                            <li>
                                <ul>
                                    <li><span>新增耕地率：</span><span>{data.xzgdl}</span><span>公顷</span></li>
                                    <li><span>灾毁耕地面积：</span><span>{data.zhgdmj}</span><span>公顷</span></li>
                                    <li><span>地貌类型：</span><span>{data.dmlx}</span></li>
                                    <li><span>建设期：</span><span>{data.jsq}</span><span>个月</span></li>
                                </ul>
                            </li>
                            <li>
                                <ul>
                                    <li><span>项目实施单位：</span><span>{data.xmssdw}</span></li>
                                    <li><span>下达预算与计划的机关：</span><span>{data.xdysjg}</span></li>
                                    <li><span>下达预算与计划文件名：</span><span>{data.xdyswjm}</span></li>
                                    <li><span>下达预算与计划文号：</span><span>{data.xdyswh}</span></li>
                                </ul>
                            </li>
                            <li>
                                <ul>
                                    <li><span>批复日期：</span><span>{data.pfrq}</span></li>
                                    <li><span>验收单位：</span><span>{data.ysdw}</span></li>
                                    <li><span>验收文号：</span><span>{data.yswh}</span></li>
                                    <li><span>灌溉方式：</span><span>{data.ggfs}</span><span></span></li>
                                </ul>
                            </li>
                            <li>
                                <ul>
                                    <li><span>设计灌溉保证率：</span><span>{data.sjggbzl}</span></li>
                                    <li><span>灌溉定额：</span><span>{data.ggde}</span>立方米/亩</li>
                                    <li><span>灌溉水利用系数：</span><span>{data.ggslyxs}</span></li>
                                    <li><span>灌溉水源：</span><span>{data.ggsy}</span></li>
                                </ul>
                            </li>
                            <li>
                                <ul>
                                    <li><span>新增灌溉面积：</span><span>{data.xzggmj}</span>公顷</li>
                                    <li><span>开采地下水量：</span><span>{data.kcdxsl}</span>吨/年</li>
                                    <li><span>投资标准：</span><span>{data.tzbz}</span>元/亩</li>
                                    <li><span>年效益：</span><span>{data.nxy}</span>万元</li>
                                </ul>
                            </li>
                            <li>
                                <ul>
                                    <li><span>静态投资回收期：</span><span>{data.jttzhsq}</span>年</li>
                                    <li><span>新增耕地率：</span><span>{data.xzgdl}</span><span>公顷</span></li>
                                    <li><span>验收时间：</span><span>{data.yssj}</span><span></span></li>
                                    <li><span></span><span></span></li>
                                </ul>
                            </li>
                            <li>
                                <ul>
                                    <li><span>备注：</span><span>{data.bz}</span></li>
                                </ul>
                            </li>
                        </ul>
                        <a className='more' onClick={this.showMore.bind(this)}><span>查看详情</span><Icon type={this.state.type}></Icon></a>
                    </div>
                </div>
                <div className='content'>
                    <div className='flex_none'>
                        <Tabs defaultActiveKey="subProject" onChange={this.changePage.bind(this)}>
                            <TabPane tab="子项目" key="subProject"></TabPane>
                            <TabPane tab="地图" key="map"></TabPane>
                            <TabPane tab="档案管理" key="archives"></TabPane>
                            <TabPane tab="项目历史" key="history"></TabPane>
                        </Tabs>
                    </div>
                    <div className='flex_1'>
                        
                        {this.state.pjj}
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(projectDetail);

