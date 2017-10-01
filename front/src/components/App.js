import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import styled from 'styled-components'

import IndexPage from './IndexPage'
// import Profile from './Profile'

class App extends Component {
	render(){
		return (
				<AppContainer>
					<IndexPage />
				</AppContainer>
			)
	}
}

const AppContainer = styled.div`
	height:100%;
	width:100%;
	margin:0;
	padding:0;
`
export default App