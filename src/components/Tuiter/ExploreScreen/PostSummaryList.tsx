import React from "react";
import SummaryItem from "./SummaryItem";
import exploreItems from "./posts";

const PostSummaryList = () => {
  return (
    <ul className="list-group">
      {exploreItems.map((item) => (
        <SummaryItem {...item} />
      ))}
    </ul>
  );
};

export default PostSummaryList