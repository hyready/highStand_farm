import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import './index.less'
import {
    Table, Input, Button, Icon,
} from 'antd';
import pdf from '../pdf.png';
import files from '../files.png';
import word from '../word.png';

import download from '../download.png';
const fileList = [
    {
        key: '1',
        type: 'word',
        name: '【合同模板】打印机租赁合同.docx',
        size: '19.9k',
        source: '刘世强',
        date: '2018-05-10',
    }, {
        key: '2',
        type: 'word',
        name: '【合同模板】合同补充协议.docx',
        size: '14.8k',
        source: '刘世强',
        date: '2018-05-24',
    }, {
        key: '3',
        type: 'word',
        name: '【合同模板】两区划定合同.docx',
        size: '78k',
        source: '刘世强',
        date: '2018-09-03',
    }, {
        key: '4',
        type: 'word',
        name: '【合同模板】农村土地承包经营权确权登记颁证技术服务合同.docx',
        size: '28.9k',
        source: '刘世强',
        date: '2018-04-02',
    }, {
        key: '5',
        type: 'word',
        name: '【合同模板】软件销售合同（CS）.docx',
        size: '35.9k',
        source: '刘世强',
        date: '2018-04-02',
    }, {
        key: '6',
        type: 'word',
        name: '【合同模板】项目调研咨询服务合同（确定项目合作）2018.5.28.docx',
        size: '23.1',
        source: '刘世强',
        date: '2018-06-26',
    }, {
        key: '7',
        type: 'word',
        name: '【合同模板】项目调研咨询框架服务合同（报备项目合作）2018.5.28.docx',
        size: '20.5k',
        source: '刘世强',
        date: '2018-05-10',
    },
    {
        key: '8',
        type: 'word',
        name: '【合同模板】硬件采购合同.docx',
        size: '22.8k',
        source: '刘世强',
        date: '2018-05-10',
    },
    {
        key: '9',
        type: 'word',
        name: '【鱼鳞图】介绍信模板.docx',
        size: '14.5k',
        source: '刘世强',
        date: '2018-08-22',
    },
];
const data = [
    {
    key: '1',
    name: '标准规程',
    permission: '仅浏览',
    admin: '所有人',
    date: '2017-12-15',
},
{
    key: '2',
    name: '规划设计文件',
    permission: '仅浏览',
    admin: '王思斌',
    date: '2019-02-26',
},
{
    key: '3',
    name: '验收文件',
    permission: '仅浏览',
    admin: '刘世强',
    date: '2018-08-30',
},{
        key: '4',
        name: '政策文件',
        permission: '仅浏览',
        admin: '王思斌',
        date: '2019-03-24',
    },{
    key: '5',
    name: '其他文件',
    permission: '仅浏览',
    admin: '刘世强',
    date: '2017-11-15',
}];
const data2 = [
    {
        key: '1',
        name: 'GB 5084-2005 农田灌溉水质标准.pdf',
        permission: '仅浏览',
        admin: '所有人',
        date: '2017-12-15',
        file:pdf
    },
    {
        key: '2',
        name: 'GB 15618-1995 土壤环境质量标准.doc',
        permission: '仅浏览',
        admin: '王思斌',
        date: '2019-02-26',
        file:word
    },
    {
        key: '3',
        name: 'GB/T 28405-2012 农用地定级规程.pdf',
        permission: '仅浏览',
        admin: '刘世强',
        date: '2018-08-30',
        file:pdf
    },{
        key: '4',
        name: 'GB/T 28407-2012 农用地质量分等规程.docx',
        permission: '仅浏览',
        admin: '王思斌',
        date: '2019-03-24',
        file:word
    },{
        key: '5',
        name: 'GB/T 30600-2014 高标准农田建设 通则.pdf',
        permission: '仅浏览',
        admin: '刘世强',
        date: '2017-11-15',
        file:pdf
    },
    {
        key: '6',
        name: 'GB 50026-2017 工程测量规范.pdf',
        permission: '仅浏览',
        admin: '王思斌',
        date: '2019-02-26',
        file:pdf
    }];
