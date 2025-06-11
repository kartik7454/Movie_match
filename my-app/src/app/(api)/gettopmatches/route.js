import { NextRequest, NextResponse } from "next/server";
import { getUserSession, session } from "../../../lib/session";
import { NextApiRequest, NextApiResponse } from "next";
import { getToken } from 'next-auth/jwt';
import { prisma } from "../../../lib/prisma";
import { chownSync } from "fs";

export async function GET() {
  try {
    function shuffle(array) {
      return array.sort(() => Math.random() - 0.5);
    }
    const user = await prisma.user.findUnique({
      where: {
        email: "kb848067@gmail.com", // Replace with dynamic email retrieval
      },
    });

    

    const goodMovies = user.goodmovies; // Assuming goodmovies is an array
const recommendedMovies = [];
    const uniqueMovieSet = new Set(); // Efficiently store unique movie IDs

    // get good movies id 
    for (const goodMovie of goodMovies) {
      const url = `https://imdb8.p.rapidapi.com/title/get-more-like-this?tconst=${goodMovie}`;

      const options = {
        method: 'GET',
        headers: {
          'x-rapidapi-key': 'f8a556f2d7mshb19f03853fd6b83p120228jsn160d2d765e3e',
          'x-rapidapi-host': 'imdb8.p.rapidapi.com',
        },
      };

      const response = await fetch(url, options);
      const result = await response.json();
     
      if (result.length > 2) {
      let  fnresult =result.slice(0,3)
     
        for (const item of fnresult) {
          
          const movieId = item.slice(7, -1); // Extract movie ID efficiently
          if (!uniqueMovieSet.has(movieId)) { // Add unique movie ID to the set
            uniqueMovieSet.add(movieId);
          }
        }
      }
    }
/////////

    const uniqueMovieIds = Array.from(uniqueMovieSet); // Convert set to array
   
    // Fetch details for the first 3 unique movies (optional: adapt logic for more)
    
    for (let i = 0; i < Math.min(uniqueMovieIds.length, 3); i++) { 
      const movieId = uniqueMovieIds[i];

      const url2 = `https://imdb8.p.rapidapi.com/title/get-overview-details?tconst=${movieId}`;

      const options2 = {
        method: 'GET',
        headers: {
          'x-rapidapi-key': 'f8a556f2d7mshb19f03853fd6b83p120228jsn160d2d765e3e',
          'x-rapidapi-host': 'imdb8.p.rapidapi.com',
        },
      };

      const response2 = await fetch(url2, options2);
      const result2 = await response2.json();

      recommendedMovies.push(result2 ); // Handle potential title absence
    }
      let final = shuffle(recommendedMovies)
    return NextResponse.json({mssg: final }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}