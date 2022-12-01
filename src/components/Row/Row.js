import React, { useEffect,useState } from 'react'
import './Row.css'
import YouTube from 'react-youtube';
import { imageUrl,apiKey } from '../../constants/constans'
import axios from "../../axios";

const Row = (props) => {
    const [mvoies, setMvoies] = useState([])
    const [urlId, setUrlId] = useState("")
    useEffect(() => {
     axios.get(props.url).then((response)=>{
        console.log(response);
        setMvoies(response.data.results)
     })
    })
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };
      const handleMovieTrailer=(id)=>{
        console.log(id);
        axios.get(`movie/${id}/videos?api_key=${apiKey}&language=en-US`).then((response)=>{
            console.log(response.data);
            if(response.data.results.length>0){
                setUrlId(response.data.results[0])
            }else{
                console.log('trailer array is empty');
            }
        })
      }
  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className='posters'>
            {mvoies.map((movie)=>
            //return
        <img onClick={()=>handleMovieTrailer(movie.id)} className={props.sizeImageSmall?'otherPoster':'poster'} src={`${imageUrl+movie.backdrop_path}`} alt="" />
            
            )}
        
        </div>
        {urlId && <YouTube  opts={opts} videoId={urlId.key}/>}
    </div>
  )
}

export default Row