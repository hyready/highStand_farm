import React, {Component} from "react";
import {Route, Switch, withRouter} from "react-router-dom";
import './index.less';
import reqwest from 'reqwest';
import {FetchHelper} from "freesia-core";
import {Table, Icon, Button, Input, InputNumber, Popconfirm, Form, Modal, Divider, Tag , Radio ,Upload,message} from 'antd';
class Map extends Component {
    constructor(props) {
        super(props);
        this.state = {
            importMapVisible:false,
            importPicVisible:false,
            fileListQut:[],
            fileListXgt:[],
            Xgtname:'',
            Qutname:'',
            qyt:true,
            quturl:'',
            xgturl:''
        }
    }
    componentWillMount(){
        var _this = this
        FetchHelper.getJson('/api/common/file/getFjByXmidAndTplx',{xmId:_this.props.match.params.id,tplx:3}).then(resp => {
            if(resp.status == 200 ) {
                if(!resp.data){
                    // document.getElementById('xmqut').style.display = 'none'
                    document.getElementById('quxgt').style.display = 'none'
                }else{
                    _this.setState({
                        xgturl:'/api/'+resp.data.url
                    });
                }
            }
        })
        FetchHelper.getJson('/api/common/file/getFjByXmidAndTplx',{xmId:_this.props.match.params.id,tplx:4}).then(resp1 => {
            if(resp1.status == 200) {
                if(!resp1.data){
                    document.getElementById('xmqut').style.display = 'none'
                    // document.getElementById('quxgt').style.display = 'none'
                }else{
                    _this.setState({
                        quturl:'/api/'+resp1.data.url
                    });
                }
                
            }
        })

    }
    componentDidMount(){
        this.getData()
    }
    importmap=()=>{
        this.setState({
            importMapVisible: true,
        });
    }
    importpic=()=>{
        this.setState({
            importPicVisible: true,
        });
    }
    importMapOk=()=>{
        this.setState({
            importMapVisible: false,
        });
    }
    importPicOk=()=>{
        var _this = this
        var xgt = _this.state.fileListXgt
        var qut = _this.state.fileListQut
        // if(xgt[0].size>1024*1024*3||qut.size>1024*1024*3){
        //     message.warn('请上传小于3M的文件')
        // }else{

        // }
        debugger
        var dataxgt = new FormData()
        var dataqyt = new FormData()
        xgt.map(function(filess){
            dataxgt.append('file', filess);
        })
        qut.map(function(filess){
            dataqyt.append('file', filess);
        })
        if(xgt.length!=0){
            if(xgt[0].size > 1024*1024*20){
                // message.warn('请上传小于3M的文件')
                return false
            }else{
                reqwest({
                    url: '/api/common/file/uploadMap?xmid='+_this.props.match.params.id+'&tplx='+3,
                    method: 'post',
                    processData: false,
                    data: dataxgt,
                    success: () => {
                      message.success('上传成功！');
                      _this.getData(true,false,false)
                      _this.setState({
                        importPicVisible: false,
                        Qutname:'',
                        Xgtname:'',
                        fileListXgt:[],
                        fileListQut:[]
                    });
                    },
                    error: () => {
                      message.error('上传失败，请重新选择文件！');
                    },
                  });
            }  
        }
        if(qut.length !=0){
            if(qut[0].size >  1024*1024*20 ){
                // message.warn('请上传小于3M的文件')
                return false
            }else{
                reqwest({
                    url: '/api/common/file/uploadMap?xmid='+_this.props.match.params.id+'&tplx='+4,
                    method: 'post',
                    processData: false,
                    data: dataqyt,
                    success: () => {
                      message.success('上传成功！');
                      _this.getData(false,true,false)
                      _this.setState({
                        importPicVisible: false,
                        Qutname:'',
                        Xgtname:'',
                        fileListXgt:[],
                        fileListQut:[]
                    });
                    },
                    error: () => {
                      message.error('上传失败，请重新选择文件！');
                    },
                  });
            }
        }
          
    }
    getData(xgt,qut,all){
        var _this = this
        if(xgt && !all && !qut){
            FetchHelper.getJson('/api/common/file/getFjByXmidAndTplx',{xmId:_this.props.match.params.id,tplx:3}).then(resp => {
                if(resp.status == 200 ) {
                    if(!resp.data){
                        // document.getElementById('xmqut').style.display = 'none'
                        document.getElementById('quxgt').style.display = 'none'
                    }else{
                        _this.setState({
                            xgturl:'/api/'+resp.data.url
                        });
                    }
                }
            })
        }
        if(!xgt && !all && qut){
            FetchHelper.getJson('/api/common/file/getFjByXmidAndTplx',{xmId:_this.props.match.params.id,tplx:4}).then(resp1 => {
                if(resp1.status == 200) {
                    if(!resp1.data){
                        document.getElementById('xmqut').style.display = 'none'
                        // document.getElementById('quxgt').style.display = 'none'
                    }else{
                        _this.setState({
                            quturl:'/api/'+resp1.data.url
                        });
                    }
                    
                }
            })
        }
    }
    importPicCancel=() =>{
        this.setState({
            importPicVisible: false,
            Qutname:'',
            Xgtname:''
        });
    }
    importMapCancel=()=> {
        this.setState({
            importMapVisible: false,
            importPicVisible: false,
            Qutname:'',
            Xgtname:''
        });
    }
    beforeUpload(qyt,file,filelist){
        var _this = this
        if(qyt){
            _this.setState({
                fileListQut: filelist,
                Qutname:file.name
            });
        }else{
            _this.setState({
                fileListXgt: filelist,
                Xgtname:file.name
            });
        }
        
        return false
    }
    render() {
        return (
            <div className='projectdetail_map'>
                <div>
                <div className='map_left'>
                    <div className='title'>规划位置图<span onClick={this.importmap.bind(this)}>上传矢量文件</span></div>
                    <div className='nr left_bottom' id='map'>地图</div>
                </div>
                <div className='map_right'>
                    <div  className='title'>规划效果图对比<span onClick={this.importpic.bind(this)}>上传</span></div>
                    <div  className='nr right_bottom'>
                        <div>
                            <div className='xmqut pic'>
                                <img id='xmqut' style={{width:'100%',height:'100%',margin:'0px 10px'}} src={this.state.quturl} ></img>
                            </div>
                            <div className='pic_title'>项目区域图</div>
                        </div>
                        <div>
                            <div className='quxgt pic'>
                                <img id='quxgt' style={{width:'100%',height:'100%',margin:'0px 10px'}} src={this.state.xgturl}></img>
                            </div>
                            <div className='pic_title'>规划效果图</div>
                        </div>
                    </div>
                </div>
                <Modal className='mapBox'
                   title="上传矢量文件"
                   style={{ top: 64}}
                   visible={this.state.importMapVisible}
                   onOk={this.importMapOk}
                   onCancel={this.importMapCancel}>
                  <div className='main'>
                      <div className='input_import'>
                      <Upload
                        // beforeUpload={this.beforeUpload.bind(this,this.state.qyt)}
                        //  showUploadList={false}
                      >
                          <Button>
                            <Icon type="upload" />请选择上传图片
                          </Button>
                        </Upload>,
                      </div>
                      <div className='drag_file'>单击，或者拖动文件到此区域</div>
                  </div>
                </Modal>
                <Modal className='asd'
                   title="上传图片"
                   style={{ top: 64}}
                   visible={this.state.importPicVisible}
                   onOk={this.importPicOk}
                   onCancel={this.importPicCancel}>
                  <div className='pic_sc main'>
                      {/* <div className='input_import'>
                      <Upload
                        beforeUpload={this.beforeUpload.bind(this,this.state.qyt)}
                        //  onRemove = {this.onremove.bind(this)}
                         showUploadList={false}
                      >
                          <Button>
                            <Icon type="upload" />请选择上传图片
                          </Button>
                        </Upload>,
                      </div> */}
                      <div className='drag_file'>
                      <Upload.Dragger className='yzsc'
                                     multiple
                                     name='file'
                                     beforeUpload={this.beforeUpload.bind(this,this.state.qyt)}
                                     showUploadList={false}
                             >
                                <div className='impname' style={{position:'absolute',top:'0'}}>{this.state.Qutname}</div>
                                <p>单击，或者拖动文件到此区域</p>
                                <p>项目区域图</p>
                                <p>上传图片需小于10M</p>
                            </Upload.Dragger>
                      </div>
                      
                  </div>
                  <div className='pic_sc main'>
                      {/* <div className='input_import'>
                      <Upload
                        beforeUpload={this.beforeUpload.bind(this,!this.state.qyt)}
                         showUploadList={false}
                      >
                          <Button>
                            <Icon type="upload" />请选择上传图片
                          </Button>
                        </Upload>,
                      </div> */}
                      <div className='drag_file'>
                      <Upload.Dragger className='yzsc'
                                     multiple
                                     name='file'
                                     beforeUpload={this.beforeUpload.bind(this,!this.state.qyt)}
                                    //  onRemove = {this.onremove.bind(this)}
                                     showUploadList={false}
                             >
                                <div className='impname' style={{position:'absolute',top:'0'}}>{this.state.Xgtname}</div>
                                <p>单击，或者拖动文件到此区域</p>
                                <p>规划效果图</p>
                                <p>上传图片需小于10M</p>
                            </Upload.Dragger>
                      </div>
                      
                  </div>
                </Modal>
                </div>       
            </div>
        );
    }
}

export default withRouter(Map);

