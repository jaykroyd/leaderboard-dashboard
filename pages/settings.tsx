import React from "react";
import { Container, Button, Typography, Box, List, ListItem, ListItemText } from "@mui/material";
import { useRouter } from "next/router";
import Sidebar, { MenuItems } from '@/components/layout/sidebar';
import HomeIcon from "@mui/icons-material/Home";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import SettingsIcon from "@mui/icons-material/Settings";

export default function Settings() {
  const router = useRouter();

  return (
    <>
      <Sidebar sidebarItems={MenuItems} />
      <main>
        <Container maxWidth="lg">
          <Box
            sx={{
              my: 4,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography variant="h4" component="h1" gutterBottom>
              Settings
            </Typography>
          </Box>
        </Container>
      </main>
    </>
  );
}