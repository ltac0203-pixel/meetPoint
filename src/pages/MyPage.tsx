import React from 'react';
import { Typography, List, ListItem, ListItemText, Divider } from '@mui/material';

// Mock data
const mockUser = {
  name: 'A大学テニスサークル',
  university: 'A大学',
  sport: 'テニス',
};
const mockRecruitments = [
  { id: '1', title: 'テニスの練習試合相手募集！', status: 'confirmed' },
];
const mockApplications = [
  { id: 'app2', recruitmentTitle: 'サッカーの試合しませんか？', status: 'pending' },
];

function MyPage() {
  return (
    <>
      <Typography variant="h4" gutterBottom>マイページ</Typography>
      
      <Typography variant="h5">プロフィール</Typography>
      <Typography>サークル名: {mockUser.name}</Typography>
      <Typography>大学: {mockUser.university}</Typography>
      <Typography>種目: {mockUser.sport}</Typography>

      <Divider sx={{ my: 3 }} />

      <Typography variant="h5">自分の募集</Typography>
      <List>
        {mockRecruitments.map(rec => (
          <ListItem key={rec.id}>
            <ListItemText primary={rec.title} secondary={`ステータス: ${rec.status}`} />
          </ListItem>
        ))}
      </List>

      <Divider sx={{ my: 3 }} />

      <Typography variant="h5">応募した募集</Typography>
      <List>
        {mockApplications.map(app => (
          <ListItem key={app.id}>
            <ListItemText primary={app.recruitmentTitle} secondary={`ステータス: ${app.status}`} />
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default MyPage;
