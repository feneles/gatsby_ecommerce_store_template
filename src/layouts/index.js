import React from "react"
import Cart from "../components/Cart"

import Header from "../components/Header"
import Transition from "../components/transition"
import layout from "../styles/layout.module.scss"

function Layout({ children, location }) {
  return (
    <div className={layout.container}>
      <Header />
      <Cart />
      <Transition location={location}>
        <main>{children}</main>
      </Transition>
    </div>
  )
}

export default Layout
