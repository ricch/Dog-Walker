import React from 'react';
import DogBreeds from './dogBreeds.js';

import AutoComplete from 'react-autocomplete';
import Select from 'react-select';

///////

class FormOwner extends React.Component {
	// constructor() {
	// 	super()
	// 	this.state = {
	// 		value: ''
	// 	}
	// }
	render (){
		return (
			<form id="formOwner" onSubmit={this.props.handleSubmit}> 
				<h2>Owner Information</h2>
				<div>
					<label htmlFor="dogOwner">Name</label>
					<input type="text" name="dogOwner" placeholder="eg - John Smith" onChange={this.props.handleChange} value={this.props.dogOwner}/>
				</div>
				<div>
					<label htmlFor="dogOwner">Email</label>
					<input type="email" name="dogEmail" placeholder="eg - john@smith.com" onChange={this.props.handleChange} value={this.props.dogEmail}/>
				</div>
				<div>
					<label htmlFor="dogOwner">Phone #</label>
					<input type="number" name="dogPhone" placeholder="eg - 9671111" max="9999999999" onChange={this.props.handleChange} value={this.props.dogPhone}/>
				</div>
				<div>
					<label htmlFor="dogOwner">Postal Code</label>
					<input type="text" name="dogPostal" placeholder="eg - M1M (first three characters only)" onChange={this.props.handleChange} value={this.props.dogPostal}/>
				</div>
				<h2>Details About Your Canine Companion</h2>
				<div>
					<label htmlFor="dogName">Name</label>
					<input type="text" name="dogName" placeholder="eg - Scooby Doo" onChange={this.props.handleChange} value={this.props.dogName}/>
				</div>
				<div>
					<label htmlFor="dogAge">Age (yrs)</label>
					<input type="number" name="dogAge" min="0" placeholder="eg - 8" onChange={this.props.handleChange} value={this.props.dogAge}/>
				</div>
				<div>
					<label htmlFor="dogBreed">Breed</label>
					<input type="text" name="dogBreed" placeholder="eg - Great Dane" onChange={this.props.handleChange} value={this.props.dogBreed}/>
				</div>
				
				<div>
					<label htmlFor="dogGender">Gender</label>
					<select name="dogGender" onChange={this.props.handleChange} value={this.props.dogGender}>
						<option value="" disabled selected>- Select -</option>
						<option value="Male">Male</option>
						<option value="Female">Female</option>
					</select>
				</div>

				<div>
					<label htmlFor="dogSize">Size</label>
					<select name="dogSize" onChange={this.props.handleChange} value={this.props.dogSize}>
						<option value="" disabled selected>- Select -</option>
						<option value="xs">XS (0-10 lb)</option>
						<option value="s">S (10-25 lb)</option>
						<option value="m">M (20-50 lb)</option>
						<option value="l">L (50-75 lb)</option>
						<option value="xl">XL (75-90 lb)</option>
						<option value="xxl">XL (90+ lb)</option>
					</select>
				</div>

				<h2>Dog Image</h2>
				<input type="file" id="fileItem" name="dogImage" accept="image/*" ref={(ref)=>{this.file = ref}} onChange={this.props.handleUpload}/>
				{/*
				*/}
				<button>Submit</button>
			</form>
		)
	}
}

export default FormOwner;

// <AutoComplete 
	// items={DogBreeds}
	// getItemValue={(item) => item}
	// renderItem={(item, isHighlighted) =>
	//     <div >
	//       {item}
	//     </div>
	// }
	// value={this.state.value}
	// onChange={(e) => {
	// 	this.setState({
	// 		value: e.target.value
	// 	})
	// }}
	// onSelect={(val) => {
	// 	this.setState({
	// 		value: val
	// 	})
	// }}
 // />
