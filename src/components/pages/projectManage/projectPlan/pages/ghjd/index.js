import React, {Component} from "react";
import {withRouter} from "react-router-dom";
import {DatePicker, Modal, Table,Icon } from 'antd';
import moment from 'moment';
import './index.less';
import download from "../../../../archivesManage/download.png";
const { MonthPicker, RangePicker, WeekPicker } = DatePicker;
const span = ()=>{
	return (
		<span>
			<span className="xgwj">相关文件</span>
			<span className="dtfb"> 地图分布</span>
			<span className="db"> 对比</span>
		</span>
	)
}
const data=[
	{
		key: '1',
		xmmc: '江津区红阳街道永红村高标准农田建设项目',
		xmfzr: '李浩',
		xmghzlwbcd: '90%',
		xmys:'200',
		xmkssj:"2019-04-12",
		xmjssj:"2019-12-30",
		xmjd:'80%',
		xmjd2:'20%',
	},{
		key: '2',
		xmmc: '	江津区祥福镇香山村高标准农田建设项目',
		xmfzr: '李然',
		xmghzlwbcd: '80%',
		xmys:'220',
		xmkssj:"2019-04-16",
		xmjssj:"2019-12-30",
		xmjd:'85%',
		xmjd2:'15%'
	},{
		key: '3',
		xmmc: '江津区龙王镇清平村高标准农田建设项目',
		xmfzr: '张田',
		xmghzlwbcd: '80%',
		xmys:'220',
		xmkssj:"2019-04-16",
		xmjssj:"2019-12-30",
		xmjd:'70%',
		xmjd2:'10%'
	}]

class Ghjd extends Component {
	constructor(props){
		super(props);
		this.state={
			size: 'default',
			visible:false,
			productname:"",
			xmfzr:"",
			xmjd:""
		}
	};
	showModal=(text, record, index)=>{
		console.log(record)
		this.setState({
			visible:true,
			productname:record.xmmc,
			xmfzr:record.xmfzr,
			xmjd:record.xmjd
		})
	}
	hide=()=>{
		this.setState({
			visible:false
		})
	}
    render() {
    	const columns=[{
			title: '项目名称',
			dataIndex: 'xmmc'
		}, {
			title: '项目负责人',
			dataIndex: 'xmfzr',
		},  {
			title: '项目预算(万元)',
			dataIndex: 'xmys',
		}, {
			title: '更多详情',
			dataIndex: 'cz',
			render: (text, record, index) => {
				return (<div style={{display:'flex',alignItems:'center'}} onClick={this.showModal.bind(this,text, record, index)}><Icon type="eye" /></div>)
			}
		}, {
			title: '项目进度',
			dataIndex: 'cz2',
			render: (text, record, index) => {
				return (<div style={{display:'flex',alignItems:'center',height:'20px'}} className='out'>
					<div className='gh' style={{width:record.xmjd}}>项目进度：{record.xmjd}</div>
				</div>)
			}
		}]
        return (
            <div style={{height: '100%'}} className='projectManage_projectPlan_ghjd'>
                <div className='time'>
					<div className='time'>
						<span>项目时间：</span><RangePicker/>
					</div>
				</div>
                <div className='content'>
                     <div className="xmgh-table">
	                    <Table
	                        columns={columns}
	                        dataSource={data}
	                        bordered
	                        pagination={{pageSize:10}}
	                    />
	                </div>
                </div>
				<Modal className='ghjdBox'
					   title={this.state.productname}
					   style={{ top: 64}}
					   visible={this.state.visible}
					   onOk={this.hide}
					   onCancel={this.hide}>
					<div className='ghjdBox'>
						<div className='box'>
							<div className='left'>
								<ul>
									<li><span className='title'>项目负责人：</span><span className='value'>{this.state.xmfzr}</span></li>
									<li><span className='title'>计划开始时间：</span><span className='value'>2018/12/02</span></li>
									<li><span className='title'>实际开始时间：</span><span className='value'>2018/12/12</span></li>
								</ul>
							</div>
							<div className='right'>
								<ul>
									<li><span className='title'>项目状态：</span><span className='value'>进行中</span></li>
									<li><span className='title'>计划结束时间：</span><span className='value'>2019/01/12</span></li>
									<li><span className='title'>实际结束时间：</span><span className='value'>2018/01/22</span></li>
								</ul>
							</div>
						</div>
						<div className='out'>
							<div style={{display:'flex',alignItems:'center',height:'20px'}} className='out'>
								<div className='gh' style={{width:'50%',marginTop:'10px'}}>项目进度：{this.state.xmjd}</div>
							</div>
						</div>
						<p><span>相关人：</span><span>{this.state.xmfzr}</span><span>{this.state.xmfzr}</span><span>{this.state.xmfzr}</span><span>{this.state.xmfzr}</span></p>
					</div>
				</Modal>
            </div>
        );
    }
}
export default withRouter(Ghjd);