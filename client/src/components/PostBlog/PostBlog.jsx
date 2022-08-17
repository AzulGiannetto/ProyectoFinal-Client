import { MoreVert, Share } from "@mui/icons-material";
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

const Post = () => {
  const [posting, setPosting] = useState([]);
  const params = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/country/`, {
        headers: {
          Authorization: `Bearer ${JSON.parse(
            window.localStorage.getItem("Token")
          )}`,
        },
      })
      .then((res) => {
        setPosting(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return posting
    .slice(0)
    .reverse()
    .map((poster) => (
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
          title={poster.user}
          subheader="September 14, 2022"
        />
        <CardMedia
          component="img"
          height="20%"
          image={poster.imageUrl}
          alt={poster.imageUrl}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {poster.description}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="share">
            <Share />
          </IconButton>
        </CardActions>
      </Card>
    ));
};

export default Post;
