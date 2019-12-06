import React, { Component } from 'react'
import Library from './components/Library'
import Navigation from './components/Navigation'

class App extends Component{
	render(){
		return (
			<div>
				<Navigation />
	  		<Library />
	  	</div>
	  );
	}
}

export default App
