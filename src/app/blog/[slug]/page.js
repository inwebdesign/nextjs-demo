import Card from '@/components/card/Card'
// import { getSinglePost } from '@/app/lib/data'

const getSinglePost = async (slug) => {
  try {
    const post = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/blog/${slug}`)
    if(!post) throw new Error("No post found")
    return post.json()
  } catch (error) {
    console.log(error)
  }
}

const SingleBlog = async ({params}) => {
  const {slug} = params
  const singlePost = await getSinglePost(slug)
  const {title, desc, image} = singlePost
  return  <>{singlePost && (<Card title={title} desc={desc} image={image}/>)}</>  
  
}

export default SingleBlog