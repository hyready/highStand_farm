import React, {Component} from "react";
import {withRouter} from "react-router-dom";
import {
    Table,
    Icon,
    Button,
    Input,
    Modal,
    Upload,
    message
} from 'antd';
import './index.less';
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
import txt from "../../../archivesManage/txt.png";
const {Dragger} = Upload
class Archives extends React.Component {
    constructor(props) {
        super(props);
        var me = this;
        this.columns = [
            {
                title: '类型',
                dataIndex: 'type',
                key: 'type',
                width: '150px',
                align:'center',
                render: (text, record, index) => {
                    return (
                        <img data-text={record.mc} 
                            // onDoubleClick={this.intoFile.bind(this)}
                             data-tplx={record.tplx}
                             data-id={record.id || 0} src={record.type}
                             style={{width: '40px', marginRight: '5px'}}/>
                    )
                }
            }, {
                title: '文件名称',
                dataIndex: 'mc',
                align:'center',
                key: 'mc',
            }, {
                title: '上传时间',
                dataIndex: 'sj',
                align:'center',
                key: 'sj',
            }, {
                title: '操作',
                dataIndex: 'source',
                key: 'source',
                width: '180px',
                align:'center',
                render: (text, record, index) => {
                    return (<div style={{display: 'flex', alignItems: 'center'}}>
                            <a data-index={index} onClick={this.createNew.bind(this,record)}>重命名</a>
                            <a style={{marginLeft: '20px'}} onClick={this.downloadwj.bind(this,record)}>下载</a>
                            <a style={{marginLeft: '20px'}} data-index={index} onClick={this.deleteWj.bind(this,record)}>删除</a>
                            
                            </div>
                    )
                }
            },
        ]
        this.pid = 0
        this.pfy = 1
        this.rowSelection = {
            onChange: this.onChange,
            getCheckboxProps: this.getCheckboxProps
        }
        this.selecteRowKeys = [];
        this.selectfykey = [] ;
        this.selectedRows = [] ;
        this.state = {
             visible_1: false,
             visible_2: false,
             visible_3: false,
             selectedRows:[],
             parentid: [],
             childid: [],
             childidfy:[],
             renameDate: '',
             Wjjmc: '',
             add: 1,
             deleteWjId: '',
             hisdata: [],
             current:1,
             fileList1: {},
             checkname: '',
             filename: '',
             wjtable: '',
             selectedRowKeys: [],
             currentMenu: decodeURI(this.props.match.params.xmmc).split('/')[decodeURI(this.props.match.params.xmmc).split('/').length - 1],
        }
    }
    downloadwj(data,e){
        var _this = this
        if(data.url == null){
            message.error('请勿选择文件夹！') 
        }else{
            this.downloadFile('/api/common/file/downloadFile?id='+data.id)
            // return;
        }
        
        // debugger
        // if(data.url == null){
        //     message.error('请勿选择文件夹！')
        // }else{
        //     FetchHelper.getJson('/api/common/file/downloadFile?id='+data.id).then(resp => {
        //     if(resp.status === 200){
        //         message.success('下载成功！')
        //     }
        // })
        // .catch(function (error) {
        //     message.error('下载失败！')
        //   });
        // }

    }
    
 downloadFile(url) {
   try{ 
        var elemIF = document.createElement("iframe");   
        elemIF.src = url;   
        elemIF.style.display = "none";   
        document.body.appendChild(elemIF);   
    }catch(e){ 
        message.error("下载异常！");
    }     
}
    intoFile(e,record) {
        debugger
        // const tplx = e.target.dataset['tplx']
        // const id = e.target.dataset['id']
        // const text = e.target.dataset['text']
        const tplx = e.tplx
        const id = e.id || 0
        const text = e.mc
        if (tplx != '1') {
            return
        }
        var currentMenu = document.querySelector('.currentMenu')
        currentMenu.innerHTML += `<a data-id = ${id}><span> / </span>${text}</a>`
        this.getList(id)
        var childid = this.state.childid
        childid.push(id)
        debugger
        var childidfy = this.state.childidfy
        childidfy.push(id)
        this.setState({
            childid:childid,
            childidfy:childidfy
        })
    }

    getCheckboxProps(record) {

    }

    componentDidMount() {
        this.getList()
        
    }

