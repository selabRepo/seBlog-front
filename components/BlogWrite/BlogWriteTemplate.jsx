import React, { Component } from 'react';
import './BlogWriteTemplate.scss';
import PropTypes from 'prop-types'

class BlogWriteTemplate extends Component {

    render() {
        const { header, editor, categorySelect } = this.props;

        return (
            <div className="editor-template">
                {header}
                <div className={"pane"}>
                    {categorySelect}
                </div>
                <div className="pane editor">
                    {editor}
                </div>
            </div>
        );
    }
}
BlogWriteTemplate.propTypes = {
    header: PropTypes.any,
    editor: PropTypes.any,
    categorySelect: PropTypes.any,
}

export default BlogWriteTemplate;