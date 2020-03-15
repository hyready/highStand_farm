import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import {
    Table, Input, Button, Icon,
} from 'antd';
import './index.less';

class Evaluate extends Component {
    constructor(props){
		super(props);
		this.state={
        item:{},
        columns1 :[
            {
                title: '指标',
                dataIndex: 'zb1',
                key: 'zb1',
                width:'8%',
                render:renderContent1,
                align:'center'
            }, {
                title: '分值',
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
              title: '分值',
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
              title: '分值',
              dataIndex: 'qz3',
              key: 'qz3',
              width:'8%',
              render:renderContent7,
              align:'center'
          },{
              title: '实际得分',
              dataIndex: 'df',
              key: 'df',
              width:'8%',
              render:this.renderContent8.bind(this),
              align:'center'
          },{
              title: '总分',
              dataIndex: 'zf',
              key: 'zf',
              width:'8%',
              render:this.renderContent9.bind(this),
              align:'center'
          }],
        index:0,
        
		}
  }
  
  componentWillMount(){
      debugger
      this.props.pjdata
    //   var arr = Object.getOwnPropertyNames(this.props.pjdata)
      if(this.props.pjdata !=null){
        // document.querySelectorAll('.subProjectList .projectData input').forEach(function (input) {
        //     input.setAttribute('disabled', 'disabled')
        var hdfenshu = this.props.pjdata
        var zf = 0
        debugger
        for(let key in hdfenshu){
            if(key != "id" && key != "zxmid" && hdfenshu[key] != null){
                zf=zf+hdfenshu[key]
            }
        }
        hdfenshu.zf = zf
            this.setState({
                item:hdfenshu
            })
        // })
      }else{
        this.setState({
            item:{}
        })
      }
  }
  componentDidMount(){
    this.props.onRef(this)
  }
  change(e){
      var value = e.target.value
      var name = e.target.name
      var item = this.state.item
      debugger
      item[name] = value
      this.setState({
          item:item
      })
  }
  renderContent8 = (value, row, index) => {
    const obj = {
        children: <div style={{fontSize:10}}><input name={row.name} type='text' style={{width:'70%',border:'none'}}/></div>,
        props: {},
    };
    if(index ===0){ obj.children = <div style={{fontSize:10}}><input name='gbzntjsmj' value={this.state.item.gbzntjsmj} type='text' style={{width:'70%',border:'none'}}/></div>}
    if(index ===1){ obj.children = <div style={{fontSize:10}}><input name='tchd' value={this.state.item.tchd} type='text' style={{width:'70%',border:'none'}}/></div>}
    if(index ===2){ obj.children = <div style={{fontSize:10}}><input name='dmpd' value={this.state.item.dmpd} type='text' style={{width:'70%',border:'none'}}/></div>}
    if(index ===3){ obj.children = <div style={{fontSize:10}}><input name='dbhsl' value={this.state.item.dbhsl} type='text' style={{width:'70%',border:'none'}}/></div>}
    if(index ===4){ obj.children = <div style={{fontSize:10}}><input name='trzd' value={this.state.item.trzd} type='text' style={{width:'70%',border:'none'}}/></div>}
    if(index ===5){ obj.children = <div style={{fontSize:10}}><input name='tryjzhl' value={this.state.item.tryjzhl} type='text' style={{width:'70%',border:'none'}}/></div>}
    if(index ===6){ obj.children = <div style={{fontSize:10}}><input name='ggsjbzl' value={this.state.item.ggsjbzl} type='text' style={{width:'70%',border:'none'}}/></div>}
    if(index ===7){ obj.children = <div style={{fontSize:10}}><input name='psbz' value={this.state.item.psbz} type='text' style={{width:'70%',border:'none'}}/></div>}
    if(index ===8){ obj.children = <div style={{fontSize:10}}><input name='jzwsynx' value={this.state.item.jzwsynx} type='text' style={{width:'70%',border:'none'}}/></div>}
    if(index ===9){ obj.children = <div style={{fontSize:10}}><input name='dltdd' value={this.state.item.dltdd} type='text' style={{width:'70%',border:'none'}}/></div>}
    if(index ===10){ obj.children = <div style={{fontSize:10}}><input name='dlsynx' value={this.state.item.dlsynx} type='text' style={{width:'70%',border:'none'}}/></div>}
    if(index ===11){ obj.children = <div style={{fontSize:10}}><input name='ntfhbz' value={this.state.item.ntfhbz} type='text' style={{width:'70%',border:'none'}}/></div>}
    if(index ===12){ obj.children = <div style={{fontSize:10}}><input name='sdxlptcd' value={this.state.item.sdxlptcd} type='text' style={{width:'70%',border:'none'}}/></div>}
    if(index ===13){ obj.children = <div style={{fontSize:10}}><input name='xzlscl' value={this.state.item.xzlscl} type='text' style={{width:'70%',border:'none'}}/></div>}
    if(index ===14){ obj.children = <div style={{fontSize:10}}><input name='jchlbzgbznt' value={this.state.item.jchlbzgbznt} type='text' style={{width:'70%',border:'none'}}/></div>}
    if(index ===15){ obj.children = <div style={{fontSize:10}}><input name='nyzhjxhltgz' value={this.state.item.nyzhjxhltgz} type='text' style={{width:'70%',border:'none'}}/></div>}
    if(index ===16){ obj.children = <div style={{fontSize:10}}><input name='xzntggdbmj' value={this.state.item.xzntggdbmj} type='text' style={{width:'70%',border:'none'}}/></div>}
    if(index ===17){ obj.children = <div style={{fontSize:10}}><input name='xzntpsdbmj' value={this.state.item.xzntpsdbmj} type='text' style={{width:'70%',border:'none'}}/></div>}
    if(index ===18){ obj.children = <div style={{fontSize:10}}><input name='gzzltgdj' value={this.state.item.gzzltgdj} type='text' style={{width:'70%',border:'none'}}/></div>}
    if(index ===19){ obj.children = <div style={{fontSize:10}}><input name='jcsszdl' value={this.state.item.jcsszdl} type='text' style={{width:'70%',border:'none'}}/></div>}
    if(index ===20){ obj.children = <div style={{fontSize:10}}><input name='gczlsm' value={this.state.item.gczlsm} type='text' style={{width:'70%',border:'none'}}/></div>}
    if(index ===21){ obj.children = <div style={{fontSize:10}}><input name='gzcxhgx' value={this.state.item.gzcxhgx} type='text' style={{width:'70%',border:'none'}}/></div>}
    if(index ===22){ obj.children = <div style={{fontSize:10}}><input name='ghbz' value={this.state.item.ghbz} type='text' style={{width:'70%',border:'none'}}/></div>}
    if(index ===23){ obj.children = <div style={{fontSize:10}}><input name='jgxs' value={this.state.item.jgxs} type='text' style={{width:'70%',border:'none'}}/></div>}
    if(index ===24){ obj.children = <div style={{fontSize:10}}><input name='zjgl' value={this.state.item.zjgl} type='text' style={{width:'70%',border:'none'}}/></div>}
    if(index ===25){ obj.children = <div style={{fontSize:10}}><input name='tdqqdj' value={this.state.item.tdqqdj} type='text' style={{width:'70%',border:'none'}}/></div>}
    if(index ===26){ obj.children = <div style={{fontSize:10}}><input name='strk' value={this.state.item.strk} type='text' style={{width:'70%',border:'none'}}/></div>}
    if(index ===27){ obj.children = <div style={{fontSize:10}}><input name='jbnthd' value={this.state.item.jbnthd} type='text' style={{width:'70%',border:'none'}}/></div>}
    if(index ===28){ obj.children = <div style={{fontSize:10}}><input name='tjgcsyqk' value={this.state.item.tjgcsyqk} type='text' style={{width:'70%',border:'none'}}/></div>}
    if(index ===29){ obj.children = <div style={{fontSize:10}}><input name='gzmyd' value={this.state.item.gzmyd} type='text' style={{width:'70%',border:'none'}}/></div>}
    if(index ===30){ obj.children = <div style={{fontSize:10}}><input name='zyncldls' value={this.state.item.zyncldls} type='text' style={{width:'70%',border:'none'}}/></div>}
    if(index ===31){ obj.children = <div style={{fontSize:10}}><input name='pjzjnjsr' value={this.state.item.pjzjnjsr} type='text' style={{width:'70%',border:'none'}}/></div>}
    if(index ===32){ obj.children = <div style={{fontSize:10}}><input name='ntzhjxhltgz' value={this.state.item.ntzhjxhltgz} type='text' style={{width:'70%',border:'none'}}/></div>}

    if (row.title) {
        obj.props.colSpan = 1;
    }
    return obj;
};
renderContent9 = (value, row, index) => {
    const obj = {
        children: <div style={{fontSize:10}}>{value}</div>,
        props: {},
    };
    obj.props.rowSpan = 0
    if(index ===0){
        obj.children = <div style={{fontSize:12}}><input value={this.state.item.zf} type='text' style={{width:'70%',border:'none'}}/></div>
        obj.props.rowSpan = 33
    }
    return obj;
};
    render() {
        return (
            <div onChange={this.change.bind(this)}>
            <Table
            size='small'
            scroll={{  y: 600 }} 
            bordered pagination={false} columns={this.state.columns1} dataSource={data} rowClassName='hover_yanse'/>
        </div>);
    }
}
// const change = (e) => {
//     // debugger
//     var value = e.target.value
//     console.log(value)
//     return value
// }

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
        children: <div style={{fontSize:10}}>{value}</div>,
        props: {},
    };
    if(index != 0){
        obj.props.rowSpan = 0
    }
    if(index === 1){
        obj.children = <div style={{fontSize:12}}>50</div>
        obj.props.rowSpan = 12
    }
    if(index === 13){
        obj.children = <div style={{fontSize:12}}>19</div>
        obj.props.rowSpan = 8
    }
    if(index === 21){
        obj.children = <div style={{fontSize:12}}>14</div>
        obj.props.rowSpan = 9
    }
    if(index === 30){
        obj.children = <div style={{fontSize:12}}>12</div>
        obj.props.rowSpan = 3
    }
    return obj
};

