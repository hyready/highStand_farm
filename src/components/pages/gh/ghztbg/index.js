import React, {Component} from "react";
import {withRouter} from "react-router-dom";
import { Table,Icon,Button,Input,InputNumber, Popconfirm, Form,Modal,DatePicker,Select} from 'antd';
import ReactEcharts from 'echarts-for-react';
import {connect} from "react-redux";
import { FetchHelper } from "freesia-core";
import './index.less';
import FormItem from "antd/lib/form/FormItem";
const Option = Select.Option;
const { MonthPicker, RangePicker, WeekPicker } = DatePicker;
const title=()=>{
	return (<div><Icon type="book" /><span style={{marginLeft:3+'px'}}>数据列表</span></div>)
}
// const Option = Select.Option;
class Ghztbg extends Component {
    constructor(props){
		super(props);
		this.state={
		columns:[{
        title: '业务号',
        dataIndex: 'id'
      }, {
        title: '申请人',
        dataIndex: 'name',
      }, {
        title: '申请简介',
        dataIndex: 'jj',
      }, {
        title: '受理人员',
        dataIndex: 'slry',
      }, {
        title: '受理时间',
        dataIndex: 'slsj',
      }, {
        title: '节点期限',
        dataIndex: 'jdqx',
      }, {
        title: '状态',
        dataIndex: 'zt',
      }],
      data:[{
        key: '1',
        id:'10001',
        name: '张浩然',
        jj: '变更管理员',
        slry: '李铁兵',
        slsj:'2018-09-15',
        jdqx:'2019-08-15',
        zt:'已办结'
      },{
        key: '2',
        id:'10002',
        name: '汪啸寒',
        jj: '变更项目名称',
        slry: '王  强',
        slsj:'2018-02-02',
        jdqx:'2019-02-05',
        zt:'已办结'
      },{
          key: '3',
          id:'10003',
          name: '张浩然',
          jj: '变更项目名称',
          slry: '王  强',
          slsj:'2018-09-15',
          jdqx:'2019-08-15',
          zt:'已办结'
      },{
          key: '4',
          id:'10004',
          name: '赵  娟',
          jj: '变更项目名称',
          slry: '李铁兵',
          slsj:'2018-02-02',
          jdqx:'2019-02-05',
          zt:'已办结'
      },{
          key: '5',
          id:'10005',
          name: '许临海',
          jj: '变更项目名称',
          slry: '李铁兵',
          slsj:'2018-09-15',
          jdqx:'2019-08-15',
          zt:'已办结'
      }],
      columns1:[{
        title: '地块名称',
        dataIndex: 'dkmc'
      }, {
        title: '地块编码',
        dataIndex: 'dkbm',
      }, {
        title: '地块面积(亩)',
        dataIndex: 'dkmjm',
      }, {
        title: '是否高标准农田',
        dataIndex: 'sfgbznt',
      }, {
        title: '操作',
        dataIndex: 'cz',
        render: () => (
          <div style={{color:'red'}}>
            <span onClick={this.delete.bind(this)}>删除</span><span>  </span>
          </div>
        ),
        }],
      data1: [{
        key: '1',
        dkmc:'水边地',
        dkbm: '5258452445855',
        dkmjm: '2.11',
        sfgbznt: '是',
        cz:'2018-09-15'
      },{
        key: '2',
        dkmc:'水边地2',
        dkbm: '5258452445855',
        dkmjm: '2.11',
        sfgbznt: '是',
        cz:'2018-09-15'
      }],
      add:[],
      add1:[]
		}
    }
    state = { visible: false }
    delete = () => {
        this.setState({
        //   visible: true,
        });
      }
    showModal = () => {
        this.setState({
          visible: true,
        });
      }
    

