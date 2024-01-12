import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import Livechat from "./Livechat";
import { livetext } from "../utils/livechatSlice";
import { randomCommentGenerator, randomNameGenerator } from "../utils/helper";

const LivechatContainer = () => {
  const liveMessages = useSelector((store) => store.livechat.messages);
  const dispatch = useDispatch();
  useEffect(() => {
    const timer = setInterval(() => {
      dispatch(
        livetext({
          name: randomNameGenerator(),
          message: randomCommentGenerator(),
        })
      );
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  //   }
  const [text, setText] = useState("");

  return (
    <div className=" flex flex-col mt-3">
    <h1 className=" pl-3 font-bold text-2xl">Live Comments:</h1>
      <div className=" md:w-[475px] md:h-[460px] h-[300px]   ml-2 p-2 border border-black rounded-lg overflow-y-scroll flex flex-col-reverse ">
      
        {liveMessages.map((mess, i) => (
          <Livechat key={i} name={mess.name} message={mess.message} />
        ))}
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            livetext({
              name: "Vaibhav",
              message: text,
            })
          );
          setText("");
        }}
        className=" flex justify-center justify-items-center items-center pl-2 "
      >
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Write Something..."
          className=" w-full h-10 bg-gray-300 rounded-2xl outline-none text-xl pl-6"
        />
        <button className=" flex bg-green-400 m-1  p-2 justify-center items-center  rounded-2xl font-bold">
          Send
        </button>
      </form>
    </div>
  );
};

export default LivechatContainer;