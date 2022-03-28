/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react'
import { makeStyles } from '@mui/styles'
import classNames from 'classnames';
interface Props {
  videoId: string;
}

const useStyles = makeStyles({
  videoContainer: {
    marginTop: '4px',
    borderRadius: '8px'
  }
})


const EmbeddedVideoPlayer: React.FC<Props> = ({videoId}) => {
  const classes = useStyles()
  return (
    <div className={classNames("embed-responsive embed-responsive-16by9", classes.videoContainer)}>
      <iframe
        className="embed-responsive-item"
        src={`https://www.youtube.com/embed/${videoId}`}
        allowFullScreen
      />
    </div>
  )
}

export default EmbeddedVideoPlayer