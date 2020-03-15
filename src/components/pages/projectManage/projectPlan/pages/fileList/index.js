import React, {Component} from "react";
import {withRouter} from "react-router-dom";
import './index.less'
import { Table, Input, Button, Icon} from 'antd';
import zip from './img/zip.png';
import ppt from './img/ppt.png';
import excel from './img/excel.png';
import pdf from './img/pdf.png';
import files from './img/files.png';
import word from './img/word.png';
class FileList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            columns: [{
                title: '文件名称',
                dataIndex: 'name',
                render: (text, record, index) => {
                    return (
                        <div>
                            <img src={record.file} style={{width: '40px', marginRight: '5px'}}/>
                            <span>{text}</span>
                        </div>
                    )
                }
            }, {
                title: '操作',
                dataIndex: 'scsj',
                render: (text, record, index) => {
                    return (
                        <div>
                            <a>{text}</a>
                        </div>
                    )
                }
            }],
            data: [{
                key: '1',
                name: '文件1',
                file: files,
                scsj: '查看',
            }, {
                key: '2',
                name: '文件2',
                file: pdf,
                scsj: '查看'
            }, {
                key: '3',
                name: '文件1',
                file: word,
                scsj: '查看'
            }, {
                key: '4',
                name: '文件2',
                file: zip,
                scsj: '查看'
            }, {
                key: '5',
                name: '文件1',
                file: excel,
                scsj: '查看'
            }, {
                key: '6',
                name: '文件2',
                file: ppt,
                scsj: '查看'
            }]
        };
    }
    render() {
        return (
            <Table onRow={(record) => {
                return {
                    onDoubleClick: (event) => {
                    },
                };
            }}
                   columns={this.state.columns}
                   dataSource={this.state.data}
                   bordered
                   rowSelection={rowSelection}
                   
            />
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
export default withRouter(FileList);