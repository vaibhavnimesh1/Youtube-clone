import { useDispatch, useSelector } from "react-redux";
import logo_img from "../utils/logo_img.png";
import { toggleMenu } from "../utils/appSlices";
import { useEffect, useState } from "react";
import {cacheResults} from "../utils/cacheSlices";
import {searchItem} from "../utils/searchSlices"


const Head = () => {
  const dispatch = useDispatch();
  const searchcache = useSelector((store) => store.cache);
  
  const [searchQuery, setSearchQuery] = useState("");
  const [searchsuggestion, setSearchsuggestion] = useState([]);
  const [searchHide, setSearchHide] = useState(false);
  // dispatch(searchItem(searchQuery))

  const handleTogglemenu = () => {
    dispatch(toggleMenu());
  };

  const getsearchResult = async () => {
    const response = await fetch(
      "http://suggestqueries.google.com/complete/search?client=firefox&q=" +
        searchQuery
    );

    const data = await response.json();
    setSearchsuggestion(data[1]);
    // console.log(data[1]);
    dispatch(
      cacheResults({
        [searchQuery]: data[1],
      })
    );
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchcache[searchQuery]) {
        setSearchsuggestion(searchcache[searchQuery]);
      } else {
        getsearchResult();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  return (
    <div className="  p-2 flex   justify-evenly md:grid md:grid-flow-col shadow-md md:justify-between  ">
      <div className="  col-span-1 flex gap-2 items-center overflow-hidden">
        <img
          className=" h-10 cursor-pointer"
          onClick={() => handleTogglemenu()}
          src="https://banner2.cleanpng.com/20180628/zaz/kisspng-computer-icons-hamburger-button-menu-new-menu-5b34724be5a1f0.5796308115301637879406.jpg"
          alt="menu"
        />
        <img className=" h-10 p-0" src={logo_img} alt="Logo" />
      </div>

      <div className=" relative col-span-10 flex justify-center">
        <div>
          <input
            className=" w-36 md:w-[600px] outline-none text-lg px-3  pl-5 h-10 border-2 rounded-l-full border-gray-200"
            type="text"
            placeholder="Search.."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setSearchHide(true)}
            onBlur={() => setSearchHide(false)}
          />
          {searchHide && (
            <div className=" absolute text-sm md:w-[600px] rounded-2xl m-1  bg-gray-100  gap-2">
              {searchsuggestion.map((s, i) => (
                <ul className=" cursor-pointer" key={i}>
                  <li className=" p-2 pl-5 hover:bg-gray-200">{s}</li>
                </ul>
              ))}
            </div>
          )}
        </div>
        <button
          onBlur={() => setSearchHide(false)}
          className=" px-4 py-2 bg-gray-300 rounded-r-full"
        >
          🔍
        </button>
      </div>
      <div className="  col-span-1 flex  justify-end md:pr-4">
        <img
          className=" h-10 rounded-full  cursor-pointer"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSppkoKsaYMuIoNLDH7O8ePOacLPG1mKXtEng&usqp=CAU"
          alt=" User"
        />
      </div>
    </div>
  );
};

export default Head;