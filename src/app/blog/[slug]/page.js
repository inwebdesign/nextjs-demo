'use client'
import Card from '@/components/card/Card'
import axios from 'axios';
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react';
// import { getSinglePost } from '@/app/lib/data'

// const getSinglePost = async (slug) => {
  // try {
    //   const url = 'http://127.0.0.1:3000'
    //   const post = await fetch(`${process.env.NEXT_PUBLIC_API_URL || url}/api/blog/${slug}`)
    //   if(!post) throw new Error("No post found")
    //   return post.json()
    // } catch (error) {
      //   console.log(error)
      // }
    // }
    
    const SingleBlog = ({params}) => {
      const {slug} = params
      const [post, setPost] = useState(null)
      const url = process.env.NEXT_PUBLIC_API_URL
      useEffect(() => {
        axios.get(`${url}/api/blog/${slug}`)
        .then(function (response) { 
          setPost(response.data);
          return post
        })
        .catch(function (error) {
          console.log(error);
        });
      }, []);
  // const {slug} = params
  // const singlePost = await getSinglePost(slug)
  // const {title, desc, image} = singlePost
  return  <>{post && (<Card title={post?.title} desc={post?.desc} image={post?.image}/>)}</>  
  
}

export default SingleBlog