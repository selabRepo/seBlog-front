import Link from 'next/link'
import React from 'react'
import BlogList from '../BlogList'
import './_Blog.scss'

const Blog = ({}) => {
  return (
    <div className="Blog">
      <Link href={'/blog/write'}>
        <button>WriteButton Page</button>
      </Link>
      <BlogList />
    </div>
  )
}

export default Blog
