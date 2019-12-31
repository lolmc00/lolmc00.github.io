import React from "react"
import { Link, graphql } from "gatsby"
import { Utterances, Layout, SEO } from "../components"
import { rhythm, scale } from "../utils/typography"

import Paper from '@material-ui/core/Paper';
import { useSelector } from 'react-redux';

const BlogPostTemplate = (props) => {
  const [darkmode] = useSelector(state => [state.darkmode.toJS().darkmode] , []);
  const post = props.data.markdownRemark
  const siteTitle = props.data.site.siteMetadata.title
  const { previous, next } = props.pageContext

  return (
    <div>
      <Layout location={props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <article>
          <Paper style={{padding: "35px 60px", backgroundColor:darkmode ? "#f0f0f0":"#fff"}}>
          <header style={{borderBottom: "1px solid #ddd"}}>
            <h1 className="post_title"
              style={{
                marginTop: rhythm(1),
                marginBottom: 0,
              }}
            >
              {post.frontmatter.title}
            </h1>
            <p className="post_date"
              style={{
                display: `block`,
              }}
            >
              {post.frontmatter.date}
            </p>
          </header>
          <section style={{marginTop:"46px"}}dangerouslySetInnerHTML={{ __html: post.html }} />
          <hr
            style={{
              marginBottom: rhythm(1),
            }}
          />
          <footer>
            {/* <Bio /> */}
          </footer>
          </Paper>
        </article>

        <nav>
          <ul
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              listStyle: `none`,
              padding: 0,
            }}
          >
            <li>
              {previous && (
                <Link to={previous.fields.slug} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={next.fields.slug} rel="next">
                  {next.frontmatter.title} →
                </Link>
              )}
            </li>
          </ul>
        </nav>
        <Utterances repo="lolmc00/Blog-Comments" />
      </Layout>
    </div>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "YYYY년 MM월 DD일")
        description
      }
    }
  }
`
