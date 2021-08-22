import Markdown from 'markdown-to-jsx'

export default function Post({ viewPost }) {
    const {users_permissions_user: {username}, published_at, thumbnail_img: {url}, titles, content, textThumbnail } = viewPost
    const date = new Date(published_at)
    const formatDate = new Intl.DateTimeFormat('id', { dateStyle: 'full' }).format(date)
    const author = username
    const image = `https://strapi-blog-contoh.herokuapp.com${url}`
    return(
        <div className="container"> 
            <div className="flex flex-col px-8 xl:px-24">
                <div className="mt-28 text-gray-400 flex flex-row justify-between mb-2">
                    <p>{formatDate}</p>
                    <p>{author}</p>
                </div>
                <div className="pb-3">
                    <h1 className="font-bold text-4xl lg:text-6xl">{titles}</h1>
                </div>
                <div className="text-center mb-2">
                    <div className="bg-cover bg-no-repeat h-96 2xl:h-96 rounded-md" style={{ backgroundImage: `url(${image})` }}></div>
                    <p className="text-gray-400 py-3">{textThumbnail}</p>
                </div>
                <div className="flex flex-col px-2 leading-7">
                    <Markdown options={{
                        wrapper: 'article',
                        overrides: {
                            a: {
                                props: {
                                    className: 'underline'
                                }
                            },
                            ol: {
                                props: {
                                    className: 'list-decimal pl-5'
                                }
                            },
                            strong: {
                                props: {
                                    className: 'text-xl'
                                }
                            },
                            ul: {
                                props: {
                                    className: 'pl-5 list-disc'
                                }
                            },
                            h3: {
                                props: {
                                    className: 'text-3xl'
                                }
                            }
                        }
                    }} >{content}</Markdown>
                </div>
            </div>
        </div>
    )
}

// get path blog post with static generation
export async function getStaticPaths() {
    const res = await fetch('https://strapi-blog-contoh.herokuapp.com/Posts')
    const posts = await res.json()
    const paths = posts.map(post => ({
        params: { slug: post.slug }
    }))
    return {
        paths,
        fallback: true
    }
}


// get view post on page with server side rendering
export async function getStaticProps({ params }) {
    const { slug } = params
    const res = await fetch(`https://strapi-blog-contoh.herokuapp.com/Posts?slug=${slug}`)
    const data = await res.json()
    const viewPost = data[0]
    return {
        props: { viewPost }
    }

}