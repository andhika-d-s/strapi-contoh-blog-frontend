import React from 'react'
import Link from 'next/link'
import Markdown from 'markdown-to-jsx'

const BlogPost = ({post}) => {
    let date = new Date(post.published_at)
    let formatDate = new Intl.DateTimeFormat('id', { dateStyle: 'full' }).format(date)
    const author = post.users_permissions_user.username
    const image = `https://strapi-blog-contoh.herokuapp.com${post.thumbnail_img.url}`
    return (
        <div className="flex flex-col px-8 my-4 xl:px-24">
            <div className="text-gray-400 flex flex-row justify-between mb-2">
                <p>{formatDate}</p>
                <p>{author}</p>
            </div>
            <div className="text-center mb-2">
                <div className="bg-cover h-40 md:h-80 2xl:h-96 rounded-md" style={{ backgroundImage: `url(${image})` }}></div>
                <p className="text-gray-400 py-3">Source: {post.textThumbnail}</p>
            </div>
            <div className="flex flex-col px-2 ">
                <Link key={post.id} href={`/Blog/${post.slug}`}>
                    <a className="pb-3 font-bold text-4xl">{post.titles}</a>
                </Link>
                <Markdown className="line-clamp-4">{post.content}</Markdown>
                <Link href={`/Blog/${post.slug}`} >
                    <a className="py-3 font-bold text-right hover:text-gray-700">Read More</a>
                </Link>
            </div>
        </div>
    )
}

export default BlogPost
