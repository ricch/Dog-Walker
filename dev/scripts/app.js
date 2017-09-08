import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			username: '',
			currentItem: '',
			items: [],
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.removeItem = this.removeItem.bind(this);
	}
	removeItem(index) {
		const items = Array.from(this.state.items);
		items.splice(index, 1);
		this.setState({
			items: items,
		});

	}
	handleSubmit(event) {
		event.preventDefault();
		const items = Array.from(this.state.items);
		const newItem = {
			foodName: this.state.currentItem,
			user: this.state.username,
		};
		items.push(newItem);
		this.setState({
			username: '',
			currentItem: '',
			items: items,
		});

	}
	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value,
		});
	}
	render() {
	    return (
	      <div className='app'>
	        <header>
	            <div className='wrapper'>
	              <h1>Fun Food Friends</h1>
	            </div>
	        </header>
	        <div className='container'>
	          <section className='add-item'>
	              <form onSubmit={this.handleSubmit}>
	                <input type="text" name="username" placeholder="What's your name?" onChange={this.handleChange} value={this.state.username} />
	                <input type="text" name="currentItem" placeholder="What are you bringing?" onChange={this.handleChange} value={this.state.currentItem} />
	                <button>Add Item</button>
	              </form>
	          </section>
	          <section className='display-item'>
	            <div className='wrapper'>
	              <ul>
	              	{this.state.items.map((item, i) => {
	              		return (
	              			<li>
	              				<h3>{item.foodName}</h3>
	              				<p>brought by {item.user}</p>
	              				<button onClick={() => this.removeItem(i)}>Remove Item</button>
	              			</li>
	              		);
	              	})}
	              </ul>
	            </div>
	          </section>
	        </div>
	      </div>
	    );
	  }
}

ReactDOM.render(<App />, document.getElementById('app'));