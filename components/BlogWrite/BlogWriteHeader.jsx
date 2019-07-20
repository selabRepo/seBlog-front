import React, { Component } from 'react'
import { MDBBtn, MDBNotification, MDBContainer } from 'mdbreact'
import { connect } from 'react-redux'
import { blogSave, blogNotifyError } from '../../ducks/event'

class BlogWriteHeader extends Component {
  handleSave = evt => {
    evt.preventDefault()
    const { category, content, title } = this.props.blog
    if (!category || !content || !title) {
      this.props.blogNotifyError(true)
      return
    } else {
      // TODO: api Server로 전송
      this.props.blogNotifyError(false)
      //axios.post('/blog', JSON.stringify(this.props.blog))
    }
  }

  render() {
    return (
      <div>
        <MDBBtn color="primary">뒤로가기</MDBBtn>
        <MDBBtn
          color="primary"
          style={{ marginLeft: 20 }}
          onClick={this.handleSave}
        >
          저장하기
        </MDBBtn>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  blog: state.blog,
})

// props 로 넣어줄 액션 생성함수
const mapDispatchToProps = dispatch => ({
  blogNotifyError: isError => dispatch(blogNotifyError(isError)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BlogWriteHeader)
