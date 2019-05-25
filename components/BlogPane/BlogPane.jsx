import React, { Component } from 'react';
import './BlogPane.scss';

class BlogPane extends Component {
    render() {
        return (
            <div className="editor-pane">
                <input className="title" placeholder="제목 입력" name="title" />
                <div className="code-editor"></div>
            </div>
        );
    }
}

export default BlogPane;