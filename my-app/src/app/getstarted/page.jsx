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
     let arr=likemovie
    if(checked == true){
         arr.push(id)
       setlikemovie(arr)
       console.log(arr)
    }
    if(checked == false){
        arr.pop(id)
        setlikemovie(arr)
        console.log(arr)
     }

   
}

  return <div> <div>

<div><button className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800' 
onClick={async()=>{if(likemovie.length < 0){alert("please pick atleast 10 movies ur at "+likemovie.length)}
else{
  const arr = ["eeee","dfdfdfdf"]
    const response = await fetch('/addlikemovie',{
                  method:"POST",
                  body :  JSON.stringify(arr) 
                  
              })
              const json = await response.json()
              if (!response.ok){
            console.log(json.error)
        
             
              }
              if (response.ok){


               
              }

}

}}> continue</button></div>
<h1 >choose atleast 10 movies you like </h1>

<div>{movie?(<div className='ml-5'>{movie.map((item,index)=>{return<div className='w-64 bg-slate-200 inline-grid mx-5 my-5' >
<input type='checkbox' id={index} onClick={(e)=>{handelClick(item.imdbid,e.target.checked)}} className=' h-10 -mt-10 relative top-10 left-28  mr-2 '></input>
<img  className="h-96 bg-slate-500 " src={item.image}></img>
<h1 className=' text-xl '  >{item.title} </h1>
</div>})}</div>):null}</div>
  
    
    </div></div>
}

export default Page