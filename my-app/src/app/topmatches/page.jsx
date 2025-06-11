"use client"
import Image from 'next/image'
import { FC } from 'react'
import { useParams } from 'next/navigation'
import {getUserSession, session} from "../../lib/session"
import {useState, useEffect } from "react"
import Link from 'next/link'






const Page = () => {
    const [visi, setvisi] = useState(false)
    const [movie, setmovie] = useState()
    const [filter, setfilter] = useState({
      "genre":"",
     "rel_from":"",
     "rel_to":"",
     "min_rating":"",
     "max_rating":"",
     "rating_from":"",
     "rating_to":"",
     "runtime":""
    })
    useEffect( ()=>{
        const fetchtodo  = async ()=>{
            
          const response = await fetch('/gettopmatches')
        const json = await response.json()
        if (!response.ok){
      console.log(json.error)
  
       
        }
        if (response.ok){
          console.log(json.mssg)
setmovie(json.mssg)

         
        }

         

           
                }
                fetchtodo()
                
                
                },[])

async function handelClick(id){
    
alert(id)
   
}

  return<div><div><h1 className='mb-4 text-4xl text-center capitalize font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-black'>top matches</h1>
 <button type="button" onClick={()=>{setvisi(!visi)}} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Filter</button>
   <div className='bg-slate-200 min-h-screen'>{movie?(<div  className='ml-5 bg-slate-500 min-h-screen '>{movie.filter((item) => {
  // Combine genre, release year, and rating filters into a single check
  const genreMatch = !filter.genre || item.genres[0].toLowerCase() === filter.genre.toLowerCase();
  const releaseYearMatch = !filter.rel_from || item.title.year >= filter.rel_from;
  const releaseYearToMatch = !filter.rel_to || item.title.year <= filter.rel_to;
  const ratingMatch = !filter.min_rating || item.ratings.rating >= filter.min_rating;
  const ratingToMatch = !filter.max_rating || item.ratings.rating <= filter.max_rating;
  const ratingCountMatch = !filter.rating_from || item.ratings.ratingCount >= filter.rating_from;
  const ratingCountToMatch = !filter.rating_to || item.ratings.ratingCount <= filter.rating_to;
  const runtimeMatch = !filter.runtime || item.title.runningTimeInMinutes <= filter.runtime;

  // Return item if all filters match
  return genreMatch && releaseYearMatch && releaseYearToMatch && ratingMatch && ratingToMatch && ratingCountMatch && ratingCountToMatch && runtimeMatch;
}).map((item,index)=>{return<div id="container1" className='  inline-grid     '  >
<Link href={"/movies/"+item.id}><div  id="container2" className=' bg-slate-200  overflow-hidden   mx-5 my-5   rounded-lg' >
<img  className="   h-96 " src={item.title.image?item.title.image.url:""}></img>
<h1 className=' text-xl bg-slate-200  top-10 right-10 w-42 h-10 pl-1 pr-1'  >{item.title.title} </h1>
<h1 className=' relative  text-sm pl-2 pr-2'  >{item.genres[0] +" • "+item.ratings.rating +" • "+item.title.year+" • "+item.title.runningTimeInMinutes+" min"} </h1>
<hr class="h-px  bg-gray-200 border-0 dark:bg-gray-700"></hr>
<h1 className=' relative  text-sm pl-2 pr-2 pb-2'  >{item.plotOutline.text} </h1>
<button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 w-52 ml-5  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">ADD</button>


</div></Link>


</div>})}</div>):null}</div>

{visi &&(<div className=' fixed top-20 left-1/4 h-4/5 z-50   overflow-scroll w-1/2 bg-slate-300'><h1>filter</h1>

<div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl   
 font-bold mb-4">Genres</h1>
    <div class="flex flex-wrap gap-4">
      <button class="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-md" value="drama" onClick={(e)=>{setfilter(prevState=>{return{...prevState,genre:e.target.value}});console.log(filter)}}>Drama </button>
      <button class="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-md" value="adventure" onClick={(e)=>{setfilter(prevState=>{return{...prevState,genre:e.target.value}});console.log(filter.genre)}}>Adventure </button>
      <button class="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-md" value="thriller" onClick={(e)=>{setfilter(prevState=>{return{...prevState,genre:e.target.value}});console.log(filter.genre)}}>Thriller </button>
      <button class="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-md" value="action" onClick={(e)=>{setfilter(prevState=>{return{...prevState,genre:e.target.value}});console.log(filter.genre)}}>Action </button>
      <button class="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-md" value="chrime" onClick={(e)=>{setfilter(prevState=>{return{...prevState,genre:e.target.value}});console.log(filter.genre)}}>Crime </button>
      <button class="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-md" value="comedy" onClick={(e)=>{setfilter(prevState=>{return{...prevState,genre:e.target.value}});console.log(filter.genre)}}>Comedy </button>
      <button class="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-md" value="mystery" onClick={(e)=>{setfilter(prevState=>{return{...prevState,genre:e.target.value}});console.log(filter.genre)}}>Mystery </button>
      <button class="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-md" value="war" onClick={(e)=>{setfilter(prevState=>{return{...prevState,genre:e.target.value}});console.log(filter.genre)}}>War </button>
      <button class="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-md" value="fantasy" onClick={(e)=>{setfilter(prevState=>{return{...prevState,genre:e.target.value}});console.log(filter.genre)}}>Fantasy </button>
      <button class="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-md" value="sci-fi" onClick={(e)=>{setfilter(prevState=>{return{...prevState,genre:e.target.value}});console.log(filter.genre)}}>Sci-Fi </button>
    </div>
  </div>

  <div class="container mx-auto   
 px-4 py-8">
    <h2 class="text-2xl font-bold mb-4">Filters</h2>
    <div class="mb-4">
      <label class="block text-sm font-medium mb-2">Release Year</label>
      <div class="flex gap-2">
        <input onChange={(e)=>{setfilter(prevState=>{return{...prevState,rel_from:e.target.value}});console.log(filter)}} type="number" class="w-full rounded-md border border-gray-700 bg-gray-900 p-2" placeholder="From"/>
        <span class="text-gray-400" >to</span>
        <input type="number" class="w-full rounded-md border border-gray-700 bg-gray-900 p-2" onChange={(e)=>{setfilter(prevState=>{return{...prevState,rel_to:e.target.value}});console.log(filter)}} placeholder="To"/>
      </div>
    </div>
    <div class="mb-4">
      <label class="block text-sm font-medium mb-2">IMDB Ratings</label>
      <div class="flex gap-2">
        <input type="number" class="w-full rounded-md border border-gray-700 bg-gray-900 p-2" onChange={(e)=>{setfilter(prevState=>{return{...prevState,min_rating:e.target.value}});console.log(filter)}}  />
        <span class="text-gray-400">to</span>
        <input type="number" onChange={(e)=>{setfilter(prevState=>{return{...prevState,max_rating:e.target.value}});console.log(filter)}} class="w-full rounded-md border border-gray-700 bg-gray-900 p-2"  />
      </div>
    </div>
   
    
    <div class="mb-4">
      <label class="block text-sm font-medium mb-2">Number of Votes</label>
      <div class="flex gap-2">
        <input onChange={(e)=>{setfilter(prevState=>{return{...prevState,rating_from:e.target.value}});console.log(filter)}} type="number" class="w-full rounded-md border border-gray-700 bg-gray-900 p-2" placeholder="From"/>
        <span class="text-gray-400">to</span>
        <input onChange={(e)=>{setfilter(prevState=>{return{...prevState,rating_to:e.target.value}});console.log(filter)}} type="number" class="w-full rounded-md border border-gray-700 bg-gray-900 p-2" placeholder="To"/>
      </div>
    </div>
  </div>
  <label class="block text-sm font-medium mb-2">runtime under</label>
      <div class="flex gap-2">
        <input onChange={(e)=>{setfilter(prevState=>{return{...prevState,runtime:e.target.value}});console.log(filter)}} type="number" class="w-full rounded-md border border-gray-700 bg-gray-900 p-2" />
       
      </div>
</div>)}





</div></div>
  
  
}

export default Page