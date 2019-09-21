import React, { Component } from 'react'
import ReactMarkDown from 'react-markdown'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as blogAction from '../../ducks/blog'
import PropTypes from 'prop-types'
import BlogCodeBlock from './BlogCodeBlock'
import BlogDetailTitle from '../BlogDetailTitle'
import './_BlogDetail.scss'
class BlogDetail extends Component {
  async componentDidMount() {
    const { BlogActions, blog } = this.props
    await BlogActions.getBlogDetail(this.props.blogNo)
    // BlogActions.updateBlogDetail(this.)
  }

  componentDidUpdate(prevProps, prevState) {
    const { BlogActions, blog } = this.props

    if (prevProps.blog !== blog && blog.id !== prevProps.blog.id) {
      const updateBlogDetail = { ...blog }
      updateBlogDetail.hits += 1
      BlogActions.updateBlogDetail(updateBlogDetail)
    }
  }
  render() {
    const { blog } = this.props
    const { title, id, updatedDate, hits } = blog
    return (
      <div className="contents">
        <BlogDetailTitle {...{ title, id, hits }} date={updatedDate} />
        {blog && blog.content && <ReactMarkDown source={blog.content} renderers={{ code: BlogCodeBlock }} />}
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
    BlogActions: bindActionCreators(blogAction, dispatch),
  }),
)(BlogDetail)
