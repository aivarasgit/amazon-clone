export const initialState = { 
	basket: [
	{
		id: "1234519",
		title: "Apple PC",
		price: 555.20,
		rating: 4,
		image: "https://m.media-amazon.com/images/I/41ExjPXUwLL._AC_SR160,160_.jpg"
	},
	{
		id: "1234514",
		title: "Apple PC",
		price: 545.20,
		rating: 3,
		image: "https://m.media-amazon.com/images/I/41ExjPXUwLL._AC_SR160,160_.jpg"
	},], 
	user: null
};

export const getBasketTotal = (basket) => basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => { 
	console.log(action);
	switch(action.type){
		case 'SET_USER':
			return {
				...state,
				user: action.user
			}

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
			 
			let id = action.item.id;
			const index = state.basket.findIndex(
				(basketItem) => basketItem.id === id);

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
