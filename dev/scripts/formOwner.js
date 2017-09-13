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
			<form id="formOwner" className="wow flipInX" onSubmit={this.props.handleSubmit}> 
				<h2>Owner Information</h2>
				<div>
					<label htmlFor="dogOwner"><i className="fa fa-user-circle-o" aria-hidden="true"></i> Name <span className="required">*</span></label>
					<input type="text" name="dogOwner" placeholder="eg - John Smith" onChange={this.props.handleChange} value={this.props.dogOwner}/>
				</div>
				<div>
					<label htmlFor="dogOwner"><i className="fa fa-envelope" aria-hidden="true"></i>Email <span className="required">*</span></label>
					<input type="email" name="dogEmail" placeholder="eg - john@smith.com" onChange={this.props.handleChange} value={this.props.dogEmail}/>
				</div>
				<div>
					<label htmlFor="dogOwner"><i className="fa fa-phone" aria-hidden="true"></i> Phone</label>
					<input type="number" name="dogPhone" placeholder="eg - 416-967-1111" max="9999999999" onChange={this.props.handleChange} value={this.props.dogPhone}/>
				</div>
				<div>
					<label htmlFor="dogOwner"><i className="fa fa-map-marker" aria-hidden="true"></i> Location (Address) <span className="required">*</span></label>
					<input id="postalCode" type="text" name="dogPostal" placeholder="eg - 485 Queen Street West" onChange={this.props.handleChange} value={this.props.dogPostal}/>
				</div>
				<h2>Details About Your Canine Companion</h2>
				<div>
					<label htmlFor="dogName"><i className="fa fa-paw" aria-hidden="true"></i> Name <span className="required">*</span></label>
					<input type="text" name="dogName" placeholder="eg - Scooby Doo" onChange={this.props.handleChange} value={this.props.dogName}/>
				</div>
				<div>
					<label htmlFor="dogAge"><i className="fa fa-birthday-cake" aria-hidden="true"></i> Age (years)</label>
					<input type="number" name="dogAge" min="0" placeholder="eg - 8" onChange={this.props.handleChange} value={this.props.dogAge}/>
				</div>
				<div>
					<label htmlFor="dogBreed"><i className="fa fa-flask" aria-hidden="true"></i> Breed <span className="required">*</span></label>
					<input type="text" name="dogBreed" placeholder="eg - Great Dane" onChange={this.props.handleChange} value={this.props.dogBreed}/>
				</div>
				
				<div>
					<label htmlFor="dogGender"><i className="fa fa-venus-mars" aria-hidden="true"></i> Gender</label>
					<select name="dogGender" onChange={this.props.handleChange} value={this.props.dogGender}>
						<option value="" disabled selected>- Select -</option>
						<option value="Male">Male</option>
						<option value="Female">Female</option>
					</select>
				</div>

				<div>
					<label htmlFor="dogSize"><i className="fa fa-arrows-alt" aria-hidden="true"></i> Size <span className="required">*</span></label>
					<select name="dogSize" onChange={this.props.handleChange} value={this.props.dogSize}>
						<option value="" disabled selected>- Select -</option>
						<option value="XS">XS (0-10 lb)</option>
						<option value="S">S (10-20 lb)</option>
						<option value="M">M (20-50 lb)</option>
						<option value="L">L (50-75 lb)</option>
						<option value="XL">XL (75-90 lb)</option>
						<option value="XXL">XL (90+ lb)</option>
					</select>
				</div>

				<div>
					<label htmlFor="dogImage"><i className="fa fa-camera-retro" aria-hidden="true"></i> Dog Photo <span className="required">*</span></label>
					<input type="file" id="fileItem" name="dogImage" accept="image/*" ref={(ref)=>{this.file = ref}} onChange={this.props.handleUpload}/>
				</div>

				<p className="required textcenter">* - required</p>
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
