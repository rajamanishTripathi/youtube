import React from 'react'

const VideoCards = ({info}) => {
    const {snippet , statistics} = info;
    const {channelTitle,title,thumbnails} = snippet;
    console.log(info);
  return (
    <div className='m-2 p-2 w-48 cursor-pointer rounded-lg shadow-lg'>
      <img className="" alt="thumbnail" src={thumbnails.medium.url} />
        <ul>
            <li className='font-bold py-3'>{title}</li>
            {/* <li>{channelTitle}</li> */}
            <li>{statistics.viewCount} - views</li>
        </ul>
    </div>
  )
}

export default VideoCards
