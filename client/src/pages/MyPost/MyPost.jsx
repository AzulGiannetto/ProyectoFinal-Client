import { Box, Stack, Skeleton } from "@mui/material";
import React, { useState } from "react";
import MyPostComponent from "../../components/MyPost/MyPostComponent";
import NavBar from "../../components/NavBar/NavBar";
const MyPost = () => {
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
      </Stack>): (
      <MyPostComponent/>
      )}
    </Box>
  );
};
export default MyPost