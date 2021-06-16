import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import { useHistory } from "react-router-dom";

const API = "https://api.jsonbin.io/b/60b8605392af611956fb8587";
const DEFAULT_IMAGE = "https://www.gstatic.com/webp/gallery/1.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    overflow: "hidden",
    backgroundColor: "black",
    padding: "5%",
  },
  videosTitle: {
    fontSize: "3rem",
    color: "white",
  },
  videoContent: {
    color: "white",
    position: "relative",
    paddingRight: "1%",
  },
  videoList: {
    display: "flex",
    marginTop: "3%",
    overflow: "auto",
  },
  ranking: {
    position: "absolute",
    top: 0,
    background: "yellow",
    width: "17%",
    padding: "1%",
    color: "black",
    display: "flex",
  },
  eposide: {
    position: "absolute",
    background: "rgba(0, 0, 0, 0.5)",
    color: "white",
    width: "30%",
    marginTop: "-7%",
    display: "flex",
    justifyContent: "center",
  },
  img: {
    height: "50%",
  },
}));

const VideoListing = () => {
  const classes = useStyles();
  const [data, setData] = useState([]);
  const [title, setTitle] = useState("");
  const history = useHistory();

  const imageFallback = (ev) => {
    ev.target.src = DEFAULT_IMAGE;
  };
  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const { items, title } = data;
        setData(items);
        setTitle(title);
      });
  }, []);

  const chooseVideoHandler = (video) => {
    history.push("/player", video);
  };

  return (
    <div className={classes.root}>
      <div className={classes.videosTitle}>{title}</div>
      <div className={classes.videoList}>
        {data.map((d, index) => {
          return (
            <div
              key={index}
              className={classes.videoContent}
              onClick={() => chooseVideoHandler(d)}
            >
              <img
                className={classes.img}
                src={d.imageURL}
                alt=""
                onError={imageFallback}
              />
              <div className={classes.ranking}>
                <div>{`No.${index}`}</div>
                <ArrowDropUpIcon />
              </div>
              <div className={classes.eposide}>第一集</div>
              <div>{d.title}</div>
              <div>韓劇</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default VideoListing;
