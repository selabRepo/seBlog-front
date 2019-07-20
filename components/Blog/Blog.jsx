import Link from 'next/Link'
import React from 'react'

const Blog = ({}) => {
  return (
    <div>
      data
      <Link href={'/blog/write'}>
        <button>WriteButton Page</button>
      </Link>
    </div>
  )
}

export default Blog
