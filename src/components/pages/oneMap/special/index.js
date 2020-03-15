import React, {Component} from "react";
import {withRouter} from "react-router-dom";
import {sideMenus} from "../../../main/menus";
import {MapControl} from 'freesia-tgis';
import './index.less';
import {Layout, Menu, Select, Tabs, Icon, Collapse, Slider, Switch} from "antd";
import LineChart from './components/lineChart';
import LineChart2 from './components/lineChart/index2.jsx';
import PerChart from './components/perChart';
import 'freesia-tgis/lib/css/index.less'

const Panel = Collapse.Panel;
const {Header, Content, Sider} = Layout;
const Option = Select.Option;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const TabPane = Tabs.TabPane;

let json = {
    "center": [1.2051938322338643E7, 3647382.833579937],
    "zoom" :13,
    "layers": [{
        "name": "ArcGIS服务图层",
        "opacity": 1,
        "visible": true,
        "layerType": "ArcGISImageLayer",
        "label": {},
        "id": "layers",
        "sourceOptions": {
            "sourceType": "ImageArcGISSource",
            "url": "/arcgis/rest/services/%E9%AB%98%E6%A0%87%E5%87%86%E5%86%9C%E7%94%B0/gaobizozhun/MapServer"
        },
        "subLayerOptions": {
            "0": {"visible": false, "name": "两区地块"},
            "1": {"visible": true, "name": "补划基本农田"},
            "2": {"visible": true, "name": "高标准农田建设情况"},
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
            "15": {"visible": true, "name": "田间工程"},
            "16": {"visible": true, "name": "其他地物"},
            "17": {"visible": true, "name": "其他地物"},
            "18": {"visible": false, "name": "项目"},
            "19": {"visible": true, "name": "转点"},
            "20": {"visible": true, "name": "项目-面"},
            "21": {"visible": true, "name": "行政地域"},
            "22": {"visible": true, "name": "CJQY5001542019"},
            "23": {"visible": true, "name": "乡级区域"},
            "24": {"visible": true, "name": "县级区域"}
        }
    }]
}
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
let mapControl;

class OneMap extends Component {
    constructor(...args) {
        super(...args);
        this.state = {
            XMMC: '',
            BSM: '',
            MJ: '',
            ZT: '',
            XMJD: '',
            XMZJ: '',
            show: 'none',
        };
    }

    componentDidMount() {
        var me = this;
        mapControl = new MapControl({
            rendererType: 'canvas',
            elementId: 'map-div',
            /*featureClick: (result, e) => {
                console.log(...result.features[0].getProperties())
                me.setState({
                    show: 'block',
                })
                var data = result.features[0].getProperties();

            },*/
            ...json
        });
        // mc.map.addOverlay()
    }

    getLayers = () => {
        return (mapControl.map.getLayers().find(function (layer) {
            return layer.get('id') === 'layers'
        }).getAllLayers());
    }
    hideFarmLayer = (checked, event) => {
        var layers = this.getLayers()
        layers[2].set("visible", checked)
    }
    hideBaseFarmLayer = (checked, event) => {
        var layers = this.getLayers()
        layers[1].set("visible", checked)
    }
    filterYear = (value) => {
        var layers = this.getLayers()
        if (value[0] == 2019) {
            layers[3].set("visible", true)
            layers[7].set("visible", false)
            layers[11].set("visible", false)
        } else if (value[0] == 2018) {
            layers[7].set("visible", true)
            layers[3].set("visible", false)
            layers[11].set("visible", false)
        } else if (value[0] == 2017) {
            layers[11].set("visible", true)
            layers[3].set("visible", false)
            layers[7].set("visible", false)
        } else {
            layers[3].set("visible", false)
            layers[7].set("visible", false)
            layers[11].set("visible", false)
        }
    }

