import React, {Component} from "react";
import {withRouter} from "react-router-dom";

class 农田林网工程 extends Component {
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
        debugger
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
                <table className='projectData' onChange={this.change.bind(this)}> <tbody>
                    <tr>
                        <td><span>项目名称：</span><input value={data.xmmc} name = 'xmmc'/></td>
                        <td><span>项目状态：</span><input value={data.xmzt} name = 'xmzt'/></td>
                        <td><span>开始时间：</span><input type='date'  value={data.kssj} name = 'kssj'/></td>
                    </tr>
                    <tr>
                        <td><span>结束时间：</span><input type='date'  value={data.jssj} name = 'jssj'/></td>
                        <td><span>标识码：</span><input value={data.bsm} name = 'bsm'/></td>
                        <td><span>要素代码：</span><input value={data.ysdm} name = 'ysdm'/></td>
                    </tr>
                    <tr>
                        <td><span>防护林类型：</span><input value={data.fhllx} name = 'fhllx'/></td>
                        <td><span>株距(米)：</span><input value={data.zj} name = 'zj'/></td>
                        <td><span>行距(米)：</span><input value={data.hj} name = 'hj'/></td>
                    </tr>
                    <tr>
                        <td><span>行数(棵)：</span><input value={data.hs} name = 'hs'/></td>
                        <td><span>防护林长度：</span><input value={data.fhlcd} name = 'fhlcd'/></td>
                        <td><span>株数：</span><input value={data.zs} name = 'zs'/></td>
                    </tr>
                    <tr>
                        <td><span>防护林占地面积(公顷)：</span><input value={data.fhlzdmj} name = 'fhlzdmj'/></td>
                        <td><span>树种：</span><input value={data.sz} name = 'sz'/></td>
                        <td><span>胸径(米)：</span><input value={data.xj} name = 'xj'/></td>
                    </tr>
                    <tr>
                        <td><span>建设性质：</span><input value={data.jsxz} name = 'jsxz'/></td>
                        <td><span>单体工程图名称：</span><input value={data.dttmc} name = 'dttmc'/></td>
                        <td><span>苗木生产单位：</span><input value={data.mmscdw} name = 'mmscdw'/></td>
                    </tr>

                    <tr>
                        <td><span>工程完成时间：</span><input type='date'  value={data.gcwcsj} name = 'gcwcsj'/></td>
                        <td><span>所在工程标段：</span><input value={data.gcbd} name = 'gcbd'/></td>
                        <td><span>施工单位：</span><input value={data.sgdw} name = 'sgdw'/></td>
                    </tr>
                    <tr>
                        <td><span>监理单位：</span><input value={data.jldw} name = 'jldw'/></td>
                        <td><span>监理工程师姓名：</span><input value={data.jlsxm} name = 'jlsxm'/></td>
                        <td><span>监理师证书编号：</span><input value={data.jlszsh} name = 'jlszsh'/></td>
                    </tr>
                    <tr>
                        <td><span>项目负责人：</span><input value={data.xmfzr} name = 'xmfzr'/></td>
                        <td><span>管护责任人：</span><input value={data.ghzrr} name='ghzrr'/></td>
                        <td><span>影像名称：</span><input value={data.yxmc} name='yxmc'/></td>
                    </tr>
                    <tr>
                        <td><span>备注：</span><input value={data.bz} name='bz'/></td>
                    </tr>
                </tbody> </table>
            </div>
        );
    }
}

export default withRouter(农田林网工程);

