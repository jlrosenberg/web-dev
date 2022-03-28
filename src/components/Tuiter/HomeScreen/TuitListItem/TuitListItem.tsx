import React from "react";
import { tuits } from "../../data/tuits";
import { makeStyles } from "@mui/styles";
import EmbeddedVideoPlayer from "./EmbeddedVideoPlayer";
import { StatsBar } from "./StatsBar";

// I'm lazy so instead of typing out the interface for a Tuit
// like I should, I'll just infer the type from the list of starter
// tuits that the professor gave us
const sampletuit = tuits[0];
type TuitType = typeof sampletuit;

interface Props {
  tuit: TuitType;
}

const useStyles = makeStyles({
  root: {
    display: "flex",
    backgroundColor: "#222222",
    padding: '12px',
    border: '1px solid #232323',
    borderBottom: '1px solid #333333',
  },
  profilePicture: {
    borderRadius: "50%",
    height: "50px",
    width: "50px",
    marginRight: '8px',
    marginBottom: '8px',
  },
  tuitContainer: {},
  container: {},
  userName: {
    color: "#ffffff",
    fontWeight: "700",
    marginRight: '4px',
  },
  handle: {},
  tuitText: {
    color: "#ffffff",
  }
});

const PROFILE_PIC_URL_TEMP =
  "https://i0.wp.com/www.followchain.org/wp-content/uploads/2021/09/best-discord-profile-pictures-7.png?resize=256%2C256&ssl=1";

export const TuitListItem: React.FC<Props> = ({ tuit }) => {
  const {
    liked,
    handle,
    tuit: tuitText,
    stats,
    postedBy: { username },
    attachments
  } = tuit;
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <img
        src={PROFILE_PIC_URL_TEMP}
        alt="profile"
        className={classes.profilePicture}
      ></img>
      <div className="tuitContainer">
        <div className="topline">
          <span className={classes.userName}>{username}</span>
          <span className={classes.handle}>@{handle}</span>
        </div>
        <div>
          <span className={classes.tuitText}>
            {tuitText}
          </span>
          {attachments?.video && (<EmbeddedVideoPlayer videoId={attachments.video} />)}
          {/* TODO get a working example of an attachment image and make sure it styles right */}
          {attachments?.image && (<img src={attachments.image} alt="attachment" />)}
          <StatsBar stats={stats} liked={liked} />
        </div>
      </div>
    </div>
  );
};
