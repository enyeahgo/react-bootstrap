import React, { Component } from 'react'

class Navigation extends Component{
	render(){
		return(
			<div>
				<nav className="navbar navbar-expand-lg navbar-light bg-info">
				  <a className="navbar-brand" href="#"><strong>Inigo's Library</strong></a>
				  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
				    <span className="navbar-toggler-icon"></span>
				  </button>
				  <div className="collapse navbar-collapse" id="navbarNav">
				    <ul className="navbar-nav">
				      <li className="nav-item active">
				        <a className="nav-link" href="#">Home<span className="sr-only">(current)</span></a>
				      </li>
				      <li className="nav-item">
				        <a className="nav-link" href="#">Library</a>
				      </li>
				      <li className="nav-item">
				        <a className="nav-link" href="#">Login</a>
				      </li>
				    </ul>
				  </div>
				</nav>
			</div>
		)
	}
}

export default Navigation