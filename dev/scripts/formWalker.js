import React from 'react';

class FormWalker extends React.Component {
	render (){
		return (
			<form id="formWalker" onSubmit={this.props.handleSubmit}>
				<h2>Dog Walker Information</h2>
				<div>
					<label htmlFor="walkerName">Name</label>
					<input type="text" name="walkerName" placeholder="eg - John Smith" onChange={this.props.handleChange} value={this.props.walkerName}/>
				</div>
				<div> 
					<label htmlFor="walkerEmail">Email</label>
					<input type="email" name="walkerEmail" placeholder="eg - john@smith.com" onChange={this.props.handleChange} value={this.props.walkerEmail}/> 
				</div>
				<div>
					<label htmlFor="walkerPhone">Phone #</label>
					<input type="number" name="walkerPhone" placeholder="eg - 9671111" max="9999999999" onChange={this.props.handleChange} value={this.props.walkerPhone}/> 
				</div>
				<div>
					<label htmlFor="walkerPostal">Postal Code</label>
					<input type="text" name="walkerPostal" placeholder="eg - M1M (first three characters only)" onChange={this.props.handleChange} value={this.props.walkerPostal}/> 
				</div>
				<div>
					<label htmlFor="walkerPrice">Price per 30 min walk</label>
					<input type="text" name="walkerPrice" placeholder="eg - 30" onChange={this.props.handleChange} value={this.props.walkerPrice}/> 
				</div>
				<hr />
				<button>Submit</button>
			</form>
		)
	}
}

export default FormWalker;

// * Dog Walker (Walker name, walker location - postal code, reviews, email, phone, price per 30 min walk, photo of walker) .. all items will be REQUIRED 