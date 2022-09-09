import "./CardInformation.css";
import { PlayCircle, PlayCircleFilledOutlined } from "@mui/icons-material";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import AllInclusiveIcon from "@mui/icons-material/AllInclusive";
import StayCurrentPortraitIcon from "@mui/icons-material/StayCurrentPortrait";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import FavoriteIcon from "@mui/icons-material/Favorite";
import React, { useEffect, useRef, useState } from "react";
import { Box, CircularProgress } from "@mui/material";

function CardInformation({ courseSelect }) {
  const refImage = useRef();
  const [FavoriteLike, setFavoriteLike] = useState(0);
  useEffect(() => {
    const EVENT = (e) => {
      if (window.pageYOffset >= 100) {
        refImage.current.style.display = "none";
      } else {
        refImage.current.style.display = "block";
      }
    };
    window.addEventListener("scroll", EVENT);
    return () => {
      window.removeEventListener("scroll", EVENT);
    };
  }, []);

  const HandleFavorite = (event) => {
    if (FavoriteLike == 0) {
      setFavoriteLike(1);
      setTimeout(() => {
        setFavoriteLike(2);
      }, 1000);
    } else {
      setFavoriteLike(1);
      setTimeout(() => {
        setFavoriteLike(0);
      }, 1000);
    }
  };
  return (
    <div className="CardInformation">
      <div className="CardInformation-component">
        <div className="image" ref={refImage}>
          <img src={courseSelect.image} />
          <div className="image-cover"></div>
          <div className="play-icon">
            <PlayCircleFilledWhiteIcon />
          </div>
        </div>
        <div className="CardInformation-body">
          <div className="CardInformation-body-price">
            E£{courseSelect.price}
          </div>
          <div className="CardInformation-body-add-like">
            <div className="CardInformation-body-add">
              <button type="button">Add to cart</button>
            </div>
            <div className="CardInformation-body-like">
              <button onClick={HandleFavorite} type="button">
                {FavoriteLike == 0 ? (
                  <FavoriteBorderIcon />
                ) : FavoriteLike == 1 ? (
                  <CircularProgress style={{width:"24px",height:"20px",color:"black"}} />
                ) : (
                  <FavoriteIcon />
                )}
              </button>
            </div>
          </div>
          <div className="CardInformation-body-buynow">
            <button type="button">Buy now</button>
          </div>
          <div className="CardInformation-body-back-guarantee">
            30-Day Money-Back Guarantee
          </div>
          <div className="course-incude">
            <div className="course-incude-title">This course includes:</div>
            <div className="course-incude-lst">
              <ul>
                <li>
                  <div className="course-incude-lst-icon">
                    <OndemandVideoIcon />
                  </div>
                  <span>14 hours on-demand video</span>
                </li>
                <li>
                  <div className="course-incude-lst-icon">
                    <InsertDriveFileIcon />
                  </div>
                  <span>1 article</span>
                </li>
                <li>
                  <div className="course-incude-lst-icon">
                    <CloudDownloadIcon />
                  </div>
                  <span>3 downloadable resources</span>
                </li>
                <li>
                  <div className="course-incude-lst-icon">
                    <AllInclusiveIcon />
                  </div>
                  <span>Full lifetime access</span>
                </li>
                <li>
                  <div className="course-incude-lst-icon">
                    <StayCurrentPortraitIcon />
                  </div>
                  <span>Access on mobile and TV</span>
                </li>
                <li>
                  <div className="course-incude-lst-icon">
                    <EmojiEventsIcon />
                  </div>
                  <span>Certificate of completion</span>
                </li>
              </ul>
            </div>
            <div className="CardInformation-body-share-gift-apply">
              <ul>
                <li>Share</li>
                <li>Gift this course</li>
                <li>Apply Coupon</li>
              </ul>
            </div>
          </div>
        </div>
        <hr style={{ margin: "0 0 10px 0" }} />
        <div className="CardInformation-training">
          <div className="CardInformation-training-title">
            Training 5 or more people?
          </div>
          <div className="CardInformation-training-content">
            Get your team access to 17,000+ top Udemy courses anytime, anywhere.
          </div>
          <button type="button" className="CardInformation-training-tryUdemy">
            Try Udemy Business
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardInformation;
