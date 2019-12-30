import React from "react"
import { connectSearchBox } from "react-instantsearch-dom"


export default connectSearchBox(({ refine, ...rest }) => (
  <form style={{margin: "0"}}>
    <input
      type="text"
      placeholder="Search"
      aria-label="Search"
      onChange={e => refine(e.target.value)}
      style={{height: "35px"}}
      {...rest}
    />
  </form>
))