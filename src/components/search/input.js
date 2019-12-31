import React from "react"
import { connectSearchBox } from "react-instantsearch-dom"
import {Search} from "styled-icons/fa-solid/Search";

export default connectSearchBox(({ refine, ...rest }) => {
  
  return(
  <div style={{
    margin: "0",
    width: rest.focus ? "180px" : "120px",
    height: "35px",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    transition: "0.3s ease all",
    backgroundColor: "#eee",
    borderRadius: "4px",
    }}>
    <Search style={{
      display: "inline-block",
      width: "15px",
      margin: "0px 8px",
    }}/>
    <input
      type="text"
      placeholder="Search..."
      aria-label="Search"
      onChange={e => refine(e.target.value)}
      style={{
        display: "inline-block",
        border: "none",
        outline: "none",
        width: "70px",
        backgroundColor: "#eee",
      }}
      {...rest}
    />
  </div>);
})