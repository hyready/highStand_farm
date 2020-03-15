import React, {Component, Fragment} from "react";
import {withRouter} from "react-router-dom";
import {Table, Icon, Modal, Button, Input, InputNumber, Popconfirm, Form, Select, DatePicker} from 'antd';
import {connect} from "react-redux";
import {FetchHelper} from "freesia-core";
import './index.less';
const {Option, OptGroup} = Select;

const temp = [
    {
        key: '1',
        name: '李铁兵',
        czz: '李铁兵',
        czrq: '2018-1-5  12:00:31',
        czlx: '用户管理',
        ipdz: '130.246.76.12',
        czjl: '删除用户',
    }, {
        key: '2',
        name: '王  强',
        czz: '王  强',
        czrq: '2018-1-5  16:00:00',
        czlx: '用户管理',
        ipdz: '101.66.243.102',
        czjl: '删除用户2',
    }, {
        key: '3',
        name: '李铁兵',
        czz: '李铁兵',
        czrq: '2018-2-2  10:00:00',
        czlx: '用户管理',
        ipdz: '101.66.243.102',
        czjl: '更新用户信息',
    }, {
        key: '4',
        name: '王  强',
        czz: '王  强',
        czrq: '2018-3-9  8:32:00',
        czlx: '项目管理',
        ipdz: '231.173.26.186',
        czjl: '新增项目',
    }
    , {
        key: '5',
        name: '李铁兵',
        czz: '李铁兵',
        czrq: '2018-3-13  11:33:00',
        czlx: '项目管理',
        ipdz: '2.227.98.250',
        czjl: '更新项目信息',
    }
    , {
        key: '6',
        name: '李铁兵',
        czz: '李铁兵',
        czrq: '2018-11-19  14:21:00',
        czlx: '项目管理',
        ipdz: '80.9.246.225',
        czjl: '更新项目信息',
    }];

const title=()=>{
	return (<div><Icon type="book" /><span style={{marginLeft:3+'px'}}>数据列表</span></div>)
}

class System extends Component {
    constructor(props) {
        super(props);
        this.state = {
            columns: [{
                title: '编号',
                dataIndex: 'name'
            }, {
                title: '用户',
                dataIndex: 'czz',
            }, {
                title: '操作时间',
                dataIndex: 'czrq',
            }, {
                title: '操作类型',
                dataIndex: 'czlx',
            }, {
                title: 'IP地址',
                dataIndex: 'ipdz',
            }, {
                title: '操作记录',
                dataIndex: 'czjl',
            }],
            data: [
                {
                    key: '1',
                    name: '100001',
                    czz: '李铁兵',
                    czrq: '2018-01-05  12:00:31',
                    czlx: '用户管理',
                    ipdz: '130.246.76.12',
                    czjl: '删除用户',
                }, {
                    key: '2',
                    name: '100002',
                    czz: '王 强',
                    czrq: '2018-01-05  16:00:00',
                    czlx: '用户管理',
                    ipdz: '101.66.243.102',
                    czjl: '删除用户2',
                }, {
                    key: '3',
                    name: '100003',
                    czz: '张浩然',
                    czrq: '2018-02-02  10:00:00',
                    czlx: '用户管理',
                    ipdz: '101.66.243.102',
                    czjl: '更新用户信息',
                }, {
                    key: '4',
                    name: '100004',
                    czz: '王 强',
                    czrq: '2018-03-09  8:32:00',
                    czlx: '项目管理',
                    ipdz: '231.173.26.186',
                    czjl: '新增项目',
                }
                , {
                    key: '5',
                    name: '100005',
                    czz: '李铁兵',
                    czrq: '2018-03-13  11:33:00',
                    czlx: '项目管理',
                    ipdz: '2.227.98.250',
                    czjl: '更新项目信息',
                }
                , {
                    key: '6',
                    name: '100006',
                    czz: '赵 娟',
                    czrq: '2018-11-19  14:21:00',
                    czlx: '项目管理',
                    ipdz: '80.9.246.225',
                    czjl: '更新项目信息',
                }],
            data2: [],
            user: '',
            date: '',
            type: ''
        }
    }

    render() {
        return (
            <Fragment>
                <div className="logManage-handle">
                    <div className="czrz-headerbox">
                        <div className="czrz-header">
                            <Icon type="book"/>
                            <span>
				    				筛选查询
				    			</span>
                        </div>

                        <div className="czrz-search">
                            <span>用户:</span>
                            <Select
                                placeholder="请选择"
                                style={{width: 200}}
                                onDropdownVisibleChange={this.onDropdownVisibleChange.bind(this)}
                                onChange={this.userChange.bind(this)}>
                                <Option value="张浩然">张浩然</Option>
                                <Option value="汪啸寒">汪啸寒</Option>
                                <Option value="周子豪">周子豪</Option>
                                <Option value="马宇航">马宇航</Option>
                                <Option value="赵 娟">赵 娟</Option>
                                <Option value="李铁兵">李铁兵</Option>
                                <Option value="王 强">王 强</Option>
                            </Select>

                            <span className="czrz-date">操作日期:</span>
                            <DatePicker onChange={this.timeChange.bind(this)}/>

                            <span className="czrz-czlx">操作类型:</span>
                            <Select
                                placeholder="请选择"
                                style={{width: 200}}
                                onChange={this.typeChange.bind(this)}
                            >
                                <Option value="用户管理1">用户管理</Option>
                                <Option value="用户管理2">项目管理</Option>
                            </Select>
                            <Button type="primary" className="czrz-cx" onClick={this.queryData.bind(this)}>查询</Button>
                        </div>
                        <div className="czrz-table">
                            <Table
                                columns={this.state.columns}
                                dataSource={this.state.data}
                                bordered
                                title={title}
                                pagination={{pageSize:8}}
                            />
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }

    //生命周期函数
    componentWillMount() {
        var data2 = JSON.parse(JSON.stringify(this.state.data));
        this.setState({
            data2: data2,
        });
    }
	
	onDropdownVisibleChange = ()=>{
		//console.log(6)
		this.setState({
            data:this.state.data2
        })
	}
	
    //操作人员框
    userChange = (value) => {
    	//console.log(value)
    	var _this=this;
    	var data2 = JSON.parse(JSON.stringify(this.state.data));
    	var data3=[];
    	for(var i=0;i<data2.length;i++){
    		if(data2[i].czz==value){
    			data3.push(data2[i])
    		}
    	}
    	//console.log(value)
        this.setState({
            user: value,
            data:data3
        })
    }
    queryData = () => {
        var list = []
        list = temp.filter((data) => {
            var uesrFlag = true;
            var dateFlag = true;
            var typeFlag = true;
            if (Boolean(this.state.user) && (this.state.user != data.czz)) {
                uesrFlag = false;
            }
            if (Boolean(this.state.date) && (this.state.date.split('-').join('.') != data.czrq)) {
                dateFlag = false;
            }
            if (Boolean(this.state.type) && (this.state.type != data.czlx)) {
                typeFlag = false;
            }
            if (uesrFlag && dateFlag && typeFlag) {
                return data
            }
        })
        this.setState({
            data: list
        })
    }
    czrymouserenter = () => {
        this.setState({
            data: this.state.data2
        })
    }
    //时间选择器
    timeChange = (data, dateString) => {
    	//console.log(data)
    	//console.log(dateString)
        this.setState({
            date: dateString
        })
    }
    //操作类型
    typeChange = (value) => {
        this.setState({
            type: value
        })
    }
}

export default withRouter(System);