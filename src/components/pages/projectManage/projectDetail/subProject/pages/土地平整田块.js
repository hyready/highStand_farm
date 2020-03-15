import React, {Component} from "react";
import {withRouter} from "react-router-dom";

class 土地平整田块 extends Component {
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
                <table className='projectData' onChange={this.change.bind(this)}>
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
                        <td><span>田块编号：</span><input value={data.tkbh} name='tkbh'/></td>
                        <td><span>田块填方量(立方米)：</span><input value={data.tktfl} name='tktfl'/></td>


                        <td><span>田块挖方量(立方米)：</span><input value={data.tkwfl} name='tkwfl'/></td>
                    </tr>
                    <tr>
                        <td><span>土方外运量(立方米)：</span><input value={data.tfwyl} name='tfwyl'/></td>
                        <td><span>土方回填量(立方米)：</span><input value={data.tfhtl} name='tfhtl'/></td>
                        <td><span>田块面积(平方米)：</span><input value={data.tkmj} name='tkmj'/></td>
                    </tr>
                    <tr>


                        <td><span>翻耕面积(平方米)：</span><input value={data.fgmj} name='fgmj'/></td>
                        <td><span>田面横向坡度：</span><input value={data.tmhxpd} name='tmhxpd'/></td>
                        <td><span>田面纵向坡度：</span><input value={data.tmzxpd} name='tmzxpd'/></td>
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
                        <td><span>项目负责人：</span><input value={data.xmfzr} name = 'xmfzr'/></td>
                        <td><span>备注：</span><input value={data.bz} name='bz'/></td>
                        <td></td>
                    </tr>


                    </tbody>
                </table>
            </div>
        );
    }
}

export default withRouter(土地平整田块);

