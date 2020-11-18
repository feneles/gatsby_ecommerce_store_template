import React from "react"

import HeroBackground from "../../assets/elements/hero_background.svg"
import HeroImage from "../../assets/elements/monitor.svg"
import HeroDecor from "../../assets/elements/hero_decor.svg"
import section from "../../styles/section.module.scss"

function HomepageHero() {
  return (
    <section>
      <div className={section.container}>
        <div className={section.leftSide}>
          <img
            className={section.heroImage}
            src={HeroImage}
            alt="Vector Monitor"
          />
        </div>
        <div className={section.rightSide}>
          <img
            className={section.heroDecorImage}
            src={HeroDecor}
            alt="Vector Decor"
          />
          <h1 className={section.catchword}>
            Don't waste time
            <br />
            on boring things
          </h1>
          <button className={section.button}>GO EXPLORE</button>
        </div>
      </div>

      <img className={section.bgImage} src={HeroBackground} />
    </section>
  )
}

export default HomepageHero
