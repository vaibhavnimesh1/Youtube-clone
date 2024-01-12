import Head from "./components/Head";
import Body from "./components/Body";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Maincontainer from "./components/Maincontainer";
import Watchpage from "./components/Watchpage";

const approuter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
      path : '/',
      element: <Maincontainer/>
    },
      {
      path : 'watch/',
      element:<Watchpage/>
    }
  
  ],
  },
]);

const App = () => {
  return (
    <div >
      <Head />
      <RouterProvider router={approuter} />
    </div>
  );
};

export default App;
