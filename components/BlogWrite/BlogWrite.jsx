import React from 'react'
import BlogWriteTemplate from './BlogWriteTemplate'
import Header from './Header'
import BlogPane from './BlogPane'
import BlogCategorySelect from '../BlogCategorySelect'
import BlogWriteNotifications from '../BlogWriteNotifications'
import { connect } from 'react-redux'
import { initAllEvent } from '../../ducks/event'

class BlogWrite extends React.Component {
  render() {
    return (
      <BlogWriteTemplate
        notifications={<BlogWriteNotifications />}
        header={<Header />}
        editor={<BlogPane />}
        categorySelect={<BlogCategorySelect />}
      />
    )
  }

  componentWillUnmount() {
    this.props.initAllEvent()
  }
}

export default connect(
  state => ({}),
  dispatch => ({
    initAllEvent: () => dispatch(initAllEvent()),
  }),
)(BlogWrite)
