import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../hooks/appSlice";
import { useParams, useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  //console.log(searchParams.get("v"));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <div>
    <div className="flex" >
    <div className="px-5 " >
      <iframe
        width="1200"
        height="600"
        src={"https://www.youtube.com/embed/"+searchParams.get("v")}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      </div>
      <div className="col-span-8 w-full">
        <LiveChat/>
      </div>
    </div>
    <CommentsContainer />
    
    </div>
  );
};

export default WatchPage;
