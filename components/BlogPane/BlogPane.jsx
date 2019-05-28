import React, { Component } from 'react';
import './BlogPane.scss';

import Editor from 'rich-markdown-editor'

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

    render() {
        return (
            <div className="editor-pane">
                <input className="title" placeholder="제목 입력" name="title" />
                <Editor
                    id={"markdownEditor"}
                    onChange={this.updateCodeState}
                    dark={this.state.isDark}
                    toc
                />
            </div>
        );
    }
}

export default BlogPane;