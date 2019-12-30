import React, { Component } from 'react';

import { connect } from 'react-redux';

import { fetchPost } from './../../actions/index';

class PostEdit extends Component {
	componentDidMount(){
		this.props.fetchPost(this.props.match.params.id)
	}

	render() {
		if( !this.props.post ){
			return <div>Loading...</div>
		}
		return (
			<div>
				
			</div>
		)
	}
}

const mapStateToProps = (state, ownProps) => {
	return { post: state.posts[ownProps.match.params.id] }
}

export default connect(mapStateToProps, (fetchPost))(PostEdit);