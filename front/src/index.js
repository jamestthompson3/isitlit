import { render } from 'react-dom'
import React from 'react'
import { AsyncComponentProvider, createAsyncContext } from 'react-async-component'
import asyncBootstrapper from 'react-async-bootstrapper'

import App from './components/App'

const rehydrateState = window.ASYNC_COMPONENTS_STATE


const app = (
	<AsyncComponentProvider rehydrateState={rehydrateState}>
    	<App />
    </AsyncComponentProvider>
	)
const renderApp = () => {
  asyncBootstrapper(app).then(() => {
  	render(app, document.getElementById('react'))
  })
}

if (module.hot) {
  module.hot.accept('./components/App', () => renderApp())
}

renderApp()