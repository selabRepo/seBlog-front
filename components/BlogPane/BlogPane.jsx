import React, { Component } from 'react';
import './BlogPane.scss';

import Editor from 'rich-markdown-editor'
import axios from 'axios'

class BlogPane extends Component {
    constructor() {
        super()
        this.state = {
            codeState: null,
            isDark: true
        }
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


    render() {
        return (
            <div className="editor-pane">
                <input className="title" placeholder="제목 입력" name="title" />
                <Editor
                    id={"markdownEditor"}
                    onChange={this.updateCodeState}
                    dark={this.state.isDark}
                    uploadImage={this.uploadImage}
                    toc
                />
            </div>
        );
    }
}

export default BlogPane;