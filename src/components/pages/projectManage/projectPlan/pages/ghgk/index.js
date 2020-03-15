import React, {Component} from "react";
import {withRouter} from "react-router-dom";
import './index.less'
import Line from "../../components/line"
import Pie from "../../components/pie"
import {MapControl} from "freesia-tgis";
import {DatePicker} from 'antd';

const {MonthPicker, RangePicker, WeekPicker} = DatePicker;
var mapControl;
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

class Ghgk extends Component {
    componentDidMount() {
        mapControl = new MapControl({
            rendererType: 'canvas',
            elementId: 'ghgkMap',
            featureClick: (result) => {
                var properties = result.features[0].getProperties();

            },
            ...json
        });
    }

    render() {
        return (
            <div className='projectManage_projectPlan_ghgk'>
                <div className='time'>
                    <span>项目时间：</span><RangePicker/>
                </div>
                <div className='content'>
                    <div className='left'>
                        <div className='title'>项目统计</div>
                        <div className='top chart'>
                            <Pie id='pieChart' legend={['农村垃圾污水治理', '公厕覆盖', '村容村貌提升']}></Pie>
                        </div>
                        <div className='bottom chart'>
                            <Line id='lineChart' legend={['农村垃圾污水治理', '公厕覆盖', '村容村貌提升']}></Line>
                        </div>
                    </div>
                    <div className='right'>
                        <div className='title'>项目分布</div>
                        <div id='ghgkMap' className='ghgkMap'></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Ghgk);
