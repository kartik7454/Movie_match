import { NextRequest ,NextResponse} from "next/server"
import {getUserSession, session} from "../../../lib/session"
import {  NextApiRequest, NextApiResponse } from "next";
import { getToken } from 'next-auth/jwt'
import {prisma} from "../../../lib/prisma"






export async function POST (request){
   
     

    try{ 
      const data = await request.json()
      
        const  session = await  getUserSession() 
     
      const user = await prisma.user.findUnique({
        where: {
          email: session.email,
        },
      })

const arr = user.goodmovies
console.log(arr)
data.map((item)=>{user.goodmovies.push ( item)})
console.log(user.goodmovies)
      const updateUser = await prisma.user.update({
        where: {
          email:session.email,
        },
        data: {
         goodmovies : user.goodmovies,
        },
      })
      
      


        return NextResponse.json({mssg: ""}, {status: 200})
    }
     catch(error ){return NextResponse.json({error: error.message}, {status: 400})}



    
}