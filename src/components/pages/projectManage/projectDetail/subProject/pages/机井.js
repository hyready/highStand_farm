import React, {Component} from "react";
import {withRouter} from "react-router-dom";

class 机井 extends Component {
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
                <table className='projectData'  onChange={this.change.bind(this)}>
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
                        <td><span>编号：</span><input value={data.bh} name='bh'/></td>
                        <td><span>设计出水量：</span><input value={data.csl} name='csl'/></td>
                        <td><span>潜水泵型号：</span><input value={data.qsbxh} name='qsbxh'/></td>

                    </tr>
                    <tr>
                        <td><span>设计井深：</span><input value={data.sjjs} name='sjjs'/></td>
                        <td><span>单井控制面积：</span><input value={data.djkzmj} name='djkzmj'/></td>
                        <td><span>井管直径：</span><input value={data.jgzj} name='jgzj'/></td>
                    </tr>
                    <tr>
                        <td><span>管材：</span><input value={data.gc} name='gc'/></td>
                        <td><span>实管长度：</span><input value={data.sgcd} name='sgcd'/></td>
                        <td><span>花管长度：</span><input value={data.hgcd} name='hgcd'/></td>

                    </tr>

                    <tr>
                        <td><span>沉淀管长度：</span><input value={data.cdgcd} name='cdgcd'/></td>
                        <td><span>井房占地面积：</span><input value={data.jfzdmj} name='jfzdmj'/></td>
                        <td><span>建设性质：</span><input value={data.jsxz} name='jsxz'/></td>

                    </tr>
                    <tr>
                        <td><span>单体工程图名称：</span><input value={data.dttmc} name='dttmc'/></td>
                        <td><span>工程完成时间：</span><input type='date'  value={data.gcwcsj} name='gcwcsj'/></td>
                        <td><span>所在工程标段：</span><input value={data.gcbd} name='gcbd'/></td>
                    </tr>
                    <tr>

                        <td><span>施工单位：</span><input value={data.sgdw} name='sgdw'/></td>
                        <td><span>监理单位：</span><input value={data.jldw} name='jldw'/></td>
                        <td><span>监理工程师姓名：</span><input value={data.jlsxm} name='jlsxm'/></td>

                    </tr>

                    <tr>
                        <td><span>监理师证书编号：</span><input value={data.jlszsh} name='jlszsh'/></td>
                        <td><span>管护责任人：</span><input value={data.ghzrr} name='ghzrr'/></td>
                        <td><span>影像名称：</span><input value={data.yxmc} name='yxmc'/></td>
                    </tr>
                    <tr>
                        <td><span>项目负责人：</span><input value={data.xmfzr} name = 'xmfzr'/></td>
                        <td><span>备注：</span><input value={data.bz} name='bz'/></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody> </table>
            </div>
        );
    }
}

export default withRouter(机井);

