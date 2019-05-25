import React from 'react'
import Container from '@material-ui/core/Container'
import BlogWriteTemplate from "./BlogWriteTemplate";
import BlogWriteHeader from "./BlogWriteHeader";
import BlogPane from '../BlogPane'
import BlogPreview from "../BlogPreview";

const BlogWrite = ({}) => {
    return (
            <BlogWriteTemplate
                header={<BlogWriteHeader/>}
                editor={<BlogPane/>}
                preview={<BlogPreview/>}/>
    )
}

export default BlogWrite