import React, { Component } from 'react'

class Book extends Component{
	constructor(props){
		super(props)
		this.markBook = this.markBook.bind(this)
		this.state = {
			borrowed: false
		}
	}
	markBook(event){
		event.preventDefault()
		const { borrowed } = this.state
		this.setState({
			borrowed: !borrowed
		})
	}
	render(){
		const { bookDetails } = this.props
		const { borrowed } = this.state
		return(
			<div className="col-md-4 mt-3">
				<div className="card shadow-sm" style={{height:'250px'}}>
					<div className={`card-header ${borrowed ? 'bg-success text-black' : 'bg-danger text-white'}`}>{bookDetails.title}</div>
					<div className="card-body d-flex flex-column text-left">
						<h6 className="card-title">{bookDetails.author}</h6>
						<p className="card-text">{bookDetails.content}</p>
						<div className="mt-auto" style={{textAlign:'right'}}>
							<button
								onClick={this.markBook}
								className={`btn btn-sm btn-${borrowed ? 'primary' : 'danger'}`}>
								{`Mark as ${borrowed ? 'Borrowed' : 'Available'}`}	
							</button>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Book