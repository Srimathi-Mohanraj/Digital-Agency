import React from 'react'
import BlogCard from './BlogCard'
import Img1 from "../../assets/Blog/blog1--EIP62uX.png"
import Img2 from "../../assets/Blog/blog2-0PRuA5k5.png"
import Img3 from "../../assets/Blog/blog3-JVmAWpWZ.png"

const BlogsData = [
  {
    id: 1,
    image: Img1,
    title: "Realtime analytics",
    description: "“The results have been incredible. With Power Digital, it feels like they’re in our trench, supporting and understanding us. They’re like a partner and mentor in helping us get where we want to be. “The results have been incredible.",
    author: "Mark Needham",
    date: "Jun 22, 2021",
  },
  {
    id: 2,
    image: Img2,
    title: "Realtime analytics",
    description: "“The results have been incredible. With Power Digital, it feels like they’re in our trench, supporting and understanding us. They’re like a partner and mentor in helping us get where we want to be. “The results have been incredible.",
    author: "Mark Needham",
    date: "Jun 22, 2021",

  },
  {
    id: 3,
    image: Img3,
    title: "Realtime analytics",
    description: "“The results have been incredible. With Power Digital, it feels like they’re in our trench, supporting and understanding us. They’re like a partner and mentor in helping us get where we want to be. “The results have been incredible.",
    author: "Mark Needham",
    date: "Jun 22, 2021",
  },
]

const Blogcomp = () => {

  return (
    <>
      <div className='bg-blue-200 pb-14 py-10'>
        <div className='container'>
          <h1 className='my-8 border-l-8 border-blue-500 pl-2 py-2 text-3xl font-semibold'>Our Blogs</h1>
          {/* BLogs card */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {BlogsData.map((blog) => (
              <BlogCard key={blog.id} {...blog} />
            ))}
          </div>
          <div className='text-center'>
            <button className='btn-primary'>View All Post</button>
          </div>

        </div>

      </div>

    </>

  )
}

export default Blogcomp