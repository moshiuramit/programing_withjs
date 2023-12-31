import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      {/*  header  */}
      <header id="site-header"  className="fixed-top">
            <div  className="container">
            <nav  className="navbar navbar-expand-lg navbar-dark stroke">
                <h1>
                <a  className="navbar-brand" href=".">
                    <span  className="fa fa-diamond"></span>Study Course <span  className="logo">Journey to success</span></a>
                </h1>

                {/*   if logo is image enable this   
                <a  className="navbar-brand" href="#index.html">
                    <img src="image-path" alt="Your logo" title="Your logo" style="height:35px;" />
                </a>   */}
                <button  className="navbar-toggler  collapsed bg-gradient" type="button" data-toggle="collapse"
                data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false"
                aria-label="Toggle navigation">
                <span  className="navbar-toggler-icon fa icon-expand fa-bars"></span>
                <span  className="navbar-toggler-icon fa icon-close fa-times"></span>
                </button>

                <div  className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul  className="navbar-nav mx-lg-auto">
                    <li  className="nav-item active">
                    <Link className="nav-link" to="/">Home <span  className="sr-only">(current)</span></Link>
                    </li>
                    <li  className="nav-item @@about__active">
                    <Link  className="nav-link" to="/about">About</Link>
                    </li>
                    <li  className="nav-item @@courses__active">
                    <Link  className="nav-link" to="/courses">Courses</Link>
                    </li>
                    <li  className="nav-item @@contact__active">
                    <Link  className="nav-link" to="/contact">Contact</Link>
                    </li>
                    <li  className="nav-item @@contact__active">
                    <Link  className="nav-link" to="/stateandprops">State&props</Link>
                    </li>
                    <li  className="nav-item @@contact__active">
                    <Link  className="nav-link" to="/movies">Movies</Link>
                    </li>
                </ul>

                {/*  /search-right  */}
                <div  className="search-right">
                    <a href="#search" title="search"><span  className="fa fa-search" aria-hidden="true"></span></a>
                    {/*   search popup   */}
                    <div id="search"  className="pop-overlay">
                    <div  className="popup">

                        <form action="error.html" method="GET"  className="search-box">
                        <input type="search" placeholder="Search" name="search" required="required" autoFocus="" />
                        <button type="submit"  className="btn"><span  className="fa fa-search" aria-hidden="true"></span></button>
                        </form>

                    </div>
                    <a  className="close" href="#close">×</a>
                    </div>
                    {/*   /search popup   */}
                </div>
                <div  className="top-quote mr-lg-2 text-center">
                    <a href="#login"  className="btn login mr-2"><span  className="fa fa-user"></span> login</a>
                </div>
                </div>
                {/*   toggle switch for light and dark theme   */}
                <div  className="mobile-position">
                <nav  className="navigation">
                    <div  className="theme-switch-wrapper">
                    <label  className="theme-switch" htmlFor="checkbox">
                        <input type="checkbox" id="checkbox" />
                        <div  className="mode-container py-1">
                        <i  className="gg-sun"></i>
                        <i  className="gg-moon"></i>
                        </div>
                    </label>
                    </div>
                </nav>
                </div>
                {/*   //toggle switch for light and dark theme   */}
            </nav>
            </div>
        </header>
        {/*  header  */}
    </div>
  )
}

export default Header