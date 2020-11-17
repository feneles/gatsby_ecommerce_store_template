import React, { useContext } from "react"
import { graphql } from "gatsby"
import Layout from "../layouts"
import productStyles from "../styles/productPage.module.scss"
import { DispatchContext } from "../context/GlobalContextProvider"

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        name
        price
        image
        description
        tag
      }
    }
  }
`

function ProductPage(props) {
  const dispatch = useContext(DispatchContext)

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        name: props.data.markdownRemark.frontmatter.name,
        price: props.data.markdownRemark.frontmatter.price,
        image: props.data.markdownRemark.frontmatter.image,
      },
    })
  }

  return (
    <Layout>
      <div className={productStyles.container}>
        <div className={productStyles.imgBox}>
          <img
            className={productStyles.img}
            src={props.data.markdownRemark.frontmatter.image}
            alt="product image"
          />
        </div>
        <div className={productStyles.infoBox}>
          <p className={productStyles.productTag}>{props.data.markdownRemark.frontmatter.tag.toUpperCase()}</p>
          <h1 className={productStyles.productName}>{props.data.markdownRemark.frontmatter.name}</h1>
          <p className={productStyles.productDescription}>{props.data.markdownRemark.frontmatter.description}</p>
          <h3 className={productStyles.productPrice}>${props.data.markdownRemark.frontmatter.price}</h3>
          <button onClick={addToBasket} className={productStyles.productButton}>ADD TO CART</button>
        </div>
      </div>
    </Layout>
  )
}

export default ProductPage
