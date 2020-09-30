import React from "react";
import "./Home.css";
import Product from "./Product";

function Home(){
	return(
		<div className="Home">
			<img className="home__image" 
			src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Computers_1x._CB432469755_.jpg"
			alt="Banner"
			/>
			 <div className="home__row">
				<Product 
				id="1234512" 
				title="Acer Aspire 5 Slim" 
				price={322.94} 
				rating={5} 
				image="https://m.media-amazon.com/images/I/41ExjPXUwLL._AC_SR160,160_.jpg" /> 
				
				<Product 
				id="1234513" 
				title="Acer Aspire 5 Slim" 
				price={322.94} 
				rating={5} 
				image="https://m.media-amazon.com/images/I/41ExjPXUwLL._AC_SR160,160_.jpg" /> 
				
				<Product 
				id="1234514" 
				title="Acer Aspire 5 Slim" 
				price={302.94} 
				rating={3} 
				image="https://m.media-amazon.com/images/I/41ExjPXUwLL._AC_SR160,160_.jpg" /> 
				
			 </div>
			
			<div className="home__row">
				<Product 
					id="1234515" 
					title="Acer Aspire 5 Slim" 
					price={322.94} 
					rating={5} 
					image="https://m.media-amazon.com/images/I/41ExjPXUwLL._AC_SR160,160_.jpg" /> 
					
				<Product 
					id="1234510" 
					title="Acer Aspire 5 Slim" 
					price={302.94} 
					rating={3} 
					image="https://m.media-amazon.com/images/I/41ExjPXUwLL._AC_SR160,160_.jpg" /> 
					
				<Product 
					id="1234511" 
					title="Acer Aspire 5 Slim" 
					price={302.94} 
					rating={3} 
					image="https://m.media-amazon.com/images/I/41ExjPXUwLL._AC_SR160,160_.jpg" /> 
				
				<Product 
					id="1234519" 
					title="Acer Aspire 5 Slim" 
					price={302.94} 
					rating={3} 
					image="https://m.media-amazon.com/images/I/41ExjPXUwLL._AC_SR160,160_.jpg" /> 
			</div>
			
			<div className="home__row">
				<Product 
					id="1234512" 
					title="Acer Aspire 5 Slim" 
					price={302.94} 
					rating={3} 
					image="https://m.media-amazon.com/images/I/41ExjPXUwLL._AC_SR160,160_.jpg" /> 
			</div>
		</div>
	);	
}

export default Home;
