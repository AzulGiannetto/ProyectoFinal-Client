import "./share.css";
import { PermMedia, Label, Room, EmojiEmotions } from "@mui/icons-material";
import axios from "axios";
import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";

export default function Share() {
  const [description, setDescription] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [post, setPost] = useState([]);
  const [user, setUser] = useState("");

  const handleDescription = (e) => {
    setDescription(e.preventDefault());
  };

  const handleImageUrl = (e) => {
    setImageUrl(e.preventDefault());
  };

  const dataPost = {
    imageUrl: imageUrl,
    description: description,
    user: user,
  };
  const handleClickPost = async (e) => {
    e.preventDefault();
    await axios
      .post(`http://localhost:8080/api/country/`, dataPost, {
        headers: {
          Authorization: `Bearer ${JSON.parse(
            window.localStorage.getItem("Token")
          )}`,
        },
      })
      .then((res) => {
        const userPost = setUser(
          JSON.parse(window.localStorage.getItem("User"))
        );

        if (user === userPost) {
          setPost(res.data);
        }
        console.log(res.data);
      })
      .catch((e) => console.log(e));
  };

  return (
    <div>
      <Grid
        container
        spacing={2}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: "97.5vh" }}
      >
        <Typography align="center" variant="h3" sx={{ color: "#02a663" }}>
          Post Me
        </Typography>
        <Grid item xs={3}>
          <TextField
            onChange={handleDescription}
            id="outlined-multiline-flexible"
            label="What's in your mind?"
            fullWidth
            value={post.description}
            style={{ marginBottom: "2em" }}
            InputProps={{ sx: { height: 150 } }}
            sx={{
              input: {
                backgroundColor: "#0C0C0C",
                color: "#0fb66e",
                height: 125,
              },
              label: {
                height: "300px",
                color: "#02a663",
              },
            }}
          />
          <TextField
            value={post.imageUrl}
            onChange={handleImageUrl}
            fullWidth
            id="outlined-textarea"
            label="Description"
            placeholder="Placeholder"
            style={{ marginBottom: "2em" }}
            sx={{
              input: {
                backgroundColor: "#0C0C0C",
                color: "#0fb66e",
              },
              label: {
                color: "#02a663",
              },
            }}
          />
        </Grid>
        <Stack spacing={2}>
          <Button
            onClick={handleClickPost}
            style={{ backgroundColor: "#0fb66e", color: "#000000" }}
          >
            Share Post
          </Button>
        </Stack>
      </Grid>
    </div>
  );
}
