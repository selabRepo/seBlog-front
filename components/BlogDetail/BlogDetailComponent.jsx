import React, { Component } from 'react'
import ReactMarkDown from 'react-markdown'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as blogAction from '../../ducks/blog'
import PropTypes from 'prop-types'
import BlogCodeBlock from './BlogCodeBlock'
import { Container } from '@material-ui/core'
class BlogDetail extends Component {
  componentDidMount(prevProps, prevState) {
    this.props.BlogAction.getBlogDetail(this.props.blogNo)
  }
  componentDidUpdate(prevProps, prevState) {
    console.log(this.props.blog.content)
  }
  render() {
    const { blog } = this.props
    return (
      <Container>
        {blog && blog.content && <ReactMarkDown source={blog.content} renderers={{ code: BlogCodeBlock }} />}
      </Container>
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
