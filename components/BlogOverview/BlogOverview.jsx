import React from 'react'
import PropTypes from 'prop-types'
import { MDBRow, MDBCol, MDBView, MDBMask, MDBBtn } from 'mdbreact'
import Link from 'next/link'

const BlogOverview = ({ contents }) => {
  return (
    <>
      <MDBRow>
        <MDBCol lg="5" xl="4">
          <MDBView hover className="rounded z-depth-1-half mb-lg-0 mb-4">
            <img className="img-fluid" src="http://localhost:3000/upload/1111.png" width="100%" alt="" />
            <a href="#!">
              <MDBMask overlay="white-slight" />
            </a>
          </MDBView>
        </MDBCol>
        <MDBCol lg="7" xl="8">
          <h3 className="font-weight-bold mb-3 p-0">
            <strong>{contents.title}</strong>
          </h3>

          <p>
            by{' '}
            <a href="#!" className="font-weight-bold">
              {contents.createdBy}
            </a>
            , {contents.createdDate}
          </p>
          <Link as={`/blog/${contents.id}`} href={`/blog/blogDetail?blogNo=${contents.id}`}>
            <MDBBtn color="primary" size="md">
              Read More
            </MDBBtn>
          </Link>
        </MDBCol>
      </MDBRow>
      <hr className="my-5" />
    </>
  )
}

BlogOverview.propTypes = {
  data: PropTypes.string,
}

export default BlogOverview
