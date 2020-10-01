import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider"

const CheckoutProduct=({id, price, title, rating, image})=>{
	//useStateValue returns values , state { basket } is our basket [array of the values] and dispatch is for manipulation of the data layer delete, add, etc
	const [{ basket }, dispatch] = useStateValue();
	
	const RemoveFromBasket = () =>{
		dispatch({
			type: 'REMOVE_FROM_BASKET',
			item:{
				id: id,
			},
		});
	};
	return(
		<div className="checkoutProduct"> 
			<div className="checkoutProduct__info"> 
			<div className="checkoutProduct__title">{title}</
			div>
			<div className="checkoutProduct__price">
				<small>$</small>
				<strong>{price}</strong>
			<div className="checkoutProduct__rating">
			{
				Array(rating).fill().map(
				(_)=>(<p>*</p>)
				)
			}
			</div>

			<img src={image} alt="Acer"/>
			
			<button className="product__button" onClick={RemoveFromBasket}>Remove from the basket</button>
				</div>
			</div>
		</div>
	);

}

export default CheckoutProduct;