const renderContent3 = (value, row, index) => {
    const obj = {
        children: <div style={{fontSize:10}}><a>{value}</a></div>,
        props: {},
    };
    if(index != 0 && index != 11 && index !=12 && index !=15 && index !=29  && index !=30 && index !=31 && index !=32){
        obj.props.rowSpan = 0
    }
    if(index === 1){
        obj.children = <div style={{fontSize:12}} onClick={clickWin}><a>土地平整工程</a></div>
        obj.props.rowSpan = 3
    }
    if(index === 4){
        obj.children = <div style={{fontSize:12}}><a>土壤改良工程</a></div>
        obj.props.rowSpan = 2
    }
    if(index === 6){
        obj.children = <div style={{fontSize:12}}><a>灌溉与排水工程</a></div>
        obj.props.rowSpan = 3
    }
    if(index === 9){
        obj.children = <div style={{fontSize:12}}><a>田间道路工程</a></div>
        obj.props.rowSpan = 2
    }
    if(index === 13){
        obj.children = <div style={{fontSize:12}}><a>经济效益</a></div>
        obj.props.rowSpan = 2
    }
    if(index === 16){
        obj.children = <div style={{fontSize:12}}><a>生态效益</a></div>
        obj.props.rowSpan = 2
    }
    if(index === 18){
        obj.children = <div style={{fontSize:12}}><a>资源环境</a></div>
        obj.props.rowSpan = 3
    }
    if(index === 21){
        obj.children = <div style={{fontSize:12}}><a>前期工作</a></div>
        obj.props.rowSpan = 2
    }
    if(index === 23){
        obj.children = <div style={{fontSize:12}}><a>项目管理</a></div>
        obj.props.rowSpan = 2
    }
    if(index === 25){
        obj.children = <div style={{fontSize:12}}><a>后期管护利用</a></div>
        obj.props.rowSpan = 4
    }
    return obj
};



