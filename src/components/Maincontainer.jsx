import ButtonList from "./ButtonList"
// import VideoBox from "./VideoBox"
import VideoCard from "./VideoCard"

// import React from 'react'
const Maincontainer = () => {
  return (
    <div  className=" w-screen md:flex flex-col " >
      <ButtonList  />
      <VideoCard/>
     

    </div>
  )
}

export default Maincontainer