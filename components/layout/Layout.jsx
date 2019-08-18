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
      <section className="content">
        <h1> 안녕하세요. </h1>
      </section>
    </div>
  )
}
export default Layout
