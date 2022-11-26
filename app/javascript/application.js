// Entry point for the build script in your package.json
//import "@hotwired/turbo-rails"
//
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import RootController from "./controllers/root";
import store from './redux/configureStore';

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
	return (
		<Provider store={store}>
	  	<Router>
	  		<Routes>
	  			<Route exact path="/" element={<RootController />}/>
	  		</Routes>
	  	</Router>
	  </Provider>
	);
}

ReactDOM.render(
  <App/>,
  document.getElementById('root'),
);