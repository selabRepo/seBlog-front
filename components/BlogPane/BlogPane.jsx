import React, { Component } from 'react';
import './BlogPane.scss';
import Editor from 'rich-markdown-editor'
import { connect } from 'react-redux'
import axios from 'axios'
import { addBlogText, addBlogTitle } from '../../ducks/blog';
import { blogSave } from '../../ducks/event';

class BlogPane extends Component {
    constructor(props) {
        super()
        this.state = {
            codeState: null,
            isDark: true,
            title: null,
        }
        this.text = null
        this.title = null
    }

    updateCodeState = (value) => {

        const codeState = value()
        this.text = codeState
    }

    uploadImage = async file => {
        const data = new FormData()
        data.append('file', file, file.name)

        const resultUrl = await axios.post('/fileUpload',data)
        return `/${resultUrl.data.replace('uploadImageFile','upload')}`
    }

    handleTitleChange = evt => {
        this.title = evt.target.value
    }

    handleBlogText = () => {
        this.props.addBlogText(this.text)
    }

    handleBlogTitle = () => {
        this.props.addBlogTitle(this.title)
    }

    render() {
        return (
            <div className="editor-pane">
                <input 
                    className="title" 
                    placeholder="제목 입력" 
                    name="title" 
                    onChange={this.handleTitleChange}
                    onBlur={this.handleBlogTitle}/>
                <Editor
                    id={"markdownEditor"}
                    onChange={this.updateCodeState}
                    dark={false}
                    uploadImage={this.uploadImage}
                    onBlur={this.handleBlogText}
                    toc
                />
            </div>
        );
    }
}

const mapStateToProps = state => ({
});
  
  // props 로 넣어줄 액션 생성함수
const mapDispatchToProps = dispatch => ({
    addBlogTitle: (title) => dispatch(addBlogTitle(title)),
    addBlogText: (text) => dispatch(addBlogText(text)),
    blogSave: (isSave) => dispatch(blogSave(isSave)),
});

export default connect(mapStateToProps,mapDispatchToProps)(BlogPane);