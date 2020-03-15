import React, {Component} from "react";
import {Route, Switch, withRouter} from "react-router-dom";
import {Table, Icon, Button, Input, InputNumber, Popconfirm, Form, Modal, Divider, Tag , Radio ,Upload ,message } from 'antd';import './index.less';
import FetchHelper1 from "../../../../../framework/fetch-helper";
import {FetchHelper} from "freesia-core";
import reqwest from 'reqwest';
import pdf from "../../../archivesManage/pdf.png";
import files from "../../../archivesManage/files.png";
import word from "../../../archivesManage/word.png";
import excel from "../../../archivesManage/excel.png";
import pic from "../../../archivesManage/pic.png";
import ppt from "../../../archivesManage/ppt.png";
import zip from "../../../archivesManage/zip.png";
import download from "../../../archivesManage/download.png";
import { func } from "prop-types";
const { Dragger } = Upload
class Archives extends React.Component {
    constructor(props) {
        super(props);
        var me  = this;
        this.selects = [];
        this.parentId =0;
        this.state = {
        
            visible_1: false,
            visible_2: false,
            visible_3: false,
            currentMenu: decodeURI(this.props.match.params.xmmc).split('/')[decodeURI(this.props.match.params.xmmc).split('/').length - 1],
            columns2: [
                {
                    title: '类型',
                    dataIndex: 'type',
                    key: 'type',
                    width: '150px',
                    render: (text, record, index) => {
                    
                        return (
                            <img onDoubleClick={this.intoFiles.bind(this,record)} data-text={record.mc} data-t='43' data-pid={record.pid||0} src={record.type}
                                 style={{width: '40px', marginRight: '5px'}}/>
                        )
                    }
                }, {
                    title: '文件名称',
                    dataIndex: 'mc',
                    key: 'mc',
                }, {
                    title: '上传时间',
                    dataIndex: 'sj',
                    key: 'sj',

                }, {
                    title: '操作',
                    dataIndex: 'source',
                    key: 'source',
                    width: '150px',
                    render: (text, record, index) => {
                        return (<div style={{display: 'flex', alignItems: 'center'}}>
                                <a data-index={index} onClick={this.show_create.bind(this,record)}>重命名</a> 
                                <a style={{marginLeft: '20px'}} data-index={index} onClick={this.deleteWj.bind(this,record)}>删除</a>
                            </div>
                        )
                    }
                },
            ],
            data2:[],
            rowSelection: {
                onChange: (selectedRowKeys, selectedRows) => {
                    me.selects[selectedRows[0].pid || 0] = selectedRows
                    this.setState({
                        //selectedRows:selectedRows,
                        //selectedKeys:selectedRowKeys,
                    })
                },
                //selectedRowKeys:[],
                getCheckboxProps: record => {
                    debugger
                    return {
                        checked: record.mc == "返回.gif"?true:false
                    }
                }
            },
            //selectedRows:[],
            selectedKeys:[0,1],
            parentid:[],
            childid:[],
            renameDate:'',
            Wjjmc:'',
            add:1,
            deleteWjId:'',
            hisdata:[],
            fileList1:{},
            checkname:'',
            filename:'',
            wjtable:''
        }
    }
    getData = (e) => {
        var _this =this
        _this.state.data2
        var pid = e.target.dataset['pid'];
        var data= this.selects[pid];
        debugger
        while (e.target.nextElementSibling) {
            e.target.parentElement.removeChild(e.target.nextSibling)
        }
        var text = e.target.innerText
        if(text == _this.props.match.params.xmmc){
            _this.refresh()
        }else{
            text = text.substr(3)
            _this.state.hisdata.map(function(data){
                data.map(function(item){
                    if(item.mc == text){
                        _this.state.parentid
                        for(var i=_this.state.parentid.length-1;i>=0;i--){
                            if(_this.state.parentid[i] != item.id){
                                _this.state.parentid.splice(i,1)
                            }else{
                                _this.state.parentid.splice(i,1)
                                break
                            }
                        }
                        _this.refresh(item.id)
                    }
                })
                
            })
        }
    };
    intoFiles(bdata,e) {
        if(bdata.url == null){
            var a = document.querySelectorAll('.currentMenu a')
        if (a[a.length - 1].text.slice(3) == e.currentTarget.dataset['text'] && a.length > 1) {
            return
        }
        var parentid = this.state.parentid
        var childid = this.state.childid
        parentid.push(bdata.pid)
        childid.push(bdata.id)
        this.setState({
            parentid:parentid,
            childid:childid,
            selectedRows:[],
            selectedKeys:[]
        })
        var text = `<a data-pid = ${bdata.id}><span> / </span>${e.currentTarget.dataset['text']}</a>`;
        var currentMenu = document.querySelector('.currentMenu')
        currentMenu.innerHTML += text;
        this.refresh(this.state.childid[this.state.childid.length-1])
        }else{
            return false
        }
    
    }
    backWj(){
        debugger
        this.refresh(this.state.parentid.pop())
        // var currentMenu = document.querySelectorAll('.currentMenu')
        var a = document.querySelectorAll('.currentMenu a')
        if(a.length == 1){
            return
        }else{
           a[a.length-1].parentNode.removeChild(a[a.length-1]) 
        }
    }
    componentDidMount() {
        console.log('fdsfsfs', this.props.match.params.id)
        // {document.getElementById('listt').appendChild(this.state.text)}
        this.getList()
    }

