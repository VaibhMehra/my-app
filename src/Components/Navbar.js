import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        {/* <a className="navbar-brand" href="#">{props.title}</a> */}
        <Link className="navbar-brand" to="/">{props.title}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              {/* <a className="nav-link active" aria-current="page" href="#">{props.home}</a> */}
              <Link className="nav-link active" aria-current="page" to="/">{props.home}</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/About">{props.about}</Link>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <div className="form-check mx-3 ">
              <input className="form-check-input" onClick={props.greenTheme} type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
              <label className="form-check-label" htmlFor="exampleRadios1">
                Green Theme
              </label>
            </div>
            <div className="form-check mx-3">
              <input className="form-check-input" onClick={props.defaultTheme} type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
                <label className="form-check-label" htmlFor="exampleRadios2">
                  Default Theme
                </label>
            </div>
            {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-primary" type="submit">Search</button> */}
            <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
              <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
            </div>
          </form>
        </div>
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  home: PropTypes.string,
  about: PropTypes.string
};

Navbar.defaultProps = {
  title: 'Set title here',
  home: 'Home',
  about: 'About'
};