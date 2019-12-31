import React from 'react'
import { Link } from "gatsby"
import Search from "../components/Search"
import Switch from '@material-ui/core/Switch';

import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../actions/actionTypes'

const searchIndices = [
  // { name: `Pages`, title: `Pages`, hitComp: `PageHit` },
  { name: `Posts`, title: `Blog Posts`, hitComp: `PostHit` },
]

const Appbar = (props) => {

  const dispatch = useDispatch();
  const [darkmode] = useSelector(state => [state.darkmode.toJS().darkmode] , []);

  const title = props.title;

  return(
    <div>
      <div className="app_bar" style={{
        width: "100%",
        height: "46px",
        position: "fixed",
        top: 0,
        borderBottom: darkmode ? "2px solid #555" : "2px solid #ddd",
        zIndex: 10000,
        display: "flex",
        background: darkmode ? "#333" : "#f5f5f5",
        transition: "0.3s ease background-color",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1em"
      }}>
        <div className="nav_left" style={{flexBasis: "33%"}}>
          #
        </div>
        <div className="nav_mid" style={{flexBasis: "33%", textAlign: "center"}}>
          <Link style={{ boxShadow: `none` }} to={`/`}>
            <div style={{
              fontWeight: "500",
              color: darkmode ? "#fff" : "#000",
              transition: "0.3s ease color",
            }}>{title}</div>
          </Link>
        </div>
        <div className="nav_right"  style={{flexBasis: "33%", textAlign: "right", display: "flex", justifyContent:"space-between"}}>	
          <div style={{
            fontWeight: "bold",
            color: darkmode ? "#fff" : "#000",
            transition: "0.3s ease all",
            }}>
            Dark Mode: <Switch
              checked={darkmode}
              onChange={() => dispatch({type: actions.DARK_MODE_TOGGLE, isDarkmode: !darkmode})}
              value="darkmode"
              color="primary"
              inputProps={{ 'aria-label': 'primary checkbox' }}
            />
          </div>
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