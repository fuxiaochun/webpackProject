/**
 * [内容弹窗]
 * @Author: Fu Xiaochun
 * @Email:  fuzhengchun@gomeplus.com
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Dialog, dialog} from 'component/Dialog';

let noop = function(){};

export class InfoDialog extends Component{
	constructor(props){
		super(props);
		this.state = {
			visible: false,
			disabled: false
		}
	}

	onClose = ()=>{
		this.props.onClose();
	}

	render(){
		return (
			<Dialog 
				root='#portal'
				onClose={this.onClose} 
				visible={this.props.visible} 
				style={this.props.style}
				title={this.props.title}
			>
				{this.props.children}
			</Dialog>
		);
	}
}

InfoDialog.propTypes = {
	children: PropTypes.node.isRequired
}

InfoDialog.defaultProps = {
	style: null,
	title: null,
	onClose: noop
}

export function infoDialog(component, root){
	dialog(component, root);
}