import React, { useEffect, useState } from "react";
import { apiKey,imageUrl } from "../../constants/constans";
import "./Banner.css";
import axios from "../../axios";


const Banner = () => {
    const [movie,setMovie] = useState("")
    useEffect(()=>{
axios.get(`trending/all/week?api_key=${apiKey}&language=en-US`).then((response)=>{
    const movie_view=Math.floor(Math.random()*response.data.results.length)
    console.log(response.data.results[movie_view],"title issue");
    setMovie(response.data.results[movie_view])
    // console.log(movie);

})
    },[])
  return (
    <div style={{backgroundImage:`url(${imageUrl+movie.backdrop_path})`}} className="banner">
      <div className="content">
        <h1 className="bannerTitle">{movie.title}</h1>
        <div className="bannerButtons">
          <button className="button">Play</button>
          <button className="button">My List</button>
        </div>
        <h1 className="bannerDescrptn">
        {movie.overview}
        </h1>
      </div>
      <div className="bannerFade">

      </div>
    </div>
  );
};

export default Banner;
