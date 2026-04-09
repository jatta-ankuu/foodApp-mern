import React,{useContext, useReducer,createContext} from "react";

const cartState = createContext();
const cartDispatch = createContext();

const reducer =(state,action)=>{

    switch(action.type){
        case "add_to_cart":{
            return[...state,action.payload];
        } 
        case "remove_to_cart":{
            return state.filter(item =>(item.id !==action.id));
        }
        default:{
            return state;
        }
    }
};

export const CartProvider =({children})=>{
    const[state , dispatch] = useReducer(reducer ,[]);

   return (
    <cartState.Provider value={state}>
        <cartDispatch.Provider value={dispatch}>
            {children}
        </cartDispatch.Provider>
    </cartState.Provider>
   )
};

export const useCart =()=> useContext(cartState);
export const useDispatch =()=> useContext(cartDispatch);