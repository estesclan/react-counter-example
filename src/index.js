import React from "react"
import ReactDom from "react-dom"

import Component from "./component"
import App from "./app"

const state = {
	count: 42
}

ReactDom.render(
	<Component initialState={state}>{App}</Component>,
	document.getElementById("app")
)
