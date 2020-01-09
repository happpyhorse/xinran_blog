import React, { Component } from 'react';
import MdEditor from 'react-markdown-editor-lite';
import MarkdownIt from 'markdown-it';
import { Field, reduxForm } from 'redux-form';

class PostForm extends Component {
	mdParser = null;
	constructor(props) {
		super(props);
		this.mdParser = new MarkdownIt();
	}

	renderError = ({ error, touched }) => {
		if (error && touched) {
			return <div>{error}</div>
		}

	}

	onSubmit = (formValues) => {
		this.props.onSubmit(formValues);
	}

	renderInput = ({ input, label, meta }) => {
		return (
			<div id={`post-form-${input.name}`}>
				<input {...input} placeholder={label}/>
				{this.renderError(meta)}
			</div>
		);
	}

	renderCategoryDropdown = ({input}) => {
		return (
			<div id={`post-form-${input.name}`}>
				<select {...input}>
					<option value="">Select a Category</option>
					<option value="Coding">Coding</option>
				</select>
			</div>
		);
	}

	renderContentEditor = ({ input }) => {
		return (
			<div style={{ height: "500px" }}>
				<MdEditor
					renderHTML={(text) => { return this.mdParser.render(text); }}
					onChange={({ html, text }) => input.onChange(text)}
					value={input.value}
				/>
			</div>
		);
	}

	

	render() {
		return (
			<form onSubmit={this.props.handleSubmit(this.onSubmit)}>
				<Field name="title" component={this.renderInput} label="Title" />	
				<Field name="category" component={this.renderCategoryDropdown} />
				<Field name="content" component={this.renderContentEditor} />
				<button id="post-form-submit">Submit</button>
			</form>

		);
	}
}

const validate = (formValues) => {
	const errors = {};

	if (!formValues.title) {
		errors.title = 'You must enter a title';
	}

	return errors;
}

export default reduxForm({
	form: 'postForm',
	validate
})(PostForm);

