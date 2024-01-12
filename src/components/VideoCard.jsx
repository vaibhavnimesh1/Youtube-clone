
import { useEffect, useState } from "react";
import VideoBox from "./VideoBox";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
// import Watchpage from "./Watchpage";

const VideoCard = () => {
  useEffect(() => {
    getVideos();
  }, []);
  const [videos, setvideo] = useState([]);
  const searching = useSelector((store) => store.searchItem);
  // console.log(searching);

  const getVideos = async () => {
    const response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&key=${import.meta.env.VITE_APP_YOUTUBE_API_KEY}`
    );
 

    const data = await response.json();
    console.log(data);
    setvideo(data?.items);
  };

  return (
    <>
      <div className=" flex flex-wrap  justify-evenly mt-6 mr-4  ">
        {videos.map((video, i) => (
          <Link to={"/watch?v=" + video.id.videoId} key={video.id.videoId || i}>
            <VideoBox info={video} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default VideoCard;

