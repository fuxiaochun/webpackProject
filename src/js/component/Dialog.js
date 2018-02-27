/**
 * [rc-Dialog]
 * @Author: Fu Xiaochun
 * @Email:  fuzhengchun@gomeplus.com
 */
import "css/page/index/index.scss";

import React, { Component } from 'react';
import {createPortal} from 'react-dom';
import PropTypes from 'prop-types';

let $portal = document.querySelector('body');

class Dialog extends Component{
	
	constructor(props){
		super(props);
		this.state = {
			visible: this.props.visible
		}
	}

	onClose = ()=>{
		this.setState({
			visible: false
		}, ()=>{
			this.props.onClose && this.props.onClose();
		})
	}

	componentWillReceiveProps({visible}){
		this.setState({ visible });
	}

	render(){
		if (this.state.visible) {
			return createPortal(
				<div className="dialog">
					<div className="dialog-wrap" style={this.props.style || null}>
						<div onClick={this.onClose} className="dialog-close">×</div>
						{this.props.children}
					</div>
				</div>,
				$portal
			)
		}else{
			return null;
		}
		
	}
}

export default Dialog;