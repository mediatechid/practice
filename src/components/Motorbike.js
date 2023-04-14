import React, {Component} from "react"

class Motorbike extends Component{
	constructor() {
		super()
		this.state={
			brand: 'Yamaha'
		}
	}

	changeMessage() {
		this.setState({
			brand: 'Suzuki'
		})
	}

	render() {
		return (
			<div>
				<h1>{this.state.brand}</h1>
				<button class="bg-blue-400 hover:bg-blue-700 py-2 px-2 rounded" onClick={() => this.changeMessage()}>
                    Change
				</button>
			</div>
		
		)
	}
}

export default Motorbike
