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

class Ntjsgh extends Component {
	constructor(props) {
		super(props);
		this.state = {
			option: {
			    title : {
			        text: '农田建设规划',
			        textStyle:{
			        	fontSize:"20"
			        }
			    },
			    color:["rgb(51,152,203)","rgb(114,200,206)","rgb(242,153,125)","rgb(237,207,98)","rgb(206,96,160)"],
			    tooltip : {
			        trigger: 'item',
			        formatter: function(params,ticket,callback){
			    		return (params.data.name+"<br/>"+params.marker+params.value+" 万亩 ("+params.percent+"%)")
			    	}
			    },
			    legend: {
			      left: 'center',
			    	top:"50",
			        data: [
			        '姚渡镇',
			        '大同镇',
			        '龙王镇',
			        "福洪乡",
			        "人和乡",
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
			                    value:1243,
			                    name: '姚渡镇',
			                    label: {
			                        normal: {
			                            formatter: [
			                                '{title|{b}}{abg|}',
			                                ' {valueHead|行政村}{mianji|面积}{rateHead|占比}',
			                                '{hr|}',
			                                '  {value|光明村}{value|202万亩}{rate|55.3%}',
			                                '  {value|凉水村}{value|142万亩}{rate|38.9%}',
			                                '  {value|永和村}{value|21万亩}{rate|5.8%}'
			                            ].join('\n'),
			                            backgroundColor: '#eee',
			                            borderColor: '#777',
			                            borderWidth: 1,
			                            borderRadius: 4,
			                            rich: {
			                                title: {
			                                    color: '#eee',
			                                    align: 'center'
			                                },
			                                abg: {
			                                    backgroundColor: '#333',
			                                    width: '100%',
			                                    align: 'right',
			                                    height: 25,
			                                    borderRadius: [4, 4, 0, 0]
			                                },
			                                Sunny: {
			                                    height: 40,
			                                    align: 'left',
			                                },
			                                Cloudy: {
			                                    height: 40,
			                                    align: 'left',
			                                },
			                                Showers: {
			                                    height: 40,
			                                    align: 'left'
			                                },
			                                weatherHead: {
			                                    color: '#333',
			                                    height: 40,
			                                    align: 'left'
			                                },
			                                hr: {
			                                    borderColor: '#777',
			                                    width: '100%',
			                                    borderWidth: 0.5,
			                                    height: 0
			                                },
			                                value: {
			                                    width: 20,
			                                    padding: [5, 20, 5, 20],
			                                    align: 'left'
			                                },
			                                mianji: {
			                                	color: '#333',
			                                    width: 20,
			                                    padding: [5, 20, 5, 20],
			                                    align: 'center'
			                                },
			                                valueHead: {
			                                    color: '#333',
			                                    width: 20,
			                                    padding: [5, 20, 5, 30],
			                                    align: 'center'
			                                },
			                                rate: {
			                                    width: 40,
			                                    align: 'right',
			                                    padding: [5, 10, 5, 0]
			                                },
			                                rateHead: {
			                                    color: '#333',
			                                    width: 40,
			                                    align: 'center',
			                                    padding: [5, 10, 5, 0]
			                                }
			                            }
			                        }
			                    }
			                },
			                {value:680, name: '大同镇'},
			                {value:750, name: '龙王镇'},
			                {value:901, name: '福洪乡'},
			                {value:856, name: '人和乡'}
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
			<div className='ntjsgh'>
				<ReactEcharts
                    option={this.state.option}
                    style={{height: '400px', width: '1000px'}}
                    className='react_for_echarts' />
			</div>
		);
	}
}
export default withRouter(Ntjsgh);