import React, { useEffect, useState } from "react";
import axios from "axios";
import "./index.css";
import "./Style.css";
import moment from "moment";
import News from "./NewsCard";

import Nav from "./Nav";

const Home = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [ setError] = useState(null);

  useEffect(() => {
    const search = () => {
      axios
        .get(
          "https://api.nytimes.com/svc/topstories/v2/home.json?api-key=pqbCPdOdZ4DFHC0SROWjiOnNQHqA13Af"
        )
        .then((res) => {
          console.log(news);
          console.log(res.data.results);
          setNews(res.data.results);
          setLoading(true);
        })
        .catch((error) => {
          console.log(error);
          setError(error);
        });
    };
    search();
    // eslint-disable-next-line
  }, []);
  console.log(news);
  let newsData = <h2>We loading your page</h2>;
  if (loading) {
    newsData = news.map((mapNews) => <News update={mapNews} />);
  }
  return (
    <div class="container-fluid">
      <div className="head">
        <header className="header">WALL STREET NEWS</header>
        <Nav className="text-center" />
      </div>

      <h2 className="text-center">
        {moment().format("dddd")} {moment().format("LL")}
      </h2>

      <section>{newsData}</section>
    </div>
  );
};
export default Home;
