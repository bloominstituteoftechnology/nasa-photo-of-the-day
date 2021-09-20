import React, { useState, useEffect } from "react";
import axios from "axios";
import MediaTitle from "./MediaTitle";
import ImageContainer from "../ImageContainer/ImageContainer";
import VideoContainer from "../VideoContainer/VideoContainer";
import MediaCaption from "./MediaCaption";
import Date from "../Date/Date";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import styled from "styled-components";

const LikeWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LikeDescription = styled.p`
  padding: 0 0 0 2%;
`;

export default function MediaContainer() {
  const [media, setMedia] = useState("");
  const [date, setDate] = useState("");
  const [likes, setLikes] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    setDate(document.querySelector("#date").value);
  };

  const handleLike = (e) => {
    e.target.classList.toggle("like-red");

    if (e.target.classList.value.includes("like-red")) {
      setLikes(likes + 1);
      e.target.style.color = "red";
    } else {
      setLikes(likes - 1);
      e.target.style.color = "black";
    }
  };

  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=WysXP93cjIhjta8of3yl1NSC8hX3rUD3qaQMMadd&date=${date}`
      )
      .then((result) => {
        setMedia(result.data);
      });
  }, [date]);

  return (
    <div className="mediaContainer">
      <Date handleSubmit={handleSubmit} />

      <MediaTitle title={media.title} />
      <LikeWrapper>
        <FontAwesomeIcon
          icon={faHeart}
          onClick={(e) => handleLike(e)}
          className="faHeart"
        />
        <LikeDescription>{likes} likes</LikeDescription>
      </LikeWrapper>
      {media.media_type === "video" ? (
        <VideoContainer video={media} />
      ) : (
        <ImageContainer image={media} />
      )}
      <MediaCaption caption={media.explanation} />
    </div>
  );
}
