import { useEffect, useState } from 'react';
// import { youtube_popular_api } from '../hooks/constant';
// import { useGoogleLogin } from "@react-oauth/google";
import { getYouTubeAccessToken } from "./useGoogleAuth";
import VideoCards from './VideoCards';
import {Link} from "react-router-dom"; 

const VideoContainer = () => {

  //usestate to mapover the item of youtube to trigger reconciliation after it changes
  const [yvideo, setYvideo] = useState([]);
 

  const getVideos = async () => {
    try {
      const token = await getYouTubeAccessToken();

      const res = await fetch(
        "https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=50&regionCode=IN",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await res.json();
      setYvideo(data.items);
      console.log(data.items);
    } catch (err) {
      console.error("Auth Error:", err);
    }
  };

  useEffect(()=> {
    getVideos();
  },[]);


  return (
    <>    
    <button onClick={() => getVideos()}>Login with Google</button>
      <div className='flex flex-wrap'>
        {yvideo.map((yvideos) => 
         <Link to={"watch?v="+yvideos.id}>
            <VideoCards key={yvideos.id}  info={yvideos}/>
          </Link>
        )}
      </div>
    </>
  )
}

export default VideoContainer
