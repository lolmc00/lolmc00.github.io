import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import { rhythm } from "../utils/typography"

const Info = () => {
  const data = useStaticQuery(graphql`
    query InfoQuery {
      profile: file(absolutePath: { regex: "/profile.jpg/" }) {
        childImageSharp {
          fixed(width: 350, height: 350) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
          social {
            github
          }
        }
      }
    }
  `)
  const { author, social } = data.site.siteMetadata
  return(
    <div className="profie" style={{
      display: "inline-block",
      border: "1px solid #000",
      top: "100px",
      left: "50px",
      position: "fixed",
    }}>
      <Image
        fixed={data.profile.childImageSharp.fixed}
        alt={author}
        style={{
          marginRight: rhythm(1 / 2),
          marginBottom: 0,
          minWidth: 50,
          borderRadius: `100%`,
        }}
        imgStyle={{
          borderRadius: `50%`,
        }}
      />
      <div className="profile_name">
        롤마충
      </div>
      <div className="profile_introduce">
        안녕하세요
      </div>
    </div>
  )
}

export default Info