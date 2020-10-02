import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";

function Checkout(){
	//useStateValue returns values , state { basket } is our basket [array of the values] and dispatch is for manipulation of the data layer delete, add, etc
	const [{ basket }] = useStateValue();

	return(
	<div className="checkoutProduct_page">
		<h1>Checkout</h1>
 
		<img className="checkout__ad" src="https://m.media-amazon.com/images/S/aplus-media/vc/2634776b-88ea-4a3d-96b2-311e6d32085a.__CR0,0,1464,600_PT0_SX1464_V1___.jpg" alt="Acer"/>
		{/*<button onClick="">Remove from the basket</button>*/}
		
		{ basket?.length === 0 ? (
			<div className="checkout__title">				<h2>Your shopping basket is empty</h2>
				<p>Add some items..</p>
			</div>
		):(
			<div className="checkout__title">
				<h2>Your shopping basket:</h2>
				<div className="checkout__cont">
				{
				basket.map(item=>( 
					<CheckoutProduct 
						id={item.id} 
						title={item.title} 
						image={item.image} 
						price={item.price} 
						rating={item.rating} 
					/>))
				}
				
			   { basket.length > 0 && (
					<div className="checkout__right">
						<h1> Subtotal </h1>
						<Subtotal />
					</div> )}
					
				</div>

			</div>
			
			
			)	
			
		}
	</div>

	);	

}

export default Checkout;
