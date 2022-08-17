import axios from "axios";
import "../../pages/Profile/Profile.css"
import { useEffect, useState } from "react";
const ProfileComponent = () => {
  const [user, setUser] = useState({})
  useEffect(() => {
    const userId = JSON.parse(window.localStorage.getItem("Id"))
    axios
      .get(`http://localhost:8080/auth/${userId}`, {
        headers: {
          Authorization: `Bearer ${JSON.parse(
            window.localStorage.getItem("Token")
          )}`,
        },
      })
      .then((res) => {
        setUser(res.data)
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
              <img className="profileUserImg" src={user.profilePhoto} alt={user.firstname} />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">{user.firstname}</h4>
              <h4 className="profileInfoName">{user.username}</h4>
              <span className="profileInfoDesc">{user.description}</span>
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
