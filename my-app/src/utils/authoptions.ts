import { NextAuthOptions } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import { prisma } from '@/lib/prisma'
const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID!
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET!

 export const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt',
  },

  providers: [
    GoogleProvider({
      clientId: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    
    
    async jwt({ token, profile,user }) {
      //this will triger while session
      
      if(token.goodmovies){
        if(token.email){
          const user1 = await prisma.user.findUnique({
        where: {
          email: token.email,
        },
      })
      token.name =user1?.name
      token.image =user1?.image
      
      token.id = user1?.id
      token.goodmovies = user1?.goodmovies
      
   
        }
    }
// this will activate when login
      if (profile) {
   
        const user1 = await prisma.user.findUnique({
          where: {
            email: profile.email,
          },
        })
        
        if (!user1) {
         
          await prisma.user.upsert({
            where: {
              email: profile.email,
            },
            create: {
              email: profile.email,
              name: profile.name,
              image:user.image,
              goodmovies:[]
            },
            update: {
              name: profile.name,
             
            },
          })
        }
        token.name =user1?.name

        token.image =user1?.image
       
        token.id = user1?.id
        token.goodmovies = user1?.goodmovies
        
      
      
       
      }

      




      return token
    },
    async session({ session, token }) {
     
      if (token) {
        if (session.user ){ 
          const session1 = session.user as Session;
        session1.id = token.id
        session1.name = token.name
        session1.email = token.email
        session1.image = token.image
        session1.goodmovies = token.goodmovies
        }
      }
    console.log("session")
console.log(session)
      return session
    }
  },
}