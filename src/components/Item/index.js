import React, { useContext } from "react"
import { Link } from "gatsby"
import item from "../../styles/item.module.scss"
import { DispatchContext } from "../../context/GlobalContextProvider"

function Item({ name, excerpt, image, slug, id, price }) {
  const dispatch = useContext(DispatchContext)

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id,
        name,
        price,
        image,
      },
    })
  }

  return (
    <div className={item.product}>
      <Link className={item.link} to={`/products/${slug}`}>
        <img className={item.img} src={image} alt={name} />
        <h3 className={item.name}>{name.toUpperCase()}</h3>
        <p className={item.description}>{excerpt}</p>
      </Link>
      <div className={item.button} onClick={addToBasket}>+</div>
    </div>
  )
}

export default Item
