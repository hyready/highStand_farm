import React, {Component} from "react";
import {withRouter} from "react-router-dom";
// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts';
import ReactEcharts from 'echarts-for-react';
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import './index.less';
class Home extends Component {
	constructor(props){
		super(props);
		this.state={
			option1:{
			    title : {
			    	text: '按面积统计',
			        x:'center'
			    },
			    tooltip : {
			        trigger: 'item',
			        formatter: "{a} <br/>{b} : {c}万亩 ({d}%)"
			    },
			    legend: {
			        orient: 'vertical',
			        left: 'left',
			        data: ['已完成','建设中','未启动']
			    },
			    series : [
			        {	name:'完成情况',
			            type: 'pie',
			            radius : '55%',
			            center: ['53%', '50%'],
			            data:[
			                {value:300, name:'已完成'},
			                {value:200, name:'建设中'},
			                {value:400, name:'未启动'}
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
			    title : {
			    	text: '按项目统计',
			        x:'center'
			    },
			    tooltip : {
			        trigger: 'item',
			        formatter: "{a} <br/>{b} : {c}个 ({d}%)"
			    },
			    legend: {
			        orient: 'vertical',
			        left: 'left',
			        data: ['已完成','建设中','未启动']
			    },
			    series : [
			        {	name:'完成情况',
			            type: 'pie',
			            radius : '55%',
			            center: ['53%', '50%'],
			            data:[
			                {value:"30", name:'已完成'},
			                {value:"20", name:'建设中'},
			                {value:"40", name:'未启动'}
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
		    option3:{
		    	title : {
			        text: '年度建设情况分析',
			        x:"center",
			        top:10
			    },
		        xAxis: {
		        	name:"(年)",
		            type: 'category',
		            data: ['2016年', '2017年', '2018年', '2019年']
		        },
		        yAxis: {
		        	name:"(万亩)",
		            type: 'value'
		        },
		        series: [{
		            data: [40, 80, 120, 200],
		            type: 'bar'
		        }]
		    },
		    option4:{
		    	title : {
			        text: '坡度分析',
			        x:"center",
			        top:10
			    },
		        xAxis: {
		        	name:"(年)",
		            type: 'category',
		            data: ['2016', '2017', '2018', '2019']
		        },
		        yAxis: {
		        	name:"(万亩)",
		            type: 'value'
		        },
		        series: [{
		            data: [40, 80, 120, 200],
		            type: 'bar'
		        }]
		    }
		}
	}

    render() {
        return (
           <div className='homePage_home'>
               <div className='top'>
                   <div className='part part1' style={{background:'#5cb4d8'}}>
                   		<div className='left'>
                   			<div className='top'>
                   				210 个
                   			</div>
                   			<div className='bottom'>
                   				<ul>
	                   				<li>在建项目: <span>50 个</span></li>
	                   				<li>已建项目: <span>40 个</span></li>
	                   				<li>规划项目: <span>120 个</span></li>
	                   			</ul>
                   			</div>
                   		</div>
                   		<div className='right'>
                   			<ul>
                   				<li>项</li>
                   				<li>目</li>
                   				<li>个</li>
                   				<li>数</li>
                   			</ul>
                   		</div>
                   </div>
                   <div className='part part2' style={{background:'#e68072'}}>
                   		<div className='left'>
                   			<div className='top'>
                   				400 万亩
                   			</div>
                   			<div className='bottom'>
                   				<ul>
	                   				<li>土地平均厚度: <span>30 cm</span></li>
	                   				<li>地面平均坡度: <span>3.2 度</span></li>
	                   			</ul>
                   			</div>
                   		</div>
                   		<div className='right'>
                   			<ul>
                   				<li>建</li>
                   				<li>设</li>
                   				<li>面</li>
                   				<li>积</li>
                   			</ul>
                   		</div>
                   </div>
                   <div className='part part3' style={{background:'#4fc3a8'}}>
                   		<div className='left'>
                   			<div className='top'>
                   				2000 万
                   			</div>
                   			<div className='bottom'>
                   				<ul>
	                   				<li>财政投入: <span>1500 万</span></li>
	                   				<li>社会投入: <span>500 万</span></li>
	                   			</ul>
                   			</div>
                   		</div>
                   		<div className='right'>
                   			<ul>
                   				<li>项</li>
                   				<li>目</li>
                   				<li>资</li>
                   				<li>金</li>
                   			</ul>
                   		</div>
                   </div>
                   <div className='part part4' style={{background:'#8895b5'}}>
                   		<div className='left'>
                   			<ul>
                   				<li>土地平整面积:</li>
                   				<li>各级灌溉渠道:</li>
                   				<li>田间道路工程:</li>
                   				<li>植树:</li>
                   			</ul>
                   		</div>
                   		<div className='right'>
                   			<ul>
                   				<li>200 万平方米</li>
                   				<li>122 千米</li>
                   				<li>122 千米</li>
                   				<li>2000 株</li>
                   			</ul>
                   		</div>
                   </div>
               </div>
               <div className='bottom'>
                   <div className='part part5'>
                   		<div className='title'>建设完成情况:</div>
                   		<div className='table'>
                   			<div className='left'>
                   				<ReactEcharts
								    ref={(e) => { this.echartsElement = e }}
								    option={this.state.option1}
								    theme="clear"
								/>
                   			</div>
                   			<div className='right'>
                   				<ReactEcharts
								    ref={(e) => { this.echartsElement = e }}
								    option={this.state.option2}
								    theme="clear"
								/>
                   			</div>
                   		</div>
                   </div>
                   <div className='part part6'>
                   		<div className='title'>建设数据分析:</div>
                   		<div className='table'>
                   			<div className='top'>
                   				<ReactEcharts
								    ref={(e) => { this.echartsElement = e }}
								    option={this.state.option3}
								    theme="clear"
								/>
                   			</div>
                   			<div className='bottom'>
                   				<ReactEcharts
								    ref={(e) => { this.echartsElement = e }}
								    option={this.state.option4}
								    theme="clear"
								/>
                   			</div>
                   		</div>
                   </div>
               </div>
           </div>
        );
    }
}
export default withRouter(Home);