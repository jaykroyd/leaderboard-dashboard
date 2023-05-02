import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "next/link";
import Sidebar, { SidebarItem } from "@component/components/layout/Sidebar";
import HomeIcon from "@mui/icons-material/Home";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import SettingsIcon from "@mui/icons-material/Settings";

export default function Home() {
  const menuItems: SidebarItem[] = [
    { name: "Home", icon: <HomeIcon /> },
    { name: "Leaderboards", icon: <LeaderboardIcon /> },
    { name: "Settings", icon: <SettingsIcon /> },
  ];

  return (
    <>
      <Sidebar sidebarItems={menuItems} />
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
              Leaderboard Dashboard
            </Typography>
          </Box>
        </Container>
      </main>
    </>
  );
}
