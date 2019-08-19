import React, { Component } from 'react'
import Header from '../Header'
import Menu from '../Menu'
import './_Layout.scss'

const Layout = ({ children }) => {
  return (
    <div className="App">
      <Header />
      <Menu />
      {children}
    </div>
  )
}
export default Layout
