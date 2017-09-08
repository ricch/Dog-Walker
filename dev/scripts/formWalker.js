import React from 'react';

class FormWalker extends React.Component {
	render (){
		return (
			<form>
				<input type="text" name="walkerName" placeholder="Dog Owner's Name"/>
				<input type="email" name="walkerEmail" placeholder="Email"/>
				<input type="number" name="walkerPhone" placeholder="Phone #"/>
				<input type="text" name="walkerLocation" placeholder="Enter Your Postal Code's first 3 characters (i.e. M1M)"/>

				<button>Submit</button>
			</form>
		)
	}
}

export default FormWalker;

// * Dog Walker (Walker name, walker location - postal code, reviews, email, phone, price per 30 min walk, photo of walker) .. all items will be REQUIRED 