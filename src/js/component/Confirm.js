/**
 * [Confirm]
 * @Author: Fu Xiaochun
 * @Email:  fuzhengchun@gomeplus.com
 */
import React, {Component} from 'react';
import Dialog from 'component/Dialog';

class Confirm extends Component{

	constructor(props){
		super(props);
		this.okValue = this.props.okValue || '确定';
		this.cancelValue = this.props.cancelValue || '取消';
		this.state = {
			visible: this.props.visible
		}
	}

	componentWillReceiveProps(nextProps){
		this.setState({
			visible: nextProps.visible
		});
	}

	onOk = ()=>{
		this.setState({
			visible:false
		}, ()=>{
			this.props.onOk && this.props.onOk();
		})
	}

	onCancel = ()=>{
		this.setState({
			visible: false
		}, ()=>{
			this.props.onCancel && this.props.onCancel();
		});
	}

	render(){
		let msg = typeof this.props.msg === 'undefined' ? null : <div className="main">{this.props.msg}</div>;

		let defaultFooter = [
			<button key="1" className="btn sure-btn" onClick={this.onOk}>{this.okValue}</button>,
			<button key="2" className="btn cancel-btn" onClick={this.onCancel}>{this.cancelValue}</button>
		];

		let content = this.props.content ? (<p>{this.props.content}</p>) : '';
		let tips = this.props.tips ? (<span>{this.props.tips}</span>) : '';
		let footer = this.props.footer || defaultFooter;


		return (
			<Dialog visible={this.state.visible}>
				<div className="content">{content}{tips}</div>
				<div className="footer">
					{footer}
				</div>
			</Dialog>
		)
	}
}

export default Confirm;