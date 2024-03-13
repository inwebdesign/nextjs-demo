import { Post } from "@/app/lib/models"
import { connectedToDb } from "@/app/lib/utils"
import { NextResponse } from "next/server"

export const GET = async () => {
  try {
    await connectedToDb()
    const posts = await Post.find()
    return NextResponse.json(posts)
  } catch (error) {
    return NextResponse(error)
  }
}