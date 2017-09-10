import React from 'react';
import DogBreeds from './dogBreeds.js';

import AutoComplete from 'react-autocomplete';
import Select from 'react-select';
//////

var Select2 = require('react-select');

var options2 = [
  { value: 'one', label: 'One' },
  { value: 'two', label: 'Two' }
];

function logChange(val) {
  console.log("Selected: " + JSON.stringify(val));
}


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
			<form>
				<input type="text" name="dogOwner" placeholder="Dog Owner's Name"/>
				<input type="text" name="dogName" placeholder="Dog's Name"/>
				<input type="number" name="dogAge" min="0" placeholder="Dog's Age (years)"/>
				
				<input type="text" name="dogBreed" placeholder="Dog's breed" id="tags"/>
				
				<Select2 name="form-field-name" value="one" options={options2} onChange={logChange}/>
				{
				/*<AutoComplete 
					items={DogBreeds}
					getItemValue={(item) => item}
					renderItem={(item, isHighlighted) =>
					    <div >
					      {item}
					    </div>
					}
					value={this.state.value}
					onChange={(e) => {
						this.setState({
							value: e.target.value
						})
					}}
					onSelect={(val) => {
						this.setState({
							value: val
						})
					}}
				 />
				*/}


				<select name="dogGender">
					<option value="Male">Male</option>
					<option value="Female">Female</option>
				</select>

				<select name="dogSize">
					<option value="xs">XS (0-10 lb)</option>
					<option value="s">S (10-25 lb)</option>
					<option value="m">M (20-50 lb)</option>
					<option value="l">L (50-75 lb)</option>
					<option value="xl">XL (75-90 lb)</option>
					<option value="xxl">XL (90+ lb)</option>
				</select>

				<input type="email" name="dogEmail" placeholder="Email"/>
				<input type="number" name="dogPhone" placeholder="Phone #"/>
				<input type="text" name="dogLocation" placeholder="Owner's Postal Code"/>

				<button>Submit</button>
			</form>
		)
	}
}

export default FormOwner;
// Dog Owner (Owner name, dog name, dog age*, dog breed, dog gender, dog size, owner location - postal code, email, phone, photo of owner, photo of dog)