import { revalidatePath } from "next/cache"
import { Post, User } from "./models"
import { connectedToDb } from "./utils"
import { signIn, signOut } from "./auth"
import bcrypt from 'bcryptjs'

export const createPost = async (formData) => {
  'use server'
  try {
    await connectedToDb()
    const {title, desc, userId, image, slug} = Object.fromEntries(formData)
    const newPost = new Post({
      title,
      desc,
      userId,
      image,
      slug
    })
    console.log(newPost)
    await newPost.save()
    revalidatePath('/blog')
    revalidatePath('/admin')
    console.log("Post successfully saved to db!")

  } catch (error) {
    console.error(error)
  }
}

export const createUser = async (formData) => {
  'use server'
  try {
    const {username, email, password} = Object.fromEntries(formData)
    await connectedToDb()

    const userByName = await User.findOne({username})
    const userByEmail = await User.findOne({email})
    if(userByName || userByEmail) throw new Error("User already exist!")

    const newUser = new User({
      username,
      email,
      password
    })

    console.log(newUser)
    await newUser.save()
    revalidatePath('/admin')
    console.log('New user saved to db!')

  } catch (error) {
    console.error(error)
  }
}

export const deleteUser = async (formData) => {
  'use server'
  try {
    const {userId} = Object.fromEntries(formData)
    await connectedToDb()
    await User.deleteOne({_id: userId})
    await Post.deleteMany({userId})
    revalidatePath('/admin')
    revalidatePath('/blog')
    console.log("User successfully deleted from the db!")

  } catch (error) {
    console.log(error)
  }
}
export const deletePost = async (formData) => {
  'use server'
  try {
    const {title} = Object.fromEntries(formData)
    await connectedToDb()
    await Post.deleteOne({title})
    revalidatePath('/admin')
    revalidatePath('/blog')
    console.log("Post successfully deleted from the db!")

  } catch (error) {
    console.log(error)
  }
}

export const registerNewUser = async (prevState, formData) => {
  'use server'
  const {username, email, password, password_verify} = Object.fromEntries(formData)
  if(password !== password_verify) return {error: "Passwords are not matched!"}
  try {
    await connectedToDb()
    const user = await User.findOne({username})
    if(user) return {error: "User already exists!"}
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)
    const newUser = new User({
      username,
      email,
      password: hashedPassword
    })
    await newUser.save()
    return {success: true}
  } catch (error) {
    console.log(error)
    return {error: error.message}
  }
}

export const loginWithCredentials = async (prevState, formData) => {
  'use server'
  try {
    const {username, password} = Object.fromEntries(formData)
    await signIn('credentials', {username, password})
  } catch(error) {
    if(error.message === 'CredentialsSignin') {
      return {error: 'Wrong credentials'}
    }
    throw error
  }
}

export const loginWithGitHub = async () => {
  'use server'
  await signIn('github')
}
export const logoutFromGitHub = async () => {
  'use server'
  await signOut('github')
}