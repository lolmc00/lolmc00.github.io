import React from "react"
import { rhythm } from "../utils/typography"
import { Appbar, Banner} from "../components"
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Spoqa Han Sans', 'sans-serif';
  }
`;

const Layout = (props) => {
  const { location, title, children } = props
  const rootPath = `${__PATH_PREFIX__}/`
  return (
    <div>
      <GlobalStyle />
      <Appbar title={title}/>
      {/* <Info /> */}
      <Banner />
      <div style=
      {{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(24),
      }}>
        <main style={{color:'var(--textNormal)'}}>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </div>
  )
}

export default Layout
