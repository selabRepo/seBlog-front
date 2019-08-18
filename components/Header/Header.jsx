import React, { Component } from 'react'
import './_Header.scss'

class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="Mainheader">
          <div className="info">
            <a href="/" className="page">
              <img src={'/upload/user.png'} alt="user" className="img" />
            </a>
          </div>
        </div>
      </header>
    )
  }
}

export default Header
