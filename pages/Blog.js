import React from 'react'
import dynamic from 'next/dynamic'


const BlogPost = dynamic(
    () => import('../components/BlogPost'),
    { loading: () => <p>Loading...</p> }
)

const Blog = ({dataPost}) => {
    return (
        <div className="lg:px-24 flex flex-col">
            <h1 className="mt-28 mx-auto md:mx-6 mb-11 font-bold text-6xl">All Post</h1>
            <div className="flex flex-col">
                {
                    dataPost && dataPost.map(post => (
                        <div key={post.id} >
                            <BlogPost post={post}  />
                            <hr className="mt-6" />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export async function getStaticProps() {
    const res = await fetch(`https://strapi-blog-contoh.herokuapp.com/Posts?_sort=id:desc`)
    const dataPost = await res.json()

    return {
        props: { dataPost }
    }

}

export default Blog
