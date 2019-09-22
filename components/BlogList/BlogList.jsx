import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BlogOverview from '../BlogOverview'
import { connect } from 'react-redux'
import * as blogListAction from '../../ducks/blogList'
import { bindActionCreators } from 'redux'
import InfiniteScroll from 'react-infinite-scroller';
import './BlogList.scss';


class BlogList extends Component {
  componentDidMount(prevProps, prevState) {
    const { blogList, BlogListAction } = this.props
    if (blogList.content.length === 0) {
      BlogListAction.getBlogList({})
    }
  }

  componentDidUpdate(prevProps, prevState) {}
  render() {
    const { content } = this.props.blogList
    return (
      <div className="BlogList">
        <div className = "BlogList-header">
          블로그 포스팅
        </div>
        <div className = "BlogList-contents">          
          {content && content.map((contents, index) => <BlogOverview key={index} contents={contents} />)}
        </div> 
      </div>
    )
  }
}
BlogList.propTypes = {
  blogList: PropTypes.object,
  BlogActions: PropTypes.object,
}
export default connect(
  state => ({
    blogList: state.blogList,
  }),
  dispatch => ({
    BlogListAction: bindActionCreators(blogListAction, dispatch),
  }),
)(BlogList)
