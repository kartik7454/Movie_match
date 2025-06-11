"use client"
import Image from 'next/image'
import { FC } from 'react'
import {getUserSession, session} from "../../lib/session"
import {useState, useEffect } from "react"






const Page = () => {
    const [session, setsession] = useState()
    const [movie, setmovie] = useState()
    const [likemovie, setlikemovie] = useState([])
    // useEffect( ()=>{
    //     const fetchtodo  = async ()=>{
            
    //        const alo =  await getUserSession()
    //        console.log(alo)
    //        setsession(alo)

    //        const url = 'https://imdb-top-100-movies.p.rapidapi.com/';
    //        const options = {
    //            method: 'GET',
    //            headers: {
    //                'x-rapidapi-key': 'f8a556f2d7mshb19f03853fd6b83p120228jsn160d2d765e3e',
    //                'x-rapidapi-host': 'imdb-top-100-movies.p.rapidapi.com'
    //            }
    //        };
           
    //        try {
    //            const response = await fetch(url, options);
    //            const result = await response.json();
    //            console.log(result);
    //            setmovie(result)

    //        } catch (error) {
    //            console.error(error);
    //        }


           
    //             }
    //             fetchtodo()
                
                
    //             },[])

async function handelClick(id,checked){
    

   
}

  return <div><h1>home</h1> </div>
}

export default Page