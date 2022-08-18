import { MoreVert } from "@mui/icons-material";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";

const PostCard = ({ data, setGetAgain }) => {
  const handleDelete = () => {
    axios
      .delete(`http://localhost:8080/api/country/${data._id}`, {
        headers: {
          Authorization: `Bearer ${JSON.parse(
            window.localStorage.getItem("Token")
          )}`,
        },
      })
      .then((res) => {
        setGetAgain(true);
        alert("se borro la publicación");
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <Card sx={{ margin: 15 }}>
        <CardHeader
          avatar={
            <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
          }
          action={
            <IconButton aria-label="settings">
              <MoreVert />
            </IconButton>
          }
          title={data.user}
          subheader="September 14, 2022"
        />
        <CardMedia
          component="img"
          height="20%"
          image={data.imageUrl}
          alt={data.imageUrl}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {data.description}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton onClick={handleDelete} aria-label="share">
            <DeleteIcon />
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
};

const MyPostComponent = () => {
  const [posting, setPosting] = useState([]);
  const [getAgain, setGetAgain] = useState(false);
  useEffect(() => {
    const username = JSON.parse(window.localStorage.getItem("User"));
    axios
      .get(`http://localhost:8080/api/country?user=${username}`, {
        headers: {
          Authorization: `Bearer ${JSON.parse(
            window.localStorage.getItem("Token")
          )}`,
        },
      })
      .then((res) => {
        setGetAgain(false);
        setPosting(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (getAgain) {
      const username = JSON.parse(window.localStorage.getItem("User"));
      axios
        .get(`http://localhost:8080/api/country?user=${username}`, {
          headers: {
            Authorization: `Bearer ${JSON.parse(
              window.localStorage.getItem("Token")
            )}`,
          },
        })
        .then((res) => {
          setGetAgain(false);
          setPosting(res.data);
          console.log(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [getAgain]);
  return posting
    .slice(0)
    .reverse()
    .map((poster, index) => (
      <PostCard key={index} data={poster} setGetAgain={setGetAgain} />
    ));
};
export default MyPostComponent;
