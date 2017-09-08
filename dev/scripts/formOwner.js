import React from 'react';

class FormOwner extends React.Component {
	render (){
		return (
			<form>
				<input type="text" name="dogOwner" placeholder="Dog Owner's Name"/>
				<input type="text" name="dogName" placeholder="Dog's Name"/>
				<input type="number" name="dogAge" min="0" placeholder="Dog's Age (years)"/>
				<input type="text" name="dogBreed" placeholder="Dog's breed"/>
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