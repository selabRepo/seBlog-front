import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import './BlogOverview.scss'

const BlogOverview = ({ contents }) => {
  return (
    <div className = "BlogList-overview">
      <div className = "BlogList-overview-image">
      <Link as={`/blog/${contents.id}`} href={`/blog/blogDetail?blogNo=${contents.id}`}>
        <img className="img-fluid" src="http://localhost:3000/upload/1111.png" width="100%" alt="" />
      </Link>
      </div>
      <div className = "white-mask"></div>
      <div className = "BlogList-overview-title">
        {contents.title}
      </div>
      <div className = "BlogList-overview-made">
        <p>
          by{' '}
            <a href="#!" className="font-weight-bold">
              {contents.createdBy}
            </a>
            , {contents.createdDate}
        </p>
      </div>
      <div className = "BlogList-Overview-more">
        
      </div>
    </div>
  )
}

BlogOverview.propTypes = {
  data: PropTypes.string,
}

export default BlogOverview
