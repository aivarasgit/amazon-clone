import React, { createContext, useContext, useReducer } from "react";
//Setup data layer
//We need this to track the basket

//the Data layer
export const StateContext = React.createContext();

//Provider to a data layer

export const StateProvider = ({ reducer, initialState, children}) => (
	//use a store(a data layer to place the information : initial reducer, initial Store)
	<StateContext.Provider value={useReducer(reducer, initialState)}> 
		{children} 
	</StateContext.Provider>
);

//thi is how we use it in a component:

export const useStateValue = () => useContext(StateContext);