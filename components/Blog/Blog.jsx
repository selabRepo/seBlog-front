<<<<<<< HEAD
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
=======
import Link from "next/link";
import React from "react";
import BlogList from "../BlogList";

const Blog = ({}) => {
    return (
        <div>
            <Link href={"/blog/write"}>
                <button>
                    WriteButton Page
                </button>
            </Link>
            <BlogList/>
        </div>
    )
>>>>>>> feature/STF-8-BlogList
}

export default Blog
