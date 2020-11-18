import React, { useState } from "react"
import products from "../../styles/products.module.scss"
import Arrow from "../../assets/elements/arrow.svg"
import Item from "../Item"
import { useStaticQuery, graphql } from "gatsby"

function Products() {
  const [x, setX] = useState(0)

  const { allMarkdownRemark } = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              name
              price
              excerpt
              image
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  const items = allMarkdownRemark.edges.map((el, index) => {
    if (el.node.frontmatter.price) {
      return (
        <Item
          id={index}
          key={index}
          name={el.node.frontmatter.name}
          excerpt={el.node.frontmatter.excerpt}
          image={el.node.frontmatter.image}
          slug={el.node.fields.slug}
          price={el.node.frontmatter.price}
        />
      )
    } else return null
  })

  const goLeft = () => {
    x === 0 ? setX(-45) : setX(x + 15)
  }

  const goRight = () => {
    x === -45 ? setX(0) : setX(x - 15)
  }

  return (
    <div className={products.container}>
      <div className={products.topContent}>
        <h2 className={products.firstText}>Explore community choices</h2>
        <p className={products.secondText}>
          Updated daily based on most popular choices among dev community.
        </p>
      </div>
      <div className={products.bottomBox}>
        <div onClick={goLeft} className={products.arrowBox}>
          <img className={products.arrow} src={Arrow} alt="arrow icon" />
        </div>

        <div className={products.box}>
          <div
            style={{ transform: `translateX(${x}%)` }}
            className={products.itemsContainer}
          >
            {items}
          </div>
        </div>
        <div onClick={goRight} className={products.arrowBox}>
          <img
            className={`${products.arrow} ${products.rightArrow}`}
            src={Arrow}
            alt="arrow icon"
          />
        </div>
      </div>
    </div>
  )
}

export default Products
