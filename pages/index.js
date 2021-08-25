import Image from 'next/image'
import CardPost from '../components/CardPost'
import heroImage from '../public/svg/hero.svg'
import Link from 'next/link'
import {GitHub, Facebook, Instagram} from '@material-ui/icons'
import PrimaryButton from '../components/PrimaryButton'
import Markdown from 'markdown-to-jsx'
import {motion} from 'framer-motion'

const Hero = () => {
  const animation = {
    initial: {
      opacity: 0,
      y: 30
    },
    animated: {
      opacity: 1,
      y: 0
    }
  }

  return (
    <>
      <div className="flex flex-col">
        <motion.div 
        variants={animation}
        initial="initial"
        animate="animated"
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 60
        }}
        className="text-center font-bold">
          <h1 className="text-4xl md:text-7xl mt-28">My first Nextjs + Strapi <br /> Blog Project</h1>
        </motion.div>
        <div className="md:mt-16 mt-3 mx-auto p-10 md:p-0">
          <Image className="absolute -z-10" alt="hero-img" src={heroImage} width={600} />
        </div>
      </div>
    </>
  )
}

const BlogList = ({ data }) => {
  return (
    <div className="lg:px-24 px-4 flex flex-col">
      <div className="mb-16">
        <h1 className="text-5xl font-bold">Post</h1>
      </div>
      <div className=" md:mx-3 grid grid-rows-3 md:grid-rows-1 md:grid-cols-3 gap-7">
        {
          data && data.slice(0, 3).map(post => (
            <CardPost key={post.id} post={post} />
          ))
        }
      </div>
      <div className="py-10 text-center">
          <PrimaryButton link={`/Blog`} color={`hover:border-black`} className="hover:text-gray-700">See More</PrimaryButton>
      </div>
    </div>
  )
}

const NewPost = ({ data }) => {
  const author = data[0].users_permissions_user.username
  const img = `https://strapi-blog-contoh.herokuapp.com${data[0].thumbnail_img.url}`
  const date = new Date(data[0].published_at)
  let formatDate = new Intl.DateTimeFormat('id', { dateStyle: 'full' }).format(date)
  return (
    <>
      <div className="lg:px-24 px-4 my-12">
        <div className="flex flex-col">
          <div className="mb-16">
            <h1 className="text-5xl font-bold">New Post</h1>
          </div>
          <div className="mx-3 flex flex-col lg:flex-row align-middle border shadow-md rounded-md mb-16">
            <div className="lg:order-2 bg-cover border-l-2 h-72 lg:h-auto lg:w-full rounded-tr-md rounded-tl-md lg:rounded-tl-none lg:rounded-br-md " style={{ backgroundImage: `url(${img})` }}></div>
            <div className="flex flex-col p-8 xl:p-16 w-5/6">
              <div className="text-gray-400 flex flex-row justify-between">
                <p>{formatDate}</p>
                <p>{author}</p>
              </div>
              <h1 className="font-bold text-2xl">{data[0].titles}</h1>
              <div className="text-gray-400 line-clamp-3  mt-5">
                <Markdown >
                  {data[0].content}
                </Markdown>
              </div>
              <Link href={`/Blog/${data[0].slug}`}>
                <a className="hover:text-gray-700 mt-6 font-bold text-right">Read More</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

const AboutUs = () => {
  return (
    <div className="py-12 bg-gray-600 text-white">
      <div className="lg:px-24 flex flex-col px-12">
        <div className="mb-12">
          <h1 className="text-5xl font-bold">About Us</h1>
        </div>
        <div className="text-justify ">
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae blanditiis asperiores earum quidem corrupti voluptatum nesciunt. Necessitatibus odio, earum veniam aliquam eaque, iusto dolores sint officiis recusandae iste, ut provident!</p>
        </div>
          <PrimaryButton link={`/About`} color={`hover:border-white`} className="hover:text-gray-300" >Read More</PrimaryButton>
      </div>
    </div>
  )
}

const SocialMedia = () => {
  return (
    <>
      <div className="mx-auto py-16 px-2 md:py-20 md:px-36">
        <div className="flex flex-col text-center">
          <h1 className="font-bold py-12 text-6xl">Follow my social media</h1>
          <p className="font-semibold text-xl">Follow me on social and never miss a post from this blog. Only original content and minimalist views, shared daily on social.</p>
          <div className="flex flex-row py-7 mx-auto">
            <a className="hover:text-gray-300 px-5" href="https://github.com/andhika-d-s">
              <GitHub style={{fontSize: '50px'}} />
            </a>
            <a className="hover:text-gray-300 px-5" href="#">
              <Facebook style={{fontSize: '55px'}} />
            </a>
            <a className="hover:text-gray-300 px-5" href="#">
              <Instagram style={{fontSize: '55px'}} />
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default function Home({ post }) {
  return (
    <div>
      <div className="flex flex-col">
        <Hero />
        <NewPost data={post} />
        <BlogList data={post} />
        <AboutUs />
        <SocialMedia />
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetch(`https://strapi-blog-contoh.herokuapp.com/Posts?_sort=id:desc`)
  const post = await res.json()

  return {
    props: { post }
  }

}