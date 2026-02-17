import React from 'react'

const ChatMessage = ({name,message}) => {
  return (
    <div className='flex items-center shadow-lg px-2 my-2'>
       <img
            className="h-8 rounded-lg"
            alt="logo"
            src="https://yt3.ggpht.com/ytc/AIdro_nOWe4S6b29fbPkg93PDibrKRQTYWczUyLo_mKEpzpASZp98SZsf1etvnv92v_B6OhtLA=s88-c-k-c0x00ffffff-no-rj"
          />
          <span className='font-bold px-2'>{name}</span>
          <span>{message}</span>
    </div>
  )
}

export default ChatMessage
