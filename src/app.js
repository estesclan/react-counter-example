import React from "react"

const App = props => {
	const state = props.state
	const setState = props.setState

	const increment = prevState => {
		return {
			count: prevState.count + 1
		}
	}
	const decrement = prevState => {
		return {
			count: prevState.count - 1
		}
	}

	return (
		<div>
			<h1>Counter Example</h1>
			<h3>Count: {state.count}</h3>
			<div>
				<button
					onClick={() => {
						setState(increment)
					}}
				>
					Inc
				</button>
				<button
					onClick={() => {
						setState(decrement)
					}}
				>
					Dec
				</button>
			</div>
		</div>
	)
}

export default App
