import React from 'react';
import { Link } from 'react-router-dom';

class AuthNav extends React.Component {

  render(){
    return(
      <div id="top-nav-wrapper">
        <nav id="auth-nav">
          <ul id="auth-left">
            <Link to="/home"> 
              <img id="movie-logo"src="https://movie-dev.s3-us-west-1.amazonaws.com/movie_logo_noback_blue_scaled.png" alt="logo"/>
            </Link>
            <li>
              <button id="manage-videos">Manage videos<img className="chevron-icon" src="https://movie-dev.s3-us-west-1.amazonaws.com/chevron-arrow-down.png" alt="chevron-icon"/>
                <ul className="dropdown-menu">
                  <li><Link className="nav-link" to="/home">Link 1</Link></li>
                  <li><Link className="nav-link" to="/home">Link 2</Link></li>
                  <li><Link className="nav-link" to="/home">Link 3</Link></li>
                  <li><Link className="nav-link" to="/home">Link 4</Link></li>
                </ul>
              </button>
            </li>
            <li>
              <button id="watch">Watch<img className="chevron-icon" src="https://movie-dev.s3-us-west-1.amazonaws.com/chevron-arrow-down.png" alt="chevron-icon" />
                <ul className="dropdown-menu">
                  <li><Link className="nav-link" to="/home">Link 1</Link></li>
                  <li><Link className="nav-link" to="/home">Link 2</Link></li>
                  <li><Link className="nav-link" to="/home">Link 3</Link></li>
                  <li><Link className="nav-link" to="/home">Link 4</Link></li>
                </ul>
              </button>
            </li>
            <li>
              <button id="solutions-auth">Solutions<img className="chevron-icon" src="https://movie-dev.s3-us-west-1.amazonaws.com/chevron-arrow-down.png" alt="chevron-icon" />
                <ul className="dropdown-menu">
                  <li><Link className="nav-link" to="/home">Link 1</Link></li>
                  <li><Link className="nav-link" to="/home">Link 2</Link></li>
                  <li><Link className="nav-link" to="/home">Link 3</Link></li>
                  <li><Link className="nav-link" to="/home">Link 4</Link></li>
                </ul>
              </button>
            </li>
            <li>
              <button id="upgrade-auth">Upgrade
              </button>
            </li>
          </ul>

          <div id="auth-right">
            <form id="search-form">
              <input id="auth-search" type="text" placeholder="Search videos, people, and more"/>
              <button>
                <img id="search-icon" src="https://movie-dev.s3-us-west-1.amazonaws.com/magnifying-glass.png" />
              </button>
            </form>

            <div id="activity">
              <img id="notification-icon" src="https://movie-dev.s3-us-west-1.amazonaws.com/alarm-bell.png" alt="notification-icon"/>
              <p>Activity</p>
            </div>

            <div id="user">
              <img id="smile-icon"src="https://movie-dev.s3-us-west-1.amazonaws.com/happiness_color.png" alt="smile-face"/>
              <ul id="user-dropdown">
                <li><Link to="/user">User Profile</Link></li>
                <li><button onClick={this.props.logout}>Log Out</button></li>
              </ul>
            </div>

            <div id="upload-link">
              <Link to="/upload">
                <button id="auth-upload">
                  <img src="https://movie-dev.s3-us-west-1.amazonaws.com/cloud-computing.png" /> Upload
                </button>
              </Link>
            </div>
          </div>

        </nav>
      </div>
    )
  }
}

export default AuthNav