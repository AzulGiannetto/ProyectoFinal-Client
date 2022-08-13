import NavBar from "../../components/NavBar/NavBar";
import Feed from "../../components/feed/Feed";

export default function Home() {
  return (
    <>
      <NavBar />
      <div className="homeContainer">
        <Feed />
      </div>
    </>
  );
}