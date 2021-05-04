import React from "react";

const NewsCard = ({ update }) => {
  let {
    author,
    source,
    title,
    url,
    description,
    publishedAt,
    content,
    urlToImage,
  } = update;

  return (
    <div className="column">
      <div>
        <div>
          <div className="imag">
            <img
             className="image"
             
              alt={"http://i.giphy.com/4fDWVPMoSyhgc.gif"}
              src={urlToImage}
            />
          </div>
          <div className="headline">{title}</div>
          <div>{description}</div>
          <div>{publishedAt}</div>
          <div className="content">{content}</div>
          <div>{source.name}</div>
          <div>{author}</div>

          <div>{url}</div>
        </div>
      </div>
    </div>
  );
};
export default NewsCard;
