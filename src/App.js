import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
//import Checkout './Checkout';

function App() {
  return (
    <div className="App">
      <Router>
		  <Switch>
				  <Route path="/login">
					<h2>Login</h2>
				  </Route>

				  <Route path="/checkout">
				    {/* Header component from Header.js  */} 
					<Header />
					 
						<Checkout />
				 
				  </Route>

				  <Route exact path="/">
					{/* Header component from Header.js  */} 
					<Header />
					<Home />
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
