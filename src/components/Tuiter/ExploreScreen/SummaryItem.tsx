import React from "react";

interface Props {
  topic: string;
  userName: string;
  time: string;
  title: string;
  image: string;
  tweets?: string;
}

const SummaryItem: React.FC<Props> = ({
  topic,
  userName,
  time,
  title,
  image,
  tweets,
}) => {
  // const topic = post.topic
  //   ? `<div className="post-topic light-gray-font">${post.topic}</div>`
  //   : ``;

  // const tweets = post.tweets
  //   ? `<div className="light-gray-font">${post.tweets} tueets</div>`
  //   : "";

  return (
    <li className="list-group-item">
      <div className="row">
        <div className="col-10">
          {topic && <div className="post-topic light-gray-font">{topic}</div>}
          <div>
            {userName && (
              <>
                <strong>{userName}</strong>{" "}
                <i className="fas fa-check-circle"> </i>
                <span className="light-gray-font">&nbsp;· </span>
              </>
            )}
            <span className="light-gray-font">{time}</span>
          </div>
          <div>
            <strong>{title}</strong>
          </div>
          {tweets && <div className="light-gray-font">{tweets} tueets</div>}
        </div>
        <div className="col-2">
          <img
            src={image}
            alt="post"
            className="img-fluid"
            style={{minWidth: '100%'}}
          />
        </div>
      </div>
    </li>
  );
};

export default SummaryItem;
