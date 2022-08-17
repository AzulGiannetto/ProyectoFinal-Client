import React, { useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import ProfileComponent from "../../components/Profile/ProfileComponent";
// import axios from "axios"

export default function Profile() {
    // const [data, setData] = useState("")
  return (
    <>
      <NavBar />
      <ProfileComponent/>
    </>
  );
}
