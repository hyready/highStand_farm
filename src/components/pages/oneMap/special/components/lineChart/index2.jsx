
import echarts from 'echarts';
import React, {Component} from "react";

export default class LineChart extends Component {
    componentDidMount() {

        this.myChart = echarts.init(document.getElementById(this.props.id), 'light');
        var option = {
            tooltip : {
			        trigger: 'item',
			        position: function(point, params, dom, rect, size){ // point: 鼠标位置
			        	//console.log(size)
			        	var contentSize = size.contentSize[0]/2;
                return [point[0]+contentSize, point[1]+25];
            	},
			        formatter: function(params,ticket,callback){
			    			return (params.data.name+"<br/>"+params.marker+params.value+" 万 ("+params.percent+"%)")
			    		},
			    		align:"right"
			    	},
            legend: {
                orient: 'vertical',
                left: 'left',
                data: this.props.legend.split(','),
                itemWidth:14,
                itemHeight:7,
                textStyle:{
                    fontSize:8
                }
            },
            series : [
                {
                    name: '访问来源',
                    type: 'pie',
                    radius : '55%',
                    center: ['50%', '60%'],
                    data:[
                        {value:335, name:this.props.legend.split(',')[0]},
                        {value:310, name:this.props.legend.split(',')[1]},
                        {value:234, name:this.props.legend.split(',')[2]},
                        {value:45, name:this.props.legend.split(',')[3]}
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
        this.myChart.setOption(option);
    }

    render() {
        return (<div id={this.props.id} style={{ width: '100%', height: '100%' }}></div>
        )
    }
}