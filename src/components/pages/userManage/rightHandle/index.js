import React, {Component,Fragment} from "react";
import {withRouter} from "react-router-dom";
import { Table,Select,Checkbox } from 'antd';
import {connect} from "react-redux";
import { FetchHelper } from "freesia-core";
import './index.less';
const Option = Select.Option;
const CheckboxGroup = Checkbox.Group;

const plainOptions1 = ["项目查看","项目申请","项目审批","项目评估","项目变更"];
const plainOptions2 = ["业务申请","业务变更","补贴审批"];
const plainOptions3 = ["属性查看","统计查看","图层选择"];
const plainOptions4 = ["数据查询","数据导出"];
const plainOptions5= ["档案维护","档案导出","档案查询","档案编辑"];
const plainOptions6= ["监管动态","预警查看","预警处理"];
const plainOptions7= ["日志查询","日志管理","日志导出"];

class RightHandle extends Component {
	constructor(props){
		super(props);
		this.state={
			
		}
	}
	
    render() {
        return (
        	<Fragment>
           	<div className="userManage-rightHandle">
           		<div className="qxgl-headerbox">
				    <div className="qxgl-header2">
		    			<span>当前角色:</span>
		    			<Select defaultValue="系统管理员" style={{ width: 200 }}>
					      <Option value="系统管理员">系统管理员</Option>
					      <Option value="评审专家组">评审专家组</Option>
					      <Option value="项目建设组">项目建设组</Option>
					      <Option value="业务管理组">业务管理组</Option>
					    </Select>
		    		</div>
		    		<div className="qxgl-content">
		    			<div className="qxgl-content-top">
		    				<table>
		    					<tbody>
		    						<tr>
		    							<th>模块</th>
		    							<th>功能</th>
		    						</tr>
		    						<tr>
		    							<td>项目管理</td>
		    							<td>
		    								 <CheckboxGroup options={plainOptions1} defaultValue="项目变更"/>
		    							</td>
		    						</tr>
		    						<tr>
		    							<td>管护业务</td>
		    							<td>
		    								<CheckboxGroup options={plainOptions2}/>
		    							</td>
		    						</tr>
		    						<tr>
		    							<td>一张图</td>
		    							<td>
		    								<CheckboxGroup options={plainOptions3} defaultValue="图层选择"/>
		    							</td>
		    						</tr>
		    						<tr>
		    							<td>数据查询</td>
		    							<td>
		    								<CheckboxGroup options={plainOptions4} defaultValue="数据导出"/>
		    							</td>
		    						</tr>
		    						<tr>
		    							<td>档案管理</td>
		    							<td>
		    								 <CheckboxGroup options={plainOptions5} defaultValue="档案维护"/>
		    							</td>
		    						</tr>
		    						<tr>
		    							<td>动态监管</td>
		    							<td>
		    								 <CheckboxGroup options={plainOptions6}/>
		    							</td>
		    						</tr>
		    						<tr>
		    							<td>日志管理</td>
		    							<td>
		    								 <CheckboxGroup options={plainOptions7} defaultValue="日志导出"/>
		    							</td>
		    						</tr>
		    					</tbody>
		    				</table>
		    			</div>
		    			<div className="qxgl-content-buttom">
		    				<button>返回</button>
		    				<button>确认</button>
		    			</div>
		    		</div>
			    </div>
          	</div>
        </Fragment>
    )}
   
	
}
export default withRouter(RightHandle);