import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import {
    Table, Input, Button, Icon,
} from 'antd';
import './index.less';


class MyTable extends Component {
    constructor(props){
		super(props);
		this.state={
        columns1:[
          {
              title: '序号',
              dataIndex: 'index',
              key: 'index',
              render: renderContent1,
              width:50,
              align:'center'
          }, {
              title: '名称',
              dataIndex: 'name',
              key: 'name',
              render: renderContent2,
            
              align:'center'
          }, {
              title: '单位',
              dataIndex: 'unit',
              key: 'unit',
              render: renderContent3,
              width:'15%',
              align:'center'
          }, {
              title: '数值',
              dataIndex: 'number',
              key: 'number',
              render: renderContent4,
              width:'20%',
              align:'center'
          }, {
              title: '备注',
              dataIndex: 'remark',
              key: 'remark',
              render: renderContent5,
              width:'20%',
              align:'center'
          }]
		}
  }
    render() {
        
        return (<div className='tableComponent'>
            <Table 
            size='small'
            scroll={{  y: 600 }} 
            bordered pagination={false} columns={this.state.columns1} dataSource={data} rowClassName='hover_yanse'/>
        </div>);
    }

}


const renderContent1 = (value, row, index) => {
    const obj = {
        children: <div style={{fontWeight:'bold',fontSize:10}}>{value}</div>,
        props: {},
    };
    if (row.title) {
        obj.props.colSpan = 5;
        obj.children = <div style={{fontWeight:'bold',fontSize:12}}>{row.title}</div>;
    }
    if(index === 17){
        obj.props.rowSpan = 2;
    }
    if(index === 18){
        obj.props.rowSpan = 0;
    }
    if(index === 30){
        obj.props.rowSpan = 2;
    }
    if(index === 31){
        obj.props.rowSpan = 0;
    }
    return obj;
};

const renderContent2 = (value, row, index) => {
    const obj = {
        children: <div style={{fontSize:10}}>{value}</div>,
        props: {},
    };
    if (row.title) {
        obj.props.colSpan = 0;
        
    }
    return obj;
};

const renderContent3 = (value, row, index) => {
    const obj = {
        children: <div style={{fontSize:10}}>{value}</div>,
        props: {},
    };
    if (row.title) {
        obj.props.colSpan = 0;
        
    }
    return obj;
};

const renderContent4 = (value, row, index) => {
	var obj = null
	if(row.key == '12'){
		var html = row.number.map((data,index)=>{
			return (
                <div className='centerTd' style={{fontSize:10}} key={index}>
                <div>{data.X}</div>
                <span>,</span>
                <div>{data.Y}</div>
                </div>
            )
		})
		obj = {
        	children: html,
        	props: {},
		}
	}else{
		obj = {
        children: <div style={{fontSize:10}}>{value}</div>,
        props: {},
    };
	}

    if (row.title) {
        obj.props.colSpan = 0; 
    }
    return obj;
};

const renderContent5 = (value, row, index) => {
    const obj = {
        children: <div style={{fontSize:10}}>{value}</div>,
        props: {},
    };
    if (row.title) {
        obj.props.colSpan = 0;
        
    }
    
    return obj;
};


