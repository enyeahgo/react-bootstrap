import React, { Component } from 'react'
import Rack from '../Rack'

class Library extends Component{
	render(){
		return (
			<div className="container">
				<h1>Inigo Orosco Library</h1>
				<Rack />
			</div>
		)
	}
}

export default Library