    selectChange(selectedRowKeys, selectedRows) {
        this.selecteRowKeys[this.pid] = selectedRowKeys
        var selectedRow = this.state.selectedRows

        this.selectfykey[this.pfy] = selectedRowKeys
        debugger
        selectedRow.push(selectedRows)
        this.setState({
            selectedRowKeys: selectedRowKeys,
            selectedRows:selectedRow
        })
    }
    handleOk_3 = e =>{       //文件删除
        var _this = this
        _this.state.childid
        _this.state.parentid
        FetchHelper.deleteJson('/api/common/file/dic?dicId='+_this.state.deleteWjId).then(resp => {
            if(resp.status === 200){
                _this.getList(_this.state.childid[_this.state.childid.length-1])
                _this.setState({
                    visible_3: false,
                });
            }
        })
    }
    handleCancel_3 = e =>{
        console.log(e);
        this.setState({
            visible_3: false,
        });
    }
    trsc(file,fileList){           //获得上传文件
        this.setState({
            fileList1: fileList,
            filename:file.name
        });
        return false
    }
    handleCancel_2 = e =>{
        console.log(e);
        this.setState({
            visible_2: false,
            filename:''
        });
    }
    handleOk_2 = e =>{ 
        var _this = this 
        var fileaaa = _this.state.fileList1
         var data = new FormData()
          fileaaa.map(function(filess){
            data.append('file', filess);
        })
        if(!_this.state.childid[_this.state.childid.length-1]){
            reqwest({
                url: '/api/common/file/upload?xmid='+_this.props.match.params.id,
                method: 'post',
                processData: false,
                data: data,
                success: () => {
                    _this.getList()
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
                url: '/api/common/file/upload?xmid='+_this.props.match.params.id+'&pId='+_this.state.childid[_this.state.childid.length-1],
                method: 'post',
                processData: false,
                data: data,
                success: () => {
                    _this.getList(_this.state.childid[_this.state.childid.length-1])
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
        }      //文件上传

    }
    showUpload(){
        this.setState({
            visible_2: true,
        });
    }
    changeWj = (e) =>{
        var name = e.target.value
        this.setState({
            Wjjmc: name,
        });
    };
    handleCancel_1 = e =>{  
        console.log(e);
        this.setState({
            visible_1: false,
            Wjjmc:''
        });

    }
    handleOk_1 = e =>{    
        debugger  //新建文件夹
        var _this = this
        console.log(e);
        if(_this.state.add){
            if(!_this.state.childid[_this.state.childid.length-1]){
                FetchHelper.postJson('/api/common/file/dic?xmId='+_this.props.match.params.id+'&name='+_this.state.Wjjmc).then(resp => {
                    if(resp.status === 200){
                        _this.getList()
                        _this.setState({
                            visible_1: false,
                            Wjjmc:''
                        });
                    }
                })
            }else{
                FetchHelper.postJson('/api/common/file/dic?xmId='+_this.props.match.params.id+'&pid='+_this.state.childid[_this.state.childid.length-1]+'&name='+_this.state.Wjjmc).then(resp => {
                    if(resp.status === 200){
                        _this.getList(_this.state.childid[_this.state.childid.length-1])
                        _this.setState({
                            visible_1: false,
                            Wjjmc:''
                        });
                    }
                })
            }
        }else{
            FetchHelper.postJson('/api/common/file/rename?id='+_this.state.renameDate.id+'&name='+_this.state.Wjjmc).then(resp => {
                if(resp.status === 200){
                    _this.getList(_this.state.childid[_this.state.childid.length-1])
                    _this.setState({
                        visible_1: false,
                        Wjjmc:''
                    });
                }
            })
        }
    }
    download(){
        debugger
        this.state.selectedRows[this.state.selectedRows.length-1]
        var type = false
        this.state.selectedRows
        this.state.selectedRows[this.state.selectedRows.length-1].map(function(data){
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
            this.state.selectedRows[this.state.selectedRows.length-1].map(function(data){
                // const w = window.open('about:blank');
                // w.location.href = window.location.origin+'/'+data.url
                setTimeout(function(){
                    window.open(window.location.origin+'/api/'+data.url)
                },2000)
            })
        }
    }
    checkName(e){   
        this.setState({
            checkname:e.target.value
        })  //查询文件名称
    }
    checkFile(){     //查询文件
        var _this = this
        _this.state.data2
        _this.state.checkname
        var checkdata = []
        if(!_this.state.checkname){
            _this.getList()
            return
        }else{
            FetchHelper.getJson('/api/common/file/searchFile',{
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
                                case 'txt':data.type = txt;break;
                            }
                        }else{
                            data.type = files
                        }
                    })
                    debugger
                    if(resp.data.length == 0){
                        this.getList()
                        message.warn('无此文件')
                    }else{
                        _this.setState({
                            tableData:resp.data
                        })
                    }    
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
    createNew(add,e){         //新建重命名文件夹 
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
        } //新建文件夹
           
    }
    deleteWj(data,e){          //删除文件夹
        this.setState({
            visible_3: true,
            deleteWjId:data.id
        });   
    }
    pagefy(a,b,c,d){
        this.selecteRowKeys = [];
        debugger
        this.pfy = a.current
        this.setState({
            current:a.current
        },function(){
            this.getList(this.state.childidfy[this.state.childidfy.length-1],a.current,a.pageSize)
        })

    }
    render() {
        const rowSelection = {
            onChange: (selectedRowKeys, selectedRows) => {
                this.selectChange(selectedRowKeys, selectedRows)
            },
            selectedRowKeys: this.state.selectedRowKeys
        };
        return (
            <div className='projectDetail_archives'>
                <a className='back' onClick={this.goBack.bind(this)}><img src='/images/back.png'></img>返回上级</a>
                <div className='mnue'>
                    <div className='navBar currentMenu' onClick={this.getData.bind(this)}>
                        <a className=''>{this.state.currentMenu}</a>
                    </div>
                </div>

                <div className='content'>
                    <div className='header'>
                        <div className="yhlb-search">
                            <span>文件名称: </span>
                            <div className="example-input">
                                <Input placeholder="请输入文件名称" value={this.state.checkname}
                                       onChange={this.checkName.bind(this)}/>
                            </div>
                            {/* <span style={{marginLeft: '10px'}}>文件名称: </span> */}
                            <Button type="primary" className="" onClick={this.checkFile.bind(this)}>开始查询</Button>
                            <div className='example-input input_last'>
                                <Button type="primary" className='btn_last'
                                        onClick={this.createNew.bind(this, true)} style={{marginRight:'5px'}}>新建文件夹</Button>
                                <Button type="primary" className='btn_last' onClick={this.showUpload.bind(this)}>上传</Button>
                            </div>
                        </div>
                    </div>
                    <div className='list' style={{position: 'relative'}}>
                    <Table  columns={this.columns} onChange={this.pagefy.bind(this)} 
                        // rowSelection={rowSelection}
                            
                            // onRowDoubleClick={this.intoFile.bind(this)}
                            onRow={record => {
                                return {
                                  onDoubleClick:this.intoFile.bind(this,record),
                                };
                              }}
                    dataSource={this.state.tableData} padding={30} pagination={{pageSize:3,current:this.state.current}}/>
                        {/* <Button type="primary" style={{position: 'absolute', bottom: '15px'}}
                        onClick={this.download.bind(this)} className="">下载</Button> */}
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
                style={{width: 80, height: 80}}
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
                <Icon type="upload"/>请选择文件上传
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

    getList(id,page,pagesize) {
        var _this = this;
        this.pid = id||0;
        debugger
        var pages = page?page:1
        FetchHelper.getJson('/api/common/file/getFileByDicId', {
            xmId: _this.props.match.params.id,
            dicId: id,
            page:pages,
            size:3
        }).then(resp => {
            if (resp.status === 200) {
                resp.data.map(function (data) {
                    if (data.url) {
                        var arr = data.url.split('.')
                        data.type = arr[arr.length - 1]
                        switch (data.type) {
                            case 'pdf':
                                data.type = pdf;
                                break;
                            case 'doc':
                                data.type = word;
                                break;
                            case 'docx':
                                data.type = word;
                                break;
                            case 'ppt':
                                data.type = ppt;
                                break;
                            case 'zip':
                                data.type = zip;
                                break;
                            case 'download':
                                data.type = download;
                                break;
                            case 'png':
                                data.type = pic;
                                break;
                            case 'jpg':
                                data.type = pic;
                                break;
                            case 'gif':
                                data.type = pic;
                                break;
                            case 'xlsx':
                                data.type = excel;
                                break;
                            case 'xls':
                                data.type = excel;
                                break;
                            case 'txt':
                                data.type = txt;
                                break;
                        }
                    } else {
                        data.type = files
                    }
                })
                if(page){
                    this.setState({
                        tableData: resp.data
                        
                    }, function () {
                        _this.initSelectfy(page)
                    })
                }else{
                    this.setState({
                        tableData: resp.data,
                        current:1
                        
                    }, function () {
                        _this.initSelect(id)
                    })
                }   
            }
        })
    }

    goBack() {
        var aList = document.querySelectorAll('.currentMenu a');
        var id = aList[aList.length - 2].dataset['id'];
        var childidfy = this.state.childidfy
        childidfy.push(id)
        var childid = this.state.childid
        childid.pop()
        aList[aList.length - 1].parentNode.removeChild(aList[aList.length - 1])
        this.getList(id)
        debugger
        this.setState({
            childidfy:childidfy,
            childid:childid
        })
    }

    getData(e) {
        var id = e.target.dataset['id']
        var childidfy = this.state.childidfy
        childidfy.push(id)
        var childid = this.state.childid
        for(var i=childid.length-1 ; i>=0 ; i--){
            if(childid[i] != id){
                childid.splice(i,1)
            }
        }
        debugger
        var a = document.querySelectorAll('.currentMenu a')
        for (var i = a.length - 1; i > 0; i--) {
            if (a[i] === e.target) {
                break
            }
            a[i].parentNode.removeChild(a[i])
        }
        this.setState({
            childidfy:childidfy
        })
        this.getList(id)
    }

    initSelect(id) {
        const selects = this.selecteRowKeys[id||0]
        this.selectfykey
        // const selectsrows = this.selectedRows[id||0]
        debugger
        this.setState({
            selectedRowKeys: selects
        })
    }

    initSelectfy(page){
        const selects = this.selecteRowKeys[page||1]
        this.selectfykey
        debugger
        this.setState({
            selectedRowKeys: selects
        })
    }
}

export default withRouter(Archives);

