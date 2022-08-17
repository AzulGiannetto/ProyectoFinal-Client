import NavBar from "../../components/NavBar/NavBar";
import Feed from "../../components/feed/Feed";

export default function PostMe() {
  return (
    <>
      <NavBar />
      <div className="home Container">
        <Feed />
      </div>
    </>
  );
}