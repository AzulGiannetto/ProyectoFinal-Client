import axios from "axios";
import { useEffect, useState } from "react";
const ProfileComponent = ({ data }) => {
  useEffect(() => {
    const profile = {
      firstname: "",
      username: JSON.parse(window.localStorage.getItem("User")),
      description: "",
      profilePhoto: "",
    };
    axios
      .get(`http://localhost:8080/auth/register`, profile, {
        headers: {
          Authorization: `Bearer ${JSON.parse(
            window.localStorage.getItem("Token")
          )}`,
        },
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.error(err));
  });
  return (
    <>
      <div className="profile">
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                // src={require("../../assets/fondo.jpg")}
                alt=""
              />
              <img className="profileUserImg" src={data.profilePhoto} alt="" />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">{data.firstname}</h4>
              <h4 className="profileInfoName">{data.username}</h4>
              <span className="profileInfoDesc">{data.description}</span>
            </div>
          </div>
          <div className="profileEditButton"></div>
          <div className="profileDeleteButton"></div>
        </div>
      </div>
    </>
  );
};
export default ProfileComponent;
