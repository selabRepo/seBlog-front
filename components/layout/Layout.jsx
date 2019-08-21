import React, { Component } from 'react'
import Header from '../Header'
import Menu from '../Menu'
import './_Layout.scss'
import ScrollButton from '../ScrollButton'
import ImageSlider from '../ImageSlider/ImageSlider';

const Layout = ({ children }) => {
  return (
    <div className="App">
      <Header />
      <Menu />
      {children}
      <ScrollButton />
    </div>
  )
}
export default Layout
