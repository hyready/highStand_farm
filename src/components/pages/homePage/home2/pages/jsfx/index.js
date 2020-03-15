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
class Jsfx extends Component {
	constructor(props) {
		super(props);
		this.state = {
			option:{
				title:{
					text:"建设分析",
					textStyle:{
			        	fontSize:"20"
			        }
				},
			    color: ['#3398DB'],
			    tooltip : {
			        trigger: 'axis',
			        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
			            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
			        },
			        formatter: function(params,ticket,callback){
			        	//console.log(params)
			    		return (params[0].axisValue+"年"+"<br/>"+params[0].marker+params[0].data+" 万亩 ")
			    	}
			    },
			    grid: {
			    	top:"20%",
			        left: '3%',
			        right: '7%',
			        bottom: '3%',
			        containLabel: true
			    },
			    xAxis : [
			        {
			        	name:"单位(年)",
			            type : 'category',
			            data : ['2015', '2016', '2017', '2018', '2019'],
			            axisTick: {
			                alignWithLabel: true
			            }
			        }
			    ],
			    yAxis : [
			        {
			        	name:"单位(万亩)",
			            type : 'value'
			        }
			    ],
			    series : [
			        {
			            name:'建设数据',
			            type:'bar',
			            barWidth: '30%',
			            data:[242, 152, 200, 164, 190]
			        }
			    ]
			}
		}
	}
	componentDidMount(){
	}
	render() {
		return(
			<div className='jsfx'>
				<ReactEcharts
                    option={this.state.option}
                    style={{height: '400px', width: '1000px'}}
                    className='react_for_echarts' />
			</div>
		);
	}
}
export default withRouter(Jsfx);