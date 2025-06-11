/* eslint-disable react/jsx-key */
"use client"

import {useState, useEffect } from "react"


export default  function Page(){
    const [movie, setmovie] = useState()
    useEffect( ()=>{
        const fetchtodo  = async ()=>{
            
            
            try {
                const url = 'https://moviedatabase8.p.rapidapi.com/Random/1';
            const options = {
                method: 'GET',
                headers: {
                    'x-rapidapi-key': 'f8a556f2d7mshb19f03853fd6b83p120228jsn160d2d765e3e',
                    'x-rapidapi-host': 'moviedatabase8.p.rapidapi.com'
                }
            };
                const response = await fetch(url, options);
                 const movie = await response.json();
                 console.log(movie);
                 console.log(movie[0]);
                 console.log(movie[0].imdb_id);
//                 const  movie = [
//     {
//         "_id": "65ef42bf675dde8010901d0c",
//         "id": 565754,
//         "title": "Headin' for God's Country",
//         "vote_average": 0,
//         "vote_count": 0,
//         "status": "Released",
//         "release_date": "1943-08-26T00:00:00.000Z",
//         "revenue": 0,
//         "runtime": 78,
//         "adult": false,
//         "backdrop_path": "/s5Q2TqJ7WToGwgEK0Iozcyzfygi.jpg",
//         "budget": 0,
//         "imdb_id": "tt0035976",
//         "original_language": "en",
//         "original_title": "Headin' for God's Country",
//         "overview": "In this anti-Japanese WW II propaganda film, Japanese invaders attempt to raid Alaska and are totally obliterated. The trouble begins when a stranger visits a small town and tells them that the U.S. is going to be taken over by a powerful country. The story turns out to be true when the Japanese bomb Pearl Harbor. The town then rises up and slaughters a Japanese raiding party.",
//         "popularity": 1.208,
//         "poster_path": "https://image.tmdb.org/t/p/original//sV6hy4EOUDmlU9UwaDqIxkOxTnI.jpg",
//         "tagline": "ROMANTIC ACTION DRAMA OF ALASKAN OUTPOSTS",
//         "genres": "Action, Drama, War",
//         "production_companies": "Republic Pictures",
//         "production_countries": "United States of America",
//         "spoken_languages": "English"
//     }
// ] 
           
               
                 const movieid =  movie[0].imdb_id

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
                }
                fetchtodo()
                
                
                },[])




  return <div className=" ">
    {movie?(<div className="">
<h1 className="title inline mr-10">{movie.title.title}</h1>
<h1 className="inline mr-10">{movie.ratings.rating} </h1>
<h1 className="inline mr-10">{movie.ratings.ratingCount} </h1>
<h1 className="inline mr-10">{movie.title .runningTimeInMinutes+"min"} </h1>
<h1 className="inline mr-10">{movie.title.year}</h1>

<button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"> next movie</button>

<div >
  <img className="h-96" alt = "N/A" src ={movie.title.image.url}></img>
  </div>
<div>{movie.genre?(movie.genres.map((item)=>{return <p className="inline">{item}</p>})):null}</div>
 
 <p>{movie.plotOutline?movie.plotOutline.text:null}</p>
  </div>):null}
  

</div>
}
