import React, { Component } from 'react'
import Collections from '../../data/books.json'
import Book from '../Book'

class Rack extends Component{
	render(){
		return(
			<div className="row mb-5">
				{Collections.map((book, i) => (
					<Book bookDetails={book} />
				))}
			</div>
		)
	}
}

export default Rack