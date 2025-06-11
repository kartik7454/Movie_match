
import { getToken } from 'next-auth/jwt'
import { withAuth } from 'next-auth/middleware'
import { NextResponse } from 'next/server'








export default withAuth(
 
  async function middleware(req) {
   
    const isAuth = await getToken({ req })
  
    const pathname = req.nextUrl.pathname
   
   
    
    const isLoginPage = pathname.startsWith('/login')

    const sensitiveRoutes = ['/home','/menu','/dashboard','/cart']
    const isAccessingSensitiveRoute = sensitiveRoutes.some((route) =>
      pathname.startsWith(route)
    )

    if (isLoginPage) {
      if (isAuth) {
        return NextResponse.redirect(new URL('/getstarted', req.url))
      }

      return NextResponse.next()
    }

    
  },
  {
    callbacks: {
      async authorized() {
        return true
      },
    },
  }
)

export const config = {
  matchter: ['/home', '/login' ],
}
