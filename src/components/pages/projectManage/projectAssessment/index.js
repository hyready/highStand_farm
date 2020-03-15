import React, {Component} from "react";
import {withRouter} from "react-router-dom";
import { Table,Icon,Button,Input,InputNumber, Popconfirm, Form,Modal,Divider, Tag ,Select ,message,DatePicker} from 'antd';
import ReactEcharts from 'echarts-for-react';
import {connect} from "react-redux";
import { FetchHelper } from "freesia-core";
import './index.less';
import FormItem from "antd/lib/form/FormItem";
import Table1 from '../../table'
import Weight from '../../weight'
import Evaluate from '../../evaluate'
import Report from "../../report";
// import ProjectDetail from './projectDetail_pj/index'
import ProjectDetail from '../projectDetail/index'
const Option = Select.Option;
// const title=()=>{
// 	return (<div><Icon type="book" /><span style={{marginLeft:3+'px'}}>数据列表</span></div>)
// }
class projectAssessment extends Component {
	constructor(props){
		super(props);
		this.state={
			data:[],
      columns: [{
        title: '项目编号',
        dataIndex: 'xmbh'
    }, {
        title: '项目名称',
        dataIndex: 'xmmc',
    }, {
        title: '项目状态',
        dataIndex: 'xmzt',
    }, {
        title: '项目建设规模(公顷)',
        dataIndex: 'xmjsgm',
    }, {
        title: '项目总投资(万元)',
        dataIndex: 'xmztz',
    }, {
        title: '计划开始时间',     //后台没有返回值
        dataIndex: 'kssj',
    }, {
        title: '计划结束时间',       //后台没有返回值
        dataIndex: 'jssj',
    }, {
            title: '操作',
            dataIndex: 'cz',
            render:(text,record,index)=>(
                <div style={{color: '#1ABC9C',width:'100px'}}>
                    <span className='yd' data-data={JSON.stringify(record)} data-index={index} onClick={this.showDetail.bind(this,record)}>详情</span>
                    <span> </span>
                    <span className='yd' data-data={JSON.stringify(record)} onClick={this.showEvaluate.bind(this,record)}>评价</span>
                </div>
            ),
        }
    ],
        pro:[],
        check:'',
        aa:[],
        visible1:false,
        visible2:false,
        visible3:false,
        xmid:'',
        pjdata:{},
        showDetail:'none',
        showList:'flex',
        projectDetail:'',
        pjmodal:'',
        kssj:'',
        jssj:'',
        xmname:''
		}
  }
  state = { visible: false }
  showDetail= (record) => {
      this.setState({
        showDetail:'flex',
        showList:'none',
        projectDetail:<ProjectDetail showList = {this.showList.bind(this)} data={record} pj={true}/>
    })
  }
  showList (){
    this.setState({
        showDetail:'none',
        showList:'flex',
        projectDetail:''
    })
}
  componentDidMount(){
    this.getData()
  }
  getData(){
    var _this = this
    FetchHelper.postJson('/api/project/getTdzhzzList?size=500',{xmzt:'已完工'}).then(resp => {
      if(resp.status === 200){
              _this.setState({
                  data:resp.data.list
              })
      }
  })
  }
	showModal = (e) => {
    this.setState({
      visible: true,
    });
  }
  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }
  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }

  //权重
  showWeight = (e) => {
    this.setState({
      visible1: true,
    });
  }
  handleOk1 = (e) => {
    console.log(e);
    this.setState({
      visible1: false,
    });
  }
  handleCancel1 = (e) => {
    console.log(e);
    this.setState({
      visible1: false,
    });
  }

  //评价
  showEvaluate = (record) => {
    var _this = this
    FetchHelper.postJson('/api/project/assessment/get?xmid='+record.id).then(resp => {
      if(resp.status === 200){
              _this.setState({
                visible2: true,
                xmid:record.id,
                pjdata:resp.data,
                xmname:record,
                pjmodal:<Modal className='pj'
                style={{ top: 64}}
                    title="项目评价"
                    visible={true}
                    onOk={this.handleOk2}
                    onCancel={this.handleCancel2}
                    okText='确认并生成报告'
                    footer={[
                      // 定义右下角 按钮的地方 可根据需要使用 一个或者 2个按钮
                      <Button key="back" onClick={this.handleCancel2}>取消</Button>,
                      <Button key="submit" type="primary" onClick={this.handleOkSave}>保存</Button>, 
                      <Button key="submit" type="primary" onClick={this.handleOk2}>保存并生成报告</Button>,           
                    ]}
                  >
                 
         <div style={{width:'50%'}} className='qzleft'>
            <table className='table_pro' style={{fontWeight:'bold',color:'black'}}>
          <tr  style={{paddingRight:"60px"}}>
            <td style={{width:'14.95%'}}>一级指标</td>
            <td style={{width:'27.9%'}}>二级指标</td>
            <td>三级指标</td>
          </tr>
        </table>
        <Evaluate onRef={this.onRef} pjdata={resp.data}></Evaluate>
          </div>
          <div className='zhanshi'>
          <div className='qzright'>
            <div className='r_top'>
              <p style={{marginTop:'10px',marginLeft:'10px',fontSize:'14px',width:'91%'}}>工程概况</p>
              <span className='close' style={{marginTop:'-35px',marginRight:'10px'}} onClick={this.close.bind(this)}>返回</span>
              <div>
                <span>规划面积：200h㎡</span>
                <span>平整面积：90h㎡</span>
              </div>
            <div>
                <span>土地及耕作层改造：33h㎡</span>
                <span>预算总额：27.38 万元</span>
            </div>
            </div>
            <div className='r_bottom'>
              <div className='r_l'>
              <Select defaultValue="效果对比" style={{ width: '100%' }} onChange={this.handleChange.bind(this)}>
                     <Option value="效果对比">效果对比</Option>
                     <Option value="施工方案">施工方案</Option>
                     <Option value="设计图纸">设计图纸</Option>
                </Select>
                <ul>
                  <li>单体工程1#</li>
                  <li>单体工程2#</li>
                  <li>单体工程3#</li>
                  <li>单体工程4#</li>
                  <li>单体工程5#</li>
                  <li>单体工程6#</li>
                  <li>单体工程3#</li>
                  <li>单体工程4#</li>
                  <li>单体工程5#</li>
                  <li>单体工程6#</li>
                </ul>
              </div>
              <div className='r_r'>
                  <div>
                    <p>平整前</p>
                    <div className='img1'></div>
                  </div>
                  <div>
                    <p>平整后</p>
                    <div className='img2'></div>
                  </div>
              </div>
            </div>

          </div>
          </div>
      </Modal>
              })
      }
    })
  }
  handleOk2 = (e) => {
    this.setState({
      visible2: false,
      visible3:true,
      pjmodal:''
    });
  }
  handleCancel2 = (e) => {
    console.log(e);
    this.setState({
      visible2: false,
      pjmodal:''
    });
  }

    //报告
    handleOk3 = (e) => {
      var _this = this
      this.child.state.item
      FetchHelper.postJson('/api/project/assessment/add?xmid='+this.state.xmid,this.child.state.item).then(resp => {
        if(resp.status == 200) {
          message.success('打分成功！')
            _this.setState({
              visible3: false,
            });
        }
    })
    .catch(function (error) {
        message.error('参数错误，请重新填写')
      });
      
    }
    handleCancel3 = (e) => {
      console.log(e);
      this.setState({
        visible3: false,
      });
    }

  checkname = (e) => {
    // this.state.check.name = e.target.value
    this.setState({
      check: e.target.value,
    });
  }

  checkid = (e) => {
    this.state.check.id = e.target.value
    this.setState({
      visible: false,
    });
  }

  checked = (e) => {
    var data = this.state.data
    var id = this.state.check.id
    for(var i=0 ; i<data.length ; i++){
      if(data[i].id.indexOf(id)>=0){
        this.state.aa.push(data[i])
      }
    }
    this.state.data = 0
    this.setState({
      visible: false,
    });
  }
  handleOkSave = () =>{
    var _this = this
    this.child.state.item
    _this.child.state.item.id = _this.state.xmid
    FetchHelper.postJson('/api/project/assessment/add?xmid='+_this.state.xmid,_this.child.state.item).then(resp => {
      if(resp.status == 200) {
          _this.setState({
            visible2: false,
            pjmodal:''
          });
      }
  })
  .catch(function (error) {
      message.error('参数错误，请重新填写')
    });
  }
  handleChange = (e) =>{

  }
  close = () =>{
    document.querySelector('.a').setAttribute('class','zhanshi')
  }
  onRef = (ref) => {
    this.child = ref
    var arr = Object.getOwnPropertyNames(ref.state.item)
    if(arr.length != 0){
       document.querySelectorAll('.pj input').forEach(function (input) {
            input.setAttribute('disabled', 'disabled')
        })
    }
  }
  checkdate(e){
    var name = e.target.name
    var value = e.target.value
    if(name == 'kssj'){
      this.setState({
        kssj:value
      })
    }else if(name == 'jssj'){
      this.setState({
        jssj:value
      })
    }
  }
  check(){
    var _this = this
    _this.state.kssj-_this.state.jssj
    
    var kssjc = (new Date(_this.state.kssj)).valueOf()
    var jssjc = (new Date(_this.state.jssj)).valueOf()
    if((jssjc-kssjc)<0&&jssjc&&kssjc){
      message.warn('结束时间必须大于开始时间，请重新选择！')
    }else{
      FetchHelper.postJson('/api/project/getTdzhzzList?size=500&key='+_this.state.check,{xmzt:'已完工',kssj:_this.state.kssj,jssj:_this.state.jssj}).then(resp => {
        if(resp.status === 200){
                _this.setState({
                    data:resp.data.list
                })
        }
    })
    }
    
  }
    render() {
        return (
          <div className="projectManage_projectAssessment">
          <div className='detail' style={{display:this.state.showDetail}}>
                {this.state.projectDetail}
            
                </div>
          <div className='list'>
          {/* <div className="yhlb-header">
	    			<Icon type="book" />
	    			<span>
	    				筛选查询
	    			</span>
	    		</div> */}
			    
			    <div className="yhlb-search" style={{marginTop:'20px'}}>
			    	<span>项目名称:</span>
			    	<div className="example-input">
					    <Input placeholder="请输入项目名称" value={this.state.check} onChange={this.checkname.bind(this)}/>
				    </div>
			    	<span style={{marginLeft:'20px',marginRight:'5px'}}>项目时间:</span>
			    	<div className="example-input">
              <Input type='date' value={this.state.kssj} name='kssj' onChange={this.checkdate.bind(this)}/>
              {/* <DatePicker.RangePicker onChange={this.datacheck.bind(this)}/> */}
				    </div>
            <span>-</span>
            <div className="example-input">
              <Input type='date' value={this.state.jssj} name='jssj' onChange={this.checkdate.bind(this)}/>
              {/* <DatePicker.RangePicker onChange={this.datacheck.bind(this)}/> */}
				    </div>
			    	<Button type="primary" className="yhlb-cx" onClick={this.check.bind(this)}>查询</Button>
			    </div>
           
                <Table
				    columns={this.state.columns}
				    dataSource={this.state.data?this.state.data : this.state.aa}
				    bordered
		            // title={title}
		            rowClassName='aaa'
		            pagination={{pageSize:8}}
				/>
          </div>
          {this.state.pjmodal}
			{/*详情*/}
             <Modal className='qzsz'
                    style={{ top: 64}}
                            title="详情"
                            visible={this.state.visible}
                            onOk={this.handleOk}
                            onCancel={this.handleCancel}
                          > 
                <Table1></Table1>
              </Modal>
              <Modal width='70%'
                     style={{ top: 64}}
                            title="报告"
                            visible={this.state.visible3}
                            onOk={this.handleOk3}
                            onCancel={this.handleCancel3}
                            okText='打印'
                            cancelText='关闭'
                          > 
                <Report data={this.state.xmname}></Report>
              </Modal>
              {/* 权重 */}
              <Modal className='qzsz' 
                     style={{ top: 64}}
                            title="设置权重"
                            visible={this.state.visible1}
                            onOk={this.handleOk1}
                            onCancel={this.handleCancel1}
                          >
                   <table className='table_pro' style={{fontWeight:'bold',color:'black'}}>
                      <tr>
                        <td style={{width:'14.5%'}}>一级指标</td>
                        <td style={{width:'34.6%'}}>二级指标</td>
                        <td>三级指标</td>
                      </tr>
                    </table>
                    <Weight></Weight>

              </Modal>
              {/* <Modal className='pj'
                            title="项目评价"
                            visible={this.state.visible2}
                            onOk={this.handleOk2}
                            onCancel={this.handleCancel2}
                            okText='确认并生成报告'
                > */}
              	{/*评价*/}
                 
          </div>
        );
    }
}
export default withRouter(projectAssessment);