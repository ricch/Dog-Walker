import React from 'react';

class FormWalker extends React.Component {
	render (){
		return (
			<form onSubmit={this.props.handleSubmit}>
				<input type="text" name="walkerName" placeholder="Dog walker name?" onChange={this.props.handleChange} value={this.props.walkerName}/> 
				<input type="email" name="walkerEmail" placeholder="Email" onChange={this.props.handleChange} value={this.props.walkerEmail}/> 
				<input type="number" name="walkerPhone" placeholder="Phone #" onChange={this.props.handleChange} value={this.props.walkerPhone}/> 
				<input type="text" name="walkerPostal" placeholder="Location (Postal Code)" onChange={this.props.handleChange} value={this.props.walkerPostal}/> 

				<button>Submit</button>
			</form>
		)
	}
}

export default FormWalker;

// * Dog Walker (Walker name, walker location - postal code, reviews, email, phone, price per 30 min walk, photo of walker) .. all items will be REQUIRED 