class FileList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText: '',
           show:'none',
        };
    }
    getColumnSearchProps = (dataIndex, name) => ({
        filterDropdown: ({
            setSelectedKeys, selectedKeys, confirm, clearFilters,
        }) => (
            <div style={{ padding:'25px',backgroundColor:'white'}}>
                    <Input
                        ref={node => { this.searchInput = node; }}
                        placeholder={`搜索${name}`}
                        value={selectedKeys[0]}
                        onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                        onPressEnter={() => this.handleSearch(selectedKeys, confirm)}
                        style={{ width: 188, marginBottom: 8, display: 'block' }}
                    />
                    <Button
                        type="primary"
                        onClick={() => this.handleSearch(selectedKeys, confirm)}
                        icon="search"
                        size="small"
                        style={{ width: 90, marginRight: 8 }}
                    >
                        搜索
            </Button>
                    <Button
                        onClick={() => this.handleReset(clearFilters)}
                        size="small"
                        style={{ width: 90 }}
                    >
                        重置
            </Button>
                </div>
            ),
        filterIcon: filtered => <Icon type="search" style={{ color: filtered ? '#1890ff' : undefined }} />,
        onFilter: (value, record) => record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
        onFilterDropdownVisibleChange: (visible) => {
            if (visible) {
                setTimeout(() => this.searchInput.select());
            }
        }
    })

    handleSearch = (selectedKeys, confirm) => {
        confirm();
        this.setState({ searchText: selectedKeys[0] });
    }
    getColumnSearchProps = (dataIndex, name) => ({
        filterDropdown: ({
                             setSelectedKeys, selectedKeys, confirm, clearFilters,
                         }) => (
            <div style={{ padding:'25px',backgroundColor:'white'}}>
                <Input
                    ref={node => { this.searchInput = node; }}
                    placeholder={`搜索${name}`}
                    value={selectedKeys[0]}
                    onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => this.handleSearch(selectedKeys, confirm)}
                    style={{ width: 188, marginBottom: 8, display: 'block' }}
                />
                <Button
                    type="primary"
                    onClick={() => this.handleSearch(selectedKeys, confirm)}
                    icon="search"
                    size="small"
                    style={{ width: 90, marginRight: 8 }}
                >
                    搜索
                </Button>
                <Button
                    onClick={() => this.handleReset(clearFilters)}
                    size="small"
                    style={{ width: 90 }}
                >
                    重置
                </Button>
            </div>
        ),
        filterIcon: filtered => <Icon type="search" style={{ color: filtered ? '#1890ff' : undefined }} />,
        onFilter: (value, record) => record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
        onFilterDropdownVisibleChange: (visible) => {
            if (visible) {
                setTimeout(() => this.searchInput.select());
            }
        }
    })

    handleSearch = (selectedKeys, confirm) => {
        confirm();
        this.setState({ searchText: selectedKeys[0] });
    }

    handleReset = (clearFilters) => {
        clearFilters();
        this.setState({ searchText: '' });
    }

    handleReset = (clearFilters) => {
        clearFilters();
        this.setState({ searchText: '' });
    }
    test = (event)=>{
        //if(event.currentTarget.getAttribute ('data-row-key')==1){
            this.setState({ show:'block',});
//      }else{
//          this.setState({ show:'none',});
//      }
    }
    render() {
        const columns2 = [
            {
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
                title: '名称',
                dataIndex: 'name',
                key: 'name',
                width: '400px',
                ...this.getColumnSearchProps('name', '名称'),
                render: (text, record, index) => {
                    return (<div style={{display:'flex',alignItems:'center'}}>
                            <div style={{flexGrow:1,width:0}}>{text}</div>
                            <img src={download} style={{ width: '30px', height:'30px',marginRight: '5px' ,cursor:'pointer'}} />
                        </div>
                    )
                }
            }, {
                title: '大小',
                dataIndex: 'size',
                key: 'size',

            }, {
                title: '来源',
                dataIndex: 'source',
                key: 'source',

            },{
                title: '时间',
                dataIndex: 'date',
                key: 'date',

            },
        ];
        const columns = [
           {
            title: '名称',
            dataIndex: 'name',
            key: 'name',
            width: '40%',
            ...this.getColumnSearchProps('name', '名称'),
            render:(text, record, index)=>{
                return (
                   <div>
                       <img src={files} style={{width:'40px',marginRight:'5px'}}/>
                       <span>{text}</span>
                   </div> 
                )
            }
        }, {
            title: '权限',
            dataIndex: 'permission',
            key: 'permission',
            width: '20%',
            filters: [{
                text: '仅浏览',
                value: '仅浏览',
            }, {
                text: '可编辑',
                value: '可编辑',
            }],
            filterMultiple: false,
            onFilter: (value, record) => record.permission.indexOf(value) === 0,

        }, {
            title: '管理员',
            dataIndex: 'admin',
            key: 'admin',
            width: '20%',
            ...this.getColumnSearchProps('admin', '管理员'),
        }, {
            title: '时间',
            dataIndex: 'date',
            key: 'date'
        }];
        return (<div className='achivesList'>
            <div className='tableBox'>
                <Table onRow={(record) => {
                    return {
                        onClick: (event) => {this.test(event)},
                    };
                }} columns={columns} dataSource={data} padding={30} pagination={{pageSize:8}}/>
            </div>
            <div className='detailList' style={{display:this.state.show}}>
                <p>标准规程 <span className="close" onClick={this.close.bind(this)}>关闭</span></p>
                <Table
                    columns={columns2} dataSource={data2} padding={30} pagination={{pageSize:8}}
                />
            </div>
        </div>);
    }
	close=()=>{
		this.setState({
			show:"none"
		})
	}
}
export default withRouter(FileList);