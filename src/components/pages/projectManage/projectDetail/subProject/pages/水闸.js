import React, {Component} from "react";
import {withRouter} from "react-router-dom";

class 水闸 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sjdata: this.props.data,
            xzdata:{},
            editdata:{},
            editzt:this.props.editzt
        }
    }

    componentDidMount() {
        this.props.onRef(this)
    }
    change(e){
        if(this.props.editzt){
        var field = e.target.name;
        var value = e.target.value;
        var data = this.state.sjdata
        data[field] = value
        this.setState({
            sjdata:data
        })
        }else{
            return false
        }
        
    }
    render() {
        var data = this.state.sjdata;
        if(data.props){
            data = {}
        }
        return (
            <div className=''>
                <table className='projectData'  onChange={this.change.bind(this)} >
                    <tbody>

                    <tr>
                        <td><span>项目名称：</span><input value={data.xmmc} name='xmmc'/></td>
                        <td><span>项目状态：</span><input value={data.xmzt} name='xmzt'/></td>
                        <td><span>开始时间：</span><input type='date'  value={data.kssj} name='kssj'/></td>

                    </tr>

                    <tr>
                        <td><span>结束时间：</span><input type='date'  value={data.jssj} name='jssj'/></td>
                        <td><span>标识码：</span><input value={data.bsm} name='bsm'/></td>
                        <td><span>要素代码：</span><input value={data.ysdm} name='ysdm'/></td>

                    </tr>

                    <tr>
                        <td><span>水闸类型：</span><input value={data.szlx} name='szlx'/></td>
                        <td><span>水闸编号：</span><input value={data.szbh} name='szbh'/></td>
                        <td><span>设计流量(立方米/秒)：</span><input value={data.sjll} name='sjll'/></td>

                    </tr>
                    <tr>
                        <td><span>水闸型式：</span><input value={data.szxs} name='szxs'/></td>
                        <td><span>闸宽(米)：</span><input value={data.zk} name='zk'/></td>
                        <td><span>闸高(米)：</span><input value={data.zg} name='zg'/></td>
                    </tr>
                    <tr>
                        <td><span>建设性质：</span><input value={data.jsxz} name='jsxz'/></td>
                        <td><span>单体工程图名称：</span><input value={data.dttmc} name='dttmc'/></td>
                        <td><span>闸门生产厂家：</span><input value={data.zmsccj} name='zmsccj'/></td>


                    </tr>

                    <tr>
                        <td><span>工程完成时间：</span><input type='date'  value={data.gcwcsj} name='gcwcsj'/></td>
                        <td><span>所在工程标段：</span><input value={data.gcbd} name='gcbd'/></td>
                        <td><span>施工单位：</span><input value={data.sgdw} name='sgdw'/></td>


                    </tr>

                    <tr>
                        <td><span>监理单位：</span><input value={data.jldw} name='jldw'/></td>
                        <td><span>监理工程师姓名：</span><input value={data.jlsxm} name='jlsxm'/></td>
                        <td><span>监理师证书编号：</span><input value={data.jlszsh} name='jlszsh'/></td>

                    </tr>
                    <tr>
                        <td><span>管护责任人：</span><input value={data.ghzrr} name='ghzrr'/></td>
                        <td><span>影像名称：</span><input value={data.yxmc} name='yxmc'/></td>
                        <td><span>项目负责人：</span><input value={data.xmfzr} name = 'xmfzr'/></td>
                    </tr>
                    <tr>
                        <td><span>备注：</span><input value={data.bz} name='bz'/></td>
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default withRouter(水闸);

