import React from "react"
import { rhythm } from "../utils/typography"
import { Appbar, Banner} from "../components"
import { createGlobalStyle } from 'styled-components';

import { useSelector } from 'react-redux';

const GlobalStyle = createGlobalStyle`
  @import url(//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSans-kr.css);
  @import url(//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSans-jp.css);
  body, h1, h2, h3, h4, h5, h6 {
    font-family: 'Spoqa Han Sans', 'Spoqa Han Sans JP','sans-serif';
  }
  h1, h2, h3, h4, h5, h6{
    margin-top: 0;
  }
`;

const Layout = (props) => {
  const [darkmode] = useSelector(state => [state.darkmode.toJS().darkmode] , []);

  const { location, title, children } = props
  const rootPath = `${__PATH_PREFIX__}/`
  
  return (
    <div style={{
      backgroundColor: darkmode ? "#222":"#f2f2f2",
      transition: "0.3s ease background-color",
    }}>
      <GlobalStyle />
      <Appbar title={title}/>
      {/* <Info /> */}
      <Banner />
      <div style=
      {{
        marginTop: rhythm(2),
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(32),
        padding: "20px",
        borderRadius: "5px",
        color: darkmode ? "#fff" : "#000",
      }}>
        <main style={{
          transition: "background-color 0.3s, color 0.3s",
          color: darkmode ? "#fff" : "#000",
        }}>{children}</main>
        <footer style={{
          marginTop: rhythm(1),
          textAlign: "center",
        }}>
          <div style={{
            marginTop: "15px",
            color: darkmode ? "#fff" : "#000",
         }}>Copyright © lolmc All Rights Reserved 2019.</div>
        </footer>
      </div>
    </div>
  )
}

export default Layout
