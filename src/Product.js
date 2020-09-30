import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider"

function Product({id, price, title, rating, image}){
	//useStateValue returns values , state { basket } is our basket [array of the values] and dispatch is for manipulation of the data layer delete, add, etc
	const [{ basket }, dispatch] = useStateValue();
	
	const AddToBasket = () =>{
		dispatch({
			type: 'ADD_TO_BASKET',
			item:{
				id: id,
				price: price,
				title: title,
				rating: rating,
				image: image
			},
		});
	};
	return(
	<div className="product">
		<p>{title}</p> 
		<p className="product__price"> 
			<small>$</small>
			<strong>{price}</strong>
		</p>
		<div className="product__rating">
		{
			Array(rating).fill().map(
			(_)=>(<p>*</p>)
			)
		}
		</div>
		<img src={image} alt="Acer"/>
		<button onClick={AddToBasket}>Add to basket</button>
	</div>
	);	
}

export default Product;