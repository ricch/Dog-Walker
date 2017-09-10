import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header.js';
import Footer from './footer.js';
import Intro from './intro.js';
import FormOwner from './formOwner.js';
import FormWalker from './formWalker.js';
import Firebase from './firebase.js'; 

const dbRefWalkers = Firebase.database().ref('/walkers'); 
const dbRefDogOwners = Firebase.database().ref('/dogOwners'); 

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			walkerName: '',
			walkerEmail: '',
			walkerPhone: '',
			walkerPostal: '',
			items: [],
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(e) {
		e.preventDefault();
		const newItem = { // <-- grabbing input from STATE and putting it into an object to ship to Firebase
			walkerName: this.state.walkerName,
			walkerEmail: this.state.walkerEmail,
			walkerPhone: this.state.walkerPhone,
			walkerPostal: this.state.walkerPostal,
		}
		dbRefWalkers.push(newItem); // sends a copy of the object to store in Firebase
	}

	handleChange(e) {
		this.setState({
			[e.target.name]: e.target.value,
		});
	}

	componentDidMount() {
	}

	render() {
		console.log("It works")
		return (
			<div>
				<Header />
				<Intro />
				{/*
				<section>
					<div className="form formDog wrapper">
						<FormOwner />
					</div>
				</section>
				*/}
				<section>
					<div className="form formWalker wrapper">
						<FormWalker
							handleChange={this.handleChange} 
							handleSubmit={this.handleSubmit}
							walkerName={this.state.walkerName} 
							walkerEmail={this.state.walkerEmail}
							walkerPhone={this.state.walkerPhone}
							walkerPostal={this.state.walkerPostal}
						/> 						
					</div>
				</section>

				{/*
				<section className="form add-item">
					<form onSubmit={this.handleSubmit}>
						<h2>Walker Test Form</h2>
						<input type="text" name="walkerName" placeholder="Dog walker name?" onChange={this.handleChange} value={this.state.walkerName}/> 
						<input type="text" name="walkerPostal" placeholder="Dog Walker Postal?" onChange={this.handleChange} value={this.state.walkerPostal} />
						<button>Add Item</button>
					</form>
				</section>

				*/}

				<section className='display-item'>
					<div className='wrapper'>
						<ul>
						</ul>
					</div>
				</section>

				<Footer />
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('app'));