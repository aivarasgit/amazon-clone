import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';
//import Checkout './Checkout';

function App() {
  const [{ basket }, dispatch] = useStateValue();
  //useEffect are useful when changing classbased componnents to functional-based comp...	
  useEffect(() => {
	const unsubscribe = auth.onAuthStateChanged((authUser)=>{
		if (authUser) {
			dispatch({
				type: "SET_USER",
				user: authUser,
			})

		}else{
			
			dispatch({
				type: "SET_USER",
				user: null,
			})
		}
	});
	  return () => {
		//Clean-up operations goes in here
		  //detach and attach a new listener
		unsubscribe();
	  };
  }, []);

return (
    <div className="App">
      <Router>
		  <Switch>
				  <Route path="/login">
					<h2>Login</h2>
					<Login />
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
