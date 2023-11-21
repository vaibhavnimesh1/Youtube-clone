import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "../utils/appSlices";
import Commentscontainer from "./Commentscontainer";
import LivechatContainer from "./LivechatContainer";

const Watchpage = () => {
  const [searchparam] = useSearchParams();


  return (
    <div className=" p-1 m-auto ">
      <div className=" p-3  flex flex-col my-auto md:flex-row justify-center items-center">
        <iframe
         
          className=" w-screen h-[300px] md:w-[800px] md:h-[475px]
      "
          src={"https://www.youtube.com/embed/" + searchparam.get("v")}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; ; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <LivechatContainer />
      </div>
      <Commentscontainer />
    </div>
  );
};

export default Watchpage;
