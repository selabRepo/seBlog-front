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
}

export default Blog