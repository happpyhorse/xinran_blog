import React, { Component } from 'react';
import MdEditor from 'react-markdown-editor-lite';
import MarkdownIt from 'markdown-it';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createPost } from './../../actions';

class PostEditor extends Component {
	mdParser = null;
	constructor(props) {
		super(props);
		this.mdParser = new MarkdownIt();
	}

	renderError = ({error, touched}) => {
		if( error&&touched ){
			return <div>{error}</div>
		}
		
	}

	onSubmit = (formValues) => {
		this.props.createPost(formValues);
	}

	renderInput = ({input, label, meta}) => {
		return (
			<div>
				<label>{label}</label>
				<input {...input} />
				{ this.renderError(meta)}
			</div>
		);
	}

	renderContentEditor = ({input})  => {
		return (
			<div style={{ height: "500px" }}>
				<MdEditor
					renderHTML={(text) => {console.log(text); return this.mdParser.render(text);}}
					onChange={({html, text}) => input.onChange(text)}
					value={input.value}
				/>
			</div>
		);
	}

	render() {
		return (
			<form onSubmit={this.props.handleSubmit(this.onSubmit)}> 
				<h1>Create a Post</h1>
				<Field name="title" component={this.renderInput} label="Title"/>
				<Field name="content" component={this.renderContentEditor} />
				<button>Submit</button>
			</form>

		);
	}
}

const validate = ( formValues ) => {
	const errors = {};

	if( !formValues.title ){
		errors.title = 'You must enter a title';
	}

	return errors;
}

const formWrapped =  reduxForm({
	form: 'postCreate',
	validate
})(PostEditor);

export default connect(null, { createPost })(formWrapped);