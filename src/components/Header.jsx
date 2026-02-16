import { useEffect, useState } from "react";
import { toggleMenu } from "../hooks/appSlice";
import { useDispatch, useSelector } from "react-redux";
import { YOUTUBE_SEARCH_API } from "../hooks/constant";
import { cacheResults } from "../hooks/searchSlice";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showsuggestions, setShowsuggestions] = useState(false);
  // console.log(searchQuery);

  const searchcache = useSelector((store) => store.search);
  const dispatch = useDispatch();

  useEffect(() => {
    //Api call
    //make api call after every keypress
    // but decline api call  if differnce is less than 200ms
        const timer = setTimeout(() => {
            if (searchcache[searchQuery]){
                setSuggestions(searchcache[searchQuery]);
            }else{
                searchSuggestion();
            }
        
        }, 200);

        //clear timer
        return () => {
        clearTimeout(timer);
        };
    
    }, [searchQuery]);

  const searchSuggestion = async () => {
    console.log(searchQuery);
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    console.log(json);
    setSuggestions(json[1]);

    //update search cache
    dispatch(cacheResults({
        [searchQuery]:json[1]
    }));
  };

  /**
   * ---------------------------  DEBOUNCING --------------------------------------------------------
   *
   * key - i
   * - render the component
   * - useeffect()
   * - startTimer - which make api call after 200ms
   *
   *
   * key - iy
   * - destroy  the component(use effect return method)
   * - re-render the component
   * - useeffect()
   * - startTimer - make api call after 200ms
   *
   * if we press key before 200ms again , reconciliation process trigger
   * things need to clear up (use effect return method) -setimeout cleared
   * then new setimeout(200) starts - and make api call after 200ms
   */

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col m-2 p-2 shadow-lg">
      <div className="flex col-span-1 ">
        <img
          onClick={() => {
            toggleMenuHandler();
          }}
          className="h-20 cursor-pointer"
          alt="menu"
          src="https://img.favpng.com/6/7/20/computer-icons-hamburger-button-icon-design-web-typography-png-favpng-WCdfkJA1mmcy54pnSwS9bffjG.jpg"
        />
        <a href="/">
          <img
            className="h-20"
            alt="logo"
            src="https://i.pinimg.com/originals/fb/d9/7f/fbd97f4a657c706e1ab93247a1c2634d.jpg"
          />
        </a>
      </div>

      <div className="h-20 col-span-10">
        <div>
          <input
            className="border border-black w-3/4 mt-5 p-2 rounded-l-full"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowsuggestions(true)}
            onBlur={() => setShowsuggestions(false)}
          />
          <button className="border border-black px-5 py-2 rounded-r-full bg-gray-100">
            🔍
          </button>
        </div>
        {showsuggestions && (
          <div className="fixed bg-white py-2 px-5 w-[65rem] rounded-lg">
            <ul>
              {suggestions?.map((suggest) => (
                <li
                  key={suggest}
                  className="py-2 px-3 shadow-sm hover:bg-gray-400"
                >
                  {suggest}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div>
        <img
          className="h-20 col-span-1"
          alt="user"
          src="https://www.citypng.com/public/uploads/preview/hd-man-user-illustration-icon-transparent-png-701751694974843ybexneueic.png"
        />
      </div>
    </div>
  );
};

export default Header;
