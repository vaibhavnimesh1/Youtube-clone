import { useEffect, useState } from "react";
import VideoBox from "./VideoBox";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
// import Watchpage from "./Watchpage";

const VideoCard = () => {
  useEffect(() => {
    getVideos();
  }, []);
  const [video, setvideo] = useState([]);
  const searching = useSelector(store=> store.searchItem)
  console.log(searching);

  const getVideos = async () => {
    const response = await fetch(
      "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&q=ShahRukhKhan&regionCode=IN&key=AIzaSyCEt4pRiJ_tNzpU7BVSLhH7Ao3v3ugnpWg"
    );
    // const response = await fetch(
    //   "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=dunki&key=AIzaSyCEt4pRiJ_tNzpU7BVSLhH7Ao3v3ugnpWg"
    // );

    const data = await response.json();
    setvideo(data?.items);
  };

  return (
    <>
      <div className=" flex flex-wrap  justify-evenly mt-6 mr-4  ">
        {video.map((video) => (
          <Link to={"/watch?v=" + video.id} key={video.id}>
            <VideoBox info={video} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default VideoCard;
