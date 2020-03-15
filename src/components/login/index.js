import React, {
	Component,
	Fragment
} from "react";
import {
	Form,
	Input,
	Tooltip,
	Icon,
	Cascader,
	Select,
	Row,
	Col,
	Checkbox,
	Button,
	AutoComplete,
	notification,
	message,
	Modal
} from "antd";
import FetchHelper from "../../framework/fetch-helper";
import "./index.less";
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux'
//import sso from 'freesia-sso';
const Option = Select.Option;
const AutoCompleteOption = AutoComplete.Option;
const FormItem = Form.Item;
const loginPic = {
	backgroundImage: "url(../images/bg_big2.png)",
	backgroundPosition: '50% 50%',
	position: "relative",
	overflow: "hidden",
	backgroundRepeat: "no-repeat"
};


const LoginForm = Form.create()(
	class extends Component {
		constructor(...args) {
			super(...args);

			this.state = {
				landShow: {
					display: "block",
				},
				// isRemember: true,
				userName: '',
				password: ''
			};
		}

		componentWillMount() {

		}

		openNotification = (e) => {
			var description = '请联系管理员为您处理';
			notification.open({
				message: "系统提示：",
				description: description,
				icon: < Icon type = "message"
				style = {
					{
						color: "#108ee9"
					}
				}
				/>
			});
		};
		handleRegister = e => {
			this.props.fn();
		};
		handleSubmit = e => {
			var _this = this;
			e.preventDefault();
			_this.props.history.push('/main')
			this.props.form.validateFields((err, values) => {
				if(!err) {
					/* if (this.state.isRemember) {
					     localStorage.setItem('userName', values.userName)
					     localStorage.setItem('password', values.password)
					 }*/
					//_this.props.history.push('/main')
					FetchHelper.postJson('/account/login', {
						name: values.userName,
						password: values.password
					}).then(resp => {
						if(resp.success) {
							localStorage.setItem('token', resp.data)
							_this.props.firstLogin('firstLogin')
							_this.props.history.push('/main')
						} else {
							Modal.error({
								okText: '确定',
								title: '登录失败',
								content: resp.msg
							})
						}
					})
					/*sso.login({
					    accountName: values.userName,
					    password: values.password
					}, function (resp) {
					    // 回调函数为登录异常的处理地方，一般为服务挂掉，或者网络原因等
					    if (!resp.success) {
					        Modal.error({
					            okText: '确定',
					            title: '登录失败',
					            content: '请检查您的用户名或密码是否填写正确',
					        })
					    }
					});*/
				}
			});
		};

		componentDidMount() {
			this.setState({
				userName: localStorage.getItem('userName'),
				password: localStorage.getItem('password')
			})
		}

		rememberChange = (e) => {
			this.setState({
				isRemember: e.target.checked
			})
		}

		render() {
			const {
				getFieldDecorator
			} = this.props.form;
			return(
				<Fragment>
				<div className="login">
					<div className="login-border"></div>
					<div className="login-left">
						<div className="login-left-bgi"></div>
					</div>
					<div className="login-right">
						<Form
		                    style={this.props.style}
		                    onSubmit={this.handleSubmit.bind(this)}
		                    className="login-form">
		                    <FormItem>
		                        <h3 style={{
		                            position: "relative",
		                            paddingLeft: "10px",
		                            textAlign: "right",
		                            fontWeight:"bold",
		                            color:"rgb(118,193,104)",
									paddingRight: "0px",
		                        }}><span
		                            style={{
		                                display: "inlineBlock",
		                                width: "40px",
		                                backgroundImage: "url(/images/icon_user.png)",
		                                backgroundSize: "40px",
		                                backgroundRepeat: "no-repeat",
		                                position: "absolute",
		                                top: "4px",
		                                bottom: "4px",
		                                left: "0px",
		                                
		                            }}/> 用户登录 | USER LOGIN</h3>
		                    </FormItem>
		                    <FormItem style={{}} options={{
		                        value: "asd"
		                    }}>
		                        {getFieldDecorator("userName", {
		                            rules: [{required: true, message: "请输入用户名!"}],
		                            initialValue: this.state.userName
		                        })(<div>
		                        	<label htmlFor="name" className="name"></label>
		                            <Input
		                                placeholder="用户名"
		                                id="name"
		                            />
		                            </div>
		                        )}
		                    </FormItem>
		                    <FormItem>
		                        {getFieldDecorator("password", {
		                            rules: [{required: true, message: "请输入密码!"}],
		                            initialValue: this.state.password
		                        })(<div>
		                        	<label htmlFor="pwd" className="pwd"></label>
		                            <Input
		                                type="password"
		                                placeholder="密码"
		                                id="pwd"
		                            />
		                            </div>
		                        )}
		                    </FormItem>
		                    <FormItem>
		                        {/* {getFieldDecorator("remember", {
		                            valuePropName: "checked",
		                            initialValue: true,
		                        })(<Checkbox onChange={this.rememberChange}>记住我</Checkbox>)} */}
		                        <button
		                            type="submit"
		                            className="login-form-button"
		                        >
		                            登录
		                        </button>
		                    </FormItem>
		                </Form>
	                </div>
	            </div>
                </Fragment>
			);
		}
	}
);

