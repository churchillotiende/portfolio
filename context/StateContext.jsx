import React, {createContext,useContext , useReducer} from 'react';

const Context = createContext();

export const StateContext = ({reducer , initialState , children}) => 
{    
    return(
        <Context.Provider value={useReducer(reducer , initialState)}>
            { children }
        </Context.Provider>
    )
}

export const useStateContext = () => useContext(Context);



