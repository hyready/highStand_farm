import React, {Component} from "react";
import {withRouter} from "react-router-dom";
import {DatePicker, Table} from 'antd';
import moment from 'moment';
import Wj from '../wj';
import FileList from '../fileList'
import './index.less';
import {MapControl} from "freesia-tgis";
var mapControl
const { MonthPicker, RangePicker, WeekPicker } = DatePicker;
let json = {
    "center":  [1.2052991885419352E7, 3648040.6940910164],
    "zoom": 13,
    "layers": [{
        "name": "ArcGIS服务图层",
        "opacity": 1,
        "visible": true,
        "layerType": "ArcGISImageLayer",
        "label": {},
        "id": "layers",
        "sourceOptions": {
            "sourceType": "ImageArcGISSource",
            "url": "http://192.168.20.87:6080/arcgis/rest/services/%E9%AB%98%E6%A0%87%E5%87%86%E5%86%9C%E7%94%B0/gaobizozhun/MapServer"
        },
        "subLayerOptions": {
            "0": {"visible": false, "name": "两区地块"},
            "1": {"visible": false, "name": "补划基本农田"},
            "2": {"visible": false, "name": "高标准农田建设情况"},
            "3": {"visible": true, "name": "2019"},
            "4": {"visible": true, "name": "已建高标准农田"},
            "5": {"visible": true, "name": "在建高标准农田"},
            "6": {"visible": true, "name": "未建高标准农田"},
            "7": {"visible": true, "name": "2018"},
            "8": {"visible": true, "name": "已建高标准农田2018"},
            "9": {"visible": true, "name": "在建高标准农田2018"},
            "10": {"visible": true, "name": "未建高标准农田2018"},
            "11": {"visible": true, "name": "2017"},
            "12": {"visible": true, "name": "已建高标准农田2017"},
            "13": {"visible": true, "name": "在建高标准农田2017"},
            "14": {"visible": true, "name": "未建高标准农田2017"},
            "15": {"visible": false, "name": "田间工程"},
            "16": {"visible": true, "name": "其他地物"},
            "17": {"visible": true, "name": "其他地物"},
            "18": {"visible": true, "name": "项目"},
            "19": {"visible": true, "name": "转点"},
            "20": {"visible": true, "name": "项目-面"},
            "21": {"visible": true, "name": "行政地域"},
            "22": {"visible": true, "name": "CJQY5001542019"},
            "23": {"visible": true, "name": "乡级区域"},
            "24": {"visible": true, "name": "县级区域"}
        }
    }]
}
class Ghjd extends Component {
    constructor(props) {
        super(props);
        this.state = {
        	projectname:"",
            size: 'default',
            data2:[],
            columns2:[],
            data: [{
                key: '1',
                xmmc: '江津区红阳街道永红村高标准农田建设项目',
                xmfzr: '李浩',
                xmghzlwbcd: '90%',
                xmys: '200',
                xmkssj: "2019-04-12",
                xmjssj: "2019-12-30",
                cz: this.span("江津区红阳街道永红村高标准农田建设项目")
            }, {
                key: '2',
                xmmc: '江津区祥福镇香山村高标准农田建设项目',
                xmfzr: '李然',
                xmghzlwbcd: '80%',
                xmys: '220',
                xmkssj: "2019-04-16",
                xmjssj: "2019-12-30",
                cz: this.span("江津区祥福镇香山村高标准农田建设项目")
            }, {
                key: '3',
                xmmc: '江津区龙王镇清平村高标准农田建设项目',
                xmfzr: '张田',
                xmghzlwbcd: '80%',
                xmys: '220',
                xmkssj: "2019-04-16",
                xmjssj: "2019-12-30",
                cz: this.span("江津区龙王镇清平村高标准农田建设项目")
            }],
            columns: [{
                title: '项目名称',
                dataIndex: 'xmmc',
                width: 100,
            }, {
                title: '项目负责人',
                dataIndex: 'xmfzr',
            }, {
                title: '项目规划资料完备程度',
                dataIndex: 'xmghzlwbcd',
            }, {
                title: '项目预算(万元)',
                dataIndex: 'xmys',
            }, {
                title: '项目开始时间',
                dataIndex: 'xmkssj',
            }, {
                title: '项目结束时间',
                dataIndex: 'xmjssj',
            }, {
                title: '操作',
                dataIndex: 'cz',
                width:"300px"
            }],
            show: 'none',
            showMap:'none',
            show2: 'none',
            xm: []
        }

    };
    componentDidMount() {
    	var data2 = JSON.parse(JSON.stringify(this.state.data));
    	var columns2=JSON.parse(JSON.stringify(this.state.columns));
		this.setState({
			data2:data2,
			columns2:columns2
		});
    }
    span = (index) => {
        return (
            <span style={{width:'200px',display:'inlineBlock'}}>
				<span className="xgwj" onClick={this.clickwj}>相关文件</span>
				<span className="dtfb" onClick={this.clickMap}> 地图分布</span>
				<span className="db" onClick={this.clickdb.bind(this,index)}> 对比</span>
			</span>
        )
    }

