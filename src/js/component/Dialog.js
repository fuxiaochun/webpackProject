/**
 * [rc-Dialog]
 * @Author: Fu Xiaochun
 * @Email:  fuzhengchun@gomeplus.com
 * 参数
 */
import "css/page/index/index.scss";

import React, { Component } from 'react';
import ReactDOM, {createPortal} from 'react-dom';
import PropTypes from 'prop-types';

let noop = function(){};

class Dialog extends Component{
	
	constructor(props){
		super(props);
		this.root = document.querySelector('body');
		this.el = document.createElement('div');
	}

	onClose = ()=>{
		console.log(ReactDOM.unmountComponentAtNode(this.el));
		
	}

	componentDidMount() {
        this.root.appendChild(this.el);
    }
    componentWillUnmount() {
        this.root.removeChild(this.el)
    }

	render(){
		let title = this.props.title;
		return createPortal(
			<div className="dialog">
				<div className="dialog-wrap" style={this.props.style}>
					<div onClick={this.onClose} className="dialog-close">×</div>
					{title ? (<div className="dialog-header">{title}</div>) : null}
					{this.props.children}
				</div>
			</div>,
			this.el
		)
	}
}

Dialog.propTypes = {
	children: PropTypes.node.isRequired,
}

Dialog.defaultProps = {
	root: 'body',
	style: null,
	title: null,
	onClose: noop
}

export default Dialog;