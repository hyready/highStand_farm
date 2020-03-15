import React, {Component} from "react";
import {withRouter} from "react-router-dom";
import { Table,Icon,Button,Input,InputNumber, Popconfirm, Form,Modal} from 'antd';
import ReactEcharts from 'echarts-for-react';
import {connect} from "react-redux";
import { FetchHelper } from "freesia-core";
import './index.less';
import FormItem from "antd/lib/form/FormItem";

const title=()=>{
	return (<div><Icon type="book" /><span style={{marginLeft:3+'px'}}>数据列表</span></div>)
}


class projectApply extends Component {
	constructor(props){
		super(props);
		this.state={
			columns:[{
          title: '项目ID',
          dataIndex: 'id'
        }, {
          title: '项目名称',
          dataIndex: 'name',
        }, {
          title: '项目状况',
          dataIndex: 'xmzk',
        }, {
          title: '项目规模',
          dataIndex: 'xmgm',
        }, {
          title: '项目预算',
          dataIndex: 'xmys',
        }, {
          title: '设计单位',
          dataIndex: 'sjdw',
        }, {
          title: '施工单位',
          dataIndex: 'sgdw',
        }, {
          title: '开工日期',
          dataIndex: 'kgrq',
        }, {
          title: '竣工日期',
          dataIndex: 'jgrq',
        }],
      data : [{
        key: '1',
        id:'10001',
        name:'江津区红阳街道永红村高标准农田建设项目',
        xmzk:'建成中',
        xmgm:'362.52h㎡',
        xmys:'1206.03万元',
        sjdw:'四川鱼鳞图公司',
        sgdw:'成都鱼鳞图公司',
        kgrq:'2018-01-01',
        jgrq:'2018-09-01'
      },],
      visible3: false,
      user3:[],
      user:[]
		}
	}
    state = { visible: false }
    showModal = () => {
      this.setState({
        visible: true,
      });
    }
  
    handleOk = (e) => {
		var key = this.state.data.length+1;
      this.state.user3.key=key;
      this.state.user3.id= this.state.data.length+1;
      this.state.user3.xmzk='建设中';
      this.state.user3.xmmj='362.52h㎡';
      this.state.user3.sjdw='四川鱼鳞图公司';
      this.state.user3.sgdw='成都鱼鳞图公司';
      this.state.user3.ksrq='2018-01-01';
      this.state.user3.jgrq='2018-09-01';
		  var user3 = JSON.parse(JSON.stringify(this.state.user3));
		  var data = JSON.parse(JSON.stringify(this.state.data));
		  data.unshift(this.state.user3)
		  this.setState({
	        visible: false,
	        data:data
	      });
    }
    xmmcchange = (e)=>{
      var user = this.state.user3;
      user.xmmc=e.target.value;
      this.setState({
        user3:user
      })
    }
    xmgmchange = (e)=>{
      var user = this.state.user3;
      user.xmgm=e.target.value;
      this.setState({
        user3:user
      })
    }
    kgrqchange = (e)=>{
      var user = this.state.user3;
      user.kgrq=e.target.value;
      this.setState({
        user3:user
      })
    }
    handleCancel = (e) => {
      this.setState({
        visible: false,
      });
    }
    render() {
        return (
           	<div className="projectManage_projectApply">
           		<div className="yhlb-header">
	    			<Icon type="book" />
	    			<span>
	    				申请
	    			</span>
	    		</div>
			    
			    <div className="yhlb-search">
                <div>
                    <Button type="primary" onClick={this.showModal} className="yhlb-cx">
                      项目申请
                    </Button>
                    <Modal
                      title={title}
                      visible={this.state.visible}
                      onOk={this.handleOk}
                      onCancel={this.handleCancel}
                      okText='申请'
                    >
                      <Form>
                          <FormItem label='项目名称：' required='true' className='aa_apply'>
                                <Input className='input_app' value={this.state.user3.xmmc} onChange={this.xmmcchange.bind(this)}/>
                          </FormItem>
                          <FormItem label='项目地点：' required='true' className='aa_apply'>
                                <Input className='input_app'></Input>
                          </FormItem>
                          <FormItem label='建设规模：' required='true' className='aa_apply'>
                                <Input className='input_app'  value={this.state.user3.xmgm} onChange={this.xmgmchange.bind(this)}/>
                          </FormItem>
                          <FormItem label='资金来源：' required='true' className='aa_apply'>
                                <Input className='input_app'></Input>
                          </FormItem>
                          <FormItem label='开工日期' required='true' className='aa_apply'>
                                <Input className='input_app'  value={this.state.user3.kgrq} onChange={this.kgrqchange.bind(this)}/>
                          </FormItem>
                          <FormItem label='附件信息：' required='true' className='aa_apply'>
                                <Input type='file'></Input>
                          </FormItem>
                      </Form>
                    </Modal>
                </div>
			    </div>
			    
			    
			    <div className="yhlb-table">
			    	<Table
					    columns={this.state.columns}
					    dataSource={this.state.data}
					    bordered
					    title={title}
					    pagination={{pageSize:8}}
						/>
			    </div>
          	</div>
        );
    }
}
export default withRouter(projectApply);