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
		<img className="chechkoutProduct__image" src={image} alt=""/> 
	<div className="checkoutProduct__info"> 
		<p className="checkoutProduct__title">{title}</p>
		<p className="checkoutProduct__price">
			<small>$</small>
			<strong>{price}</strong>
		<p className="checkoutProduct__rating">
		{
			Array(rating).fill().map(
			(_)=>(<p>*</p>)
			)
		}
		</p>

		<img src={image} alt="Acer"/>
		
		<button onClick={RemoveFromBasket}>Remove from the basket</button>
			</p>
		</div>
	</div>);

}

export default CheckoutProduct;