class Login extends Component {
	constructor(...args) {
		super(...args);
		this.state = {
			landShow: {
				display: "block"
			},
			registerShow: {
				display: "none"
			},
			webName: '',
			logoid: ''
		};
	}

	// 组件渲染前获取网站logo和名称
	/* componentWillMount(){
	     var _this = this;
	     FetchHelper.getJson('/qing/tbSystemConfig/sysInfodisplay').then(resp => {
	         if(resp.status === 200){
	             const data = resp.data;
	             // for(var i=0;i<data.length;i++){
	             //     if(data[i].parameterType == 3){
	             //         _this.setState({
	             //             webName:data[i].parameterValue
	             //         })
	             //     }else if(data[i].parameterType == 2){
	             //         _this.setState({
	             //             logoid:data[i].id
	             //         })
	             //     }
	             // }
	             if (data.length) {
	                 const webNameItem = data.filter(item => {return item.parameterType == 3})
	                 const logoidItem = data.filter(item => {return item.parameterType == 2})
	                 _this.setState({
	                     webName: (webNameItem.length && webNameItem[0].parameterValue) ? webNameItem[0].parameterValue : '鱼鳞图清产核资监管系统',
	                     logsrc: (logoidItem.length && logoidItem[0].id) ? ("/qing/tbSystemConfig/displayImg?id=" + logoidItem[0].id) : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPoAAAC9CAMAAACtb5DbAAAC/VBMVEUAAAD7/fX+//v9/vf9/fb///38/fb8/vf6/PP+//z9/vf8/fX+/vj+//z+/vf9/vn8/vj///7///3////+//z9/vr8/vf8/fX////+//3///7///v9/vr6/O/C4ZL1++yn1GPv9+H///7///7////6/PH5/PHv+OH+//283ofh8cn6/fP71kvw+OT+//qk0lz///39//rF45fs9tv6/fP8/vf7/fK23H253YLD4pTI5Z3+++rm89H95IXd78Hl89D///7v+OL+//z5/O/5/PLk887/+N7///7+6Jz700G223zq9dji8sr8/fb///7z+uj/99fm89Hg8Mf///7/9Mz///7Z7bv2++793Wvk8s7q9trn9NT+//rF45bo9Nb4+ur+8Lv5/PL///z+//u+34r70DXL5qLk887o9NX/99v+7Kq43ID/9tT9/vq73ob94Hmf0FTH5Jvq9dje8MSy2na934ns9tz+66T/9c7q9dj+//3I5JvZ7br95Ife78Tu+ODo9db/++na7r7/8sP/88X1++z+7Kn/+uf95pDq9dj95o7+66P933P95If+7az+6Zzv+OLx+eb94n7e8MT/+Nz/99v/+uL4/PP821+n1GPS6a7/+ufy+eXB4ZD944Tj8sz83Gb955X/9Mz/99r/+d782Vj/88f/99ni8sv9/fPY7Ln4wAf2+un/8b7s9tvo9Nb/8cHU6rHb7r75+uf1++z+8b3810/83Gj/6qH5zCSx2HSEwiX4wwCDwiOFwiaCwSH4wgD4vwB+vxuFwyd/wBz4wQCEwiR8vhZ2uwyAwB15vRGBwB99vxj4vACLxjF3vA6NxzSGwyiJxS75xhCSyT2BwSB6vhOOxzap1Wf5xAaQyDms1muIxCtyugan1GOTyj+Vy0L6zCrI5J2l01+u2G/6yht1uwnF45jN56bL5qKx2XP6yiOXzEf5xAH6yBX7zjD5xgr95ZCbzkyj0lv71EaBwR7822P82FqAwR+z2nj811TQ6av70DqEwyWCwCG9d+9FAAAAu3RSTlMABygKDS8CHAQkEhYPK0MZSmkhbEVNHwVmXzU4V1fsVPrnPjJvY6mcUfLIAfyhO/lbpOm1XYIB/vzy8Xvn5s2ysZWHaaO4n2L9+PPn2rCop5rS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'
	                 })
	             }
	         }
	     }).catch(err => {
	         _this.setState({
	             webName: '鱼鳞图清产核资监管系统',
	             logsrc: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPoAAAC9CAMAAACtb5DbAAAC/VBMVEUAAAD7/fX+//v9/vf9/fb///38/fb8/vf6/PP+//z9/vf8/fX+/vj+//z+/vf9/vn8/vj///7///3////+//z9/vr8/vf8/fX////+//3///7///v9/vr6/O/C4ZL1++yn1GPv9+H///7///7////6/PH5/PHv+OH+//283ofh8cn6/fP71kvw+OT+//qk0lz///39//rF45fs9tv6/fP8/vf7/fK23H253YLD4pTI5Z3+++rm89H95IXd78Hl89D///7v+OL+//z5/O/5/PLk887/+N7///7+6Jz700G223zq9dji8sr8/fb///7z+uj/99fm89Hg8Mf///7/9Mz///7Z7bv2++793Wvk8s7q9trn9NT+//rF45bo9Nb4+ur+8Lv5/PL///z+//u+34r70DXL5qLk887o9NX/99v+7Kq43ID/9tT9/vq73ob94Hmf0FTH5Jvq9dje8MSy2na934ns9tz+66T/9c7q9dj+//3I5JvZ7br95Ife78Tu+ODo9db/++na7r7/8sP/88X1++z+7Kn/+uf95pDq9dj95o7+66P933P95If+7az+6Zzv+OLx+eb94n7e8MT/+Nz/99v/+uL4/PP821+n1GPS6a7/+ufy+eXB4ZD944Tj8sz83Gb955X/9Mz/99r/+d782Vj/88f/99ni8sv9/fPY7Ln4wAf2+un/8b7s9tvo9Nb/8cHU6rHb7r75+uf1++z+8b3810/83Gj/6qH5zCSx2HSEwiX4wwCDwiOFwiaCwSH4wgD4vwB+vxuFwyd/wBz4wQCEwiR8vhZ2uwyAwB15vRGBwB99vxj4vACLxjF3vA6NxzSGwyiJxS75xhCSyT2BwSB6vhOOxzap1Wf5xAaQyDms1muIxCtyugan1GOTyj+Vy0L6zCrI5J2l01+u2G/6yht1uwnF45jN56bL5qKx2XP6yiOXzEf5xAH6yBX7zjD5xgr95ZCbzkyj0lv71EaBwR7822P82FqAwR+z2nj811TQ6av70DqEwyWCwCG9d+9FAAAAu3RSTlMABygKDS8CHAQkEhYPK0MZSmkhbEVNHwVmXzU4V1fsVPrnPjJvY6mcUfLIAfyhO/lbpOm1XYIB/vzy8Xvn5s2ysZWHaaO4n2L9+PPn2rCop5rS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'
	         })
	     })
	 }*/

