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
export default class Pie extends React.Component {

    componentDidMount() {
        var legend = this.props.legend
        var myChart = echarts.init(document.getElementById(this.props.id), 'light');
        var option = {
        	grid:{
        		y:"0%"
        	},
            title : {
                text: '工程数量',
                x:'center',
                top:'3%',
                textStyle:{
                    fontSize:14,
                    fontWeight:5
                }
            },
            tooltip : {
                trigger: 'item',
                //formatter: "{a} <br/>{b} : {c} 个({d}%)"
                formatter: function(params,ticket,callback){
		    		//console.log(params)
		    		if(params.data.name=="土地平整"){
		    			return ("土地平整<br/><span style='display:inline-block;margin-right: 3px;border-radius: 6px;width: 12px;height: 12px;background-color: rgb(55,162,218)'></span>335 个 (8.49%)")
		    		}
		    		if(params.data.name=="土壤培肥"){
		    			return ("土壤培肥<br/><span style='display:inline-block;margin-right: 3px;border-radius: 6px;width: 12px;height: 12px;background-color: rgb(50,197,233)'></span>310 个 (7.86%)")
		    		}
		    		if(params.data.name=="灌溉水源"){
		    			return ("灌溉水源<br/><span style='display:inline-block;margin-right: 3px;border-radius: 6px;width: 12px;height: 12px;background-color: rgb(103,224,227)'></span>234 个 (5.93%)")
		    		}
		    		if(params.data.name=="灌溉渠道"){
		    			return ("灌溉渠道<br/><span style='display:inline-block;margin-right: 3px;border-radius: 6px;width: 12px;height: 12px;background-color: rgb(159,230,184)'></span>135 个 (3.43%)")
		    		}
		    		if(params.data.name=="排水沟"){
		    			return ("排水沟<br/><span style='display:inline-block;margin-right: 3px;border-radius: 6px;width: 12px;height: 12px;background-color: rgb(255,219,92)'></span>335 个 (8.49%)")
		    		}
		    		if(params.data.name=="田间灌溉"){
		    			return ("田间灌溉<br/><span style='display:inline-block;margin-right: 3px;border-radius: 6px;width: 12px;height: 12px;background-color: rgb(255,159,127)'></span>310 个 (7.86%)")
		    		}
		    		if(params.data.name=="系建筑物"){
		    			return ("系建筑物<br/><span style='display:inline-block;margin-right: 3px;border-radius: 6px;width: 12px;height: 12px;background-color: rgb(251,114,147)'></span>234 个 (5.93%)")
		    		}
		    		if(params.data.name=="泵站"){
		    			return ("泵站<br/><span style='display:inline-block;margin-right: 3px;border-radius: 6px;width: 12px;height: 12px;background-color: rgb(224,98,174)'></span>135 个 (3.42%)")
		    		}
		    		if(params.data.name=="农用输配电"){
		    			return ("农用输配电<br/><span style='display:inline-block;margin-right: 3px;border-radius: 6px;width: 12px;height: 12px;background-color: rgb(230,144,209)'></span>234 个 (5.93%)")
		    		}
		    		if(params.data.name=="田间道路"){
		    			return ("田间道路<br/><span style='display:inline-block;margin-right: 3px;border-radius: 6px;width: 12px;height: 12px;background-color: rgb(231,188,243)'></span>135 个 (3.42%)")
		    		}
		    		if(params.data.name=="农田防护林网"){
		    			return ("农田防护林网<br/><span style='display:inline-block;margin-right: 3px;border-radius: 6px;width: 12px;height: 12px;background-color: rgb(157,150,245)'></span>1548 个 (39.24%)")
		    		}
		    		
		    	}
            },
            legend: {
                // orient: 'vertical',
                bottom: '0%',
                data: ['土地平整','土壤培肥','灌溉水源','灌溉渠道','排水沟','田间灌溉','系建筑物','泵站','农用输配电','田间道路','农田防护林网'],
                itemWidth:15,
                itemHeight:10
            },
            series : [
                {
                    name:'',
                    type: 'pie',
                    radius : '45%',
                    center: ['50%', '50%'],
                    data:[
                        {value:335, name:'土地平整'},
                        {value:310, name:'土壤培肥'},
                        {value:234, name:'灌溉水源'},
                        {value:135, name:'灌溉渠道'},
                        {value:335, name:'排水沟'},
                        {value:310, name:'泵站'},
                        {value:234, name:'农用输配电'},
                        {value:135, name:'田间灌溉'},
                        {value:234, name:'系建筑物'},
                        {value:135, name:'田间道路'},
                        {value:1548, name:'农田防护林网'}
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
        };
        myChart.setOption(option);
    }

    render() {
        return (<div id={this.props.id}></div>
        )
    }
}