import React from 'react'

const Appbar = (props) => {
  const title = props.title;

  return(
    <div>
      <div className="app_bar" style={{
        display: "flex",
        justifyContent: "space-around",
        width: "100%",
        height: "46px",
        alignItems: "center",
        position: "fixed",
        top: 0,
        backgroundColor: "#f5f5f5",
        borderBottom: "2px solid #ddd",
        overflow: "hidden",
        zIndex: 10000,
      }}>
        <div className="bar_left">
          #
        </div>
        <div className="bar_nav" style={{cursor:"pointer"}} >
          {title}
        </div>
        <div className="bar_right">
          #
        </div>
      </div>
      <div className="app_bar_space" style={{
        height: "46px"
      }}>
        
      </div>
    </div>
  )
}

export default Appbar