import React from 'react';
import { ModeNight} from '@mui/icons-material'
import {
    Box,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    Switch,
  } from "@mui/material";

const SideBar = ({mode,setMode}) => {
  return (
    <Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
    <Box position="fixed">
      <List>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#simple-list">
            <ListItemIcon>
              <ModeNight />
            </ListItemIcon>
            <Switch onChange={e=>setMode(mode === "light" ? "dark" : "light")}/>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  </Box>
);
}

export default SideBar
