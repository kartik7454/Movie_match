/* eslint-disable no-unused-vars */

import { NextRequest ,NextResponse} from "next/server"


interface Props {
  params: {
id: string
    }
}


export  async function GET(request:NextRequest,Props:Props) {
  try { 
    const {params } = Props  
    const {id } = params
    
    const url = 'https://imdb8.p.rapidapi.com/title/v2/get-trailers?tconst='+id;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'f8a556f2d7mshb19f03853fd6b83p120228jsn160d2d765e3e',
            'x-rapidapi-host': 'imdb8.p.rapidapi.com'
        }
    };
    
    
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
    
  
    return NextResponse.json({ msg:result }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: error }, { status: 400 });
  }
}