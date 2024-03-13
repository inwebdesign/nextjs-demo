import Card from '@/components/card/Card'
import styles from './Blog.module.css'

const getPosts = async () => {
  try {
    const posts = await fetch(`${process.env.BASE_URL}/api/blog`)
    if(!posts) throw new Error('No posts found')
    return posts.json()
  } catch (error) {
    console.log(error)
  }
}


const Blog = async () => {

// const posts = await getPosts()
const posts = await getPosts()

  return (
    <div className={styles.blog}>
      {posts?.map(({title, desc, image, slug}) => <Card title={title} desc={desc} image={image} slug={slug} key={title}/>)}
    </div>
  )
}

export default Blog