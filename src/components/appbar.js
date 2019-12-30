import React from 'react'
import { Link } from "gatsby"
import Search from "../components/Search"

import { useSelector, useDispatch } from 'react-redux';
import { toggleDarkmode } from '../actions/darkmode';

const searchIndices = [
  // { name: `Pages`, title: `Pages`, hitComp: `PageHit` },
  { name: `Posts`, title: `Blog Posts`, hitComp: `PostHit` },
]

const Appbar = (props) => {

  const dispatch = useDispatch();
  const [darkmode] = useSelector(state => [state.darkmode.toJS().darkmode] , []);

  const handleChangeDarkmode = () =>{
    dispatch(toggleDarkmode());
  }

  const title = props.title;

  return(
    <div>
      <div className="app_bar" style={{
        width: "100%",
        height: "46px",
        position: "fixed",
        top: 0,
        borderBottom: "2px solid #ddd",
        zIndex: 10000,
        display: "flex",
        background: "var(--bg)",
        transition: "0.3s ease all",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1em"
      }}>
        <div className="nav_left"  style={{flexBasis: "33%"}}>
          #
        </div>
        <div className="nav_mid" style={{flexBasis: "33%", textAlign: "center"}}>
          <Link style={{ boxShadow: `none` }} to={`/`}>
            {title}
          </Link>
        </div>
        <div className="nav_right"  style={{flexBasis: "33%", textAlign: "right", display: "flex", justifyContent:"space-around"}}>	
          <input type="check_darkmode" name="darkmode" onChange={handleChangeDarkmode}/>
          <Search collapse indices={searchIndices}/>
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