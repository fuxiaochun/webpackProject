import "css/page/index/index.scss";

import React, { Component } from 'react';
import {render, createPortal} from 'react-dom';
import Confirm from 'component/Confirm';

let $app = document.getElementById('app');

class Index extends Component{

	constructor(props){
		super(props);
		this.state = {
			show:false
		}
	}

	showPop = ()=>{
		this.setState({
			show:true
		});
	}

	onCancel = ()=>{
		this.setState({
			show:false
		});
	}

	render(){
		return (
			<React.Fragment>
			<button onClick={this.showPop}>弹窗</button>
			<Confirm
				visible={this.state.show}
				content={'确定要删除吗？'}
				tips={'相关一起删'}
				okValue={'提交'}
				cancelValue={'放弃'}
				onOk={()=>{alert(1)}}
				onCancel={()=>{console.log('cancel')}}
			></Confirm>
			</React.Fragment>
		)
	}
}

render(<Index />, $app);

