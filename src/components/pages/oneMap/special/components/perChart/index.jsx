
import echarts from 'echarts';
import React, {Component} from "react";

export default class PerChart extends Component {
    componentDidMount() {
        this.myChart = echarts.init(document.getElementById(this.props.id), 'light');
        var option = {
            title:{
                subtext:'单位（个）',
            },
            tooltip : {
			        trigger: 'axis',
			        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
			            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
			        },
			        formatter: function(params,ticket,callback){
			        	//console.log(params)
			    			return (params[0].marker+params[0].axisValue+params[0].data+" 个 ")
			    		},
			    	},
            xAxis: {
                type: 'category',
                data: this.props.legend.split(','),
                axisLabel: {
                    interval: 0,
                    formatter:function(value)
                    {
                        return value.split("").join("\n");
                    }
                }
            },
            grid:{
                left:'15%',
                right:'5%'
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: this.props.data.split(','),
                type: 'bar'
            }]
        };
        this.myChart.setOption(option);
    }

    render() {
        return (<div id={this.props.id} style={{ width: '100%', height: '100%' }}></div>
        )
    }
}