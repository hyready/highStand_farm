import React, {Component} from "react";
import {Route, Switch, withRouter} from "react-router-dom";
import {
    Table, Icon, Button, Input, Modal, Select, message,List, Avatar ,Card
} from 'antd';
// import {FetchHelper} from "freesia-core";
import reqwest from 'reqwest';
import './index.less';

import {menus} from './menu'
import XmxlJson from './xmlx'
import 倒虹吸 from './pages/倒虹吸.js'
import 农桥 from './pages/农桥.js'
import 农田林网工程 from './pages/农田林网工程.js'
import 出水口 from './pages/出水口.js'
import 喷灌圈 from './pages/喷灌圈.js'
import 喷灌管道 from './pages/喷灌管道.js'
import 土地平整区域 from './pages/土地平整区域.js'
import 土地平整田块 from './pages/土地平整田块.js'
import 塘坝 from './pages/塘坝.js'
import 大口井 from './pages/大口井.js'
import 小型水库 from './pages/小型水库.js'
import 岸坡防护工程 from './pages/岸坡防护工程.js'
import 平整田块设计高程 from './pages/平整田块设计高程.js'
import 微灌管道 from './pages/微灌管道.js'
import 截伏流 from './pages/截伏流.js'
import 排水井 from './pages/排水井.js'
import 排水暗管 from './pages/排水暗管.js'
import 明沟 from './pages/明沟.js'
import 明渠 from './pages/明渠.js'
import 机井 from './pages/机井.js'
import 水窖 from './pages/水窖.js'
import 水闸 from './pages/水闸.js'
import 沟道治理工程 from './pages/沟道治理工程.js'
import 泵站 from './pages/泵站.js'
import 涵洞 from './pages/涵洞.js'
import 渡槽 from './pages/渡槽.js'
import 田间道路 from './pages/田间道路.js'
import 蓄水池 from './pages/蓄水池.js'
import 跌水陡坡 from './pages/跌水陡坡.js'
import 输水管道 from './pages/输水管道.js'
import 输配电线路 from './pages/输配电线路.js'
import 输配电装置 from './pages/输配电装置.js'
import 过水路面 from './pages/过水路面.js'
import 量水设施 from './pages/量水设施.js'
import 错车道 from './pages/错车道.js'
import 坡面护理工程 from './pages/坡面护理工程.js'
import {FetchHelper} from "freesia-core";
import FetchHelpers from "../../../../../framework/fetch-helper";

const {Option} = Select
const xmxl = XmxlJson

