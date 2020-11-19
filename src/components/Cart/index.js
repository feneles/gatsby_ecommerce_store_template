import React, { useContext } from "react"
import {
  DispatchContext,
  StateContext,
} from "../../context/GlobalContextProvider"
import cart from "../../styles/cart.module.scss"

function Cart() {
  const { basket } = useContext(StateContext)
  const { isCartOpen } = useContext(StateContext)
  const dispatch = useContext(DispatchContext)

  const hideCart = (e) => {
    e.preventDefault()
    dispatch({
      type: "TOOGLE_CART",
    })
  }

  return (
    <>
      <div
        onClick={hideCart}
        className={isCartOpen ? cart.modalOpen : cart.modal}
      />
      <div className={isCartOpen ? cart.containerOpen : cart.contatiner}>
        <ul className={cart.listItemContainer}>
          {basket.map((element, index) => (
            <li className={cart.listItem} key={index}>
              <img className={cart.listImage} src={element.image} alt="product image" />
              <p>{element.name.toUpperCase()}</p>
              <p>${element.price}</p>
            </li>
          ))}
        </ul>

        <button className={cart.listItemButton}>SUBMIT</button>
      </div>
    </>
  )
}

export default Cart
