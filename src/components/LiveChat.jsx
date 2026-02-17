import React, { useEffect } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../hooks/chatSlice';
import { generate,getRandomString } from '../hooks/helper';

const LiveChat = () => {

    const dispatch = useDispatch();
    const chatMessages = useSelector((store) =>store.chat.messages);

    useEffect(() =>{
        const i = setInterval(() =>{
                console.log("Api Polling");
                dispatch(addMessage({
                    name: generate(),
                    message:getRandomString(8)
                }))
        },2000);

        return () => clearInterval(i);
    })
  return (
    <div className='p-2 border border-black w-full h-[600px] bg-gray-300 rounded-lg overflow-y-scroll flex flex-col-reverse'>
      {/* <ChatMessage name="Raja"  message={"Message is here"}/>
      <ChatMessage name="Raja"  message={"Message is here"}/>
      <ChatMessage name="Raja"  message={"Message is here"}/>
      <ChatMessage name="Raja"  message={"Message is here"}/> */}
      {chatMessages?.map((c,index) => <ChatMessage key={index} name={c.name} message={c.message}/>)}
    </div>
  )
}

export default LiveChat
