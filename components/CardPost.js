import React from 'react'
import Link from 'next/link'
import Markdown from 'markdown-to-jsx'

const CardPost = ({post}) => {
    const date = new Date(post.published_at)
    let formatDate = new Intl.DateTimeFormat('id', { dateStyle: 'medium' }).format(date)
    const author = post.users_permissions_user.username
    const img = `https://strapi-blog-contoh.herokuapp.com${post.thumbnail_img.url}`
    return (
        <div className="container border rounded-md shadow-md">
            <div className="flex flex-col">
                <div className="bg-cover h-48 2xl:h-96 rounded-tr-md rounded-tl-md" style={{backgroundImage: `url(${img})`}}></div>
                <div className="flex flex-col text-justify p-8">
                    <div className="text-gray-400 flex flex-row justify-between">
                        <p>{formatDate}</p>
                        <p>{author}</p>
                    </div>
                    <h1 className="font-bold text-2xl overflow-ellipsis overflow-hidden md:truncate md:w-full">{post.titles}</h1>
                    <Markdown className="text-gray-400 line-clamp-3 h-12 md:w-full">{post.content}</Markdown>
                    <Link href={`/Blog/${post.slug}`}>
                        <a className="hover:text-gray-700 py-3 font-bold text-right">Read More</a>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default CardPost
