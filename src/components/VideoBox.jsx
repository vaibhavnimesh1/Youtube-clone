import PropTypes from "prop-types";

const VideoBox = ({ info }) => {
  const { snippet, statistics } = info;
  const { title, thumbnails } = snippet;
  const { viewCount } = statistics;

  // const snippet = info?.snippet;
  // const count = info?.statistics?.viewCount;
  // const title = snippet?.title;
  // const channel = snippet?.channelId;
  // const thumbnails = snippet?.thumbnails?.medium?.url;

  return (
    <div className=" md:w-72 w-[416px] flex items-center rounded-lg flex-col bg-gray-200 h-[18.125rem] p-2 pt-2 ml-2 mb-8 shadow-lg cursor-pointer overflow-hidden">
      <img src={thumbnails?.medium?.url} alt="" className=" mt-0 rounded-lg" />
      <h1 className=" font-bold text-center p-2 ">{Array.from(title).splice(0,70)}...</h1>
      <h1 className=" font-semibold text-center">{viewCount} views</h1>
    </div>
  );
};

// VideoBox.propTypes = {
//   info: PropTypes.shape({
//     snippet: PropTypes.shape({
//       title: PropTypes.string,
//       thumbnails: PropTypes.string,
//     })
//   })
// };

export default VideoBox;