	showLogin() {
		this.setState({
			landShow: {
				display: "block"
			},
			registerShow: {
				display: "none"
			}
		});
	}

	showRegister() {
		this.setState({
			landShow: {
				display: "none"
			},
			registerShow: {
				display: "block"
			}
		});
	}

	render() {
		const {
			logsrc
		} = this.state
		return(
			<div className="loginPage">
                <div className="bg">
                    <div className="header" style={{height: "0px", lineHeight: '0px', padding: '0 20px'}}>
                        <a
                            style={{height: "0px"}}
                            href="http://www.yulintu.com"
                            target="_blank"
                        >
                            <img
                                style={{height: "0px"}}
                                src={logsrc}
                            />
                        </a>
                        <p
                            style={{
                                display: "inline-block",
                                fontSize: "30px",
                                fontWeight: "bold",
                                lineHeight: "0px",
                                marginBottom: "0px",
                                marginLeft: "10px",
                                color: "#80397b"
                            }}
                        >
                            {/* 鱼鳞图清产核资监管系统 */}
                            {this.state.webName}
                        </p>
                        <span
                            style={{
                                float: "right",
                                fontSize: "20px"
                            }}>

            			</span>
                    </div>
                    
                    <div className="content" style={loginPic}>
                        <LoginForm
                            fn={this.showRegister.bind(this)}
                            show={this.state.showRegister}
                            style={this.state.landShow}
                            default={this.props.match.path.replace("/:name", "")}
                            {...this.props}
                        />
                        
                    </div>
                    
                    <div
                        className="footer"
                        style={{
                            textAlign: "center",
                            fontSize: "20px",
                            paddingTop: "0px",
                            height: "0px"
                        }}>
                    </div>
                </div>
            </div>
		);
	}
}

const mapDispatchToProps = (dispatch, ownProps) => ({
	firstLogin: (value) => dispatch({
		type: 'first_login',
		firstLogin: value
	})
})
export default withRouter(connect(null, mapDispatchToProps)(Login))