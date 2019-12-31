import React from "react"
import { Link, graphql } from "gatsby"
import { Layout, SEO } from "../components"
import { makeStyles } from '@material-ui/core/styles';
import { rhythm } from "../utils/typography"

import { useSelector } from 'react-redux';

const useStyles = makeStyles(() => ({
  link: {
    padding: "15px 0px",
    borderTop: "1px solid #888",
    boxShadow: "none",
    transition: "0.3s ease background-color",
    '&:hover': {
      backgroundColor: "#999",
    }
  },
}));

const BlogIndex = (props) => {
  const { data } = props
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges
  
  const [darkmode] = useSelector(state => [state.darkmode.toJS().darkmode] , []);

  const classes = useStyles();

  return (
    <div>
      <Layout location={props.location} title={siteTitle}>
        <SEO title="All posts" />
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <Link to={node.fields.slug}>
              <section key={node.fields.slug}className={classes.link}>
                <div>
                  <h3
                    style={{
                      color: darkmode ? "#fff":"#000",
                      transition: "0.3s ease color",
                      marginBottom: rhythm(1 / 4),
                    }}
                  >
                    {title}
                  </h3>
                  <small style={{
                    color: darkmode ? "#fff":"#000",
                    transition: "0.3s ease color",
                  }}>{node.frontmatter.date}</small>
                </div>
              </section>
            </Link>
          )
        })}
      </Layout>
    </div>
  )
}
export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 6, sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "YYYY.MM.DD")
            title
            description
          }
        }
      }
    }
  }
`
