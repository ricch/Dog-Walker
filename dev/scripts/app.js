import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header.js';
import Footer from './footer.js';
import FormOwner from './formOwner.js';
import FormWalker from './formWalker.js';

class App extends React.Component {
	render() {
		console.log("It works")
		return (
			<div>
				<Header />
				
				<div className="wrapper">
					<h1>Hello world</h1>
				</div>

				<section>
					<div className="form formDog wrapper">
						<FormOwner />
					</div>
				</section>

				<section>
					<div className="form formWalker wrapper">
						<FormWalker />
					</div>
				</section>

				<Footer />
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('app'));