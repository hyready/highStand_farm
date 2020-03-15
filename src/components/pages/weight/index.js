import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import {
    Table, Input, Button, Icon,
} from 'antd';
import './index.less';

class Weight extends Component {
    constructor(props){
		super(props);
		this.state={
        columns1:[
          {
              title: '指标',
              dataIndex: 'zb1',
              key: 'zb1',
              width:'8%',
              render:renderContent1,
              align:'center'
          }, {
              title: '权重',
              dataIndex: 'qz1',
              key: 'qz1',
              width:'8%',
              render:renderContent2,
            
              align:'center'
          }, {
              title: '指标',
              dataIndex: 'zb2',
              key: 'zb2',
              render: renderContent3,
              align:'center'
          },{
            title: '权重',
            dataIndex: 'qz2',
            key: 'qz2',
            width:'8%',
            render:renderContent4,
            align:'center'
        }, {
            title: '编号',
            dataIndex: 'bh',
            key: 'bh',
            width:'8%',
            render:renderContent5,
          
            align:'center'
        }, {
            title: '指标',
            dataIndex: 'zb3',
            key: 'zb3',
            render:renderContent6,
            align:'center'
        },{
            title: '权重',
            dataIndex: 'qz3',
            key: 'qz3',
            width:'8%',
            render:renderContent7,
            align:'center'
        }]
		}
  }
    render() {
        
        return (<div>
            <Table 
            size='small'
            scroll={{  y: 600 }} 
            bordered pagination={false} columns={this.state.columns1} dataSource={data} rowClassName='hover_yanse'/>
        </div>);
    }

}


const renderContent1 = (value, row, index) => {
    const obj = {
        children: <div style={{fontSize:10}}>{value}</div>,
        props: {},
    };
    if(index !=0){
        obj.props.rowSpan = 0
    }
    if(index === 1){
        obj.children = <div style={{fontSize:12}}>建设质量</div>
        obj.props.rowSpan = 12
    }
    if(index === 13){
        obj.children = <div style={{fontSize:12}}>建设成效</div>
        obj.props.rowSpan = 8
    }
    if(index === 21){
        obj.children = <div style={{fontSize:12}}>建设管理</div>
        obj.props.rowSpan = 9
    }
    if(index === 30){
        obj.children = <div style={{fontSize:12}}>社会影响</div>
        obj.props.rowSpan = 3
    }
    return obj
};

const renderContent2 = (value, row, index) => {
    const obj = {
        children: <div style={{fontSize:10}}><input type='text' style={{width:'70%',border:'1px solid #ddd'}}/></div>,
        props: {},
    };
    if(index != 0){
        obj.props.rowSpan = 0
    }
    if(index === 1){
        obj.children = <div style={{fontSize:12}}><input type='text' style={{width:'70%',border:'1px solid #ddd'}}/></div>
        obj.props.rowSpan = 12
    }
    if(index === 13){
        obj.children = <div style={{fontSize:12}}><input type='text' style={{width:'70%',border:'1px solid #ddd'}}/></div>
        obj.props.rowSpan = 8
    }
    if(index === 21){
        obj.children = <div style={{fontSize:12}}><input type='text' style={{width:'70%',border:'1px solid #ddd'}}/></div>
        obj.props.rowSpan = 9
    }
    if(index === 30){
        obj.children = <div style={{fontSize:12}}><input type='text' style={{width:'70%',border:'1px solid #ddd'}}/></div>
        obj.props.rowSpan = 3
    }
    return obj
};

