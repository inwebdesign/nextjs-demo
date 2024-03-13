export const authConfig = {
  pages: {
    signIn: '/login'
  },
  providers: [],
  callbacks: {
    async jwt({token,user}) {
      if(user) {
        token.id = user.id
        token.isAdmin = user.isAdmin
      }
      return token
    },
    async session({session, token}) {
      if(token) {
        session.user.id = token.id
        session.user.isAdmin = token.isAdmin
      }
      return session

    },
    authorized({auth, request}) {
      const user = auth?.user
      const isOnAdminPanel = request.nextUrl?.pathname.startsWith('/admin')
      const isOnBlogPanel = request.nextUrl?.pathname.startsWith('/blog')
      const isOnLoginPanel = request.nextUrl?.pathname.startsWith('/login')
      console.log(auth)
      if(!user?.isAdmin && isOnAdminPanel) {
        return false
      }
      if(!user && isOnBlogPanel) {
        return false
      }

      if(user && isOnLoginPanel) {
        return Response.redirect(new URL('/', request.nextUrl))
      }

      return true
    }
  }
}