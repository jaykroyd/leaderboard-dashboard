import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { NextRouter, useRouter } from 'next/router';
import { Container, Button, Typography, Box, List, ListItem, ListItemText } from '@mui/material';

const headers: Header[] = [
  { name: 'ID', key: 'id' },
  { name: 'Name', key: 'name' },
  { name: 'Mode', key: 'mode' },
  { name: 'Capacity', key: 'capacity' },
  { name: 'Created At', key: 'created_at' },
  { name: 'Updated At', key: 'updated_at' },
];

interface Header {
  key: string;
  name: string;
}

interface LeaderboardTableProps {
  leaderboards: Leaderboard[];
}

function LeaderboardTable({ leaderboards }: LeaderboardTableProps) {
  const router = useRouter();
  
  const getCellValueByHeader = (header: Header, leaderboard: Leaderboard) => {
    const translateModeName = (value: number): string => {
      switch (value) {
        case 0:
          return 'Highscore';
        case 1:
          return 'Incremental';
        default:
          return 'n/a';
      }
    };

    const value = leaderboard[header.key as keyof Leaderboard];
    return header.key !== 'mode' ? value : translateModeName(value as number);
  };

  return (
    <TableContainer component={Paper} sx={{ marginTop: 4 }}>
      <Table>
        <TableHead sx={{ backgroundColor: '#d6d6d6' }}>
          <TableCell key={'index'}>
            <Typography>
              <b>#</b>
            </Typography>
          </TableCell>
          {headers.map(header => (
            <TableCell key={header.key}>
              <Typography>
                <b>{header.name}</b>
              </Typography>
            </TableCell>
          ))}
        </TableHead>
        <TableBody>
          {leaderboards.map((leaderboard, index) => (
            <TableRow
              key={leaderboard.id}
              hover
              onClick={() => router.push(`/leaderboards/${leaderboard.id}`)}
              sx={{ cursor: 'pointer' }}
            >
              <TableCell key={index}>{index + 1}</TableCell>
              {headers.map(header => (
                <TableCell key={header.key}>
                  {getCellValueByHeader(header, leaderboard)}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default LeaderboardTable;
