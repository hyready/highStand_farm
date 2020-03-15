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
class Gbzntzb extends Component {
	constructor(props) {
		super(props);
		this.state = {
			option:{
				title:{
					text:"高标准农田占比",
					textStyle:{
			        	fontSize:"20"
			        }
				},
				color:["rgb(239,180,107)","rgb(61,198,198)"],
			    tooltip: {
			        trigger: 'axis',
			        axisPointer: {
			            type: 'shadow'
			        },
			        formatter: function(params,ticket,callback){
			        	function fn(a) {
			        		var str="";
			        		for(var i=0;i<a.length;i++){
			        			str+=(a[i].marker+a[i].seriesName+"："+ a[i].data+" 万亩 "+"<br/>")
			        		}
			        		return str;
			        	}
			    		return (params[0].axisValue+"<br/>"+fn(params));
			       }
			        //formatter: "{b}<br/><span style='display:inline-block;margin-right: 3px;border-radius: 6px;width: 12px;height: 12px;background-color: rgb(239,180,107)'></span>{a0}: {c0} 万亩<br/><span style='display:inline-block;margin-right: 3px;border-radius: 6px;width: 12px;height: 12px;background-color: rgb(61,198,198)'></span>{a1}: {c1} 万亩"
			    },
			    grid:{
					y:"20%"
				},
			    legend: {
			    	top:"10%",
			        data: ['基本农田', '高标准农田']
			    },
			    xAxis: [
			        {
			            type: 'category',
			            axisTick: {show: false},
			            data: ['龙王镇', '人和乡', '大周镇', '姚渡镇', '福洪乡','祥瑞镇','红阳街道']
			        }
			    ],
			    yAxis: [
			        {	name:"单位(万亩)",
			            type: 'value'
			        }
			    ],
			    series: [
			        {
			            name: '基本农田',
			            type: 'bar',
			            barGap: 0,
			            barWidth: '30%',
			            data: [86.3, 83.1, 86.4, 92.4, 65.5,78.4,89.5]
			        },
			        {
			            name: '高标准农田',
			            type: 'bar',
			            barWidth: '30%',
			            data: [85.8, 73.4, 65.2, 88.6, 63.2,77.9,83.9]
			        }
			      
			    ]
			}
		}
	}
	componentDidMount(){
	}
	render() {
		return(
			<div className='gbzntzb'>
				<ReactEcharts
                    option={this.state.option}
                    style={{height: '450px', width: '1000px'}}
                    className='react_for_echarts' />
			</div>
		);
	}
}
export default withRouter(Gbzntzb);