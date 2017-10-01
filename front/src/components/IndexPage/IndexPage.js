import React, { Component } from 'react'
import styled from 'styled-components'

class IndexPage extends Component {
	render() {
		return(
			<IndexWrapper>
				<h2>Welcome to</h2>
				<Title>Litboard</Title>
			</IndexWrapper>
		)
	}
}


const IndexWrapper = styled.div`
	margin:auto;
	margin-top:1rem;
	width:85%;
	border-left: 1px solid;
	border-right: 1px solid;
	text-align:center;
	>h2 {
		font-family: 'Rubik', sans-serif;
		margin:0;
	}
`
const Title = styled.h1`
	font-family: 'Monoton', cursive;
	font-size:5rem;
	font-weight:100;
	margin:auto;
`
export default IndexPage