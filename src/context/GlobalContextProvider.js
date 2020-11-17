import React, { createContext, useReducer } from "react"

export const StateContext = createContext()
export const DispatchContext = createContext()

const initialState = {
  basket: [],
  isCartOpen: false,
}

function reducer(state, action) {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      }
    case "TOOGLE_CART":
      return {
        ...state,
        isCartOpen: state.isCartOpen === false ? true : false,
      }
    default:
      throw new Error("Bad Action Type")
  }
}

const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  )
}

export default GlobalContextProvider
