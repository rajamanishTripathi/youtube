import { useEffect, useState } from 'react';
// import { youtube_popular_api } from '../hooks/constant';
// import { useGoogleLogin } from "@react-oauth/google";
import { getYouTubeAccessToken } from "./useGoogleAuth";
import VideoCards from './VideoCards';
import {Link} from "react-router-dom";
import {AdVideo} from "./VideoCards"; 

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
        {/* since initial render is empty error. i have added a check yvideo[0] in below line */}
        {yvideo[0] && <AdVideo  info={yvideo[0]}/>}
        {yvideo.map((yvideos) => 
         <Link to={"watch?v="+yvideos.id} key={yvideos.id}>
            <VideoCards   info={yvideos}/>
          </Link>
        )}
      </div>
    </>
  )
}

export default VideoContainer;
