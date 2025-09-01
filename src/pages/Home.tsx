import React from 'react';
import { Link } from 'react-router-dom';
import { List, ListItem, ListItemButton, ListItemText, Typography } from '@mui/material';

// Mock data for now
const mockRecruitments = [
  { id: '1', title: 'テニスの練習試合相手募集！', sport: 'テニス', date: new Date('2025-09-10T10:00:00') },
  { id: '2', title: 'サッカーの試合しませんか？', sport: 'サッカー', date: new Date('2025-09-12T14:00:00') },
];

function Home() {
  return (
    <>
      <Typography variant="h4" gutterBottom>
        募集中一覧
      </Typography>
      <List>
        {mockRecruitments.map((rec) => (
          <ListItem key={rec.id} disablePadding>
            <ListItemButton component={Link} to={`/recruitments/${rec.id}`}>
              <ListItemText 
                primary={rec.title} 
                secondary={`${rec.sport} - ${rec.date.toLocaleString('ja-JP')}`} 
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default Home;
