import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useStateValue } from './StateProvider';
import { auth } from "./firebase";

function Header(){
	
	//useStateValue returns values , state { basket } is our basket [array of the values] and dispatch is for manipulation of the data layer delete, add, etc
	const [{ basket }, user] = useStateValue();

	let user1 = auth.currentUser;
	const logout = () =>{
		if (user) {
			auth.signOut();
		//	alert(json.stringify(user));
		}
	}

	const user_show = () =>{
		alert(user1);
		
		alert(user1.id);
		alert(user1.name);
		alert(user1.email);
		alert(user1.password);
	}

	console.log(basket);
	/*const AddToBasket = () =>{
		dispatch({
			type: 'ADD_TO_BASKET',
			item:{
				
			},
		});
	};*/
	
	return (
		<nav className="header">
		{/* logo on the left -> img  */}
			<Link to="/">
				<img 
		    		className="header__logo"
		    		src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" 
		    		alt=""/>
			</Link>
 			{/* Search box  */}
			<input type="text" className="header__searchInput"/>
			<SearchIcon className="header__searchIcon" />
			{/* 4 Links */}
			<div className="header__nav">
			{/*1st Link */}
				<Link to={!user && "/login"} className="header__link">
			        	<div onClick={logout} className="header__option">
						<span className="header__optionLineOne"> Hello, {user1? user1.email:"" }</span>
						<span className="header__optionLineTwo" onClick={logout}> {user ? 'Sign in':'Sign out'} </span>
					</div>
				</Link>
				{/* 2nd Link*/}		
				<Link to="/" className="header__link">
					<div className="header__option">
						<span className="header__optionLineOne"> Returns </span>
						<span className="header__optionLineTwo"> Orders </span>
		<span onClick={user_show} >Testing</span>
					</div>					                   </Link>
			        {/*3rd Link */}
				<Link to="/checkout" className="header__link"> 
					<div className="header__option">
						<span className="header__optionLineOne">Your</span>
						<span className="header__optionLineTwo">Prime</span>
					</div>
				</Link>
		
			        {/*4th Link */}
				<Link to="/checkout" className="header__link"> 
					<div className="header__optionBasket">
					
					{/* Shopping basket icon */}
					<ShoppingBasketIcon />
					{ user.email }
					{/* Number items in the basket */}
					<span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
					</div>
				</Link>
			</div>
		</nav>
	);

}

export default Header;
