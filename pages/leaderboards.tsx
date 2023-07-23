import React from 'react';
import { Container, Button, Typography, Box, List, ListItem, ListItemText } from '@mui/material';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { NextRouter, useRouter } from 'next/router';
import ListItemButton from '@mui/material/ListItemButton';
import { useEffect, useState } from 'react';
import LeaderboardTable from '@/components/layout/leaderboard_table';
import Sidebar, { MenuItems } from '@/components/layout/sidebar';

export default function Leaderboards() {
  const router = useRouter();
  const [leaderboards, setLeaderboards] = useState<Leaderboard[]>([]);

  const listLeaderboards = () => {
    fetch('/api/list_leaderboards')
      .then(resp => resp.json())
      .then(data => {
        console.log(data);
        setLeaderboards(data?.leaderboards || []);
      })
      .catch(err => {
        console.error(err);
      });

    console.log('Create leaderboard button clicked');
  };

  const createLeaderboard = async () => {
    fetch('/api/create_leaderboard')
      .then(resp => resp.json())
      .then(data => setLeaderboards(data))
      .catch(err => console.error(err));
  };

  useEffect(() => {
    listLeaderboards();
  }, [router]);

  return (
    <>
      <Sidebar sidebarItems={MenuItems} />
      <main>
        <Container maxWidth="lg" sx={{ marginLeft: `${240}px` }}>
          <Box sx={{ my: 4 }}>
            <Box
              sx={{
                my: 4,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Typography variant="h4" component="h1" gutterBottom>
                Leaderboards
              </Typography>
              <Button variant="contained" onClick={createLeaderboard}>
                Create Leaderboard
              </Button>
            </Box>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <LeaderboardTable leaderboards={leaderboards} />
          </Box>
        </Container>
      </main>
    </>
  );
}
