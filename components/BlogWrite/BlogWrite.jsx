import React from 'react'
import Container from '@material-ui/core/Container'
import BlogWriteTemplate from "./BlogWriteTemplate";
import BlogWriteHeader from "./BlogWriteHeader";

const BlogWrite = ({}) => {
    return (
        <Container maxWidthXs fixed>
            <BlogWriteTemplate
                header={<BlogWriteHeader/>}
                editor={"editor"}
                preview={"preview"}/>
        </Container>
    )
}

export default BlogWrite