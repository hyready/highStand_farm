import React, { Component } from "react";
import './index.less';
import { Input } from 'antd';

const { TextArea } = Input;

class Report extends Component {
    constructor(props) {
        super(props);
        this.state = {
            xmmc:'',
            content:'',
            txtData : [
                '江津区红阳街道永红村高标准农田建设项目评价报告',
                {
                    subtile: '1 基本情况',
                    content: '\t江津区红阳街道高标准农田建设项目，建设规模362.hm²，项目预算1206.03万元。\n\t主要建设任务：计划新建村砌渠道2.84公里，其中骨干灌渠2.29公里、骨干排渠0.55公里，渠系建筑物（机耕桥）1座，修建机耕道6.49公里。'
                },
                {
                    subtile: '2 工作组织和程序',
                    content: '\t2.1 前期准备\n\t2.2 工作实施'
                },
                {
                    subtile: '3 评价指标选择和评价标准',
                    content: '\t经专家研究，参照研究标准，本项目由33个指标组合组成、根据地方特色选择了部分可选指标。'
                },
                {
                    subtile: '4 建设任务完成情况',
                    content: '\t江津区红阳街道永红村高标准农田建设项目项目资金到位1206.03万元，资金到位率100%。共建成高标准农田362.52hm²，建成率100%。'
                },
                {
                    subtile: '5 耕地质量等级复核情况',
                    content: ''
                },
                {
                    subtile: '6 建设成效评价',
                    content: '\t项目建成后，预计可实现年新增粮食生产能力14.04万公斤；其它农产品33.3万公斤。可新增产值143.56万元，农民纯收入增加总额87.76万元。'
                },
                {
                    subtile: '7 建设管理评价',
                    content: '\t该项目在建设管理方面较好地完成了任务。'
                },
                {
                    subtile: '8 社会影响评价',
                    content: '\t项目建成后，可明显改善基本园区的灌溉和交通条件，新增灌溉面积0.02万亩，改善除涝面积0.01万亩，年节约凉水约12万立方，大大提高了水资源利用率，通过机耕路建设方便村民的生产生活，可促进高校优质农业的快速发展，促进新农村的和谐稳定，社会效益显著。'
                },
                {
                    subtile: '9 目标可持续性评价',
                    content: '\t努力实现经济效益、社会效益和生态效益的统一，促进土地资源的可持续利用。项目的实施，极大地改善了农业基本生产条件，增强了抗御自然灾害的能力。通过农业新技术、新品种的推广，增加粮食产量，有利于农作物的高产稳产。同时，由于实行了农业标准化生产，促进了农业可持续发展。'
                },
                {
                    subtile: '10 结论和建议',
                    content: '\t建议加大投入，扩大规模，提高亩投资建设标准。目前，农开项目投资总量小、开发规模小、亩投资标准较低，而实施高标准农田建设项目的单位除我们农开办，还有农业、国土等部门，据我们了解其他涉农部门亩投资标准高，高标准农田建设项目规模与群众的期盼甚远。建议加大投入，扩大规模，提高亩投资建设标准，达到其它部门同类项目的投资标准。关于下一步工作重点，我们将突出两方面：一是以县主导产业为基础，加大投入，建立一批高标准的产业建设基地，切实加强土地治理与产业化经营的有机结合。二是以区域农业规划为基础，以农业综合开发为平台，加快构建涉农资金统筹整合机制，确保资金投入效益最大化。评分见附件评分表。'
                },
            ]
        }
    }
    componentWillMount(){
        this.props.data
        if(this.props.data.xmjsgm == null){
            this.props.data.xmjsgm = 0
        }
        if(this.props.data.xmztz == null){
            this.props.data.xmztz = 0
        }
        this.setState({
            xmmc:this.props.data.xmmc+'评价报告',
            content:'\t'+this.props.data.xmmc+'，建设规模'+this.props.data.xmjsgm+'hm²，项目预算'+this.props.data.xmztz+'万元。\n\t主要建设任务：计划新建村砌渠道2.84公里，其中骨干灌渠2.29公里、骨干排渠0.55公里，渠系建筑物（机耕桥）1座，修建机耕道6.49公里。',
            content1:'\t'+this.props.data.xmmc+'项目资金到位1206.03万元，资金到位率100%。共建成高标准农田362.52hm²，建成率100%。'
        })
    }
    render() {
        return (
        <div className='report_main' id='baogao'>
            <div className='report_title'>{this.state.xmmc}</div>
            <div className='report_subtitle'>{this.state.txtData[1].subtile}</div>
            <TextArea className='report_content' defaultValue={this.state.content} />
            <div className='report_subtitle'>{this.state.txtData[2].subtile}</div>
            <TextArea className='report_content' defaultValue={this.state.txtData[2].content} />
            <div className='report_subtitle'>{this.state.txtData[3].subtile}</div>
            <TextArea className='report_content' defaultValue={this.state.txtData[3].content} />
            <div className='report_subtitle'>{this.state.txtData[4].subtile}</div>
            <TextArea className='report_content' defaultValue={this.state.content1} />
            <div className='report_subtitle'>{this.state.txtData[5].subtile}</div>
            <TextArea className='report_content' defaultValue={this.state.txtData[5].content} />
            <div className='report_subtitle'>{this.state.txtData[6].subtile}</div>
            <TextArea className='report_content' defaultValue={this.state.txtData[6].content} />
            <div className='report_subtitle'>{this.state.txtData[7].subtile}</div>
            <TextArea className='report_content' defaultValue={this.state.txtData[7].content} />
            <div className='report_subtitle'>{this.state.txtData[8].subtile}</div>
            <TextArea className='report_content' defaultValue={this.state.txtData[8].content} />
            <div className='report_subtitle'>{this.state.txtData[9].subtile}</div>
            <TextArea className='report_content' defaultValue={this.state.txtData[9].content} />
            <div className='report_subtitle'>{this.state.txtData[10].subtile}</div>
            <TextArea className='report_content' defaultValue={this.state.txtData[10].content} />
        </div>
        )
    }

}
export default Report