import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Header from './Header';

function App() {
  return (
    <div className="App">
      <Router>
	  <Switch>
	  <Route path="/login">
   		<p>
          		Edit <code>src/App.js</code> and save to reload.
        	</p>
	  </Route>

	  <Route path="/checkout">
        	<a className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        	</a>
	  </Route>

	  <Route exact path="/">
	        {/* Header component from Header.js  */} 
	  	<Header />
		<h2>HOME</h2>
		<h2>HOME</h2>
		<h2>HOME</h2>
		<h2>HOME</h2>
		<h2>HOME</h2>
		<h2>HOME</h2>
		<h2>HOME</h2>
		<h2>HOME</h2>
		<h2>HOME</h2>
		<h2>HOME</h2>
		<h2>HOME</h2>
		<h2>HOME</h2>
		<h2>HOME</h2>
		<h2>HOME</h2>
		<h2>HOME</h2>
		<h2>HOME</h2>
		<h2>HOME</h2>
		<h2>HOME</h2>
		<h2>HOME</h2>
		<h2>HOME</h2>
		<h2>HOME</h2>
		<h2>HOME</h2>
		<h2>HOME</h2>
		<h2>HOME</h2>
		<h2>HOME</h2>
		<h2>HOME</h2>
		<h2>HOME</h2>
		<h2>HOME</h2>
		<h2>HOME</h2>
		<h2>HOME</h2>
		<h2>HOME</h2>
		<h2>HOME</h2>
		<h2>HOME</h2>
		<h2>HOME</h2>
		<h2>HOME</h2>
		<h2>HOME</h2>
		<h2>HOME</h2>
		<h2>HOME</h2>
		<h2>HOME</h2>
		<h2>HOME</h2>
		<h2>HOME</h2>
		<h2>HOME</h2>
		<h2>HOME</h2>
		<h2>HOME</h2>
		<h2>HOME</h2>
		<h2>HOME</h2>
		<h2>HOME</h2>
		<h2>HOME</h2>
		<h2>HOME</h2>
		<h2>HOME</h2>
		<h2>HOME</h2>
		<h2>HOME</h2>
		<h2>HOME</h2>
		<h2>HOME</h2>
		<h2>HOME</h2>
		<h2>HOME</h2>
	  </Route>
	  </Switch>
      </Router>
    </div>
  );
}

export default App;
