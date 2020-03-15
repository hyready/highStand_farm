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
class Qygcsl extends Component {
	constructor(props) {
		super(props);
		this.state = {
			option: {
				title:{
					text:"区域工程数量",
					textStyle:{
			        	fontSize:"20"
			        }
				},
			    tooltip : {
			    	
			        trigger: 'axis',
			        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
			            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
			        },
			        formatter: function(params,ticket,callback){
			        	function fn(a) {
			        		var str="";
			        		for(var i=0;i<a.length;i++){
			        			str+=(a[i].marker+a[i].seriesName+"："+ a[i].data+" 个 "+"<br/>")
			        		}
			        		return str;
			        	}
			    		return (params[0].axisValue+"<br/>"+fn(params));
			       }
			    },
			    legend: {
			    	top:"50",
			        data: ["土地平整工程","灌溉与排水工程","田间道路工程","农田防护与生态环境保持工程","其他工程"]
			    },
			    color:["rgb(55,162,218)","rgb(103,224,227)","rgb(255,199,92)","rgb(255,159,127)","rgb(224,198,74)",],
			    grid: {
			    	top:"25%",
			        left: '3%',
			        right: '7%',
			        bottom: '3%',
			        containLabel: true
			    },
			    xAxis:  {
			    	name:"单位(个)",
			        type: 'value'
			    },
			    yAxis: {
			        type: 'category',
			        data: ['龙王镇', '人和乡', '大周镇', '姚渡镇', '福洪乡','祥瑞镇','红阳街道']
			    },
			    series: [
			        {
			            name: '土地平整工程',
			            type: 'bar',
			            stack: '总量',
			            barWidth: '80%',
			            label: {
			                normal: {
			                    show: true,
			                    position: 'insideRight'
			                }
			            },
			            data: [320, 302, 301, 334, 390, 330, 320]
			        },
			        {
			            name: '灌溉与排水工程',
			            type: 'bar',
			            stack: '总量',
			            barWidth: '80%',
			            label: {
			                normal: {
			                    show: true,
			                    position: 'insideRight'
			                }
			            },
			            data: [120, 132, 101, 134, 90, 230, 210]
			        },
			        {
			            name: '田间道路工程',
			            type: 'bar',
			            stack: '总量',
			            barWidth: '80%',
			            label: {
			                normal: {
			                    show: true,
			                    position: 'insideRight'
			                }
			            },
			            data: [220, 182, 191, 234, 290, 330, 310]
			        },
			        {
			            name: '农田防护与生态环境保持工程',
			            type: 'bar',
			            stack: '总量',
			            barWidth: '80%',
			            label: {
			                normal: {
			                    show: true,
			                    position: 'insideRight'
			                }
			            },
			            data: [150, 212, 201, 154, 190, 330, 410]
			        },
			        {
			            name: '其他工程',
			            type: 'bar',
			            stack: '总量',
			            barWidth: '80%',
			            label: {
			                normal: {
			                    show: true,
			                    position: 'insideRight'
			                }
			            },
			            data: [82, 83, 90, 93, 29, 133, 132]
			        }
			    ]
			}
		}
	}
	componentDidMount(){
	}
	render() {
		return(
			<div className='qygcsl'>
				<ReactEcharts
                    option={this.state.option}
                    style={{height: '400px', width: '1000px'}}
                    className='react_for_echarts' />
			</div>
		);
	}
}
export default withRouter(Qygcsl);