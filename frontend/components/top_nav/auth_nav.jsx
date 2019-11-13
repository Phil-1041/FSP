import React from 'react';
import { Link } from 'react-router-dom';

class AuthNav extends React.Component {

  render(){
    return(
      <nav id="auth-nav">
        <ul id="left-nav">
          <Link to="/home"> <i id="logo"></i> </Link>
          <li>
            <button className="nav-button">Manage videos
              <ul>
                <li><Link className="nav-link" to="/home">Link 1</Link></li>
                <li><Link className="nav-link" to="/home">Link 2</Link></li>
                <li><Link className="nav-link" to="/home">Link 3</Link></li>
                <li><Link className="nav-link" to="/home">Link 4</Link></li>
              </ul>
            </button>
          </li>
          <li>
            <button className="nav-button">Watch
              <ul>
                <li><Link className="nav-link" to="/home">Link 1</Link></li>
                <li><Link className="nav-link" to="/home">Link 2</Link></li>
                <li><Link className="nav-link" to="/home">Link 3</Link></li>
                <li><Link className="nav-link" to="/home">Link 4</Link></li>
              </ul>
            </button>
          </li>
          <li>
            <button className="nav-button">Solutions
              <ul>
                <li><Link className="nav-link" to="/home">Link 1</Link></li>
                <li><Link className="nav-link" to="/home">Link 2</Link></li>
                <li><Link className="nav-link" to="/home">Link 3</Link></li>
                <li><Link className="nav-link" to="/home">Link 4</Link></li>
              </ul>
            </button>
          </li>
          <li>
            <button className="nav-button">Upgrade
            </button>
          </li>
        </ul>

        <ul className="right_nav">
          <li>
            <button id="search">
              <img id="search_icon" src="https://i.ibb.co/64jNbzD/thin-finder.png" />
              Search
              </button>
          </li>
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