import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import CredentialsProvider from 'next-auth/providers/credentials'
import { User } from "./models"
import { connectedToDb } from "./utils"
import bcrypt from 'bcryptjs'
import { authConfig } from "@/app/lib/auth.config"

const loginInternalWithCredentials = async (credentials) => {
  try {
    await connectedToDb()
    const user = await User.findOne({username: credentials.username})
    console.log(user.username, credentials.username)
    if(!user) return {error: "User doesn\'t exist!"}
    const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password)
    if(!isPasswordCorrect) {
      throw new Error('Passwords do not match!')
    }
    return user
  } catch (error) {
    throw new Error(error.message)
  }
}

export const { handlers: {GET, POST}, auth, signIn, signOut } = NextAuth(
  { 
    ...authConfig,
    providers: [
    GitHub({clientId: process.env.AUTH_GITHUB_ID, clientSecret: process.env.AUTH_GITHUB_SECRET }),
    CredentialsProvider({
      async authorize(credentials) {
        try {
          const user = await loginInternalWithCredentials(credentials)
          return user
        } catch (error) {
          
          return null
        }
      }
    })
    ],
    callbacks: {
       async signIn({user, account, profile}) {
        if(account.provider === 'github') {
          try {
            await connectedToDb()
            const user = await User.findOne({email: profile.email})

            if(!user) {
              const newUser = new User({
                username: profile.login,
                email: profile.email,
                image: profile.avatar_url
              })

              await newUser.save()
              console.log(newUser)
            }
          } catch (error) {
            console.log(error)
            return false
          }
        }
        return true
      },
      ...authConfig.callbacks
    },
  }
    
)