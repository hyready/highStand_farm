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
class Jsqk extends Component {
	constructor(props) {
		super(props);
		this.state = {
			option:{
			    tooltip : {
			        trigger: 'item',
			        formatter: function(params,ticket,callback){
			    		return (params.data.name+"<br/>"+params.marker+params.value+" 万亩 ("+params.percent+"%)")
			    	}
			    },
			    color:["rgb(239,180,107)","rgb(56,183,183)","rgb(229,149,120)"],
			    series : [
			        {
			            name: '规划面积',
			            type: 'pie',
			            radius : '75%',
			            center: ['50%', '50%'],
			            data:[
			                {value:335, name:'已完成',},
			                {value:310, name:'建设中'},
			                {value:234, name:'未启动'}
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
			},
			option2:{
			    tooltip : {
			        trigger: 'item',
			        formatter: function(params,ticket,callback){
			    		return (params.data.name+"<br/>"+params.marker+params.value+" 个("+params.percent+"%)")
			    	}
			        //formatter: "{b} : {c}个 ({d}%)"
//			        formatter: function(params,ticket,callback){
//			    		console.log(params)
//			    		if(params.data.name=="已完成"){
//			    			return ("已完成<br/><span style='display:inline-block;margin-right: 3px;border-radius: 6px;width: 12px;height: 12px;background-color: rgb(239,180,107)'></span>33 个 (35.11%)")
//			    		}
//			    		if(params.data.name=="建设中"){
//			    			return ("建设中<br/><span style='display:inline-block;margin-right: 3px;border-radius: 6px;width: 12px;height: 12px;background-color: rgb(56,183,183)'></span>35 个 (37.23%)")
//			    		}
//			    		if(params.data.name=="未启动"){
//			    			return ("未启动<br/><span style='display:inline-block;margin-right: 3px;border-radius: 6px;width: 12px;height: 12px;background-color: rgb(229,149,120)'></span>26 个 (27.68%)")
//			    		}
//			    	}
			    },
			    color:["rgb(239,180,107)","rgb(56,183,183)","rgb(229,149,120)"],
			    series : [
			        {
			            name: '规划项目',
			            type: 'pie',
			            radius : '75%',
			            center: ['50%', '50%'],
			            data:[
			                {value:33, name:'已完成'},
			                {value:35, name:'建设中'},
			                {value:26, name:'未启动'}
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
			<div className='jsqk'>
				<div className="title">建设情况</div>
				<div className="kuais">
					<div className="first"></div>
					<span className="a1">已完成</span>
					
					<div className="second"></div>
					<span className="a2">建设中</span>
					
					<div className="third"></div>
					<span className="a3">未启动</span>
				</div>
				
				<div className="tables">
					<div className="left">
						<div className="title">按面积统计</div>
						<ReactEcharts
		                    option={this.state.option}
		                    style={{height: '320px'}}
		                    className='react_for_echarts' />
					</div>
					
					<div className="right">
					<div className="title">按项目统计</div>
						<ReactEcharts
		                    option={this.state.option2}
		                    style={{height: '320px'}}
		                    className='react_for_echarts' />
					</div>
				</div>
			</div>
		);
	}
}
export default withRouter(Jsqk);