    //对比
    clickdb = (projectname) => {
    	//console.log(projectname)
    	var data=JSON.parse(JSON.stringify(this.state.data));
    	var columns=JSON.parse(JSON.stringify(this.state.columns));
    	var columns2 = [];
    	var arr = ["江津区红阳街道永红村高标准农田建设项目","江津区祥福镇香山村高标准农田建设项目","江津区龙王镇清平村高标准农田建设项目"]
    	for(var i=0;i<data.length;i++){
    		data[i].xmfzr=undefined,
            data[i].xmghzlwbcd=undefined,
            data[i].xmys=undefined,
            data[i].xmkssj=undefined,
            data[i].xmjssj=undefined,
            data[i].cz=this.span(arr[i])
    	}
    	//console.log(data)
    	//columns=columns[0];
    	for(var j=0;j<columns.length;j++){
    		if(columns[j].title=="项目名称"||columns[j].title=="操作"){
    			columns2.push(columns[j]);
    		}
    	}
		this.setState({
			show: 'block',
			show2:'none',
			showMap:'none',
			data:data,
			columns:columns2,
			projectname:projectname
		});
		var ghzl_detail=document.querySelector(".ghzl-detail");
		ghzl_detail.style.flex=2;
    }
    clickMap=()=>{
    	var data=JSON.parse(JSON.stringify(this.state.data));
    	var columns=JSON.parse(JSON.stringify(this.state.columns));
    	var columns2 = [];
    	var arr = ["江津区红阳街道永红村高标准农田建设项目","江津区祥福镇香山村高标准农田建设项目","江津区龙王镇清平村高标准农田建设项目"]
    	for(var i=0;i<data.length;i++){
    		data[i].xmfzr=undefined,
            data[i].xmghzlwbcd=undefined,
            data[i].xmys=undefined,
            data[i].xmkssj=undefined,
            data[i].xmjssj=undefined,
            data[i].cz=this.span(arr[i])
    	}
    	//console.log(data)
    	//columns=columns[0];
    	for(var j=0;j<columns.length;j++){
    		if(columns[j].title=="项目名称"||columns[j].title=="操作"){
    			columns2.push(columns[j]);
    		}
    	}
        this.setState({
            show: 'none',
            show2: 'none',
            showMap: 'flex',
            fileList:'none',
            data:data,
			columns:columns2
        });
        var ghzl_map=document.querySelector(".ghzl-map");
		ghzl_map.style.flex=2;
        if(mapControl){
            return
        }
        setTimeout(()=>{
            mapControl = new MapControl({
                rendererType: 'canvas',
                elementId: 'fb_map',
                featureClick: (result) => {
                    var properties = result.features[0].getProperties();
                    this.setState({
                        fileList:'block'
                    })
                },
                ...json
            });
        },200)
    }
    closeMap = () => {
    	var data2=JSON.parse(JSON.stringify(this.state.data2));
    	for(var i=0;i<data2.length;i++){
    		data2[i].cz=this.span();
    	}
        this.setState({
        	showMap: 'none',
        	data:data2,
			columns:this.state.columns2
        });
    }
    closedb = () => {
    	//console.log(this.state.data2)
    	var data2=JSON.parse(JSON.stringify(this.state.data2));
    	for(var i=0;i<data2.length;i++){
    		data2[i].cz=this.span();
    	}
		this.setState({
			show: 'none',
			showMap : 'none',
			data:data2,
			columns:this.state.columns2,
			projectname:""
		});
    }

