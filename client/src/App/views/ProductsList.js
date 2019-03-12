import React, { Component } from 'react';

class ProductsList extends Component {
	//Initislize the state
	constructor(props){
		super(props);
		this.state = {
			data: []
		}
	}

	// Fetch the list on first mount
	componentDidMount() {
		this.getList();
	}

	getList = () => {
		fetch('http://localhost:3001/api/getList')
		.then(data => data.json())
        .then(res => this.setState({ data: res.data }));
	}

	render() {
		const { data } = this.state;

		return (
			<div className="App">
				<h1>List of Items</h1>
		        {/* Check to see if any items are found*/}
		        {data.length ? (
		          <div>
		            {/* Render the list of items */}
		            {data.map((item) => {
		              return(
		                <div>
		                  {item}
		                </div>
		              );
		            })}
		          </div>
		        ) : (
		          <div>
		            <h2>No List Items Found</h2>
		          </div>
		        )
		      }
			</div>
		);
	}
}

export default ProductsList;