    // componentWillReceiveProps(nextProps, nextContext) {
    //     debugger
    // }
    checkfile(e){
        var _this = this
        _this.state.data2
        _this.state.checkname
        var checkdata = []
        if(!_this.state.checkname){
            _this.refresh()
            return
        }else{
            FetchHelper.getJson('/common/file/searchFile',{
                xmId:_this.props.match.params.id,
                keyword:_this.state.checkname
            }).then(resp => {
                if(resp.status === 200){
                    resp.data.map(function(data){
                        if(data.url){
                            var arr = data.url.split('.')
                            data.type = arr[arr.length-1]
                            switch(data.type){
                                case 'pdf':data.type = pdf;break;
                                case 'doc':data.type = word;break;
                                case 'docx':data.type = word;break;
                                case 'ppt':data.type = ppt;break;
                                case 'zip':data.type = zip;break;
                                case 'download':data.type = download;break;
                                case 'png':data.type = pic;break;
                                case 'jpg':data.type = pic;break;
                                case 'gif':data.type = pic;break;
                                case 'xlsx':data.type = excel;break;
                                case 'xls':data.type = excel;break;
                            }
                        }else{
                            data.type = files
                        }
                    })
                            _this.setState({
                                data2:resp.data
                            })
                }
            })
            var a = document.querySelectorAll('.currentMenu a')
            if(a.length == 1){
                return
            }else{
                for(var i=a.length-1; i>0 ; i--){
                    a[i].parentNode.removeChild(a[i])
                } 
            }
        }
        
    }
    checkname(e){
        this.setState({
            checkname:e.target.value
        })
    }
    getList(){
        var _this = this;
        _this.setState({
            wjtable:''
        })
        FetchHelper.getJson('/common/file/getFileByDicId',{
            xmId:_this.props.match.params.id,
            dicId:_this.state.parentid
        }).then(resp => {
            if(resp.status === 200){
                resp.data.map(function(data){
                    if(data.url){
                        var arr = data.url.split('.')
                        data.type = arr[arr.length-1]
                        switch(data.type){
                                case 'pdf':data.type = pdf;break;
                                case 'doc':data.type = word;break;
                                case 'docx':data.type = word;break;
                                case 'ppt':data.type = ppt;break;
                                case 'zip':data.type = zip;break;
                                case 'download':data.type = download;break;
                                case 'png':data.type = pic;break;
                                case 'jpg':data.type = pic;break;
                                case 'gif':data.type = pic;break;
                                case 'xlsx':data.type = excel;break;
                                case 'xls':data.type = excel;break;
                        }
                    }else{
                        data.type = files
                    }
                })
                var hisdata = _this.state.hisdata
                hisdata.push(resp.data)
                        _this.setState({
                            data2:resp.data,
                            hisdata:hisdata,
                            wjtable:<Table rowSelection={_this.state.rowSelection}  columns={_this.state.columns2} dataSource={resp.data} padding={30} pagination={{pageSize: 6}}/>
                        })
            }
        })
    }
    show_create = (add,e) => {
        if(add == true){
            this.setState({
                visible_1: true,
                add:true
            });
        }else{
            this.setState({
                visible_1: true,
                renameDate:add,
                Wjjmc:add.mc,
                add:false
            });
        }
        
    };
    deleteWj = (data,e) =>{
        this.setState({
            visible_3: true,
            deleteWjId:data.id
        });
    }
    handleOk_1 = e => {
        var _this = this
        console.log(e);
        if(_this.state.add){
            if(!_this.state.childid[_this.state.childid.length-1]){
                FetchHelper.postJson('/common/file/dic?xmId='+_this.props.match.params.id+'&name='+_this.state.Wjjmc).then(resp => {
                    if(resp.status === 200){
                        _this.refresh()
                        _this.setState({
                            visible_1: false,
                            Wjjmc:''
                        });
                    }
                })
            }else{
                FetchHelper.postJson('/common/file/dic?xmId='+_this.props.match.params.id+'&pid='+_this.state.childid[_this.state.childid.length-1]+'&name='+_this.state.Wjjmc).then(resp => {
                    if(resp.status === 200){
                        _this.refresh(_this.state.childid[_this.state.childid.length-1])
                        _this.setState({
                            visible_1: false,
                            Wjjmc:''
                        });
                    }
                })
            }
        }else{
            FetchHelper.postJson('/common/file/rename?id='+_this.state.renameDate.id+'&name='+_this.state.Wjjmc).then(resp => {
                if(resp.status === 200){
                    _this.refresh(_this.state.childid[_this.state.childid.length-1])
                    _this.setState({
                        visible_1: false,
                        Wjjmc:''
                    });
                }
            })
        }
        
    };
    refresh(parentid){
        this.selects[parentid]
        var _this = this;
        _this.setState({
            wjtable:''
        })
        FetchHelper.getJson('/common/file/getFileByDicId',{
            xmId:this.props.match.params.id,
            dicId:parentid
        }).then(resp => {
            if(resp.status === 200){
                resp.data.map(function(data){
                    if(data.url){
                        var arr = data.url.split('.')
                        switch(arr[arr.length-1]){
                                case 'pdf':data.type = pdf;break;
                                case 'doc':data.type = word;break;
                                case 'docx':data.type = word;break;
                                case 'ppt':data.type = ppt;break;
                                case 'zip':data.type = zip;break;
                                case 'download':data.type = download;break;
                                case 'png':data.type = pic;break;
                                case 'jpg':data.type = pic;break;
                                case 'gif':data.type = pic;break;
                                case 'xlsx':data.type = excel;break;
                                case 'xls':data.type = excel;break;
                        }
                    }else{
                        data.type = files
                    }
                })
                var hisdata = _this.state.hisdata
                hisdata.push(resp.data)
                        _this.setState({
                            data2:resp.data,
                            hisdata:hisdata,
                            wjtable:<Table  rowSelection={_this.state.rowSelection} 
                            columns={_this.state.columns2} dataSource={resp.data} padding={30} pagination={{pageSize: 6}}/>

                        })
            }
        })
    }
    handleCancel_1 = e => {
        console.log(e);
        this.setState({
            visible_1: false,
            Wjjmc:''
        });
    };
    handleCancel_3 = e => {
        console.log(e);
        this.setState({
            visible_3: false,
        });
    };
    show_upload = () => {
        this.setState({
            visible_2: true,
        });
    };

