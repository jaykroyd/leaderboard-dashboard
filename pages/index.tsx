import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "next/link";
import Sidebar, { SidebarItem, MenuItems } from "@/components/layout/sidebar";
import HomeIcon from "@mui/icons-material/Home";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import SettingsIcon from "@mui/icons-material/Settings";

export default function Home() {
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
              Leaderboard Dashboard
            </Typography>
          </Box>
        </Container>
      </main>
    </>
  );
}
