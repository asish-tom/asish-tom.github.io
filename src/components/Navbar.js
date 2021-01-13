import React from "react"
import scrollTo from "react-scroll"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  useRouteMatch,
  useParams
} from "react-router-dom";
class Navbar extends React.Component {
    render() {
        return (

            <div className="section">
                <div className="container">
                    <div className="navbar-wrapper">
                        <div
                            className="name"
                            role="button"
                            tabIndex={-1}
                            onKeyDown={()=>{}}
                        >
                            ASISH TOM
                        </div>
                        <div  className="links-wrapper">
                            <NavLink className="link-selector" activeClassName="active" to={"/home"}>HOME</NavLink>
                            <NavLink className="link-selector" activeClassName="active" to={"/about"}>ABOUT</NavLink>
                            <NavLink className="link-selector" activeClassName="active" to={"/blog"}>BLOG</NavLink>
                            <NavLink className="link-selector" activeClassName="active" to={"/blog"}>&nbsp;&nbsp;</NavLink>
                        </div >
                    </div>
                </div>
            </div>
        )
    }
}



export default Navbar
