import classNames from "classnames";
import React from "react";
import { makeStyles } from "@mui/styles";
import { useAppDispatch } from "../../store";
import { updateTuit } from "../../reducers/actions/tuitsActions";

interface Stats {
  comments: number;
  retuits: number;
  likes: number;
}

interface Props {
  stats: Stats;
  liked: boolean;
  tuit: any
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

export const StatsBar: React.FC<Props> = ({ stats, liked, tuit }) => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  // const { comments, retuits, likes } = stats;
  const comments = stats?.comments ?? 0
  const retuits = stats?.retuits ?? 0
  const likes = stats?.likes ?? 0

  console.log('rerendering')
  const likeTuit = async() => updateTuit(dispatch, {
    ...tuit,
    liked: !liked,
    stats: {
      ...stats,
      likes: likes + 1,
    }
  })

  return (
    <div className={classes.container}>
      <span>
        <i className="fa fa-comment"></i>&nbsp;{comments}
      </span>
      <span>
        <i className="fa fa-retweet"></i>&nbsp;{retuits}
      </span>
      <span onClick={likeTuit}>
        <i
          className={classNames("fa fa-heart", { [classes.filledRed]: liked })}
        ></i>
        &nbsp;{likes}
      </span>
      <i className="fa fa-share"></i>
    </div>
  );
};