const renderContent4 = (value, row, index) => {
    const obj = {
        children: <div style={{fontSize:10}}>{value}</div>,
        props: {},
    };
    if(index != 0 && index != 11 && index !=12 && index !=15 && index !=29  && index !=30 && index !=31 && index !=32){
        obj.props.rowSpan = 0
    }
    if(index === 1){
        obj.children = <div style={{fontSize:12}}>5</div>
        obj.props.rowSpan = 3
    }
    if(index === 4){
        obj.children = <div style={{fontSize:12}}>5</div>
        obj.props.rowSpan = 2
    }
    if(index === 6){
        obj.children = <div style={{fontSize:12}}>29</div>
        obj.props.rowSpan = 3
    }
    if(index === 9){
        obj.children = <div style={{fontSize:12}}>4</div>
        obj.props.rowSpan = 2
    }
    if(index === 13){
        obj.children = <div style={{fontSize:12}}>7</div>
        obj.props.rowSpan = 2
    }
    if(index === 16){
        obj.children = <div style={{fontSize:12}}>6</div>
        obj.props.rowSpan = 2
    }
    if(index === 18){
        obj.children = <div style={{fontSize:12}}>5</div>
        obj.props.rowSpan = 3
    }
    if(index === 21){
        obj.children = <div style={{fontSize:12}}>4</div>
        obj.props.rowSpan = 2
    }
    if(index === 23){
        obj.children = <div style={{fontSize:12}}>4</div>
        obj.props.rowSpan = 2
    }
    if(index === 25){
        obj.children = <div style={{fontSize:12}}>5</div>
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
        children: <div style={{fontSize:10}}>{value}</div>,
        props: {},
    };
    if (row.title) {
        obj.props.colSpan = 0;
        
    }
    return obj;
};
const clickWin = () =>{
    document.querySelector('.zhanshi').setAttribute('class','a')
}
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
        name:'gbzntjsmj',
        qz3:'25',
        df:'5',
        zf:''
        
    },
    {
        key: '2',
        index: '2',
        zb1:'建设任务',
        qz1:'25',
        zb2:'计划完成情况',
        qz2:'25',
        bh:'A05',
        name:'tchd',
        zb3:'土层厚度',
        qz3:'2',
        df:'5',
        zf:''
    },
    {
        key: '3',
        index: '3',
        zb1:'建设任务',
        qz1:'25',
        zb2:'计划完成情况',
        qz2:'25',
        bh:'A06',
        name:'dmpd',
        zb3:'地面坡度',
        qz3:'2',
        df:'5',
        zf:''
    },
    {
        key: '4',
        index: '4',
        zb1:'建设任务',
        qz1:'25',
        zb2:'计划完成情况',
        qz2:'25',
        name:'dbhsl',
        bh:'A07',
        zb3:'地表石含量',
        qz3:'1',
        df:'5',
        zf:''
    },
    {
        key: '5',
        index: '5',
        zb1:'建设任务',
        qz1:'25',
        zb2:'计划完成情况',
        qz2:'25',
        name:'trzd',
        bh:'A11',
        zb3:'土壤质地',
        qz3:'3',
        df:'5',
        zf:''
    },
    {
        key: '6',
        index: '6',
        zb1:'建设任务',
        qz1:'25',
        zb2:'计划完成情况',
        qz2:'25',
        bh:'A12',
        name:'tryjzhl',
        zb3:'土壤有机质含量',
        qz3:'2',
        df:'5',
        zf:''
    },
    {
        key: '7',
        index: '7',
        zb1:'建设任务',
        qz1:'25',
        zb2:'计划完成情况',
        qz2:'25',
        name:'ggsjbzl',
        bh:'A16',
        zb3:'灌溉设计保证率',
        qz3:'2',
        df:'5',
        zf:''
    },
    {
        key: '8',
        index: '8',
        zb1:'建设任务',
        qz1:'25',
        zb2:'计划完成情况',
        qz2:'25',
        name:'psbz',
        bh:'A08',
        zb3:'排水标准',
        qz3:'25',
        df:'5',
        zf:''
    },
    {
        key: '9',
        index: '9',
        zb1:'建设任务',
        qz1:'25',
        zb2:'计划完成情况',
        qz2:'25',
        name:'jzwsynx',
        bh:'A17',
        zb3:'建筑物使用年限',
        qz3:'2',
        df:'5',
        zf:''
    },
    {
        key: '10',
        index: '10',
        zb1:'建设任务',
        qz1:'25',
        zb2:'计划完成情况',
        qz2:'25',
        name:'dltdd',
        bh:'A18',
        zb3:'道路通达度',
        qz3:'1',
        df:'5',
        zf:''
    },
    {
        key: '11',
        index: '11',
        zb1:'建设任务',
        qz1:'25',
        zb2:'计划完成情况',
        qz2:'25',
        bh:'A21',
        name:'dlsynx',
        zb3:'道路使用年限',
        qz3:'3',
        df:'5',
        zf:''
    },
    {
        key: '12',
        index: '12',
        zb1:'建设任务',
        qz1:'25',
        zb2:'农田防护与生态环境保持工程',
        qz2:'2',
        bh:'A22',
        name:'ntfhbz',
        zb3:'农田防护标准',
        qz3:'2',
        df:'5',
        zf:''
    },
    {
        key: '13',
        index: '13',
        zb1:'建设任务',
        qz1:'25',
        zb2:'农田输配电工程',
        qz2:'5',
        bh:'A24',
        name:'sdxlptcd',
        zb3:'输电线路配套程度',
        qz3:'5',
        df:'5',
        zf:''
    },
    {
        key: '14',
        index: '14',
        zb1:'建设任务',
        qz1:'25',
        zb2:'计划完成情况',
        qz2:'25',
        name:'xzlscl',
        bh:'A26',
        zb3:'新增粮食产量',
        qz3:'5',
        df:'5',
        zf:''
    },
    {
        key: '15',
        index: '15',
        zb1:'建设任务',
        qz1:'25',
        zb2:'计划完成情况',
        qz2:'25',
        name:'jchlbzgbznt',
        bh:'A28',
        zb3:'建成旱涝保证高标准农田面积',
        qz3:'2',
        df:'5',
        zf:''
    },
    {
        key: '16',
        index: '16',
        zb1:'建设任务',
        qz1:'25',
        zb2:'社会效益',
        qz2:'1',
        name:'nyzhjxhltgz',
        bh:'A29',
        zb3:'农业综合机械化率提高值',
        qz3:'1',
        df:'5',
        zf:''
    },
    {
        key: '17',
        index: '17',
        zb1:'建设任务',
        qz1:'25',
        zb2:'计划完成情况',
        name:'xzntggdbmj',
        qz2:'25',
        bh:'A32',
        zb3:'新增农田灌溉达标面积',
        qz3:'3',
        df:'5',
        zf:''
    },
    {
        key: '18',
        index: '18',
        zb1:'建设任务',
        qz1:'25',
        zb2:'计划完成情况',
        name:'xzntpsdbmj',
        qz2:'25',
        bh:'A41',
        zb3:'新增农田排水达标面积',
        qz3:'3',
        df:'5',
        zf:''
    },
    {
        key: '19',
        index: '19',
        zb1:'建设任务',
        qz1:'25',
        zb2:'计划完成情况',
        name:'gdzldjtgz',
        qz2:'25',
        bh:'A42',
        zb3:'耕地质量等级提高值',
        qz3:'2',
        df:'5',
        zf:''
    },
    {
        key: '20',
        index: '20',
        zb1:'建设任务',
        qz1:'25',
        zb2:'计划完成情况',
        name:'jcsszdl',
        qz2:'25',
        bh:'A54',
        zb3:'基础设施占地率',
        qz3:'2',
        df:'5',
        zf:''
    },
    {
        key: '21',
        index: '21',
        zb1:'建设任务',
        qz1:'25',
        zb2:'计划完成情况',
        name:'gczlsm',
        qz2:'25',
        bh:'A55',
        zb3:'工程质量寿命',
        qz3:'1',
        df:'5',
        zf:''
    },
    {
        key: '22',
        index: '22',
        zb1:'建设任务',
        qz1:'25',
        zb2:'计划完成情况',
        name:'gzcxhgx',
        qz2:'25',
        bh:'A56',
        zb3:'工作程序合规性',
        qz3:'1',
        df:'5',
        zf:''
    },
    {
        key: '23',
        index: '23',
        zb1:'建设任务',
        qz1:'25',
        zb2:'计划完成情况',
        name:'ghbz',
        qz2:'25',
        bh:'A66',
        zb3:'规划编制',
        qz3:'3',
        df:'5',
        zf:''
    },
    {
        key: '24',
        index: '24',
        zb1:'建设任务',
        qz1:'25',
        zb2:'计划完成情况',
        name:'jgxs',
        qz2:'25',
        bh:'A67',
        zb3:'竣工验收',
        qz3:'2',
        df:'5',
        zf:''
    },
    {
        key: '25',
        index: '25',
        zb1:'建设任务',
        qz1:'25',
        zb2:'计划完成情况',
        name:'zjgl',
        qz2:'25',
        bh:'A69',
        zb3:'资金管理',
        qz3:'2',
        df:'5',
        zf:''
    },
    {
        key: '26',
        index: '26',
        zb1:'建设任务',
        qz1:'25',
        zb2:'计划完成情况',
        name:'tdqqdj',
        qz2:'25',
        bh:'A70',
        zb3:'土地确权登记',
        qz3:'2',
        df:'5',
        zf:''
    },
    {
        key: '27',
        index: '27',
        zb1:'建设任务',
        qz1:'25',
        zb2:'计划完成情况',
        name:'strk',
        qz2:'25',
        bh:'A75',
        zb3:'上图入库',
        qz3:'1',
        df:'5',
        zf:''
    },
    {
        key: '28',
        index: '28',
        zb1:'建设任务',
        qz1:'25',
        zb2:'计划完成情况',
        name:'jbnthd',
        qz2:'25',
        bh:'A76',
        zb3:'基本农田划定',
        qz3:'1',
        df:'5',
        zf:''
    },
    {
        key: '29',
        index: '29',
        zb1:'建设任务',
        qz1:'25',
        zb2:'计划完成情况',
        name:'tjgcsyqk',
        qz2:'25',
        bh:'A77',
        zb3:'田间工程使用情况',
        qz3:'1',
        df:'5',
        zf:''
    },
    {
        key: '30',
        index: '30',
        zb1:'建设任务',
        qz1:'25',
        zb2:'公众参与',
        name:'gzmyd',
        qz2:'1',
        bh:'A79',
        zb3:'公众满意度',
        qz3:'1',
        df:'5',
        zf:''
    },
    {
        key: '31',
        index: '31',
        zb1:'建设任务',
        qz1:'25',
        zb2:'农村人口变化',
        name:'zyncldls',
        qz2:'2',
        bh:'A82',
        zb3:'转移农村劳动力数',
        qz3:'2',
        df:'5',
        zf:''
    },
    {
        key: '32',
        index: '32',
        zb1:'建设任务',
        qz1:'25',
        zb2:'农村生活改善',
        name:'pjzjnjsr',
        qz2:'5',
        bh:'A32',
        zb3:'平均增加年净收入',
        qz3:'5',
        df:'5',
        zf:''
    },
    {
        key: '32',
        index: '33',
        zb1:'建设任务',
        qz1:'25',
        zb2:'农村生产发展',
        name:'nyzhjxhltgz',
        qz2:'5',
        bh:'A01',
        zb3:'农业综合机械化率提高值',
        qz3:'5',
        df:'5',
        zf:''
    }
    
];

export default withRouter(Evaluate);