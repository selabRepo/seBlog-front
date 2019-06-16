import React, { Component } from 'react';
import './BlogPane.scss';
import Editor from 'rich-markdown-editor'
import { connect } from 'react-redux'
import axios from 'axios'
import { debounce } from 'lodash'
import { addBlogText, addBlogTitleAndText } from '../../ducks/blog';
import { blogSave } from '../../ducks/event';

class BlogPane extends Component {
    constructor() {
        super()
        this.state = {
            codeState: null,
            isDark: true,
            title: null,
        }
        this.updateCodeState = debounce(this.updateCodeState, 500)
    }

    updateCodeState = (value) => {

        const codeState = value()
        this.setState({
            codeState
        })
    }

    uploadImage = async file => {
        const data = new FormData()
        data.append('file', file, file.name)

        const resultUrl = await axios.post('/fileUpload',data)
        return `/${resultUrl.data.replace('uploadImageFile','upload')}`
    }

    handleTitleChange = evt => {

        console.log(evt.target.value)
        this.setState({
            title: evt.target.value,
        })
        // this.props.addBlogTitle(evt.target.value)
    }

    componentDidUpdate() {
        const { blogSave } = this.props.event
        const { codeState, title } = this.state
        if (blogSave) {
            this.props.addBlogTitleAndText(codeState, title)
            this.props.blogSave(false)
        }
    }

    render() {
        console.log(this.state.codeState)
        return (
            <div className="editor-pane">
                <input className="title" placeholder="제목 입력" name="title" onChange={this.handleTitleChange}/>
                <Editor
                    id={"markdownEditor"}
                    onChange={this.updateCodeState}
                    dark={false}
                    uploadImage={this.uploadImage}
                    toc
                />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    event: state.event,
});
  
  // props 로 넣어줄 액션 생성함수
const mapDispatchToProps = dispatch => ({
    addBlogTitleAndText: (title, text) => dispatch(addBlogTitleAndText(title, text)),
    blogSave: (isSave) => dispatch(blogSave(isSave)),
});

export default connect(mapStateToProps,mapDispatchToProps)(BlogPane);