const renderContent3 = (value, row, index) => {
    const obj = {
        children: <div style={{fontSize:10}}>{value}</div>,
        props: {},
    };
    if(index != 0 && index != 11 && index !=12 && index !=15 && index !=29  && index !=30 && index !=31 && index !=32){
        obj.props.rowSpan = 0
    }
    if(index === 1){
        obj.children = <div style={{fontSize:12}}>土地平整工程</div>
        obj.props.rowSpan = 3
    }
    if(index === 4){
        obj.children = <div style={{fontSize:12}}>土壤改良工程</div>
        obj.props.rowSpan = 2
    }
    if(index === 6){
        obj.children = <div style={{fontSize:12}}>灌溉与排水工程</div>
        obj.props.rowSpan = 3
    }
    if(index === 9){
        obj.children = <div style={{fontSize:12}}>田间道路工程</div>
        obj.props.rowSpan = 2
    }
    if(index === 13){
        obj.children = <div style={{fontSize:12}}>经济效益</div>
        obj.props.rowSpan = 2
    }
    if(index === 16){
        obj.children = <div style={{fontSize:12}}>生态效益</div>
        obj.props.rowSpan = 2
    }
    if(index === 18){
        obj.children = <div style={{fontSize:12}}>资源环境</div>
        obj.props.rowSpan = 3
    }
    if(index === 21){
        obj.children = <div style={{fontSize:12}}>前期工作</div>
        obj.props.rowSpan = 2
    }
    if(index === 23){
        obj.children = <div style={{fontSize:12}}>项目管理</div>
        obj.props.rowSpan = 2
    }
    if(index === 25){
        obj.children = <div style={{fontSize:12}}>后期管护利用</div>
        obj.props.rowSpan = 4
    }
    return obj
};