    handleOk_2 = (e) => {  
        var _this = this 
        var fileaaa = _this.state.fileList1
         var data = new FormData()
          fileaaa.map(function(filess){
            data.append('file', filess);
        })
        if(!_this.state.childid[_this.state.childid.length-1]){
            reqwest({
                url: '/common/file/upload?xmid='+_this.props.match.params.id,
                method: 'post',
                processData: false,
                data: data,
                success: () => {
                    _this.refresh()
                    _this.setState({
                    fileList1: [],
                    visible_2: false,
                    filename:''
                   }); 
                },
                error: () => {
                    message.error('上传失败！')
                },
              });
               
        }else{
            reqwest({
                url: '/common/file/upload?xmid='+_this.props.match.params.id+'&pId='+_this.state.childid[_this.state.childid.length-1],
                method: 'post',
                processData: false,
                data: data,
                success: () => {
                    _this.refresh(_this.state.childid[_this.state.childid.length-1])
                    _this.setState({
                    fileList1: [],
                    visible_2: false,
                    filename:''
                    });
                  },
                error: () => {
                    message.error('上传失败！')
                },
              });
        }
    };
    handleOk_3 = e => {
        var _this = this
        _this.state.childid
        _this.state.parentid
        FetchHelper.deleteJson('/common/file/dic?dicId='+_this.state.deleteWjId).then(resp => {
            if(resp.status === 200){
                _this.refresh(_this.state.childid[_this.state.childid.length-1])
                _this.setState({
                    visible_3: false,
                });
            }
        })
    };
    handleCancel_2 = e => {
        console.log(e);
        this.setState({
            visible_2: false,
            filename:''
        });
    };
    