const data = [
    { key: '10', title: '一 基本情况' },
    {
        key: '11',
        index: '1',
        name: '建设地点',
        unit: '',
        number: 'XX县XX镇XX村',
        remark: '县、乡（镇）、行政村',
    },
    {
        key: '12',
        index: '2',
        name: '项目区拐点坐标',
        unit: '',
        number: [
	        {X:'3751508.5',Y:'39438683.65'},
	        {X:'3751508.5',Y:'39438690.15'},
	        {X:'3751502',Y:'39438690.15'},
	        {X:'3751502',Y:'39438688.2'}
        ],
        remark: '四至拐点坐标',
    },
    {
        key: '13',
        index: '3',
        name: '建成规模',
        unit: 'hm²',
        number: '362.52',
        remark: '',
    },
    {
        key: '14',
        index: '4',
        name: '建成高标准农田面积',
        unit: 'hm²',
        number: '312.56',
        remark: '',
    },
    {
        key: '15',
        index: '5',
        name: '建成高标准农田配平均等别（等级）',
        unit: '等别（等级）',
        number: '4',
        remark: '',
    },
    {
        key: '16',
        index: '6',
        name: '新增耕地面积',
        unit: 'hm²',
        number: '33.33',
        remark: '',
    },
    //第二项
    { key: '20', title: '二 建设资金' },
    {
        key: '21',
        index: '1',
        name: '国土',
        unit: '万元',
        number: '377.65',
        remark: '',
    },
    {
        key: '22',
        index: '2',
        name: '水利',
        unit: '万元',
        number: '29.32',
        remark: '',
    },
    {
        key: '23',
        index: '3',
        name: '农业',
        unit: '万元',
        number: '68.10',
        remark: '',
    },
    {
        key: '24',
        index: '4',
        name: '林业',
        unit: '万元',
        number: '12.70',
        remark: '',
    },
    {
        key: '25',
        index: '5',
        name: '财政农业综合开发',
        unit: '万元',
        number: '69.33',
        remark: '',
    },
    {
        key: '26',
        index: '6',
        name: '其他',
        unit: '万元',
        number: '13010',
        remark: '',
    },
    //第三项
    { key: '30', title: '三 主要工程内容' },
    {
        key: '31',
        index: '1',
        name: '土地平整面积',
        unit: 'hm²',
        number: '286.00',
        remark: '',
    },
    {
        key: '32',
        index: '2',
        name: '土壤改良面积',
        unit: 'hm²',
        number: '33.33',
        remark: '',
    },
    {
        key: '331',
        index: '3',
        name: '渠（沟）道',
        unit: 'km',
        number: '16.03',
        remark: '',
    },
    {
        key: '332',
        index: '3',
        name: '其中，村砌渠（沟）道',
        unit: 'km',
        number: '16.03',
        remark: '',
    },
    {
        key: '34',
        index: '4',
        name: '输水管道',
        unit: 'km',
        number: '12.02',
        remark: '',
    },
    {
        key: '35',
        index: '5',
        name: '塘坝（堰）',
        unit: '座',
        number: '2',
        remark: '',
    },
    {
        key: '36',
        index: '6',
        name: '蓄水池（水窖）',
        unit: '座',
        number: '2',
        remark: '',
    },
    {
        key: '37',
        index: '7',
        name: '泵站',
        unit: '座',
        number: '6',
        remark: '',
    },
    {
        key: '38',
        index: '8',
        name: '农用井',
        unit: '口',
        number: '3',
        remark: '',
    },
    {
        key: '39',
        index: '9',
        name: '渠系建筑物',
        unit: '座',
        number: '713',
        remark: '',
    },
    {
        key: '310',
        index: '10',
        name: '田间路（机耕路）',
        unit: 'km',
        number: '16.8',
        remark: '',
    },
    {
        key: '311',
        index: '11',
        name: '生产路',
        unit: 'km',
        number: '5.42',
        remark: '',
    },
    {
        key: '312',
        index: '12',
        name: '桥梁（路涵）',
        unit: '座',
        number: '4',
        remark: '',
    },
    {
        key: '313',
        index: '13',
        name: '高压输配电线路',
        unit: 'km',
        number: '2',
        remark: '',
    },
    {
        key: '314',
        index: '14',
        name: '低压输电线路',
        unit: 'km',
        number: '7',
        remark: '',
    },
    {
        key: '315',
        index: '15',
        name: '农田林网（距离）',
        unit: 'km',
        number: '26',
        remark: '',
    },
    {
        key: '316',
        index: '15',
        name: '农田林网（面积）',
        unit: 'hm²',
        number: '1333.33',
        remark: '',
    },
    {
        key: '317',
        index: '',
        name: '......',
        unit: '',
        number: '',
        remark: '',
    },
];

export default withRouter(MyTable);