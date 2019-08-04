import React, { Component } from 'react'
import ReactMarkDown from 'react-markdown'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as blogAction from '../../ducks/blog'
import PropTypes from 'prop-types'
class BlogDetail extends Component {
  componentDidMount(prevProps, prevState) {
    this.props.BlogAction.getBlogDetail(this.props.blogNo)
  }
  render() {
    return (
      <div>
        <ReactMarkDown source={(this.props.blog && this.props.blog.content) || ''} />
      </div>
    )
  }
}
BlogDetail.propTypes = {
  blogNo: PropTypes.string,
}
export default connect(
  state => ({
    blog: state.blog,
  }),
  dispatch => ({
    BlogAction: bindActionCreators(blogAction, dispatch),
  }),
)(BlogDetail)
