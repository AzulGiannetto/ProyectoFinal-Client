// import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";
// import { Posts } from "../../datos";

export default function Feed() {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
      </div>
    </div>
  );
}
