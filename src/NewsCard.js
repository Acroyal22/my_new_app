import React from "react";

const NewsCard = ({ update }) => {
  let {
    author,
    title,
    url,
    description,
    byline,
    abstract,
    multimedia,
    updated_date,
  } = update;

  return (
    <div className="column">
      <div>
        <div>
          <div className="imag">
            <img
              className="image"
              alt={"http://i.giphy.com/4fDWVPMoSyhgc.gif"}
              src={multimedia[0]["url"]}
            />
          </div>
          <div className="headline">TITLE : {title}</div>
          <div>{description}</div>

          <div>ABSTRACT : {abstract}</div>

          <div>{author}</div>

          <div>MORE INFO : {url}</div>

          <div>PUBLISHER : {byline}</div>
          <div>DATE : {updated_date}</div>
        </div>
      </div>
    </div>
  );
};
export default NewsCard;
