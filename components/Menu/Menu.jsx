import React, { Component } from 'react'
import './_Menu.scss'
import Link from 'next/Link'

class Menu extends Component {
  render() {
    return (
      <nav className="menu">
        <div className="MainMenu">
          <div className="logo">
            <Link href="/">
              <a className="name">SE Blog</a>
            </Link>
          </div>
          <div className="menuList">
            <Link href="/about" activeClassName = "active">
              <a>About</a>
            </Link>
            <Link href="/blog" activeClassName = "active">
              <a>Blog</a>
            </Link>
            <a href="/">Setting</a>
          </div>
        </div>
      </nav>
    )
  }
}

export default Menu
