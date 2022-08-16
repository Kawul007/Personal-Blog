import React from 'react'
import Announcement from '../components/Announcement'
import BlogContent from '../components/BlogContent'
import FixedBar from '../components/FixedBar'
import FooterPagination from '../components/FooterPagination'

const BlogDetails = () => {
  return (
    <div>
        <FixedBar/>
        <Announcement />
        <BlogContent />
        <FooterPagination />
    </div>
  )
}

export default BlogDetails