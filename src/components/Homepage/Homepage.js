import React from "react";
import LatestNews from "./LatestNews/LatestNews";
import Hotnews from "./Hotnews/Hotnews";
import "./Homepage.css";

function Homepage() {
  return (
    <div>
      <div className="news-container">
        <div className="latest-news-container">
          <LatestNews />
        </div>

        <div className="hottopic-container">
          <Hotnews />
        </div>
      </div>
    </div>
  );
}

export default Homepage;
