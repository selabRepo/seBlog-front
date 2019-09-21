import App from 'next/app'
import React from 'react'
import { Provider } from 'react-redux'
import store from '../store'
import Router from 'next/router'

export default class MyApp extends App {
  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles)
    }

    Router.events.on('routeChangeComplete', () => {
      if (process.env.NODE_ENV !== 'production') {
        const els = document.querySelectorAll('link[href*="/_next/static/css/styles.chunk.css"]')
        const timestamp = new Date().valueOf()
        els[0].href = '/_next/static/css/styles.chunk.css?v=' + timestamp
      }
    })
  }
  render() {
    const { Component, pageProps } = this.props
    return (
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    )
  }
}
