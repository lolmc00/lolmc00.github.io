import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import { rhythm } from "../utils/typography"

const Banner = (props) => {
  const data = useStaticQuery(graphql`
    query {
      banner: file(absolutePath: { regex: "/banner.jpg/" }) {
        childImageSharp {
          fixed(width: 1960, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return(
    <div style={{
    }}>
      <Img
        fixed={data.banner.childImageSharp.fixed}
        alt={"banner"}
        style={{
          width: "100%",
          height: "380px",
          borderBottom: "2px solid #000"
        }}
      />
    </div>
  )
}

export default Banner