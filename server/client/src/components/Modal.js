import React from 'react';
import ReactDom from 'react-dom';

const Modal = props => {
	return ReactDom.createPortal(
		<div className="modals" onClick={() => props.onDismiss()}>
			<div className="modal" onClick={e => e.stopPropagation()}>
				<h3>{props.title}</h3>
				<div className="content">{props.content}</div>
				<div className="actions">
					{props.actions}
				</div>
			</div>
		</div>,
		document.querySelector('#modal')
	)
}

export default Modal;
