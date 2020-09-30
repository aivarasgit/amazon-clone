export const initialState = { 
	basket: [
	{
		id: "1234519",
		title: "Apple PC",
		price: 555.20,
		rating: 4,
		image: ""
	},
	{
		id: "1234514",
		title: "Apple PC",
		price: 545.20,
		rating: 3,
		image: ""
	},], 
	user: null
};

const reducer = (state, action) => { 
	console.log(action);
	switch(action.type){ 
		case 'ADD_TO_BASKET': //Logic for adding item to basket 
			return { 
				...state, 
				basket: [...state.basket, action.item]
			};
			break; 
		case 'REMOVE_FROM_BASKET': 
		//Logic for removing from the basket 
			//cloning the basket
			let newBasket = [...state.basket];
			const index = state.basket.findIndex(
				(basketItem) => basketItem.id === action.id);

			if (index >= 0){
				//item exists, remove it
				//using splice to remove returned index value by one.... from that index point...
				newBasket.splice(index, 1);

			}else{
				console.warn("Can't remove the product id: ${action.id} as it is not i a basket ");	
			}
			return {
				//set the state but set the newBasket..
				...state, basket: newBasket,
			};
			break; 
		default: 
			return state; 
		}  
	}; 

export default reducer;
