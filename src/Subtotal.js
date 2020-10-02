import React from "react";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider"
import { getBasketTotal } from "./reducer";
import "./Subtotal.css";

function Subtotal(){
		const [{ basket }, dispatch] = useStateValue();
		return <div className="subtotal">
			<CurrencyFormat
			renderText={ (value) => (<> <p> Subtotal ({basket.length} items): <strong>{`${value}`} </strong> </p></> )}
			decimalScale={2} 
			value={getBasketTotal(basket)} 
			displayType={"text"} 
			thousandSeparator={true} 
			prefix={"$"}
			/>
		<button className="product__button">Proceed to checkout</button>
		</div>;
	
}

export default Subtotal;
