import React, { Component } from 'react';
import './BlogWriteTemplate.scss';
import { MDBContainer, MDBNotification } from 'mdbreact'
import PropTypes from 'prop-types'

class BlogWriteTemplate extends Component {

    render() {
        const { header, editor, categorySelect, notifications } = this.props;

        return (
            <>
            {notifications}
            <div className="editor-template">
            
                {header}
                <div className={"pane"}>
                    {categorySelect}
                </div>
                <div className="pane editor">
                    {editor}
                </div>
            </div>
            </>
        );
    }
}

BlogWriteTemplate.propTypes = {
    header: PropTypes.any,
    editor: PropTypes.any,
    categorySelect: PropTypes.any,
}

export default BlogWriteTemplate;