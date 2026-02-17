import React, { useState, useEffect } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../hooks/chatSlice";
import { generate, getRandomString } from "../hooks/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      //console.log("Api Polling");
      dispatch(
        addMessage({
          name: generate(),
          message: getRandomString(8),
        }),
      );
    }, 2000);

    return () => clearInterval(i);
  });
  return (
    <div>
      <div className="p-2 border border-black w-full h-[600px] bg-gray-300 rounded-lg overflow-y-scroll flex flex-col-reverse">
        {/* <ChatMessage name="Raja"  message={"Message is here"}/>
      <ChatMessage name="Raja"  message={"Message is here"}/>
      <ChatMessage name="Raja"  message={"Message is here"}/>
      <ChatMessage name="Raja"  message={"Message is here"}/> */}
        <div>
          {chatMessages?.map((c, index) => (
            <ChatMessage key={index} name={c.name} message={c.message} />
          ))}
        </div>
      </div>
      <form
        className="py-2 w-full border border-gray-900"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(addMessage({
            name: "RRR WWWW",
            message: liveMessage
          }))
            
            setLiveMessage("");
          console.log("Live Chat   ", liveMessage);
        }}
        
      >
        <input
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
          className="px-2 w-4/5 py-2 border border-blue-900"
          type="text"
        />
        <button className="px-2 py-1 mx-3 border border-cyan-950 text-xl">
          Send
        </button>
      </form>
    </div>
  );
};

export default LiveChat;
