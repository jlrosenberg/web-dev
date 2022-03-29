import React from "react";
import { useState } from "react";
import { makeStyles } from "@mui/styles";
import classNames from "classnames";
import { useAppDispatch } from "../store";

const PROFILE_PIC_URL_TEMP =
  "https://i0.wp.com/www.followchain.org/wp-content/uploads/2021/09/best-discord-profile-pictures-7.png?resize=256%2C256&ssl=1";

const useStyles = makeStyles({
  container: {
    display: "flex",
    marginBottom: '16px'
  },
  profilePicture: {
    borderRadius: "50%",
    height: "50px",
    width: "50px",
    marginRight: "16px",
  },
  bottomRow: {
    display: "flex",
    justifyContent: "space-between",
  },
  textarea: {
    width: "100%",
    backgroundColor: 'transparent',
    color: "#ffffff"
  },
  content: {
    width: "100%",
  },
  icon: {
    marginRight: "8px",
    color: '#2a9fd6'
  },
  tuitButton: {
    maxWidth: '100px'
  }
});

export const CreateTuitField = () => {
  const [text, setText] = useState<string>();
  const classes = useStyles();
  const dispatch = useAppDispatch()

  const onTuitButtonClicked = () => {
    dispatch({
      type: 'create-tuit',
      tuit: text
    })
  };

  const onTuitTextChanged = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };


  return (
    <div className={classes.container}>
      <div>
        <img
          src={PROFILE_PIC_URL_TEMP}
          alt="profile"
          className={classes.profilePicture}
        />
      </div>
      <div className={classes.content}>
        <textarea
          placeholder="What's Happening?"
          onChange={onTuitTextChanged}
          className={classes.textarea}
        ></textarea>
        <div className={classes.bottomRow}>
          <div>
            <i className={classNames("fa fa-image", classes.icon)}></i>
            <i className={classNames("fa fa-chart-area", classes.icon)}></i>
            <i className={classNames("fa fa-smile", classes.icon)}></i>
            <i className={classNames("fa fa-calendar", classes.icon)}></i>
          </div>
          <button onClick={onTuitButtonClicked} className={classNames("btn btn-primary btn-block rounded-pill", classes.tuitButton)}>Tuit</button>
        </div>
      </div>
    </div>
  );
};
