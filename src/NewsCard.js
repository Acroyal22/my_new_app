import React from "react";

const NewsCard = ({ update }) => {
  let {
    author,
    name,
    title,
    url,
    description,
    publishedAt,
    abstract,
    multimedia,
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
          <div className="headline">{title}</div>
          <div>{description}</div>
          <div>{publishedAt}</div>
          <div className="content">{abstract}</div>
          <div>{name}</div>
          <div>{author}</div>

          <div>{url}</div>
        </div>
      </div>
    </div>
  );
};
export default NewsCard;
