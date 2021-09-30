import React, { useEffect } from "react";
import "./App.css";
import { RatingScales, Header } from "./components/component";
import { useAppContext } from "./context";

function App() {
  const { isRated } = useAppContext();
  useEffect(() => {
    console.log(chrome.tabs);
    if (chrome.tabs) {
      chrome.tabs.query(
        {
          active: true,
          currentWindow: true,
        },
        (tabs) => {
          //Callback function
          console.log(tabs);
        },
      );
    }
  }, []);

  console.log(isRated);
  return (
    <div className="App bg-gray-50 shadow overflow-auto">
      <Header />
      <RatingScales />
      {isRated && (
        <div className="m-2">
          <textarea placeholder="write a review" className="shadow w-full p-2 text-sm bg-gray-50" />
          <div className="my-3">
            <button className="text-sm shadow text-gray-900 p-1 rounded-sm w-2/6 font-bold mx-2">no, thx!</button>
            <button className="text-sm bg-green-500 p-1 text-white shadow rounded-sm w-2/6 font-bold">submit</button>
          </div>
        </div>
      )}
      <section className="m-2 text-gray-700 h-2/3">
        <div className="my-4">
          <div className="font-extrabold text-sm my-1">user1</div>
          <p className="text-xs">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
            Cum sociis natoque penatibus et ma
          </p>
        </div>
        <div className="my-4">
          <div className="font-extrabold text-sm my-1">user1</div>
          <p className="text-xs">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
            Cum sociis natoque penatibus et ma
          </p>
        </div>
        <div className="my-4">
          <div className="font-extrabold text-sm my-1">user1</div>
          <p className="text-xs">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
            Cum sociis natoque penatibus et ma
          </p>
        </div>
        <div className="my-4">
          <div className="font-extrabold text-sm my-1">user1</div>
          <p className="text-xs">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
            Cum sociis natoque penatibus et ma
          </p>
        </div>
      </section>
    </div>
  );
}

export default App;
