import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header.js';
import Footer from './footer.js';
import FormOwner from './formOwner.js';
import FormWalker from './formWalker.js';
import Firebase from './firebase.js'; 
import Toggle from 'react-toggle';
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import withScriptjs from "react-google-maps/lib/async/withScriptjs";

import MapTest from './map.js'; 



const dbRefWalkers = Firebase.database().ref('/walkers'); 
const dbRefDogOwners = Firebase.database().ref('/dogOwners'); 

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			dogOwner: '',
			dogName: '',
			dogAge: '',
			dogBreed: '',
			dogSize: '',
			dogGender: '',
			dogEmail: '',
			dogPhone: '',
			dogPostal: '',
			dogImage: '',
			// dog: {
			// 	age: '',
			// }

			walkerName: '',
			walkerEmail: '',
			walkerPhone: '',
			walkerPostal: '',
			walkerPrice: '',
			walkerImage: '',
			walkerDesc: '',



			items: [], // to be used for retrieving items from Firebase
			itemsWalker: [],
			itemsOwner: [],

			isOwner: null, // <-- Boolean to toggle which form is displayed. By default, owner form will display
			isForm: false,
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleUpload = this.handleUpload.bind(this);
		this.handleToggle = this.handleToggle.bind(this);

		this.showOwner = this.showOwner.bind(this);
		this.showWalker = this.showWalker.bind(this);
		this.showForm = this.showForm.bind(this);
	}

	handleSubmit(e) {
		e.preventDefault();
		const type = e.target.id;
		const newDog = { // <-- grabbing input from STATE and putting it into an object to ship to Firebase
			dogOwner: this.state.dogOwner,
			dogName: this.state.dogName,
			dogAge: this.state.dogAge,
			dogBreed: this.state.dogBreed,
			dogSize: this.state.dogSize,
			dogGender: this.state.dogGender,
			dogEmail: this.state.dogEmail,
			dogPhone: this.state.dogPhone,
			dogPostal: this.state.dogPostal,
			dogImage: this.state.dogImage,
		}
		const newWalker = {
			walkerName: this.state.walkerName,
			walkerEmail: this.state.walkerEmail,
			walkerPhone: this.state.walkerPhone,
			walkerPostal: this.state.walkerPostal,
			walkerPrice: this.state.walkerPrice,
			walkerImage: this.state.walkerImage,
			walkerDesc: this.state.walkerDesc,
		}
		//
		var geocoder = new google.maps.Geocoder();
		var address = '';
		if (type === 'formWalker') {	
			address = newWalker.walkerPostal
		} else if (type === 'formOwner') {
			address = newDog.dogPostal
		}
		geocoder.geocode({'address' : address}, function(results,status){
			// console.log (results[0].geometry.location.lat());
			console.log (e)
			// console.log (results);

			if (type === 'formWalker') {	
				//If it was a walker we need update the walk info with lat lng
				newWalker.lat = results[0].geometry.location.lat();
				newWalker.lng = results[0].geometry.location.lng();
				dbRefWalkers.push(newWalker); // sends a copy of the object to store in Firebase
			} else if (type === 'formOwner') {
				//If it is dog we need to update dog with lat lng
				newDog.lat = results[0].geometry.location.lat();
				newDog.lng = results[0].geometry.location.lng();

				dbRefDogOwners.push(newDog);

			}
		})
		


		// dbRefWalkers.push(newWalker);
		// dbRefDogOwners.push(newDog);
	}

	handleChange(e) {
		this.setState({
			[e.target.name]: e.target.value,
		});
	}

	handleUpload(e){
        e.preventDefault();
        // console.log('uploaded')
        // console.log(e.target.files[0]);
        var file = e.target.files[0];
		const storageRef = Firebase.storage().ref();
		var thisRef = storageRef.child(file.name);

		thisRef.put(file).then((snapshot) => {
			console.log('Uploaded a blob or file!');
			console.log(this.state.dogImage);
			thisRef.getDownloadURL().then((url) => {
				this.setState({
					dogImage: url,
					loading: false,
				});
			});
		});

    }	

	componentDidMount() {
		dbRefDogOwners.on('value', (snapshot) => { // <-- Creating a snapshot of Owners from Firebase
			const newItemsArray = [];
			const firebaseItems = snapshot.val();
			// console.log(firebaseItems);
			for (let key in firebaseItems) { // <-- For In loop : iterate over the object .. the key corresponds to the key of the object?
				const firebaseItem = (firebaseItems[key]);
				firebaseItem.id = key;
				newItemsArray.push(firebaseItem); // <-- grabs each one of those items and puts them into an array
				// console.log(newItemsArray);
			}
			this.setState({
				// items: newItemsArray,
				itemsOwner: newItemsArray,
			})
		}) 

		dbRefWalkers.on('value', (snapshot) => { // <-- Creating a snapshot of Walkers from Firebase
			const newItemsArray = [];
			const firebaseItems = snapshot.val();
			// console.log(firebaseItems);
			for (let key in firebaseItems) { // <-- For In loop : iterate over the object .. the key corresponds to the key of the object?
				const firebaseItem = (firebaseItems[key]);
				firebaseItem.id = key;
				newItemsArray.push(firebaseItem); // <-- grabs each one of those items and puts them into an array
				// console.log(newItemsArray);
			}
			this.setState({
				// items: newItemsArray,
				itemsWalker: newItemsArray,
			})
		}) 
	}

	handleToggle() {
		this.setState({
			isOwner: !this.state.isOwner
		})
	}

	showWalker() { // <-- If showWalker button is clicked, set state of showOwner boolean to FALSE (hidden)
		this.setState({
			isOwner: false
		})
	}

	showOwner() { // <-- If showWalker button is clicked, set state of showOwner boolean to TRUE
		this.setState({
			isOwner: true
		})
	}

	showForm() {
		this.setState({
			isForm: true
		})
	}

	render() {
		// console.log("It works")
		let isOwner = ( // <-- Creating a variable for the Owner Form
				<div className="form formDog">
					<FormOwner 
						handleChange={this.handleChange} 
						handleSubmit={this.handleSubmit}
						handleUpload={this.handleUpload}
						// dog={this.state.dog}
						dogOwner={this.state.dogOwner} 
						dogName={this.state.dogName} 
						dogAge={this.state.dogAge}   
						dogBreed={this.state.dogBreed} 
						dogSize={this.state.dogSize} 
						dogGender={this.state.dogGender} 
						dogEmail={this.state.dogEmail}
						dogPhone={this.state.dogPhone}
						dogPostal={this.state.dogPostal}
						dogImage={this.state.dogImage}
					/>
				</div>
		);

		let isWalker = ( // <-- Creating a variable for the Walker Form
			<div className="form formWalker">
				<FormWalker
					handleChange={this.handleChange} 
					handleSubmit={this.handleSubmit}

					walkerName={this.state.walkerName} 
					walkerEmail={this.state.walkerEmail}
					walkerPhone={this.state.walkerPhone}
					walkerPostal={this.state.walkerPostal}
					walkerPrice={this.state.walkerPrice}
					walkerImage={this.state.walkerImage}
					walkerDesc={this.state.walkerDesc}
				/> 						
			</div>
		)

		let isForm = (
			<div>
				<div className="labelSignUp wrapper">
					<label>
						<span>Are You a Dog Walker?</span>
						<Toggle
							defaultChecked={this.isOwner}
							icons={false}
							onChange={this.handleToggle}
						/>
						<span>Are you a Dog Owner?</span>
					</label>
				</div>

				{/* Insert IsOwner vs. IsWalker Form Here */}
				<div className="wrapper">
					{/* turnorary opteration */}
					{this.state.isOwner === true ? isOwner : isWalker}
				</div>
			</div>
		)
		return (
			<div>
				<Header />
				<section className="signUp">
					<div className="wrapper">
						<h1>Anytime, Anywhere .. Dog walkers on demand.</h1>
						<button className="buttonSignUp" onClick={this.showForm}>Sign Up</button>
						

						{/*
						<button onClick={this.showOwner}>Owner?</button>
						<button onClick={this.showWalker}>Walker?</button>
						*/}
					</div>
				</section>

				{/* Insert Form Display Here */}
				<section className="isForm"> 
						{this.state.isForm === true ? isForm : null}
				</section>

				

				{/* Insert Google Maps Here */}
				<section>
					<MapTest
						containerElement = {<div style={{height:450+'px'}} />}
		 				mapElement = {<div style={{height:430+'px'}} />}
		 				markers = {this.state.itemsOwner.concat(this.state.itemsWalker)}
					 />
					{/*<MapContainer />*/}
				</section>	

				<section className='display-item'>
					<div className='ownersGallery'>
						<div className='wrapper'>
							<h2>Dogs that need some fresh air</h2>
							<ul className='gallery'>
								{this.state.itemsOwner.map((item) => {
									return (
										<li key={item.id}>
											<div className="liFlex">
												<div className="dogImage" style={{backgroundImage: `url(${item.dogImage})`}}>
													{/* <img src={item.dogImage}/> */} 
												</div>
												<div>
													<h3>{item.dogName}</h3>
													<p>{item.dogAge} year old <span className='gender'>{item.dogGender}</span> <span className='breed'>{item.dogBreed}</span></p>
													<h4>Owner: {item.dogOwner}</h4>
												</div>
											</div>
											<a href={"mailto:" + item.dogEmail}>
												<button><i className="fa fa-paw" aria-hidden="true"></i> Take For a Walk</button>
											</a>
											
										</li>
									);
								})}
							</ul>
						</div>
					</div>
					<div className='walkersGallery'>
						<div className='wrapper'>
							<h2>Hire a dog walker!</h2>
							<ul className='gallery'>
								{this.state.itemsWalker.map((item) => {
										// console.log('test');
									return (
										<li key={item.id}>
											<h3>{item.walkerName}</h3>
											<p className="walkerDescription">{item.walkerDesc}</p>
											<p className="priceP"><span className="price">${item.walkerPrice}</span><br/>per &frac12; hr walk</p>
											<a href={"mailto:" + item.walkerEmail}>
												<button><i className="fa fa-commenting" aria-hidden="true"></i> Get In Touch</button>
											</a>
										</li>
									);
								})}
							</ul>
						</div>
					</div>
				</section>

				<Footer />
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('app'));