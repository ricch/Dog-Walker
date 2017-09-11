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
// const key = 'AIzaSyAYYipUD_bZA3sowjjZlTQGq_09wEgoaNg';


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

			items: [], // to be used for retrieving items from Firebase
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleUpload = this.handleUpload.bind(this);
	}

	handleSubmit(e) {
		e.preventDefault();
		console.log(e.target.id)
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
		}
		if (e.target.id === 'formWalker') {	
		dbRefWalkers.push(newWalker); // sends a copy of the object to store in Firebase
		} else if (e.target.id === 'formOwner') {
		dbRefDogOwners.push(newDog);
		}
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

		// var inputFile = document.getElementById('fileItem');
		// inputFile.addEventListener('change', handleUpload, false);

    }

	// toggleClass() {
	// 	const currentState = this.state.active;
	// 	this.setState({ active: !currentState });
	// };

	componentDidMount() {
		dbRefDogOwners.on('value', (snapshot) => {
			const newItemsArray = [];
			const firebaseItems = snapshot.val();
			console.log(firebaseItems);
			for (let key in firebaseItems) { // <-- For In loop : iterate over the object .. the key corresponds to the key of the object?
				const firebaseItem = (firebaseItems[key]);
				firebaseItem.id = key;
				newItemsArray.push(firebaseItem); // <-- grabs each one of those items and puts them into an array
				console.log(newItemsArray);
			}
			this.setState({
				items: newItemsArray,
			})
		}) 
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
							handleUpload={this.handleUpload}
							dogOwner={this.state.dogOwner} 
							// dog={this.state.dog}
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
				</section>
				<section>
					<div className="form formWalker wrapper">
						<FormWalker
							handleChange={this.handleChange} 
							handleSubmit={this.handleSubmit}
							walkerName={this.state.walkerName} 
							walkerEmail={this.state.walkerEmail}
							walkerPhone={this.state.walkerPhone}
							walkerPostal={this.state.walkerPostal}
							walkerPrice={this.state.walkerPrice}
						/> 						
					</div>
				</section>

				<section className='display-item'>
					<div className='wrapper ownersGallery'>
						<h2>Dogs that need some fresh air</h2>
						<ul className='gallery'>
							{this.state.items.map((item) => {
								return (
									<li key={item.id}>
										<img src={item.dogImage}/>
										<h3>{item.dogName}</h3>
										<p>{item.dogAge} year old {item.dogGender} <span className='breed'>{item.dogBreed}</span></p>
										<h4>Owner Information:</h4>
										<p>{item.dogOwner}</p>
										<a href={"mailto:" + item.dogEmail}>
											<button >Contact</button>
										</a>
									</li>
								);
							})}
						</ul>
					</div>
					<div className='wrapper walkersGallery'>
						<h2>Hire a dog walker!</h2>
						<ul>
							{this.state.items.map((item) => {
									console.log('test');
								return (
									<li key={item.id}>
										<h3>{item.walkerName}</h3>
									</li>
								);
							})}
						</ul>
					</div>
				</section>

				<Footer />
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('app'));