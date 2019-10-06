import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BlogOverview from '../BlogOverview'
import { connect } from 'react-redux'
import * as blogListAction from '../../ducks/blogList'
import { bindActionCreators } from 'redux'
import InfiniteScroll from 'react-infinite-scroller'
import { BLOG_PAGING } from '../../constants'
import './_BlogList.scss'
class BlogList extends React.Component {
  constructor(props) {
    super(props)
    this.page = 0
  }
  handleLoadMore = page => {
    const { BlogListAction, blogList } = this.props
    const { categoryID } = blogList.categoryID

    this.page += 1
    if (categoryID !== -1) {
      BlogListAction.getBlogListByCategory({ categoryID, page: this.page, size: BLOG_PAGING.SIZE })
    }
    BlogListAction.getBlogList({ page: this.page, size: BLOG_PAGING.SIZE })
  }
  componentDidMount(prevProps, prevState) {
    const { blogList, BlogListAction } = this.props
    if (blogList.content.length === 0) {
      BlogListAction.getBlogList({ page: BLOG_PAGING.PAGE, size: BLOG_PAGING.SIZE })
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.props.blogList.categoryID !== prevProps.blogList.categoryID) {
      this.page = 0
    }
  }
  shouldComponentUpdate(nextProps, nextState) {
    return (
      nextProps.blogList !== this.props.blogList || nextProps.blogList.categoryID !== this.props.blogList.categoryID
    )
  }

  render() {
    const { content, isMoreData } = this.props.blogList
    return (
      <div className="blogList" style={{ flex: 3 }}>
        <div className = "blogList-title">
          <h1 className="title">현재 등록되어 있는 게시글</h1>
        </div>
        <InfiniteScroll
          pageStart={0}
          loadMore={this.handleLoadMore}
          hasMore={isMoreData}
          loader={
            <div className="loader" key={0}>
              Loading ...
            </div>
          }
          initialLoad={false}
          className={'infinite'}
        >
          {content && content.map((contents, index) => <BlogOverview key={index} contents={contents} />)}
        </InfiniteScroll>
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
