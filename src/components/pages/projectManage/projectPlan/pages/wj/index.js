import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import './index.less'
import {Table, Input, Button, Icon} from 'antd';


import zip from './img/zip.png';
import ppt from './img/ppt.png';
import excel from './img/excel.png';
import pdf from './img/pdf.png';
import files from './img/files.png';
import word from './img/word.png';
import pic from './img/pic.png';
class Wj extends Component {
    constructor(props) {
        super(props);
        this.state = {
            columns:[ {
                title: '类型',
                dataIndex: 'type',
                key: 'type',
                width:'55px',
                render: (text, record, index) => {
                    return (
                        <img src={record.file} style={{ width: '40px', marginRight: '5px' }} />
                    )
                }
            }, {
                title:'文件名称',
                dataIndex:'name',
            },{
                title:'上传时间',
                dataIndex:'scsj',
            }],
            columns1:[ {
                title: '类型',
                dataIndex: 'type',
                key: 'type',
                width:'55px',
                render: (text, record, index) => {
                    return (
                        <img src={record.file} style={{ width: '40px', marginRight: '5px' }} />
                    )
                }
            }, {
                title:'文件名称',
                dataIndex:'name',
            },{
                title:'上传时间',
                dataIndex:'scsj',
            }],
            data:[{
                key:'1',
                name:'高标准农田项目竣工图.png',
                scsj:'2018-02-01',
                file:pic
            },{
                key:'2',
                name:'高标注农田建设批复.pdf',
                scsj:'2018-02-01',
                file:pdf
            },{
                key:'3',
                name:'项目规划设计图.dwg',
                scsj:'2018-02-01',
                file:pdf
            },{
                key:'4',
                name:'项目立项和设计文件',
                scsj:'2018-02-01',
                file:files
            },{
                key:'5',
                name:'项目验收和管理文件',
                scsj:'2018-02-01',
                file:files
            },{
                key:'6',
                name:'项目工程施工文件',
                scsj:'2018-02-01',
                file:files
            },{
                key:'7',
                name:'工程质量控制与施工质量验收成果',
                scsj:'2018-02-01',
                file:files
            },{
                key:'8',
                name:'工程质量控制与施工质量验收成果',
                scsj:'2018-02-01',
                file:files
            }],

            data1:[{
                key:'1',
                name:'验收认定申请表.xls',
                scsj:'2018-02-01',
                file:excel
            },{
                key:'2',
                name:'建设任务和投资完成情况.docx',
                scsj:'2018-02-01',
                file:word
            },{
                key:'3',
                name:'耕地质量检测报告.doc',
                scsj:'2018-02-01',
                file:word
            },{
                key:'4',
                name:'工程运行管护情况.doc',
                scsj:'2018-02-01',
                file:word
            }],
            visible:'block',
            // visibleWord:'none'
        };
    }
     visibleWord = 'none'
    test = (event) => {
        this.visibleWord ='block'
        this.setState({
            visible:'none',
        })
    }
    back = () =>{ 
        this.visibleWord = 'none'
        this.setState({
            visible:'block',
          
        })
    }
    componentDidMount = () =>{
    }
    render() {
        return (
            <div>
                <div className='table_first' style={{display:this.state.visible}}>
                   <Table
                       onRow={(record) => {
                           return {
                               onDoubleClick: (event) => {this.test(event)},
                           };
                       }}
			           columns={this.state.columns}
	                   dataSource={this.state.data}
                       bordered
                       rowSelection={rowSelection}
                       pagination={{pageSize:6}}
			       />
                </div>
                <div className='table_second' style={{display:this.visibleWord}}>
                    <div className="close2" style={{backgroundColor:'#F1F1F1',paddingLeft:'10px'}} onClick={this.back.bind(this)}>返回上一级</div>
                    <Table
			            columns={this.state.columns1}
	                    dataSource={this.state.data1}
                        bordered
                        rowSelection={rowSelection}
			         />
                </div>
            </div>
            
        );
    }

}
const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: record => ({
      disabled: record.name === 'Disabled User', // Column configuration not to be checked
      name: record.name,
    }),
  };
export default withRouter(Wj);