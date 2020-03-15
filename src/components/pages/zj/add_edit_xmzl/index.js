import React, {Component} from "react";
import {withRouter} from "react-router-dom";
import { Table,Icon,Button,Input,InputNumber, Popconfirm, Form,Modal ,Select} from 'antd';
import ReactEcharts from 'echarts-for-react';
import {connect} from "react-redux";
import { FetchHelper } from "freesia-core";
import './index.less';
import FormItem from "antd/lib/form/FormItem";
import zxmlxJson  from '../zxmlx'

const { Option } = Select
const zxmlx = zxmlxJson
class Add_Edit_Xmzl extends Component {
    constructor(props){
        super(props);
        this.state={
           data:this.props.data,
           zxdata:{}
        }
    }
    componentWillMount =() =>{
        this.props.add
    }
    componentDidMount = () =>{
        // var _this = this
        this.props.onRef(this)
        debugger
    }
    change(e){
        // if(this.props.add){
        //     return false
        // }else{
            var field = e.target.name;
            var value = e.target.value;
            if(this.props.add){
                var zxdata = this.state.data
                zxdata[field]= value
                this.setState({
                    data:zxdata
                })
            }else{
                var data = this.state.data
                data[field] = value
                this.setState({
                    data:data
                })
            }
            
        // }
    }
    clear(){
        this.setState({
            data:{}
    })
    }
    handleChange(value,index){
        debugger
        if(this.props.add){
            var zxdata = this.state.data
                zxdata[index.props.name]= value
                this.setState({
                    data:zxdata
                })
        }else{
            var data = this.state.data
                data[index.props.name] = value
                this.setState({
                    data:data
                })
        }
    }
    render() {
        var data = this.state.data;
        // if(this.props.add){
        //     data = {}
        // }
        
        return (
            <div className='add_edit_xmzl'>
            <table className='add_edit_xmzl' onChange={this.change.bind(this)}>
                    <tbody>
                    <tr>
                        <td><span>标识码:</span><div><input value={data.bsm} name='bsm'/></div></td>
                        <td><span>要素代码:</span><div><input value={data.ysdm} name='ysdm'/></div></td>
                        <td><span>项目编号:</span><div><input value={data.xmbh} name='xmbh'/></div></td>
                    </tr>
                    <tr>
                        <td><span>项目名称:</span><div><input value={data.xmmc} name='xmmc'/></div></td>
                        <td><span>项目类型:</span><div>
                                                        <Select placeholder="请选择" className='selectzt' onChange={this.handleChange.bind(this)} style={{width: 300}} allowClear={true} value={data.xmlx}>
                                                                {
                                                                    zxmlx.map((item, index) => (
                                                                        <Option value={item.name} key={index} title={item.name} name='xmlx'>{item.name}</Option>
                                                                    ))
                                                                }
                                                        </Select>
                                                    </div></td>
                        <td><span>项目状态:</span>
                                                <div>
                                                    {/* <input value={data.xmzt} name='xmzt'/> */}
                                                    <Select placeholder="请选择" className='selectzt' onChange={this.handleChange.bind(this)} style={{width: 300}} allowClear={true} value={data.xmzt}>
                                                                    <Option value={'规划中'} key={1} name='xmzt'>规划中</Option>
                                                                    <Option value={'已完工'} key={2} name='xmzt'>已完工</Option>
                                                                    <Option value={'建设中'} key={3} name='xmzt'>建设中</Option>
                                                        </Select>
                                                </div>
                                                </td>
                    </tr>
                    <tr>
                        <td><span>计划开始时间:</span><div><input type='date' value={data.jhkssj} name='jhkssj'/></div></td>
                        <td><span>计划结束时间:</span><div><input type='date' value={data.jhjssj} name='jhjssj'/></div></td>
                        <td><span>实际开始时间:</span><div><input type='date' value={data.kssj} name='kssj'/></div></td>
                    </tr>
                    <tr>
                        <td><span>实际结束时间:</span><div><input type='date' value={data.jssj} name='jssj'/></div></td>
                        <td><span>项目建设地点:</span><div><input value={data.xmjsdd} name='xmjsdd'/></div></td>
                        <td><span>项目建设规模:</span><div><input value={data.xmjsgm} name='xmjsgm'/></div></td>
                    </tr>
                    <tr>
                        <td><span>整理规模:</span><div><input value={data.zlgm} name='zlgm'/></div></td>
                        <td><span>基本农田整理规模:</span><div><input value={data.jbntzlgm} name='jbntzlgm'/></div></td>
                        <td><span>复垦规模:</span><div><input value={data.fkgm} name='fkgm'/></div></td>

                    </tr>
                    <tr>
                        <td><span>开发规模:</span><div><input value={data.kfgm} name='kfgm'/></div></td>
                        <td><span>建成高标准基本农田:</span><div><input value={data.jcgbzjbnt} name='jcgbzjbnt'/></div></td>
                        <td><span>高标准基本农田建设条件:</span><div><input value={data.gbzntjstj} name='gbzntjstj'/></div></td>

                    </tr>
                    <tr>
                        <td><span>新增耕地面积:</span><div><input value={data.xzgdmj} name='xzgdmj'/></div></td>
                        <td><span>新增耕地率:</span><div><input value={data.xzgdl} name='xzgdl'/></div></td>
                        <td><span>灾毁耕地面积:</span><div><input value={data.zhgdmj} name='zhgdmj'/></div></td>
                    </tr>
                    <tr>
                        <td><span>地貌类型:</span><div><input value={data.dmlx} name='dmlx'/></div></td>
                        <td><span>建设期:</span><div><input value={data.jsq} name='jsq'/></div></td>
                        <td><span>项目实施单位:</span><div><input value={data.xmssdw} name='xmssdw'/></div></td>
                    </tr>
                    <tr>
                        <td><span>下达预算与计划的机关:</span><div><input value={data.xdysjg} name='xdysjg'/></div></td>
                        <td><span>下达预算与计划文件名:</span><div><input value={data.xdyswjm} name='xdyswjm'/></div></td>
                        <td><span>下达预算与计划文号:</span><div><input value={data.xdyswh} name='xdyswh'/></div></td>
                    </tr>
                    <tr>
                        <td><span>批复日期:</span><div><input type='date' value={data.pfrq} name='pfrq'/></div></td>
                        <td><span>验收时间:</span><div><input type='date' value={data.yssj} name='yssj'/></div></td>
                        <td><span>验收单位:</span><div><input value={data.ysdw} name='ysdw'/></div></td>
                    </tr>
                    <tr>
                        <td><span>验收文号:</span><div><input value={data.yswh} name='yswh'/></div></td>
                        <td><span>项目总投资:</span><div><input value={data.xmztz} name='xmztz'/></div></td>
                        <td><span>灌溉方式:</span><div><input value={data.ggfs} name='ggfs'/></div></td>
                    </tr>
                    <tr>
                        <td><span>灌溉水源:</span><div><input value={data.ggsy} name='ggsy'/></div></td>
                        <td><span>新增灌溉面积:</span><div><input value={data.xzggmj} name='xzggmj'/></div></td>
                        <td><span>开采地下水量:</span><div><input value={data.kcdxsl} name='kcdxsl'/></div></td>
                    </tr>
                    <tr>
                        <td><span>投资标准:</span><div><input value={data.tzbz} name='tzbz'/></div></td>
                        <td><span>年效益:</span><div><input value={data.nxy} name='nxy'/></div></td>
                        <td><span>静态投资回收期:</span><div><input value={data.jttzhsq} name='jttzhsq'/></div></td>
                    </tr>
                    <tr>
                        <td><span>设计灌溉保证率:</span><div><input value={data.sjggbzl} name='sjggbzl'/></div></td>
                        <td><span>灌溉定额:</span><div><input value={data.ggde} name='ggde'/></div></td>
                        <td><span>灌溉谁利用系数:</span><div><input value={data.ggslyxs} name='ggslyxs'/></div></td>
                    </tr>
                    <tr>
                        <td><span>备注:</span><div><input value={data.bz} name='bz'/></div></td>
                        <td><span></span><div></div></td>
                        <td><span></span><div></div></td>
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }

}
export default withRouter(Add_Edit_Xmzl);