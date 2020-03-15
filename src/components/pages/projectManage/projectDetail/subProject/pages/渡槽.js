import React, {Component} from "react";
import {withRouter} from "react-router-dom";
import {Input , Select} from 'antd';
import XmlxJson from './xmzt'




const xmxl = XmlxJson
const { Option} = Select
class 渡槽 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sjdata: this.props.data,
            xzdata:{},
            editdata:{},
            editzt:this.props.editzt,
            xmlx:''
        }
    }
     componentDidMount() {
        this.props.onRef(this)
    }
    componentWillMount(){
    }
    change(e){
        var field = e.target.name;
        var value = e.target.value;
        if(this.props.editzt){
        var data = this.state.sjdata
        data[field] = value
        this.setState({
            sjdata:data
        })
        }else{
            // var data = this.state.xzdata
            // data[field] = value
            // this.setState({
            //     xzdata:data
            // })
            return false
        }
        
    }
    handleChange(e){
        var field = 'xmzt';
            var value = e;
        if(this.props.editzt){
            var data = this.state.sjdata
            data[field] = value
            this.setState({
                sjdata:data
            })
            }else{
                // var data = this.state.xzdata
                // data[field] = e
                return false
                // this.setState({
                //     xzdata:data
                // })
            }
    }
    render() {
            var data = this.state.sjdata;
            debugger
        if(data.props){
            data = {}
        }
        return (
            <div className=''>
                <table className='projectData' onChange={this.change.bind(this)} > <tbody>
                   
                        <tr>
                            <td><span>项目名称：</span><input style={{width:'200px'}} value={data.xmmc} name = 'xmmc'/></td>
                            <td><span>项目状态：</span><Select placeholder="请选择" className='selectzt' onChange={this.handleChange.bind(this)} style={{width: 200}} allowClear={true} defaultValue={data.xmzt}
                                                                disabled={this.props.isdetail}
                                                        >
                                                            {
                                                                xmxl.map((item, index) => (
                                                                    <Option value={item.name} key={index} name='xmzt'>{item.name}</Option>
                                                                ))
                                                            }
                                                        </Select></td>
                            <td><span>开始时间：</span><input style={{width:'200px'}} type='date'  type='date' value={data.kssj} name = 'kssj'/></td>

                        </tr>
                   
                        <tr>
                            <td><span>结束时间：</span><input style={{width:'200px'}}  type='date'  type='date' value={data.jssj} name = 'jssj'/></td>
                            <td><span>标识码：</span><input style={{width:'200px'}}  value={data.bsm} name = 'bsm'/></td>
                            <td><span>要素代码：</span><input style={{width:'200px'}}  value={data.ysdm} name = 'ysdm'/></td>

                        </tr>
                    
                        <tr>
                            <td><span>渡槽结构类型：</span><input style={{width:'200px'}}  value={data.dcjglx} name = 'dcjglx'/></td>
                            <td><span>渡槽编号：</span><input style={{width:'200px'}}  value={data.dcbh} name = 'dcbh'/></td>
                            <td><span>渡槽名称：</span><input style={{width:'200px'}}  value={data.dcmc} name = 'dcmc'/></td>

                        </tr>
                        <tr>
                            <td><span>设计流量(立方米/秒)：</span><input style={{width:'200px'}}  value={data.sjll} name = 'sjll'/></td>
                            <td><span>横断面形式：</span><input style={{width:'200px'}}  value={data.hdmxs} name = 'hdmxs'/></td>
                            <td><span>渡槽跨度(米)：</span><input style={{width:'200px'}}  value={data.dckd} name = 'dckd'/></td>
                        </tr>
                        <tr>
                            <td><span>建设性质：</span><input style={{width:'200px'}}  value={data.jsxz} name = 'jsxz'/></td>
                            <td><span>单体工程图名称：</span><input style={{width:'200px'}}  value={data.dttmc} name = 'dttmc'/></td>
                            <td><span>工程完成时间：</span><input style={{width:'200px'}} type='date' value={data.gcwcsj} name = 'gcwcsj'/></td>

                        </tr>
                    
                        <tr>
                            <td><span>所在工程标段：</span><input style={{width:'200px'}}  value={data.gcbd} name = 'gcbd'/></td>
                            <td><span>施工单位：</span><input style={{width:'200px'}}  value={data.sgdw} name = 'sgdw'/></td>
                            <td><span>监理单位：</span><input style={{width:'200px'}}  value={data.jldw} name = 'jldw'/></td>

                        </tr>
                   
                        <tr>
                            <td><span>监理工程师姓名：</span><input style={{width:'200px'}}  value={data.jlsxm} name = 'jlsxm'/></td>
                            <td><span>监理师证书编号：</span><input style={{width:'200px'}}  value={data.jlszsh} name = 'jlszsh'/></td>
                            <td><span>管护责任人：</span><input style={{width:'200px'}}  value={data.ghzrr} name = 'ghzrr'/></td>

                        </tr>
                    <tr>
                        <td><span>项目负责人：</span><input style={{width:'200px'}}  value={data.xmfzr} name = 'xmfzr'/></td>
                        <td><span>影像名称：</span><input style={{width:'200px'}}  value={data.yxmc} name = 'yxmc'/></td>
                        <td><span>备注：</span><input style={{width:'200px'}}  value={data.bz} name = 'bz'/></td>
                    </tr>
                </tbody> </table>
            </div>
        );
    }
}

export default withRouter(渡槽);

