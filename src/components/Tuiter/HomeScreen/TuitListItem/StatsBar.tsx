import classNames from "classnames";
import React from "react";
import { makeStyles } from "@mui/styles";

interface Stats {
  comments: number;
  retuits: number;
  likes: number;
}

interface Props {
  stats: Stats;
  liked: boolean;
}

const useStyles = makeStyles({
  container: {
    marginTop: "16px",
    marginBottom: "8px",
    display: "flex",
    justifyContent: "space-between",
    marginRight: "15%",
  },
  filledRed: {
    color: "#ff0000",
  },
});

export const StatsBar: React.FC<Props> = ({ stats, liked }) => {
  const classes = useStyles();
  const { comments, retuits, likes } = stats;
  return (
    <div className={classes.container}>
      <span>
        <i className="fa fa-comment"></i>&nbsp;{comments}
      </span>
      <span>
        <i className="fa fa-retweet"></i>&nbsp;{retuits}
      </span>
      <span>
        <i
          className={classNames("fa fa-heart", { [classes.filledRed]: liked })}
        ></i>
        &nbsp;{likes}
      </span>
      <i className="fa fa-share"></i>
    </div>
  );
};
