import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

function Header(){
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
				<Link to="/" className="header__link">
			        	<div className="header__option">
						<span className="header__optionLineOne"> Hello Aiva </span>
						<span className="header__optionLineTwo"> Sign in </span>
					</div>
				</Link>
				{/* 2nd Link*/}		
				<Link to="/" className="header__link">
					<div className="header__option">
						<span className="header__optionLineOne"> Returns </span>
						<span className="header__optionLineTwo"> Orders </span>
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
					{/* Number items in the basket */}
					<span className="header__optionLineTwo header__basketCount">0</span>
					</div>
				</Link>
			</div>
		</nav>
	);

}

export default Header;
