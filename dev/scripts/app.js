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
const key = 'AIzaSyAYYipUD_bZA3sowjjZlTQGq_09wEgoaNg';

// class Map extends React.Component {
// 	componentDidMount() {
// 		ajax({
// 			url: `https://maps.googleapis.com/maps/api/js`,
// 			data: {
// 				api_key: key
// 			}
// 		})
// 		.then((map) => {
// 			// this.setState({map});
// 			// console.log(map);
// 			this.setState({
// 				map: map
// 			})
// 		});
// 	}
// }

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			dogOwner: '',
			dogName: '',
			dogAge: '',
			dogBreed: '',
			dogEmail: '',
			dogPhone: '',
			dogPostal: '',

			walkerName: '',
			walkerEmail: '',
			walkerPhone: '',
			walkerPostal: '',

			items: [], // to be used for retrieving items from Firebase
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleUpload = this.handleUpload.bind(this);
	}

	handleSubmit(e) {
		e.preventDefault();
		const newDog = { // <-- grabbing input from STATE and putting it into an object to ship to Firebase
			dogOwner: this.state.dogOwner,
			dogName: this.state.dogName,
			dogAge: this.state.dogAge,
			dogBreed: this.state.dogBreed,
			dogEmail: this.state.dogEmail,
			dogPhone: this.state.dogPhone,
			dogPostal: this.state.dogPostal,
		}
		const newWalker = {
			walkerName: this.state.walkerName,
			walkerEmail: this.state.walkerEmail,
			walkerPhone: this.state.walkerPhone,
			walkerPostal: this.state.walkerPostal,
		}

		dbRefWalkers.push(newWalker); // sends a copy of the object to store in Firebase
		dbRefDogOwners.push(newDog);
	}

	handleChange(e) {
		this.setState({
			[e.target.name]: e.target.value,
		});
	}

	handleUpload(e){
        e.preventDefault();

		const poster = this.poster.files[0]; // Not sure if this is needed
		// Points to the root reference
		const storageRef = firebase.storage().ref();

		// Points to 'images'
		const imagesRef = storageRef.child('images');

		this.setState({
			loading: true,
		});
		thisImage.put(poster).then((snapshot) => {
			thisImage.getDownloadURL().then((url) => {
				this.setState({
					showPoster: url,
					loading: false,
				});
			});
		});
    }

	componentDidMount() {
	}

	render() {
		// console.log("It works")
		return (
			<div>
				<Header />
				<Intro />
				<section>
					<div className="form formDog wrapper">
						<FormOwner 
							handleChange={this.handleChange} 
							handleSubmit={this.handleSubmit}
							dogOwner={this.state.dogOwner} 
							dogName={this.state.dogName} 
							dogAge={this.state.dogAge}   
							dogBreed={this.state.dogBreed} 
							dogEmail={this.state.dogEmail}
							dogPhone={this.state.dogPhone}
							dogPostal={this.state.dogPostal}
						/>
					</div>
				</section>
				{/*
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