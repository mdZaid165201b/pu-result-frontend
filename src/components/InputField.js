import { React, useState } from "react";
import "./inputField.css";
import Result from "./Result";
import { DotLoader } from "react-spinners";
import Error from "../404.jpg";

function InputField() {
  const [data, setData] = useState([]);
  const [isLoadig, setLoadig] = useState(false);
  const [roll_no, setRollNo] = useState();

  const fetchResult = async (e) => {
    e.preventDefault();
    setLoadig(true);
    try {
       
      const response = await fetch(`/${roll_no}`, {
        mode: "cors",
      });
      const results = await response.json();
      setData(results.results);
      setLoadig(false);
      if(data === []){ console.log("Empty Data") }
    } catch (err) {
      console.log(err.message);
    }
  };
  
  const utilityFunc = () => {
    if(isLoadig) {
      return <DotLoader color="#00be98" className="self-center mt-32" />
    }
    else if(data === []){
      console.log(data, "Error if")
      return <Error/>
    }
    else if(data !== []) {
      return <Result data={data}/>
    }
    
  }


  return (
    <div className="flex flex-col">
      <div className="input-field">
        <form className="w-4/5 mb-10">
          {/* <label
          for="search"
          class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Enter Roll no...
        </label> */}
          <div class="relative">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                class="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <input
              type="search"
              id="search"
              class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-gray-500 focus:border-gray-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter Roll no..."
              onChange={(e) => setRollNo(e.target.value)}
              required
            />
            <button
              class="text-white absolute right-2.5 bottom-2.5 bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-400 font-medium rounded-lg text-sm px-4 py-2 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800"
              onClick={fetchResult}
            >
              Search
            </button>
          </div>
        </form>
      </div>

      {
        utilityFunc()
      }
    </div>
  );
}

export default InputField;