    changeWj = (e) =>{
        var name = e.target.value
        this.setState({
            Wjjmc: name,
        });
    };
    trsc(file,fileList){
        this.setState({
            fileList1: fileList,
            filename:file.name
        });
        return false
    }
    download(){
        debugger
        var type = false
        this.state.selectedRows
        this.state.selectedRows.map(function(data){
            if(data.url == null){
                // message.error('不支持文件夹下载')
                type = true
                return false
            }
        })
        if(type == true){
            message.error('不支持文件夹下载')
            return false
        }else{
            this.state.selectedRows.map(function(data){
                // const w = window.open('about:blank');
                // w.location.href = window.location.origin+'/'+data.url
                setTimeout(function(){
                    window.open(window.location.origin+'/'+data.url)
                },2000)
            })
        }
        
    }
    render() {
        return (
            <div className='projectDetail_archives'>
                <a className='back' onClick={this.backWj.bind(this)}><img src='/images/back.png'></img>返回上级</a>
                <div className='mnue'>
                <div className='navBar currentMenu' onClick={this.getData}>
                    <a className=''>{this.state.currentMenu}</a>
                </div>
                </div>
               
                <div className='content'>
                    <div className='header'>
                            <div className="yhlb-search">
                            <span>文件名称: </span>
                            <div className="example-input">
                                <Input placeholder="请输入文件名称" value={this.state.checkname} onChange={this.checkname.bind(this)}/>
                            </div>
                            {/* <span style={{marginLeft: '10px'}}>文件名称: </span> */}
                            <Button type="primary" className="" onClick={this.checkfile.bind(this)}>开始查询</Button>
                            <div className='example-input input_last'>
                                <Button type="primary" className='btn_last' onClick={this.show_create.bind(this,true)}>新建文件夹</Button>
                                <Button type="primary" className='btn_last' onClick={this.show_upload}>上传</Button>
                            </div>
                        </div>
                    </div>
                    <div className='list' style={{position: 'relative'}}>
                        {this.state.wjtable}
                        
                        <Button type="primary" style={{position: 'absolute', bottom: '15px'}} onClick={this.download.bind(this)} className="">下载</Button>
                    </div>
                </div>
                <Modal
                    title="新建文件夹"
                    visible={this.state.visible_1}
                    onOk={this.handleOk_1}
                    onCancel={this.handleCancel_1}>
                    <div className='createWj'>
                        <p>请输入文件夹名称:</p>
                        <Input value={this.state.Wjjmc} onChange={this.changeWj.bind(this)}/>
                    </div>
                </Modal>
                <Modal className='wwww'
                    title="文件上传"
                    style={{width:80,height:80}}
                    visible={this.state.visible_2}
                    onOk={this.handleOk_2}
                    onCancel={this.handleCancel_2}>
                    <div className='imp'>
                    <div className='imp_bot'>
                            <Upload.Dragger className='yzsc'
                                     multiple={false}
                                     name='file'
                                     beforeUpload={this.trsc.bind(this)}
                                     showUploadList={false}
                                    //  previewFile={this.trsc.bind(this)}
                                    //  onChange = {this.trsc.bind(this)}
                                    // onRemove={this.trsc.bind(this)}
                             >
                                <p>单击，或者拖拽文件至框内</p>
                            </Upload.Dragger>
                        </div>
                        <div className='imp_top'>
                            <Upload
                             showUploadList={false}
                             beforeUpload={this.trsc.bind(this)}
                             multiple={false}
                             className=''>
                                  <Button>
                                    <Icon type="upload" />请选择文件上传
                                  </Button>
                                </Upload>
                                <div className='listt' id='listt'>{this.state.filename}</div>
                        </div>
                       
                    </div>
                </Modal>
                <Modal
                    title="文件删除"
                    visible={this.state.visible_3}
                    onOk={this.handleOk_3}
                    onCancel={this.handleCancel_3}>
                    <p>确认删除该文件吗？</p>
                </Modal>
            </div>
        );
    }
}

export default withRouter(Archives);

