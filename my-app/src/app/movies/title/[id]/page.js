/* eslint-disable react/jsx-key */

"use client"
import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import React from 'react';

export default function Home() {
  const router = useParams()
  let id = router.id
  const [movie, setmovie] = useState()
  const [trailer, settrailer] = useState()
  useEffect( ()=>{
    const fetchtodo  = async ()=>{
        
      const response = await fetch('/getIndMovies/'+id)
    const json = await response.json()
    if (!response.ok){
  console.log(json.error)

   
    }
    if (response.ok){
      console.log(json.msg)
setmovie(json.msg)

     
    }

     

       
            }
            fetchtodo()
            
            
            },[])
//////
            useEffect( ()=>{
              const fetchtodo  = async ()=>{
                  
                const url = 'https://imdb8.p.rapidapi.com/title/v2/get-trailers?tconst='+id;
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'f8a556f2d7mshb19f03853fd6b83p120228jsn160d2d765e3e',
		'x-rapidapi-host': 'imdb8.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
	console.log(result);
} catch (error) {
	console.error(error);
}
          
               
          
                 
                      }
                      fetchtodo()
                      
                      
                      },[])
    return (
      <div>


      {movie?( <div>

        <img className='h-96 ' src={movie.title.image.url}></img>
        <h1>{movie.title.title}</h1>
        <video controls>
        <source src="https://imdb-video.media-imdb.com/vi1740686617/1434659529640-260ouz-1673374118732.mp4?Expires=1729618206&Signature=IXUk-g7vtmMI4KLjiLm3EJypv5SnbaKnaTXoDJaPLTQmqG6wViI2j4EFyjRzJ-C7lGu8HCOLEjqd1yH8D6fxnpDb4E~MyA-1i91ZOSK8MDJfxaUX3N6C2FjAokkPRgbazdbm0IN0AoSCGlankbzyibK7EajApnxhvFVj99nOjkSHa58Xp46Mlfn9ovPIgYEUneGzSeO3WnNbqqCB3yCYr61L6Sp5uT02L~IjE0dFxA~8rfKR8RsBHqi2wOqScQwTH9Nju7edaZ9nT88Dv7hPdZjM9Xc2MaG0X5ePcl5-~7FMerKJWWHyFuERpZheo9FkRfElsO~evnbaPSMzh139Tw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA" type="video/mp4"  />
        
        </video>
        {movie.genres.map((item)=>{return<h1 className=' inline mr-5'>{item}</h1>})}
      </div>):null}
     
      
      </div>
    );
  }

  