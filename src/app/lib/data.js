import { Post, User } from "./models"
import { connectedToDb } from "./utils"


export const getPosts = async () => {
  try {
    await connectedToDb()
    const posts = await Post.find()
    if(!posts) throw new Error("No posts found!")
    return posts
  } catch (error) {
    console.log(error)
  }
}

export const getSinglePost = async (slug) => {
  try {
    await connectedToDb()
    const post = await Post.findOne({slug})
    if(!post) throw new Error('No post found!')
    console.log(post)
    return post
  } catch (error) {
    console.log(error)
  }
}

export const getUsersIDs = async () => {
  try {
    await connectedToDb()
    const users = await User.find()
    if(!users) throw new Error("No users Found!")
    const usersIds = users.map(user => user.id)
    console.log(usersIds)
    return usersIds
    
  } catch (error) {
    console.log(error)
  }
}