      //申请
      handleOk = (e) => {
        var key = this.state.data.length+1
        this.state.add.key=key
        this.state.add.zt = '申请中'
        this.state.add.slry = '李四'
        this.state.add.slsj = '2019-10-01'
        this.state.add.jdqx = '2019-10-01'
        var add = JSON.parse(JSON.stringify(this.state.add));
        var data = JSON.parse(JSON.stringify(this.state.data));
        data.unshift(this.state.add)
        console.log(data)
        this.setState({
          visible: false,
          data:data
          
        });
      }
      nameChange = (e) => {
        var add1 = this.state.add;
        add1.name=e.target.value;
        this.setState({
          add:add1
        });
      }
      idChange = (e) => {
        var add1 = this.state.add;
        add1.id=e.target.value;
        this.setState({
            add:add1
        });
      }
      jjChange = (e) => {
        var add1 = this.state.add;
        add1.jj=e.target.value;
        this.setState({
            add:add1
        });
      }
    


      //删除
      delete = (e) => {
        for(var i = 0; i < this.state.data1.length;i++){
		}
      }

      handleCancel = (e) => {
        this.setState({
          visible: false,
        });
      }
    
    onChange = (date, dateString) =>{
        // console.log(date, dateString);
      }
    handleChange = (value) =>{
      // console.log(date, dateString);
    }
    render() {
        return (
           <div className='gh_ghztbg'>
               <div className="yhlb-header">
	    			<Icon type="book" />
	    			<span>
	    				管护主体变更申请
	    			</span>
	    		</div>
			    
			    <div className="yhlb-search">
                <div>
                    <Button type="primary" className="yhlb-cx" onClick={this.showModal}>
                      基础信息变更
                    </Button>
                    <Modal
                      title="管护主体变更申请"
                      visible={this.state.visible}
                      onOk={this.handleOk}
                      onCancel={this.handleCancel}
                      okText='提交'
                      className='modal_gh'
                    >
                        <div className='input_gh'>
                            <div>
                                <label>管护主题名称:</label>
                                <Input style={{marginRight:'35px'}}/>
                            </div>
                            <div>
                                <label>管护主体类型:</label>
                                <Input/>
                            </div>
                            <div>
                                <label>管护主体联系方式:</label>
                                <Input style={{marginRight:'43px'}}/>
                            </div>
                        </div>
                        <div className='input_gh'>
                            <div>
                                <label>管护主体证件号:</label>
                                <Input value={this.state.add.id} onChange={this.idChange.bind(this)}  style={{marginRight:'50px'}}/>
                            </div>
                            <div>
                                <label>涉及行政村:</label>
                                <Input style={{marginRight:'-11px'}}/>
                            </div>
                            <div>
                                <label>申请人:</label>
                                <Input value={this.state.add.name} onChange={this.nameChange.bind(this)} style={{marginRight:'-25px'}}/>
                            </div>
                        </div>
                        <div className='input_gh'>
                            <label>责任主体地址:</label>
                            <Input style={{width:'81%',marginRight:'28px'}}/>
                        </div>
                        <div className='input_gh'>
                            <label>申请简介:</label>
                            <Input style={{width:'81%'}} value={this.state.add.jj} onChange={this.jjChange.bind(this)}/>
                        </div>
                        <Table
					        columns={this.state.columns1}
					        dataSource={this.state.data1}
					        bordered
                            title={() => '管护地块信息'}
                            style={{marginTop:'10px'}}
                        />
                    </Modal>
                </div>
			    </div>
                <div className="yhlb-search" style={{marginTop:'1px'}}>
                <span>业务号:</span>
			    	<div className="example-input">
					    <Input placeholder="请输入业务号"/>
				    </div>
			    	<span style={{marginLeft:'20px',marginRight:'5px'}}>申请人名称:</span>
			    	<div className="example-input">
					    <Input placeholder="请输入申请人名称"/>
				    </div>
                    <span style={{marginLeft:'20px'}}>申请时间:</span>
                        <RangePicker onChange={this.onChange.bind(this)} />
                    <span style={{marginLeft:'20px',marginRight:'5px'}}>状态:</span>
                        <Select defaultValue="已办结" style={{ width: 120 }} onChange={this.handleChange.bind(this)}>
                             <Option value="jack">已办结</Option>
                             <Option value="lucy">待审核</Option>
                        </Select>
			    	<Button type="primary" className="yhlb-cx">搜索</Button>
			    </div>
                <Table
					columns={this.state.columns}
					dataSource={this.state.data}
					bordered
          title={title}
                />
           </div>
        );
    }
}
export default withRouter(Ghztbg);