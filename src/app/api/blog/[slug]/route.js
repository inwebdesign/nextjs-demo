import { Post } from "@/app/lib/models"
import { connectedToDb } from "@/app/lib/utils"
import { NextResponse } from "next/server"

export const GET = async (request, {params}) => {
  try {
    await connectedToDb()
    const {slug} = params
    console.log(slug)
    const post = await Post.findOne({slug})
    if(!post) throw new Error('No post found!')
    return NextResponse.json(post)
  } catch (error) {
    console.log(error)
  }
}