const renderContent4 = (value, row, index) => {
    const obj = {
        children: <div style={{fontSize:10}}><input type='text' style={{width:'70%',border:'1px solid #ddd'}}/></div>,
        props: {},
    };
    if(index != 0 && index != 11 && index !=12 && index !=15 && index !=29  && index !=30 && index !=31 && index !=32){
        obj.props.rowSpan = 0
    }
    if(index === 1){
        obj.children = <div style={{fontSize:12}}><input type='text' style={{width:'70%',border:'1px solid #ddd'}}/></div>
        obj.props.rowSpan = 3
    }
    if(index === 4){
        obj.children = <div style={{fontSize:12}}><input type='text' style={{width:'70%',border:'1px solid #ddd'}}/></div>
        obj.props.rowSpan = 2
    }
    if(index === 6){
        obj.children = <div style={{fontSize:12}}><input type='text' style={{width:'70%',border:'1px solid #ddd'}}/></div>
        obj.props.rowSpan = 3
    }
    if(index === 9){
        obj.children = <div style={{fontSize:12}}><input type='text' style={{width:'70%',border:'1px solid #ddd'}}/></div>
        obj.props.rowSpan = 2
    }
    if(index === 13){
        obj.children = <div style={{fontSize:12}}><input type='text' style={{width:'70%',border:'1px solid #ddd'}}/></div>
        obj.props.rowSpan = 2
    }
    if(index === 16){
        obj.children = <div style={{fontSize:12}}><input type='text' style={{width:'70%',border:'1px solid #ddd'}}/></div>
        obj.props.rowSpan = 2
    }
    if(index === 18){
        obj.children = <div style={{fontSize:12}}><input type='text' style={{width:'70%',border:'1px solid #ddd'}}/></div>
        obj.props.rowSpan = 3
    }
    if(index === 21){
        obj.children = <div style={{fontSize:12}}><input type='text' style={{width:'70%',border:'1px solid #ddd'}}/></div>
        obj.props.rowSpan = 2
    }
    if(index === 23){
        obj.children = <div style={{fontSize:12}}><input type='text' style={{width:'70%',border:'1px solid #ddd'}}/></div>
        obj.props.rowSpan = 2
    }
    if(index === 25){
        obj.children = <div style={{fontSize:12}}><input type='text' style={{width:'70%',border:'1px solid #ddd'}}/></div>
        obj.props.rowSpan = 4
    }
    return obj
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
const renderContent6 = (value, row, index) => {
    const obj = {
        children: <div style={{fontSize:10}}>{value}</div>,
        props: {},
    };
    if (row.title) {
        obj.props.colSpan = 0;
        
    }
    return obj;
};
const renderContent7 = (value, row, index) => {
    const obj = {
        children: <div style={{fontSize:10}}><input type='text' style={{width:'70%',border:'1px solid #ddd'}}/></div>,
        props: {},
    };
    if (row.title) {
        obj.props.colSpan = 0;
        
    }
    return obj;
};

const data = [
    {
        key: '1',
        index: '1',
        zb1:'建设任务',
        qz1:'25',
        zb2:'计划完成情况',
        qz2:'25',
        bh:'A01',
        zb3:'高标准农田建设面积',
        qz3:'25',
        
    },
    {
        key: '2',
        index: '0',
        zb1:'建设任务',
        qz1:'25',
        zb2:'计划完成情况',
        qz2:'25',
        bh:'A05',
        zb3:'土层厚度',
        qz3:'2',
    },
    {
        key: '3',
        index: '0',
        zb1:'建设任务',
        qz1:'25',
        zb2:'计划完成情况',
        qz2:'25',
        bh:'A06',
        zb3:'地面坡度',
        qz3:'2',
    },
    {
        key: '4',
        index: '0',
        zb1:'建设任务',
        qz1:'25',
        zb2:'计划完成情况',
        qz2:'25',
        bh:'A07',
        zb3:'地表石含量',
        qz3:'1',
    },
    {
        key: '5',
        index: '0',
        zb1:'建设任务',
        qz1:'25',
        zb2:'计划完成情况',
        qz2:'25',
        bh:'A11',
        zb3:'土壤质地',
        qz3:'3',
    },
    {
        key: '6',
        index: '0',
        zb1:'建设任务',
        qz1:'25',
        zb2:'计划完成情况',
        qz2:'25',
        bh:'A12',
        zb3:'土壤有机质含量',
        qz3:'2',
    },
    {
        key: '7',
        index: '0',
        zb1:'建设任务',
        qz1:'25',
        zb2:'计划完成情况',
        qz2:'25',
        bh:'A16',
        zb3:'灌溉设计保证率',
        qz3:'2',
    },
    {
        key: '8',
        index: '3',
        zb1:'建设任务',
        qz1:'25',
        zb2:'计划完成情况',
        qz2:'25',
        bh:'A08',
        zb3:'排水标准',
        qz3:'25',
    },
    {
        key: '9',
        index: '3',
        zb1:'建设任务',
        qz1:'25',
        zb2:'计划完成情况',
        qz2:'25',
        bh:'A17',
        zb3:'建筑物使用年限',
        qz3:'2',
    },
    {
        key: '10',
        index: '3',
        zb1:'建设任务',
        qz1:'25',
        zb2:'计划完成情况',
        qz2:'25',
        bh:'A18',
        zb3:'道路通达度',
        qz3:'1',
    },
    {
        key: '11',
        index: '3',
        zb1:'建设任务',
        qz1:'25',
        zb2:'计划完成情况',
        qz2:'25',
        bh:'A21',
        zb3:'道路使用年限',
        qz3:'3',
    },
    {
        key: '12',
        index: '3',
        zb1:'建设任务',
        qz1:'25',
        zb2:'农田防护与生态环境保持工程',
        qz2:'5',
        bh:'A22',
        zb3:'农田防护标准',
        qz3:'2',
    },
    {
        key: '13',
        index: '3',
        zb1:'建设任务',
        qz1:'25',
        zb2:'农田输配电工程',
        qz2:'5',
        bh:'A24',
        zb3:'输电线路配套程度',
        qz3:'5',
    },
    {
        key: '14',
        index: '3',
        zb1:'建设任务',
        qz1:'25',
        zb2:'计划完成情况',
        qz2:'25',
        bh:'A26',
        zb3:'新增粮食产量',
        qz3:'5',
    },
    {
        key: '15',
        index: '3',
        zb1:'建设任务',
        qz1:'25',
        zb2:'计划完成情况',
        qz2:'25',
        bh:'A28',
        zb3:'建成旱涝保证高标准农田面积',
        qz3:'2',
    },
    {
        key: '16',
        index: '3',
        zb1:'建设任务',
        qz1:'25',
        zb2:'社会效益',
        qz2:'3',
        bh:'A29',
        zb3:'农业综合机械化率提高值',
        qz3:'1',
    },
    {
        key: '17',
        index: '3',
        zb1:'建设任务',
        qz1:'25',
        zb2:'计划完成情况',
        qz2:'25',
        bh:'A32',
        zb3:'新增农田灌溉达标面积',
        qz3:'3',
    },
    {
        key: '18',
        index: '3',
        zb1:'建设任务',
        qz1:'25',
        zb2:'计划完成情况',
        qz2:'25',
        bh:'A41',
        zb3:'新增农田排水达标面积',
        qz3:'3',
    },
    {
        key: '19',
        index: '3',
        zb1:'建设任务',
        qz1:'25',
        zb2:'计划完成情况',
        qz2:'25',
        bh:'A42',
        zb3:'耕地质量等级提高值',
        qz3:'2',
    },
    {
        key: '20',
        index: '3',
        zb1:'建设任务',
        qz1:'25',
        zb2:'计划完成情况',
        qz2:'25',
        bh:'A54',
        zb3:'基础设施占地率',
        qz3:'2',
    },
    {
        key: '21',
        index: '3',
        zb1:'建设任务',
        qz1:'25',
        zb2:'计划完成情况',
        qz2:'25',
        bh:'A55',
        zb3:'工程质量寿命',
        qz3:'1',
    },
    {
        key: '22',
        index: '3',
        zb1:'建设任务',
        qz1:'25',
        zb2:'计划完成情况',
        qz2:'25',
        bh:'A56',
        zb3:'工作程序合规性',
        qz3:'1',
    },
    {
        key: '23',
        index: '3',
        zb1:'建设任务',
        qz1:'25',
        zb2:'计划完成情况',
        qz2:'25',
        bh:'A66',
        zb3:'规划编制',
        qz3:'3',
    },
    {
        key: '24',
        index: '3',
        zb1:'建设任务',
        qz1:'25',
        zb2:'计划完成情况',
        qz2:'25',
        bh:'A67',
        zb3:'竣工验收',
        qz3:'2',
    },
    {
        key: '25',
        index: '3',
        zb1:'建设任务',
        qz1:'25',
        zb2:'计划完成情况',
        qz2:'25',
        bh:'A69',
        zb3:'资金管理',
        qz3:'2',
    },
    {
        key: '26',
        index: '3',
        zb1:'建设任务',
        qz1:'25',
        zb2:'计划完成情况',
        qz2:'25',
        bh:'A70',
        zb3:'土地确权登记',
        qz3:'2',
    },
    {
        key: '27',
        index: '3',
        zb1:'建设任务',
        qz1:'25',
        zb2:'计划完成情况',
        qz2:'25',
        bh:'A75',
        zb3:'上图入库',
        qz3:'1',
    },
    {
        key: '28',
        index: '3',
        zb1:'建设任务',
        qz1:'25',
        zb2:'计划完成情况',
        qz2:'25',
        bh:'A76',
        zb3:'基本农田划定',
        qz3:'1',
    },
    {
        key: '29',
        index: '3',
        zb1:'建设任务',
        qz1:'25',
        zb2:'计划完成情况',
        qz2:'25',
        bh:'A77',
        zb3:'田间工程使用情况',
        qz3:'1',
    },
    {
        key: '30',
        index: '3',
        zb1:'建设任务',
        qz1:'25',
        zb2:'公众参与',
        qz2:'2',
        bh:'A79',
        zb3:'公众满意度',
        qz3:'1',
    },
    {
        key: '31',
        index: '3',
        zb1:'建设任务',
        qz1:'25',
        zb2:'农村人口变化',
        qz2:'5',
        bh:'A82',
        zb3:'转移农村劳动力数',
        qz3:'2',
    },
    {
        key: '32',
        index: '3',
        zb1:'建设任务',
        qz1:'25',
        zb2:'农村生活改善',
        qz2:'5',
        bh:'A32',
        zb3:'平均增加年净收入',
        qz3:'5',
    },
    {
        key: '32',
        index: '3',
        zb1:'建设任务',
        qz1:'25',
        zb2:'农村生产发展',
        qz2:'5',
        bh:'A01',
        zb3:'农业综合机械化率提高值',
        qz3:'5',
    }
    
];

export default withRouter(Weight);