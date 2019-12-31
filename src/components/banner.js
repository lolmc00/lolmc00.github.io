import React from 'react'
import { Link, graphql, StaticQuery } from 'gatsby'

import styled from 'styled-components'

import BackgroundImage from 'gatsby-background-image'

const StyledBackground = styled(BackgroundImage)`
  height: 380px;
  &::before,
  &::after {
    opacity:0.6 !important;
    filter:alpha(opacity=60);
  }
  textDecoration: none;
`

const Banner = ({ className }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "banner.jpg" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      // Set ImageData.
      const imageData = data.desktop.childImageSharp.fluid
      return (
        <StyledBackground
          Tag="section"
          className={className}
          fluid={imageData}
          style={{backgroundColor: "#000", borderBottom: "2px #000 solid"}}
        >
          <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            height: "350px",
          }}>
            <Link to="/" style={{boxShadow: "none"}}><h1 style={{fontSize: "40px", color:"#fff"}}>lolmc's Development Blog</h1></Link>
          </div>
          <div style={{textAlign: "right"}}>
            <a href="http://www.freepik.com" style={{color: "#fff", boxShadow: "none", margin: "0"}}>Designed by vectorpouch / Freepik</a>
          </div>
        </StyledBackground>
      )
    }}
  />
)

export default Banner