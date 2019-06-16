import React from 'react'
import Container from '@material-ui/core/Container'
import BlogWriteTemplate from "./BlogWriteTemplate";
import BlogWriteHeader from "./BlogWriteHeader";
import BlogPane from '../BlogPane'
import BlogCategorySelect from "../BlogCategorySelect/BlogCategorySelect";

const BlogWrite = ({}) => {
    return (
        <Container>
            <BlogWriteTemplate
                header={<BlogWriteHeader/>}
                editor={<BlogPane/>}
                categorySelect={<BlogCategorySelect/>}
                />
        </Container>
    )
}

export default BlogWrite