    //文件
    clickwj = () => {
    	var data=JSON.parse(JSON.stringify(this.state.data));
    	var columns=JSON.parse(JSON.stringify(this.state.columns));
    	var columns2 = [];
    	var arr = ["江津区红阳街道永红村高标准农田建设项目","江津区祥福镇香山村高标准农田建设项目","江津区龙王镇清平村高标准农田建设项目"]
    	for(var i=0;i<data.length;i++){
    		data[i].xmfzr=undefined,
            data[i].xmghzlwbcd=undefined,
            data[i].xmys=undefined,
            data[i].xmkssj=undefined,
            data[i].xmjssj=undefined,
            data[i].cz=this.span(arr[i])
    	}
    	//console.log(data)
    	//columns=columns[0];
    	for(var j=0;j<columns.length;j++){
    		if(columns[j].title=="项目名称"||columns[j].title=="操作"){
    			columns2.push(columns[j]);
    		}
    	}
        this.setState({
			show2: 'block',
			show: 'none',
			showMap : 'none',
			data:data,
			columns:columns2
		});
		var ghzl_wj=document.querySelector(".ghzl-wj");
		ghzl_wj.style.flex=2;
    }
    closewj = () => {
    	var data2=JSON.parse(JSON.stringify(this.state.data2));
    	for(var i=0;i<data2.length;i++){
    		data2[i].cz=this.span();
    	}
		this.setState({
			show2: 'none',
			showMap: 'none',
			data:data2,
			columns:this.state.columns2
		});
    }

    render() {
        return (
            <div style={{height: '100%'}} className='projectManage_projectPlan_ghzl'>
                <div className='time'>
                    <div className='time'>
                        <span>项目时间：</span><RangePicker/>
                    </div>
                </div>
                <div className='content'>
                    <div className="ghzl-table">
                        <Table className='table1'
                            columns={this.state.columns}
                            dataSource={this.state.data}
                            bordered
                            pagination={{pageSize:6}}
                        />
                    </div>
                    <div className="ghzl-detail" style={{display: this.state.show}}>
                        <div className='detail_top'>
                            <span style={{marginLeft: '10px'}}>{this.state.projectname}</span>
                            <span className="close" style={{marginRight: '10px'}} onClick={this.closedb.bind(this)}>关闭</span>
                        </div>
                        <div className='detail_bottom'>
                            <div className="first">
                                <div className='bt bt1'>项目区域图</div>
                                <div className='img img1'></div>
                            </div>
                            <div className="second">
                                <div className='bt bt2'>规划效果图</div>
                                <div className='img img2'></div>
                            </div>
                        </div>
                    </div>
                    <div className="ghzl-map" style={{display: this.state.showMap}}>
                        <div className='close' onClick={this.closeMap.bind(this)}>关闭</div>
                        <div className='fb_content'>
                            <div id='fb_map' className='fb_map'></div>
                            <div style={{display:this.state.fileList}} className='fileList'>
                                <FileList ></FileList>
                            </div>
                        </div>
                    </div>
                    <div className="ghzl-wj" style={{display: this.state.show2}}>
                        <div className='close' onClick={this.closewj.bind(this)}>关闭</div>
                        <Wj></Wj>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Ghjd);