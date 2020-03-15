import React, {Component} from "react";
import {withRouter} from "react-router-dom";

class 土地平整区域 extends Component {
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
                        <td><span>编号：</span><input value={data.bh} name='bh'/></td>
                        <td><span>填方量(立方米)：</span><input value={data.tfl} name='tfl'/></td>
                        <td><span>挖方量(立方米)：</span><input value={data.wfl} name='wfl'/></td>
                    </tr>
                    <tr>
                        <td><span>土方量(立方米)：</span><input value={data.tfzl} name='tfzl'/></td>
                        <td><span>土方外运量(立方米)：</span><input value={data.tfwyl} name='tfwyl'/></td>
                        <td><span>土方回填量(立方米)：</span><input value={data.tfhtl} name='tfhtl'/></td>
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

export default withRouter(土地平整区域);

