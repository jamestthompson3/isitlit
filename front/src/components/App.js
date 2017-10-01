import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import IndexPage from './IndexPage'
// import Profile from './Profile'

class App extends Component {
	render(){
		return (
				<IndexPage />
			)
	}
}

export default App