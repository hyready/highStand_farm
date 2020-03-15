import React, {
	Component
} from "react";
import { withRouter } from "react-router-dom";
import { Icon } from 'antd';
// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts';
import ReactEcharts from 'echarts-for-react';
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import './index.less';
class Gczjzb extends Component {
	constructor(props) {
		super(props);
		this.state = {
			option: {
			    title : {
			        text: '工程资金占比',
			        textStyle:{
			        	fontSize:"20"
			        }
			    },
			    color:["rgb(51,152,203)","rgb(114,200,206)","rgb(242,153,125)","rgb(237,207,98)","rgb(206,96,160)"],
			    tooltip : {
			        trigger: 'item',
			        formatter: function(params,ticket,callback){
			    		return (params.data.name+"<br/>"+params.marker+params.value+" 万 ("+params.percent+"%)")
			    	}
			        //formatter: "{b} : {c}万元 ({d}%)"
//			        formatter: function(params,ticket,callback){
//			    		//console.log(params)
//			    		if(params.data.name=="土地平整工程"){
//			    			return ("土地平整工程<br/><span style='display:inline-block;margin-right: 3px;border-radius: 6px;width: 12px;height: 12px;background-color: rgb(51,152,207)'></span>1548 万亩 (39.07%)")
//			    		}
//			    		if(params.data.name=="灌溉与排水工程"){
//			    			return ("灌溉与排水工程<br/><span style='display:inline-block;margin-right: 3px;border-radius: 6px;width: 12px;height: 12px;background-color: rgb(114,200,206)'></span>535 万亩 (13.51%)")
//			    		}
//			    		if(params.data.name=="田间道路工程"){
//			    			return ("田间道路工程<br/><span style='display:inline-block;margin-right: 3px;border-radius: 6px;width: 12px;height: 12px;background-color: rgb(242,153,125)'></span>510 万亩 (12.87%)")
//			    		}
//			    		if(params.data.name=="农田防护与生态环境保持工程"){
//			    			return ("农田防护与生态环境保持工程<br/><span style='display:inline-block;margin-right: 3px;border-radius: 6px;width: 12px;height: 12px;background-color: rgb(237,207,98)'></span>634 万亩 (16.00%)")
//			    		}
//			    		if(params.data.name=="其他工程"){
//			    			return ("其他工程<br/><span style='display:inline-block;margin-right: 3px;border-radius: 6px;width: 12px;height: 12px;background-color: rgb(206,96,160)'></span>735 万亩 (18.55%)")
//			    		}
//			    	}
			    },
			    legend: {
			        left: 'center',
			    	top:"50",
			        data: [
			        '土地平整工程',
			        '灌溉与排水工程',
			        '田间道路工程',
			        "农田防护与生态环境保持工程",
			        "其他工程",
			        ]
			    },
			    series : [
			        {	
			        	name:"农田分类",
			            type: 'pie',
			            radius : '65%',
			            center: ['50%', '60%'],
			            selectedMode: 'single',
			            data:[
			                {
			                    value:1548,
			                    name: '土地平整工程',
			                    
			                },
			                {value:535, name: '灌溉与排水工程'},
			                {value:510, name: '田间道路工程'},
			                {value:634, name: '农田防护与生态环境保持工程'},
			                {value:735, name: '其他工程'}
			            ],
			            itemStyle: {
			                emphasis: {
			                    shadowBlur: 10,
			                    shadowOffsetX: 0,
			                    shadowColor: 'rgba(0, 0, 0, 0.5)'
			                }
			            }
			        }
			    ]
			}
		}
	}
	componentDidMount(){
		
	}
	render() {
		return(
			<div className='gczjzb'>
				<ReactEcharts
                    option={this.state.option}
                    style={{height: '400px', width: '1000px'}}
                    className='react_for_echarts' />
			</div>
		);
	}
}
export default withRouter(Gczjzb);