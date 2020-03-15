import React, {Component} from "react";
import {Route, Switch, withRouter} from "react-router-dom";
import {Table, Icon, Button, Input, InputNumber, Popconfirm, Form, Modal, Divider, Tag , Radio ,Upload , Select } from 'antd';
import {FetchHelper} from "freesia-core";



class History extends Component {
    constructor(props){
		super(props);
		this.state={
        columns:[
          {
              title: 'operationTime',
              dataIndex: 'operationTime',
              width:'17%',
              key: 'operationTime',
          }, {
            title: 'userName',
            dataIndex: 'userName',
            width:'15%',
            key: 'userName',
          }, {
            title: 'operation',
            dataIndex: 'operation',
            key: 'operation',
          }],
          data:[]
		}
  }
  componentWillMount(){
  }
  componentDidMount(){
    var _this = this
    FetchHelper.getJson('/api/xmls/getxmls',{
      xmid:_this.props.match.params.id
  }).then(resp => {
      if(resp.status === 200){
                  _this.setState({
                    data:resp.data
                  })
      }
  })
  }
    render() {
        return (
            <div className='projectdetail_history'>
                <Table
                    dataSource={this.state.data}
                    columns={this.state.columns}
                    showHeader={false}
                    pagination={{pageSize:6}}
                 />
            </div>
        );
    }
}

export default withRouter(History);

