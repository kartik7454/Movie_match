"use client"
import Image from 'next/image'
import { FC } from 'react'
import {useState, useEffect } from "react"





const Page = () => {
    const [movie, setmovie] = useState()
    useEffect( ()=>{
        const fetchtodo  = async ()=>{
            
            
            try {
                const url = 'https://ott-details.p.rapidapi.com/advancedsearch?start_year=1970&end_year=2020&min_imdb=6&max_imdb=7.8&genre=action&language=english&type=movie&sort=highestrated&page=1';
                const options = {
                    method: 'GET',
                    headers: {
                        'x-rapidapi-key': 'f8a556f2d7mshb19f03853fd6b83p120228jsn160d2d765e3e',
                        'x-rapidapi-host': 'ott-details.p.rapidapi.com'
                    }
                };
                
                try {
                    const response = await fetch(url, options);
                    const result = await response.json();
                    
                    const random = Math.floor(Math.random() * result.results.length)
                    const movieid = result.results[random].imdbid

                    const url2 = 'https://imdb8.p.rapidapi.com/title/get-overview-details?tconst='+movieid;
                 console.log(url2)
                 const options2 = {
                     method: 'GET',
                     headers: {
                         'x-rapidapi-key': 'f8a556f2d7mshb19f03853fd6b83p120228jsn160d2d765e3e',
                         'x-rapidapi-host': 'imdb8.p.rapidapi.com'
                     }
                 };
                 
                 try {
                     const response2 = await fetch(url2, options2);
                    const alo =  await response2.json()
                    setmovie(alo)
                     console.log(alo);
                 } catch (error) {
                     console.error(error);
                 }

                   
                } catch (error) {
                    console.error(error);
                }

            } catch (error) {
                console.error(error);
            }
                }
                fetchtodo()
                
                
                },[])



  return <div> <div>


    {movie?(<div><h1 className='inline '>{movie.title.title}</h1>
    <h1 className='inline'>{movie.title.year}</h1>
        <h1 className='inline'>{movie.ratings.rating}</h1>
        <h1 className='inline'>{movie.ratings.ratingCount}</h1>
        <h1 className="inline mr-10">{movie.title .runningTimeInMinutes+"min"} </h1>
        <img alt="dsd" src={movie.title.image.url}></img>
        <div>{movie.genres.map((item)=>{return <p className="inline">{item}</p>})}</div>
        <p>{movie.plotOutline?movie.plotOutline.text:null}</p>
    </div>):null}
    
    
    </div></div>
}

export default Page