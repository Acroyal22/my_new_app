import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
import News from "./NewsCard";
import Nav from "./Nav";

const Business = () => {
  const [news, setNews] = useState(null);
  const [loading, setLoading] = useState(false);
  const [ setError] = useState(null);

  const search = () => {
    axios
      .get(
        `https://newsapi.org/v2/everything?q=business&apiKey=114e9478be6144688e67b8b398132850`
      )
      .then((res) => {
        console.log(news);
        setNews(res.data.articles);
        setLoading(true);
      })
      .catch((error) => {
        console.log(error);
        setError(error);
      });
  };
  useEffect(() => {
    search();
    // eslint-disable-next-line
  }, []);
  console.log(news);
  let newsData = <h2>We loading your page</h2>;
  if (loading) {
    newsData = news.map((mapNews, i) => <News key={i} update={mapNews} />);
  }
  return (

    <div class="container-fluid">
      <div className="head">
        <header className="header">WALL STREET BUSINESS NEWS</header>
        <Nav className="text-center"/>
      </div>

      <h2 className="text-center">
        {moment().format("dddd")} {moment().format("LL")}
      </h2>

      <section>{newsData}</section>
    </div>
  );
};
export default Business;
