import React from 'react';
import { Link } from 'react-router-dom';

class AuthNav extends React.Component {

  render(){
    return(
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

        <ul id="auth-right">
          <form id="search-form">
            <input id="auth-search" type="text" placeholder="Search videos, people, and more"/>
            <button>
              <img src="https://i.ibb.co/64jNbzD/thin-finder.png" />
            </button>
          </form>

          <li>
            <button id="upload" onClick={() => this.props.openModal('signup')}>
              <img src="https://image.flaticon.com/icons/svg/20/20829.svg" /> Upload
              </button>
          </li>
        </ul>

      </nav>
    )
  }
}

export default AuthNav