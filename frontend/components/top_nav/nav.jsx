import React from 'react';
import { Link } from 'react-router-dom';

class Nav extends React.Component {
  render(){
    return (
      <nav>
        <div className="navBar">
          <ul className="left_nav">
            <Link to="/"><i id="logo"></i></Link>
            <li>
              <button id='join'>Join</button>
            </li>
            <li >
              <button id='login'>Log in</button>
            </li>
            <li id="insp_dropdown">
              <button id='inspiration'>Inspiration<img src="https://i.ibb.co/fDZPFkR/angle-pointing-down.png"/></button>
              <div className="insp_content">
                <p><Link className="link" to="/">Link 1</Link></p>
                <p><Link className="link" to="/">Link 2</Link></p>
                <p><Link className="link" to="/">Link 3</Link></p>
              </div>
            </li>
            <li id="solu_dropdown">
              <button id='solutions'>Solutions<img src="https://i.ibb.co/fDZPFkR/angle-pointing-down.png"/></button>
              <div className="solu_content">
                <p><Link className="link" to="/">Link 1</Link></p>
                <p><Link className="link" to="/">Link 2</Link></p>
                <p><Link className="link" to="/">Link 3</Link></p>
              </div>
            </li>
            <li>
              <button id='pricing'>Pricing</button>
            </li>

          </ul>
          <ul className="right_nav">
            <li>
              <button id="search">
                <img id="search_icon" src="https://i.ibb.co/64jNbzD/thin-finder.png"/>
                Search
              </button>
            </li>
            <li>
              <button id="upload">
                <img src="https://image.flaticon.com/icons/svg/20/20829.svg"/> Upload
              </button>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Nav;