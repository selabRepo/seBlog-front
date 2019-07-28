import React, { Component } from 'react'
import { MDBBtn, MDBNotification, MDBContainer } from 'mdbreact'
import { connect } from 'react-redux'
import { blogNotifyError } from '../../ducks/event'
import { bindActionCreators } from 'redux'
import * as blogActions from '../../ducks/blog'

class BlogWriteHeader extends Component {
  handleSave = evt => {
    evt.preventDefault()
    const { category, content, title } = this.props.blog
    if (!category || !content || !title) {
      this.props.blogNotifyError(true)
      return
    } else {
      const { blogNotifyError, BlogActions } = this.props

      blogNotifyError(false)
      BlogActions.postBlog({
        categoryID: category,
        content,
        title,
        createdBy: 'jyb',
      })
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { BlogActions, blog } = this.props
    const { isSuccess } = blog
    if (!prevProps.blog.isSuccess && isSuccess) {
      alert('게시물이 정상적으로 업로드 되었습니다.')
      BlogActions.initState()
      location.href = '/blog'
    }
  }

  render() {
    return (
      <div>
        <MDBBtn color="primary">뒤로가기</MDBBtn>
        <MDBBtn color="primary" style={{ marginLeft: 20 }} onClick={this.handleSave}>
          저장하기
        </MDBBtn>
      </div>
    )
  }
}

export default connect(
  state => ({
    blog: state.blog,
  }),
  dispatch => ({
    blogNotifyError: isError => dispatch(blogNotifyError(isError)),
    BlogActions: bindActionCreators(blogActions, dispatch),
  }),
)(BlogWriteHeader)
