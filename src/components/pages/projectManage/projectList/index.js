import React, {Component} from "react";
import {withRouter} from "react-router-dom";
import {Table, Icon, Button, Input, InputNumber, Popconfirm, Form, Modal, Divider, Tag , Radio ,Upload,message,Select} from 'antd';
import ReactEcharts from 'echarts-for-react';
import {connect} from "react-redux";
import {FetchHelper} from "freesia-core";
import reqwest from 'reqwest';
import Table1 from '../../table'
import Add_edit_xmzl from '../../zj/add_edit_xmzl';
import 'freesia-tgis/lib/css/index.less'
import format, {MapControl} from 'freesia-tgis';
import ProjectDetail from '../projectDetail/index'
import './index.less';
import FormItem from "antd/lib/form/FormItem";
import {ArcGISQuery} from 'freesia-tgis'
import { runInThisContext } from "vm";
import XmxlJson from './xmlxz'

var mapControl;
const { Dragger } = Upload;
const { Option } = Select
const title=()=>{
    // return (
    // <div><Icon type="book" /><span style={{marginLeft:3+'px'}}>数据列表</span></div>
        // )
}
const checkxm = {}
const xmxlz = XmxlJson

class projectList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            detailDataEdit:null,
            detailData:null,
            showDetail:'none',
            showList:'flex',
            adddata:{},
            data: [],
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
                            <span className='yd' data-data={JSON.stringify(record)} data-index={index} onClick={this.showModal}>详情</span>
                            <span> </span>
                            <span className='yd' data-data={JSON.stringify(record)} onClick={this.editXm}>修改</span>
                        </div>
                    ),
                }
            ],
            pro: [],
            check: [],
            aa: [],
            add:'',
            filename:'',
            projectDetail:'',
            filelist:{},
            Add_edit:'',
            title:'',
            checkradio:0
        }
    }
    
    componentDidMount() {
        var _this = this
        FetchHelper.postJson('/api/project/getTdzhzzList?size=500',{}).then(resp => {
            if(resp.status === 200){
                    _this.setState({
                        data:resp.data.list
                    })
            }
        })
    }
    state = {visible: false,mapVisible:false,importVisible:false,importpl:false}
    onRef = (ref) => {
        this.child = ref
    }
    showModal = (e) => {
        this.setState({
            showDetail:'flex',
            showList:'none',
            detailData:JSON.parse(e.currentTarget.dataset['data']),
            projectDetail:<ProjectDetail showList = {this.showList.bind(this)} data = {JSON.parse(e.currentTarget.dataset['data'])}/>
        })
         return
         this.setState({
             visible: true,
         });
 
     }
    addXm=()=>{
        debugger
        var data = {}
            this.setState({
                mapVisible: true,
                add:true,
                title:'新增项目',
                Add_edit:<Add_edit_xmzl add={true} onRef={this.onRef} data={data}></Add_edit_xmzl>
            });
        // this.showZj()
    }
    // showZj(){
    //     this.setState({
    //         // Add_edit:<Add_edit_xmzl add={true} onRef={this.onRef} detailDataEdit={data}></Add_edit_xmzl>
    //     });
    // }
    editXm=(e)=>{
        var data = JSON.parse(e.currentTarget.dataset['data'])
        if(data.xmzt == '已完工'){
            message.warn('项目已完工，请勿修改数据')
        }else{
            this.setState({
                // detailDataEdit:JSON.parse(e.currentTarget.dataset['data']),
                mapVisible: true,
                add:false,
                title:'修改',
                Add_edit:<Add_edit_xmzl add={false} onRef={this.onRef} data={JSON.parse(e.currentTarget.dataset['data'])}></Add_edit_xmzl>
            });
        }
    }
    showImport=()=>{
        this.setState({
            importpl: true,
        });
    }
    componentWillUnmount = () => {
        mapControl = null;
    }
    handleOk = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    }

    handlemapCancel = (e) => {
        console.log(e);
        this.setState({
            mapVisible: false,
            Add_edit:''
        });
    }
    handlemapOk = (e) => {
        var _this = this
        if(this.state.add){
            _this.child.state
            debugger
            FetchHelper.postJson('/api/project/addTdzhzz',_this.child.state.data).then(resp => {
                if(resp.status == 200) {
                    _this.child.clear()
                    _this.fresh()
                }
            })
            .catch(function (error) {
                message.error('参数错误，请重新填写')
              });
        }else{
            FetchHelper.postJson('/api/project/updateTdzhzz',_this.child.state.data).then(resp => {
                if(resp.status == 200) {
                    _this.child.clear()
                    _this.fresh()
                }
            })
            .catch(function (error) {
                message.error('参数错误，请重新填写')
              });
        }
        this.setState({
            mapVisible:false,
            Add_edit:''
        })
    }
    fresh (){
        var _this = this
        FetchHelper.postJson('/api/project/getTdzhzzList?size=500',{}).then(resp => {
            if(resp.status === 200){
                        _this.setState({
                            data:resp.data.list
                        })
            }
        })
    }
    handleCancel = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    }
    check = () =>{
        var _this = this
        debugger
        if(_this.state.check.redio){
            FetchHelper.postJson('/api/project/getTdzhzzList?size=500&key='+_this.state.check.name,{xmzt:_this.state.check.redio}).then(resp => {
                if(resp.status === 200){
                            _this.setState({
                                data:resp.data.list
                            })
                }
            })
        }else{
            FetchHelper.postJson('/api/project/getTdzhzzList?size=500&key='+_this.state.check.name,{}).then(resp => {
                if(resp.status === 200){
                            _this.setState({
                                data:resp.data.list
                            })
                }
            })
        }
        
    }
    checkname = (e) => {
        checkxm.name = e.target.value
        this.setState({
            check:checkxm,
            visible: false,
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
        for (var i = 0; i < data.length; i++) {
            if (data[i].id.indexOf(id) >= 0) {
                this.state.aa.push(data[i])
            }
        }
        this.state.data = 0
        this.setState({
            visible: false,
        });
    }
    onChangeRadio = (e) =>{
        debugger
        checkxm.redio = e.target.value
        if(checkxm.redio == 0){
            checkxm.redio = null
        }
        
        this.setState({
            check: checkxm,
            checkradio:e.target.value
          });
    }
    showList (){
        this.setState({
            showDetail:'none',
            showList:'flex',
            projectDetail:''
        })
    }
    handlemapOkpl= (e) =>{
        var _this = this
        var filewj = this.state.filelist
        var data = new FormData()
        //   fileaaa.map(function(filess){
            data.append('file', filewj);
        // })
        reqwest({
            url: '/api/project/import',
            method: 'post',
            processData: false,
            data: data,
            success: () => {
                _this.fresh()
                _this.setState({
                fileList1: [],
                importpl: false,
                filename:''
                });
              },
            error: () => {
                message.error('上传失败！')
            },
          });
    }
    handlemapCancelpl= (e) =>{
        this.setState({
            importpl:false,
        })  
    }
    trsc(file){
        this.setState({
            filename:file.name,
            filelist:file
        })  
        return false
    }
    render() {
        return (
            <div className="projectManage_projectList">
                <div className='detail' style={{display:this.state.showDetail}}>
                {this.state.projectDetail}
            
                </div>
                <div className='list' style={{display:this.state.showList}}>
                    {/* <div className="yhlb-header">
                        <Icon type="book"/>
                        <span>
        		    		筛选查询
        		    	</span>
                    </div> */}
                    <div className="yhlb-search" style={{marginTop:'20px'}}>
                        <span>项目名称: </span>
                        <div className="example-input">
                            <Input placeholder="请输入项目名称" value={this.state.check.name}
                                   onChange={this.checkname.bind(this)}/>
                        </div>
                        <span style={{marginLeft: '20px'}}>项目状态: </span>
                        <div className="example-input">
                        <Radio.Group onChange={this.onChangeRadio} value={this.state.checkradio}>
                            <Radio value={'规划中'}>规划中</Radio>
                            <Radio value={'建设中'}>建设中</Radio>
                            <Radio value={'已完工'}>已完工</Radio>
                            <Radio value={0}>不限</Radio>
                        </Radio.Group>
                        {/* <Select optionFilterProp="children" showSearch placeholder="请选择" className='selecta'
                                    filterOption={(input, option) =>
                                        option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                    } onChange={this.onChangeRadio.bind(this)} style={{width: 200}}>
                                {
                                    xmxlz.map((item, index) => (
                                        <Option value={item.name} key={index}>{item.name}</Option>
                                    ))
                                }
                            </Select> */}
                        </div>
                        <Button type="primary" className="yhlb-cx" onClick={this.check.bind(this)}>开始查询</Button>
                        <div className='example-input input_last'>
                            <Button type="primary" className='btn_last' onClick={this.addXm.bind(this)}>添加项目</Button>
                            <Button type="primary" className='btn_last' onClick={this.showImport.bind(this)}>批量导入项目</Button>
                        </div>
                    </div>
                    <div className='flex_1' style={{overflow:'auto'}}>
                        <Table
                            className='tables'
                            columns={this.state.columns}
                            dataSource={this.state.data ? this.state.data : this.state.aa}
                            bordered
                            title={title}
                            pagination={{pageSize:8}}
                        />
                    </div>
                    <Modal className='width70'
                           title="详情"
                           style={{ top: 64}}
                           visible={this.state.visible}
                           onOk={this.handleOk}
                           onCancel={this.handleCancel}>
                        <Table1></Table1>
                    </Modal>
                    <Modal className='mapBox'
                           title={this.state.title}
                           style={{ top: 64}}
                           visible={this.state.mapVisible}
                           onOk={this.handlemapOk}
                           onCancel={this.handlemapCancel}>
                          {/* <Add_edit_xmzl add={this.state.add} onRef={this.onRef} detailDataEdit={this.state.detailDataEdit}></Add_edit_xmzl> */}
                          {this.state.Add_edit}
                    </Modal>
                    <Modal className=''
                           title="批量导入项目"
                           style={{ top: 64}}
                           visible={this.state.importpl}
                           onOk={this.handlemapOkpl}
                           onCancel={this.handlemapCancelpl}>
                          <div className='main'>
                              <Upload.Dragger 
                                multiple={false}
                                name='file'
                                beforeUpload={this.trsc.bind(this)}
                                showUploadList={false}
                              >
                                  <p className="ant-upload-drag-icon">
                                      <Icon type="inbox" />
                                  </p>
                                  <p className="ant-upload-text">单击或拖动文件到此区域上传</p>
                                  <p className="ant-upload-hint">
                                      支持单个或批量文件上传上传
                                  </p>
                              </Upload.Dragger>
                          </div>
                          <div>{this.state.filename}</div>
                        </Modal>
                        </div>
            </div>
        );
    }
}
export default withRouter(projectList);