    render() {
        return (
            <div className='oneMap_special'>
                <div className='sideMenu'>
                    <div className='body_part'>
                        <Tabs defaultActiveKey="1">
                            <TabPane tab={<span><Icon type="menu-unfold"/></span>} key="1">
                                <div className='box'>
                                    <span>图层</span>
                                    <hr/>
                                    <Collapse defaultActiveKey={['1']}>
                                        <ul>
                                            <li>
                                                <div style={{padding: '5px', borderBottom: '1px solid #ddd'}}>
                                                    <Switch size="small" checkedChildren={<Icon type="check"/>}
                                                            onChange={this.hideFarmLayer.bind(this)}
                                                            unCheckedChildren={<Icon type="close"/>} defaultChecked/>
                                                    <span style={{marginLeft: '10px'}}>建设状态</span>
                                                </div>
                                                <ul>
                                                    <li><span className='color'
                                                              style={{background: '#B02C03'}}></span><span>在建高标准农田</span>
                                                    </li>
                                                    <li><span className='color'
                                                              style={{background: '#00878f'}}></span><span>已建高标准农田</span>
                                                    </li>
                                                    <li><span className='color'
                                                              style={{background: '#4de600'}}></span><span>未建高标准农田</span>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <div style={{padding: '5px', borderBottom: '1px solid #ddd'}}>
                                                    <Switch size="small" checkedChildren={<Icon type="check"/>}
                                                            onChange={this.hideBaseFarmLayer.bind(this)}
                                                            unCheckedChildren={<Icon type="close"/>} defaultChecked/>
                                                    <span style={{marginLeft: '10px'}}>补划情况</span>
                                                </div>
                                                <ul>
                                                    <li><span className='color'
                                                              style={{background: '#94B3B5'}}></span><span>补划基本农田</span>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </Collapse>,
                                </div>

                            </TabPane>
                            <TabPane tab={<span><Icon type="filter"/></span>} key="2">
                                <div className='box'>
                                    <span>数据过滤</span>
                                    <hr/>
                                    <Collapse defaultActiveKey={['1']}>
                                        <ul>
                                            <li>
                                                <div>
                                                    <img style={{width: '100%'}} src="/images/chart.png"/>
                                                </div>
                                                <Slider onChange={this.filterYear.bind(this)} range step={1} min={2015}
                                                        max={2019} defaultValue={[2019]}/>
                                                <div className='year'><span>2015年</span><span
                                                    style={{float: 'right'}}>2019年</span></div>
                                            </li>
                                        </ul>
                                    </Collapse>
                                </div>
                            </TabPane>
                            <TabPane tab={<span><Icon type="bar-chart"/></span>} key="3">
                                <div className='box'>
                                    <span>数据统计</span>
                                    <hr/>
                                    <Collapse defaultActiveKey={['1']}>
                                        <ul>
                                            <li>
                                                <div style={{padding: '5px', borderBottom: '1px solid #ddd'}}>
                                                    <span style={{marginLeft: '10px'}}>高标准建筑面积占比</span>
                                                </div>
                                                <ul>
                                                    <li className='chart'>
                                                        <LineChart id='chart1' legend='已建,在建,未建,补划'/>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <div style={{padding: '5px', borderBottom: '1px solid #ddd'}}>
                                                    <span style={{marginLeft: '10px'}}>高标准项目情况</span>
                                                </div>
                                                <ul>
                                                    <li className='chart'>
                                                        <PerChart id='chart2' legend='招标,在建,验收,延期,返工'
                                                                  data='120,200,150,80,70'/>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <div style={{padding: '5px', borderBottom: '1px solid #ddd'}}>
                                                    <span style={{marginLeft: '10px'}}>高标准项目资金</span>
                                                </div>
                                                <ul>
                                                    <li className='chart'>
                                                        <LineChart2 id='chart3' legend='项目1,项目2,项目3,项目4'/>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <div style={{padding: '5px', borderBottom: '1px solid #ddd'}}>
                                                    <span style={{marginLeft: '10px'}}>田间工程建设情况</span>
                                                </div>
                                                <ul>
                                                    <li className='chart'>
                                                        <PerChart id='chart4'
                                                                  legend='土地整平,土壤配肥,灌溉水源,灌溉渠道,排水沟,田间灌溉,建筑物,泵站,农用配电,田间道路,防护林网'
                                                                  data='100,110,120,180,210,220,230,300,305,300,350'/>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>

                                    </Collapse>
                                </div>
                            </TabPane>
                        </Tabs>
                    </div>
                </div>
                <div id='info' style={{display: this.state.show}} className='infoBox'>
                    <p>{this.props.XMMC}</p>
                    <hr/>
                    <ul>
                        <li>
                            <span>标识码：</span><span className='flex1'>{this.props.BSM}</span>
                        </li>
                        <li>
                            <span>项目资金：</span><span className='flex1'>{this.props.XMZJ}</span>
                        </li>
                        <li>
                            <span>面积：</span><span className='flex1'>{this.props.MJ}(亩)</span>
                        </li>
                        <li>
                            <span>项目进度：</span><span className='flex1'>{this.props.XMJD} %</span>
                        </li>
                    </ul>
                </div>
                <div id='map-div' className='map'></div>
            </div>
        );
    }
}

export default withRouter(OneMap);
