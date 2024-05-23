// App contains all our components , its the parent component
import React, {Component} from 'react'; // We destrcucture Component so we can use it insted of React.Component
import CardList from './CardList';
import SearchBox from './SearchBox'; 
import './App.css';
import Scroll from './Scroll.js'; // We can import Components from files in React using this method



class App extends Component { // App is a smart component since it has state . 
// A component must include extends React.Component. In this case is destructured in import, so we can use only Component
	constructor() { // Is where we initiate the Component's properties.

		super(); // Super executes the parent Component's constructor function. In this case React.Component's functions 
		this.state={ 
			robots: [],
			searchfield: ''
		}
	}


	componentDidMount(){

		fetch('https://jsonplaceholder.typicode.com/users').then(response=>{
			return response.json();
		}).then(users =>

			this.setState({robots: users})

		)

	}


	onSearchChange = (event) => {

		this.setState({ searchfield: event.target.value })

	}



	render(){	// Every Component must include a render method. The render method returns HTML

		const filteredRobots = this.state.robots.filter(robots =>{
				return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		 })



		return( // Every Component must return something



			<div className='tc'>  {/* */}

				<h1 className='f1'>Robots</h1>
				<SearchBox searchChange={this.onSearchChange}/>
				<Scroll>
					<CardList robots={filteredRobots}/>
				</Scroll>
			</div>	
		)
	}

}

export default App;