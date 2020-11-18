import React, { useContext } from "react"
import { Link } from "gatsby"
import header from "../../styles/header.module.scss"
import CartIcon from "../../assets/elements/cartIcon.svg"
import {
  DispatchContext,
  StateContext,
} from "../../context/GlobalContextProvider"

function Header() {
  const { basket } = useContext(StateContext)
  const dispatch = useContext(DispatchContext)
  const { isCartOpen } = useContext(StateContext)

  const handleCart = () => {
    if (basket?.length > 0) {
      dispatch({
        type: "TOOGLE_CART",
      })
    }
  }

  return (
    <header className={header.container}>
      <div>
        <Link className={header.logo} to="/">
          YOUR SHOP
        </Link>
      </div>
      <div className={header.cartBox} onClick={handleCart}>
        <img src={CartIcon} alt="cart icon" />
        <span className={isCartOpen ? header.openCounter : header.counter}>
          {basket?.length}
        </span>
        <span
          className={isCartOpen ? header.cartArrowRotate : header.cartArrow}
        >
          &gt;
        </span>
      </div>
    </header>
  )
}
export default Header
