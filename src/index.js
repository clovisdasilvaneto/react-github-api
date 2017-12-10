'use strict';

import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import App from './app';

import '../static/scss/main.scss';

const renderApp = (NextApp) => {
	render(
		<AppContainer>
			<MuiThemeProvider>
				<NextApp title="My React App" />
			</MuiThemeProvider>
		</AppContainer>,
		document.querySelector('[data-js="app"]')
	);
};

renderApp(App);

if(module.hot){
	module.hot.accept('./app', ()=> {
		const NextApp = require('./app').default;
		
		renderApp(NextApp);
	});
}
