import { Box, Stack, Skeleton } from "@mui/material";
import React, { useState } from "react";
import Post from "../../components/Post";
import NavBar from '../../components/NavBar/NavBar'

const Feed = () => {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, [3000]);

  return (
    <Box flex={4} p={{ xs: 0, md: 2 }}>
      <NavBar />
      {loading ? (
        <Stack spacing={1}>
          <Skeleton variant="text" height={100} />
          <Skeleton variant="text" height={20} />
          <Skeleton variant="text" height={20} />
          <Skeleton variant="rectangular" height={250} />
        </Stack>
      ) : (
        <>
          <Post />
          <Post />
          <Post />
          <Post />
        </>
      )}
    </Box>
  );
};

export default Feed;