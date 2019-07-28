import React, { Component } from 'react'
import './BlogPane.scss'
import Editor from 'rich-markdown-editor'
import { connect } from 'react-redux'
import axios from 'axios'
import * as blogActions from '../../ducks/blog'
import { blogSave } from '../../ducks/event'
import { bindActionCreators } from 'redux'

class BlogPane extends Component {
  constructor(props) {
    super()
    this.state = {
      codeState: null,
      isDark: true,
      title: null,
    }
    this.content = null
    this.title = null
  }

  handleUpdateContent = value => {
    const codeState = value()
    this.content = codeState
  }

  uploadImage = async file => {
    const data = new FormData()
    data.append('file', file, file.name)

    const resultUrl = await axios.post('/fileUpload', data)
    return `/${resultUrl.data.replace('uploadImageFile', 'upload')}`
  }

  handleTitleChange = evt => {
    this.title = evt.target.value
  }

  handleBlurBlogContent = () => {
    const { BlogActions } = this.props
    BlogActions.addBlogContent(this.content)
  }

  handleBlurBlogTitle = () => {
    const { BlogActions } = this.props
    BlogActions.addBlogTitle(this.title)
  }

  render() {
    return (
      <div className="editor-pane">
        <input
          className="title"
          placeholder="제목 입력"
          name="title"
          onChange={this.handleTitleChange}
          onBlur={this.handleBlurBlogTitle}
        />
        <Editor
          id={'markdownEditor'}
          onChange={this.handleUpdateContent}
          dark={false}
          uploadImage={this.uploadImage}
          onBlur={this.handleBlurBlogContent}
          toc
        />
      </div>
    )
  }
}
export default connect(
  state => ({}),
  dispatch => ({
    BlogActions: bindActionCreators(blogActions, dispatch),
    blogSave: isSave => dispatch(blogSave(isSave)),
  }),
)(BlogPane)