class Subject extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            visiblePage: false,
            detailData: null,
            visiblePage1:false,
            showTable: 'flex',
            showIcon: 'none',
            title:'新增子项目',
            data:[],
            columns: [{
                title: '项目名称',
                dataIndex: 'xmmc',
            },{
                title: '项目负责人',
                dataIndex: 'xmfzr',
            }, {
                title: '项目状态',
                dataIndex: 'xmzt',
            }, {
                title: '项目类型',
                dataIndex: 'entityNname_MC',
            }, {
                title: '开始时间',
                dataIndex: 'kssj',
            }, {
                title: '结束时间',
                dataIndex: 'jssj',
            }, {
                title: '操作',
                dataIndex: 'cz',
                render: (text, record, index) => (
                    <div style={{color: '#1ABC9C', width: '100px'}}>
                        <span style={{cursor:'pointer'}} data-index={index} onClick={this.showDetail.bind(this,record)}>详情</span>
                        <span> </span>
                        <span id='editpage' style={{cursor:'pointer',display:this.props.match.params.xmzt=='已完工'?'none':'inline'}} onClick={this.edit.bind(this,record)}>修改</span>
                        {/* {this.state.editshow} */}
                    </div>
                ),
            }
            ],
            subProject: '',
            hqdata:{},
            checkname:'',
            checklx:'',
            editzt:false,
            xachoose:'',
            updatedata:{},
            xzsure:false,
            lxxzk:'',
            xq:false,
            ghz:[],
            jsz:[],
            ywg:[],
            yys:[],
            xqbtn:''
        }
        this.isDetail = false
    }

    componentDidMount() {
        var _this = this
        this.props.match.params.xmmc
        debugger
        if(this.props.match.params.xmzt == '已完工'){
            // document.getElementById('editpage').style.display = 'none'
            document.getElementById('btn_last').style.display = 'none'
        }
        this.refresh()

    }
    refresh(){
        var _this = this
        var ghz =[]
        var jsz =[]
        var ywg =[]
        var yys =[]
        FetchHelpers.getJson('/api/project/getSubproject/'+_this.props.match.params.xmbh+'?size=500').then(resp => {
            if(resp.status === 200){
                        resp.data.list.map(function(item){
                            switch(item.xmzt){
                                case '建设中' :jsz.push(item);break;
                                case '已完工' :ywg.push(item);break;
                                case '规划中' :ghz.push(item);break;
                                case '已验收' :yys.push(item);break;
                            }
                        })
                        _this.setState({
                            data:resp.data.list,
                            ghz:ghz,
                            ywg:ywg,
                            yys:yys,
                            jsz:jsz,
                        })
            }
        })
    }

    showtable() {
        document.getElementById('appstore').classList.remove('yangshi')
        document.getElementById('unordered-list').classList.add('yangshi')
        this.setState({
            showIcon: 'none',
            showTable: 'flex'
        })
    }
    showDetail(type,e){
        var index = e.target.dataset.index;
        var data = this.state.data[index];
        this.isDetail = true;
        
        FetchHelper.getJson(`/api/sjzd/get/${type.entityNname}/${type.id}`).then(resp => {
            if (resp && resp.status == 200) {
                this.setState({
                    // visiblePage: true,
                    visiblePage1:true,
                    title:'详情',
                    xq:true,
                    editzt:false,
                    addtype:false,
                    xqbtn:'footer={null}'
                })
                this.handleChange(type.entityNname, resp.data)
            }
        })
    }

    edit(updatedata,e) {
        this.isDetail = false;
        if(this.props.match.params.xmzt == '已完工'){
            message.warn('项目已完工，请勿修改数据')
            return false
        }else{
            FetchHelper.getJson(`/api/sjzd/get/${updatedata.entityNname}/${updatedata.id}`).then(resp => {
                if (resp && resp.status == 200) {
                    this.setState({
                        visiblePage: true,
                        editzt:true,
                        title:'修改',
                        xq:false,
                        addtype:false,
                        xqbtn:''
                    })
                    resp.data.id = updatedata.id
                    this.handleChange(updatedata.entityNname, resp.data)
                }
            })
        }
    }

    onRef(ref) {
        this.child = ref;
        if (this.isDetail) {
            document.querySelectorAll('.subProjectList .projectData input').forEach(function (input) {
                input.setAttribute('disabled', 'disabled')
            })
            document.querySelectorAll('.subProjectList .projectData .selectzt')
        }
    }

    showicon() {
        document.getElementById('appstore').classList.add('yangshi')
        document.getElementById('unordered-list').classList.remove('yangshi')
        this.setState({
            showTable: 'none',
            showIcon: 'flex'
        })
    }

    handleChange(value, data) {

        if(data.props){
            this.showZj(value,data)
        }else{
            var nam = this.chenggg(value)
            // this.chenggg(value)
            // var tables = {
            //     'Dc':'渡槽'
            // }
            this.showZj(nam,data)
        }
        this.setState({
            xachoose:value
        })

    }
    chenggg(value){
        var tables = {
            'Dc':'渡槽',
            'Dhx':'倒虹吸',
            'Sz':'水闸',
            'Nq':'农桥',
            'Hd':'涵洞',
            'Dsdp':'跌水陡坡',
            'Lsss':'量水设施',
            'Jfl':'截伏流',
            'Spdxl':'输配电线路',
            'Spdzj':'输配电装置',
            'Tjdl':'田间道路',
            'Gslm':'过水路面',
            'Ccd':'错车道',
            'Ntlwgc':'农田林网工程',
            'Apfhgc':'岸坡防护工程',
            'Gdzlgc':'沟道治理工程',
            'Pmhlgc':'坡面护理工程',
            'Ssgd':'输水管道',
            'Pggd':'喷灌管道',
            'Wggd':'微灌管道',
            'Psg':'明沟',
            'Psag':'排水暗管',
            'Psj':'排水井',
            'Csk':'出水口',
            'Pgq':'喷灌圈',
            'Tdpzqy':'土地平整区域',
            'Tdpztksjgc':'平整田块设计高程',
            'Tb':'塘坝',
            'Xxsk':'小型水库',
            'Bz':'泵站',
            'Dkj':'大口井',
            'Xscjg':'蓄水池',
            'Tdpztk':'土地平整田块',
            'Sj':'水窖',
            'Jjsxjg':'机井',
            'Qdsx':'明渠'
        }
        return tables[value]
    }
    unchenggg(value){
        var tables = {
            '渡槽':'Dc',
            '倒虹吸':'Dhx',
            '水闸':'Sz',
            '农桥':'Nq',
            '涵洞':'Hd',
            '跌水陡坡':'Dsdp',
            '量水设施':'Lsss',
            '截伏流':'Jfl',
            '输配电线路':'Spdxl',
            '输配电装置':'Spdzj',
            '田间道路':'Tjdl',
            '过水路面':'Gslm',
            '错车道':'Ccd',
            '农田林网工程':'Ntlwgc',
            '岸坡防护工程':'Apfhgc',
            '沟道治理工程':'Gdzlgc',
            '坡面护理工程':'Pmhlgc',
            '输水管道':'Ssgd',
            '喷灌管道':'Pggd',
            '微灌管道':'Wggd',
            '明沟':'Psg',
            '排水暗管':'Psag',
            '排水井':'Psj',
            '出水口':'Csk',
            '喷灌圈':'Pgq',
            '土地平整区域':'Tdpzqy',
            '平整田块设计高程':'Tdpztksjgc',
            '塘坝':'Tb',
            '小型水库':'Xxsk',
            '泵站':'Bz',
            '大口井':'Dkj',
            '蓄水池':'Xscjg',
            '水窖':'Sj',
            '土地平整田块':'Tdpztk',
            '机井':'Jjsxjg',
            '明渠':'Qdsx'
        }
        return tables[value]
    }
    showZj(value,data){
        this.state.editzt

        this.isDetail
        debugger
        switch (value) {
            case '倒虹吸':
                this.setState({
                    subProject: <倒虹吸 onRef={this.onRef.bind(this)} name='Dhx' data={data} editzt={this.state.editzt}/>
                });
                break;
            case '农桥':
                this.setState({
                    subProject: <农桥 onRef={this.onRef.bind(this)} name='Nq' data={data} editzt={this.state.editzt}/>
                });
                break;
            case '农田林网工程':
                this.setState({
                    subProject: <农田林网工程 onRef={this.onRef.bind(this)} name="Ntlwgc" data={data} editzt={this.state.editzt}/>
                });
                break;
            case '出水口':
                this.setState({
                    subProject: <出水口 onRef={this.onRef.bind(this)} name='Csk' data={data} editzt={this.state.editzt}/>
                });
                break;
            case '喷灌圈':
                this.setState({
                    subProject: <喷灌圈 onRef={this.onRef.bind(this)} name='Pgq' data={data} editzt={this.state.editzt}/>
                });
                break;
            case '喷灌管道':
                this.setState({
                    subProject: <喷灌管道 onRef={this.onRef.bind(this)} name='Pggd' data={data} editzt={this.state.editzt}/>
                });
                break;
            case '土地平整区域':
                this.setState({
                    subProject: <土地平整区域 onRef={this.onRef.bind(this)} name='Tdpzqy' data={data} editzt={this.state.editzt}/>
                });
                break;
            case '土地平整田块':
                this.setState({
                    subProject: <土地平整田块 onRef={this.onRef.bind(this)} name='Tdpztk' data={data} editzt={this.state.editzt}/>
                });
                break;
            case '塘坝':
                this.setState({
                    subProject: <塘坝 onRef={this.onRef.bind(this)} name='Tb' data={data} editzt={this.state.editzt}/>
                });
                break;
            case '大口井':
                this.setState({
                    subProject: <大口井 onRef={this.onRef.bind(this)} name='Dkj' data={data} editzt={this.state.editzt}/>
                });
                break;
            case '小型水库':
                this.setState({
                    subProject: <小型水库 onRef={this.onRef.bind(this)} name='Xxsk' data={data} editzt={this.state.editzt}/>
                });
                break;
            case '岸坡防护工程':
                this.setState({
                    subProject: <岸坡防护工程 onRef={this.onRef.bind(this)} name='Apfhgc' data={data} editzt={this.state.editzt}/>
                });
                break;
            case '平整田块设计高程':
                this.setState({
                    subProject: <平整田块设计高程 onRef={this.onRef.bind(this)} name='Tdpztksjgc' data={data} editzt={this.state.editzt}/>
                });
                break;
            case '微灌管道':
                this.setState({
                    subProject: <微灌管道 onRef={this.onRef.bind(this)} name='Wggd' data={data} editzt={this.state.editzt}/>
                });
                break;
            case '截伏流':
                this.setState({
                    subProject: <截伏流 onRef={this.onRef.bind(this)} name='Jfl' data={data} editzt={this.state.editzt}/>
                });
                break;
            case '排水井':
                this.setState({
                    subProject: <排水井 onRef={this.onRef.bind(this)} name='Psj' data={data} editzt={this.state.editzt}/>
                });
                break;
            case '排水暗管':
                this.setState({
                    subProject: <排水暗管 onRef={this.onRef.bind(this)} name='Psag' data={data} editzt={this.state.editzt}/>
                });
                break;
            case '明沟':
                this.setState({
                    subProject: <明沟 onRef={this.onRef.bind(this)} name='Psg' data={data} editzt={this.state.editzt}/>
                });
                break;
            case '明渠':
                this.setState({
                    subProject: <明渠 onRef={this.onRef.bind(this)} name='Qdsx' data={data} editzt={this.state.editzt}/>
                });
                break;
            case '机井':
                this.setState({
                    subProject: <机井 onRef={this.onRef.bind(this)} name='Jjsxjg' data={data} editzt={this.state.editzt}/>
                });
                break;
            case '水窖':
                this.setState({
                    subProject: <水窖 onRef={this.onRef.bind(this)} name='Sj' data={data} editzt={this.state.editzt}/>
                });
                break;
            case '水闸':
                this.setState({
                    subProject: <水闸 onRef={this.onRef.bind(this)} name='Sz' data={data} editzt={this.state.editzt}/>
                });
                break;
            case '沟道治理工程':
                this.setState({
                    subProject: <沟道治理工程 onRef={this.onRef.bind(this)} name='Gdzlgc' data={data} editzt={this.state.editzt}/>
                });
                break;
            case '泵站':
                this.setState({
                    subProject: <泵站 onRef={this.onRef.bind(this)} name='Bz' data={data} editzt={this.state.editzt}/>
                });
                break;
            case '涵洞':
                this.setState({
                    subProject: <涵洞 onRef={this.onRef.bind(this)} name='Hd' data={data} editzt={this.state.editzt}/>
                });
                break;
            case '渡槽':
                this.setState({
                    subProject: <渡槽 onRef={this.onRef.bind(this)} name='Dc' data={data} editzt={this.state.editzt} editzt={this.state.editzt} isdetail={this.isDetail}/>
                });
                break;
            case '田间道路':
                this.setState({
                    subProject: <田间道路 onRef={this.onRef.bind(this)} name='Tjdl' data={data} editzt={this.state.editzt}/>
                });
                break;
            case '蓄水池':
                this.setState({
                    subProject: <蓄水池 onRef={this.onRef.bind(this)} name='Xscjg' data={data} editzt={this.state.editzt}/>
                });
                break;
            case '跌水陡坡':
                this.setState({
                    subProject: <跌水陡坡 onRef={this.onRef.bind(this)} name='Dsdp' data={data} editzt={this.state.editzt}/>
                });
                break;
            case '输水管道':
                this.setState({
                    subProject: <输水管道 onRef={this.onRef.bind(this)} name='Ssgd' data={data} editzt={this.state.editzt}/>
                });
                break;
            case '输配电线路':
                this.setState({
                    subProject: <输配电线路 onRef={this.onRef.bind(this)} name='Spdxl' data={data} editzt={this.state.editzt}/>
                });
                break;
            case '输配电装置':
                this.setState({
                    subProject: <输配电装置 onRef={this.onRef.bind(this)} name='Spdzj' data={data} editzt={this.state.editzt}/>
                });
                break;
            case '过水路面':
                this.setState({
                    subProject: <过水路面 onRef={this.onRef.bind(this)} name='Gslm' data={data} editzt={this.state.editzt}/>
                });
                break;
            case '量水设施':
                this.setState({
                    subProject: <量水设施 onRef={this.onRef.bind(this)} name='Lsss' data={data} editzt={this.state.editzt}/>
                });
                break;
            case '错车道':
                this.setState({
                    subProject: <错车道 onRef={this.onRef.bind(this)} name='Ccd' data={data} editzt={this.state.editzt}/>
                });
                break;
            case '坡面护理工程':
                this.setState({
                    subProject: <坡面护理工程 onRef={this.onRef.bind(this)} name='Pmhlgc' data={data} editzt={this.state.editzt}/>
                });
                break;
            default:
                this.setState({
                    subProject: ''
                });
        }
    }
    showModal = (e) => {
        this.isDetail = false;
        if(this.props.match.params.xmzt == '已完工'){
            message.warn('项目已完工，请勿新增子项目')
            return false
        }else{
            this.setState({
                visible: true,
                addtype:true,
                xq:false,
                editzt:false,
                xqbtn:'',
                title:'新增子项目',
                lxxzk:<Select placeholder="请选择" onChange={this.handleChange.bind(this)} style={{width: 200}} allowClear={true}>
                {
                    xmxl.map((item, index) => (
                        <Option value={item.name} key={index}>{item.name}</Option>
                    ))
                }
            </Select>
            });
        }
    };

    handleOk = e => {
        if (this.state.subProject == '') {
            message.warning('请先选择子项目类型！')
            return
        }
        this.setState({
            visible: false,
            visiblePage: true,
            xachoose:'',
            lxxzk:''
        });
    };

    handleCancel = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };
    createSubProject = (e) => {
        var that = this;
        this.isDetail = false;
        var data;
        debugger
        data = this.child.state.xzdata
        if(this.state.editzt){
            FetchHelper.postJson(`/api/sjzd/update/${this.child.props.name}`, this.child.state.sjdata).then(resp => {
                if (resp.status === 200) {
                    that.refresh()
                    that.setState({
                        visiblePage: false,
                        subProject:'',
                        editzt:false
                    })
                }
            })
            .catch(function (error) {
                message.error('参数错误，请重新填写')
              });
        }else if(this.state.xq){
            that.setState({
                visiblePage: false,
                subProject:'',
                xq:false
            })
        }else if(this.state.addtype){
            debugger
            var arr = Object.getOwnPropertyNames(data)

            if(arr.length == 0){
                message.error('添加数据不能为空')
                return false
            }else{
                data.zxmbh = this.props.match.params.xmbh
                FetchHelpers.postJson(`/api/project/addSubproject/${this.child.props.name}?xmid=`+this.props.match.params.id, data).then(resp => {
                    if (resp.status === 200) {
                        that.refresh()
                        that.setState({
                            visiblePage: false,
                            subProject:'',
                            xzsure:true,
                            addtype:false
                        })
                    }
                })
                .catch(function (error) {
                    message.error('参数错误，请重新填写')
                  });
            }

        }
    }
    handleCancelPage = e => {
        console.log(e);
        this.setState({
            visiblePage: false,
            subProject:'',
            editzt:false,
            xq:false,
            addtype:false,
            visiblePage1:false
        });
    };
    valueChange = (e) => {
        var field = e.target.name;
        var value = e.target.value;
        var editData = this.child.state.sjdata
        this.child.state.xzdata
        debugger
        editData[field] = value
        this.setState({
            updatedata:editData
        })
    }
    valueBind = (e) => {
        if(e.target.innerText != ''){
            var field = 'xmzt';
            var value = e.target.innerText;
        }else{
            var field = e.target.name;
            var value = e.target.value;
        }
        this.child.state.data
        this.child.state.xzdata[field] = value;
    }
    check(){
        var _this = this
        debugger
        FetchHelper.getJson(`/api/project/getSubproject/${_this.props.match.params.xmbh}?key=`+_this.state.checkname+'&xmlx='+_this.state.checklx).then(resp => {
            if(resp.status === 200){
                        _this.setState({
                            data:resp.data.list
                        })
            }
        })

    }
    checkname(e){
        this.setState({
            checkname:e.target.value
        })
    }
    handleChange1(value,index){
        if(value == '全部'){
            var key = ''
        }else{
            var key = this.unchenggg(value)
        }
        this.setState({
            checklx:key
        })
    }
    render() {
        return (
            <div className='projectdetail_subproject'>
                <div className='type_list flex_none'>
                    <Icon id='unordered-list' className='yangshi' type="unordered-list"
                          onClick={this.showtable.bind(this)}/>
                    <Icon id='appstore' type="appstore" style={{marginLeft: '10px'}}
                          onClick={this.showicon.bind(this)}/>
                </div>
                <div className='flex_1' style={{display: this.state.showTable}}>
                    <div className="yhlb-search">
                        <span>项目名称: </span>
                        <div className="example-input">
                            <Input placeholder="请输入项目名称" onChange={this.checkname.bind(this)}/>
                        </div>
                        <span style={{marginLeft: '10px'}}>项目类型: </span>
                        <div className="example-input" style={{textAlign: 'center'}}>
                            <Select optionFilterProp="children" showSearch placeholder="请选择"
                                    filterOption={(input, option) =>
                                        option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                    } onChange={this.handleChange1.bind(this)} style={{width: 200}}>
                                {
                                    xmxl.map((item, index) => (
                                        <Option value={item.name} key={index}>{item.name}</Option>
                                    ))
                                }
                            </Select>
                        </div>
                        <Button type="primary" className="yhlb-cx" onClick={this.check.bind(this)}>开始查询</Button>
                        <div className='example-input input_last'>
                            <Button type="primary" className='btn_last' id='btn_last'
                                    onClick={this.showModal.bind(this)}>添加子项目</Button>
                        </div>
                    </div>
                    <Table
                        columns={this.state.columns}
                        dataSource={this.state.data}
                        pagination={{pageSize: 6}}
                        bordered
                    />
                </div>
                <div className='kanban flex_1' style={{display: this.state.showIcon}}>
                    <div className='kanban_list'>
                        <div className='ghz kb_mk'>
                            <div className='title'>规划中</div>
                            <List
                                  itemLayout='vertical'
                                  dataSource={this.state.ghz}
                                  renderItem={item => (
                                    <List.Item>
                                      <Card className='card_name'>
                                                    <div>
                                                    <div className='mk'>
                                                    <div className='mk_left'>
                                                <div>{item.xmmc}</div>
                                                <div>{item.kssj}</div>
                                                </div>
                                                    <div className='mk_right'>{item.xmfzr}</div>
                                                    </div>
                                                    <div className='xg' onClick={this.edit.bind(this,item)}>修改</div>
                                                </div>
                                      </Card>
                                    </List.Item>
                                  )}
                                />
                        </div>
                        <div className='jsz kb_mk'>
                            <div className='title'>建设中</div>
                            <List
                                  itemLayout='vertical'
                                  dataSource={this.state.jsz}
                                  renderItem={item => (
                                    <List.Item>
                                      <Card className='card_name'>
                                                    <div>
                                                    <div className='mk'>
                                                    <div className='mk_left'>
                                                <div>{item.xmmc}</div>
                                                <div>{item.kssj}</div>
                                                </div>
                                                    <div className='mk_right'>{item.xmfzr}</div>
                                                    </div>
                                                    <div className='xg' onClick={this.edit.bind(this,item)}>修改</div>
                                                </div>
                                      </Card>
                                    </List.Item>
                                  )}
                                />
                        </div>
                        <div className='ywg kb_mk'>
                            <div className='title'>已完工</div>
                            <List
                                  itemLayout='vertical'
                                  dataSource={this.state.ywg}
                                  renderItem={item => (
                                    <List.Item>
                                      <Card className='card_name'>
                                                    <div>
                                                    <div className='mk'>
                                                    <div className='mk_left'>
                                                <div>{item.xmmc}</div>
                                                <div>{item.kssj}</div>
                                                </div>
                                                    <div className='mk_right'>{item.xmfzr}</div>
                                                    </div>
                                                    <div className='xg' onClick={this.edit.bind(this,item)}>修改</div>
                                                </div>
                                      </Card>
                                    </List.Item>
                                  )}
                                />
                        </div>
                        <div className='yys kb_mk'>
                            <div className='title'>已验收</div>
                            <List
                                  itemLayout='vertical'
                                  dataSource={this.state.yys}
                                  renderItem={item => (
                                    <List.Item>
                                      <Card className='card_name'>
                                                    <div>
                                                    <div className='mk'>
                                                    <div className='mk_left'>
                                                <div>{item.xmmc}</div>
                                                <div>{item.kssj}</div>
                                                </div>
                                                    <div className='mk_right'>{item.xmfzr}</div>
                                                    </div>
                                                    <div className='xg' onClick={this.edit.bind(this,item)}>修改</div>
                                                </div>
                                      </Card>
                                    </List.Item>
                                  )}
                                />
                        </div>
                    </div>
                </div>
                <Modal
                    title="新增子项目"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}>
                    <div style={{marginLeft: '10px', textAlign: 'center'}}>请选择子项目类型:</div>
                    <div className="example-input" style={{textAlign: "center"}}>
                        {this.state.lxxzk}
                    </div>
                </Modal>
                <Modal
                    style={{top: 64}}
                    className='mapBox subProjectList'
                    title={this.state.title}
                    visible={this.state.visiblePage}
                    onOk={this.createSubProject.bind(this)}
                    onCancel={this.handleCancelPage}
                >
                    <div
                    // onChange={this.valueChange.bind(this)}
                     onBlur={this.valueBind.bind(this)}>
                        {this.state.subProject}
                    </div>
                </Modal>
                <Modal
                    style={{top: 64}}
                    className='mapBox subProjectList'
                    title='详情'
                    visible={this.state.visiblePage1}
                    onOk={this.createSubProject.bind(this)}
                    onCancel={this.handleCancelPage}
                    footer={null}
                >
                    <div
                    // onChange={this.valueChange.bind(this)}
                     onBlur={this.valueBind.bind(this)}>
                        {this.state.subProject}
                    </div>
                </Modal>
            </div>
        );
    }
}

export default withRouter(Subject);

