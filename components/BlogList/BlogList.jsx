import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BlogOverview from '../BlogOverview'
import { connect } from 'react-redux'
import * as blogListAction from '../../ducks/blogList'
import { bindActionCreators } from 'redux'
import InfiniteScroll from 'react-infinite-scroller';

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
      <div className="my-5 px-5 pb-5" style={{ flex: 3 }}>
        <div>
          <h2 className="h1-responsive font-weight-bold text-center my-5">블로그 포스팅</h2>
          <p className="text-center w-responsive mx-auto mb-5">SE 기술 블로그 내용</p>

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
