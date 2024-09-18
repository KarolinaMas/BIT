import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Video from "./components/Video";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Video
      videoID="P6FORpg0KVo"
      autoplay={1}
      color={"white"}
      controls={1}
      // start={10}
      // end={15}
      loop={1}
      // thumbnaill={rand(0, 29)}
    />
    <Video videoID="kKvK2foOTJM" thumbnaill={rand(0, 29)} />
  </React.StrictMode>
);

function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}
