import React from 'react';
import echarts from 'echarts';

const data = [
    {
        name: '全市品牌农产品产量',
        type: 'line',
        data: [1500, 1700, 2100, 2300, 2500]
    },
    {
        name: '土地托管面积年变化',
        type: 'line',
        yAxisIndex: 1,
        data: [18, 22, 38, 48, 65]
    },
]
export default class Line extends React.Component {

    componentDidMount() {
        var legend = this.props.legend
        var myChart = echarts.init(document.getElementById(this.props.id), 'light');
        var option = {
			    title: {
			        text: '高标准农田面积变化情况',
	                x:'center',
	                top:'3%',
	                textStyle:{
	                    fontSize:14,
	                    fontWeight:5
	                }
			    },
			    tooltip : {
			        trigger: 'axis',
			        axisPointer: {
			            type: 'cross',
			            label: {
			                backgroundColor: '#6a7985'
			            }
			        },
			        formatter: function(params,ticket,callback){
			    			return (params[0].axisValue+"<br/>"+params[0].marker+params[0].value+" 万亩")
			    	}
			    },
			    grid: {
			        left: '3%',
			        right: '4%',
			        bottom: '3%',
			        containLabel: true
			    },
			    xAxis: {
	                type: 'category',
	                data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
	                axisLabel : {//坐标轴刻度标签的相关设置。
		                interval:0,
		                rotate:"45"
		            }
	            },
	            yAxis: {
	                type: 'value',
	            },
			    series : [
			        {
			            name:'高标准农田面积',
			            type:'line',
			            stack: '总量',
			            areaStyle: {},
			            data: [158, 255, 230, 389, 296, 452, 555, 689, 865, 960, 1055, 972]
			        }
			    ]
        };
        myChart.setOption(option);
    }

    render() {
        return (<div id={this.props.id}></div>
        )
    }
}