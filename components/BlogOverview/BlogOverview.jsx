import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import './_BlogOverview.scss'

const BlogOverview = ({ contents }) => {

  return (
    <Link as={`/blog/${contents.id}`} href={`/blog/blogDetail?blogNo=${contents.id}`}>
      <div className="blogOverview-list">
        <div className="blogOverview-list-contents">
          <div className = "blogOverview-list-top">
            <div className = "blogOverview-list-title">
              <h2>
                {contents.title}
              </h2>
            </div> 
            <div className="blogOverview-list-writer">
              <a className="userImage">
                <img src="/upload/user.png" alt="" width="50px;" />
              </a>
              <div className="userName">
                <h3 className="name">by {contents.createdBy}</h3>
                <p className="date">{contents.createdDate}</p>
              </div>
            </div>
          </div>

          <div className = "blogOverview-list-postView">
            <Link as={`/blog/${contents.id}`} href={`/blog/blogDetail?blogNo=${contents.id}`}>
              <img className="img-fluid" src="http://localhost:3000/upload/1111.png" width="100%" alt="" />
            </Link>
          </div>
          <div className = "blogOverview-list-bottom">
            <h2>
              {contents.title}
            </h2>
          </div>
        </div>
      </div>
    </Link>
  )
}

BlogOverview.propTypes = {
  contents: PropTypes.object,
}

export default BlogOverview
