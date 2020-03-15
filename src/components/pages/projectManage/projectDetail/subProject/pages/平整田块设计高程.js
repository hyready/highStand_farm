import React, {Component} from "react";
import {withRouter} from "react-router-dom";

class 平整田块设计高程 extends Component {
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
                <table className='projectData'  onChange={this.change.bind(this)}> <tbody>
                   
                        <tr>
                            <td><span>项目名称：</span><input value={data.xmmc} name = 'xmmc'/></td>
                            <td><span>项目状态：</span><input value={data.xmzt} name = 'xmzt'/></td>
                            <td><span>开始时间：</span><input type='date' value={data.kssj} name = 'kssj'/></td>

                        </tr>
                   
                        <tr>
                            <td><span>结束时间：</span><input  type='date' value={data.jssj} name = 'jssj'/></td>
                            <td><span>标识码：</span><input value={data.bsm} name = 'bsm'/></td>
                            <td><span>要素代码：</span><input value={data.ysdm} name = 'ysdm'/></td>

                        </tr>
                  
                        <tr>
                            <td><span>角点设计高程(米)：</span><input value={data.jdsjgc} name = 'jdsjgc'/></td>
                            <td><span>角点填挖高度(米)：</span><input value={data.jdtwgd} name = 'jdtwgd'/></td>
                            <td><span>项目负责人：</span><input value={data.xmfzr} name = 'xmfzr'/></td>
                        </tr>
                        <tr>
                           
                            <td><span>备注：</span><input value={data.bz} name = 'bz'/></td>
                        </tr>
                </tbody> </table>
            </div>
        );
    }
}

export default withRouter(平整田块设计高程);

