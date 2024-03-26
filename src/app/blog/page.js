'use client'
import Card from '@/components/card/Card'
import styles from './Blog.module.css'
import axios from 'axios'
import { useEffect, useState } from 'react'

// const getPosts = async () => {
//   try {
//     const url = 'http://127.0.0.1:3000'
//     const posts = await fetch(`${process.env.NEXT_PUBLIC_API_URL || url}/api/blog`)
//     if(!posts) throw new Error('No posts found')
//     return posts.json()
//   } catch (error) {
//     console.log(error)
//   }
// }
// const getPosts = async () => {
//   const url = 'http://127.0.0.1:3000'
//   await axios.get(`${url}/api/blog`).then(response => {
//     // if(!response) {
//     //   throw new Error('No posts found')
//     // }
//     console.log(response.data)
//     return response.data
//   }).catch((err) => console.error(err)) 
// }



const Blog = () => {
  const [posts, setPosts] = useState([])
  const url = process.env.NEXT_PUBLIC_API_URL
  useEffect(() => {
    axios.get(`${url}/api/blog`)
      .then(function (response) { 
        setPosts(response.data);
        return posts
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
// const posts = await getPosts()
// const posts = await getPosts()
// console.log(posts)
  return (
    <div className={styles.blog}>
      {posts?.map(({title, desc, image, slug}) => <Card title={title} desc={desc} image={image} slug={slug} key={title}/>)}
    </div>
  )
}

export default Blog