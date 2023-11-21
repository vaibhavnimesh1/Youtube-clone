import { Outlet } from "react-router-dom"
// import Maincontainer from "./Maincontainer"
import Sidebar from "./Sidebar"


const Body = () => {
   
  return (
    <div className="  w-screen h-screen">
    <Sidebar  />
   <Outlet/>

    </div>
  )
}

export default Body