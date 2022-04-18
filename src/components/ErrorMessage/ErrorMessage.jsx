import React from "react";
import UiVideo from "../UI/UiVideo/UiVideo";
import video from "./Video/han-solo.mp4";
import styles from "./ErrorMessage.module.css";

const ErrorMessage = () => {
  return (
    <>
      <p className={styles.text}>
        The dark side of th force has won. <br />
        We cannot display data. <br />
        Come back when we fix everything.
      </p>
      <UiVideo src={video} classes={styles.video} playbackRate={1.0} />
    </>
  );
};

export default ErrorMessage;
