import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Typography, Button, Paper, Box, Divider } from '@mui/material';

// Mock data
const mockRecruitment = { 
  id: '1', 
  title: 'テニスの練習試合相手募集！', 
  sport: 'テニス', 
  date: new Date('2025-09-10T10:00:00'), 
  location: '〇〇大学テニスコート',
  description: '経験者、初心者問わず歓迎です！',
  user: { name: 'A大学テニスサークル' },
  applicants: [
    { id: 'app1', user: { name: 'B大学テニスサークル' }, status: 'pending' },
  ]
};

function RecruitmentDetails() {
  const { id } = useParams();
  // In a real app, you'd fetch the recruitment by id
  const recruitment = mockRecruitment; 

  if (!recruitment) {
    return <Typography>募集が見つかりません。</Typography>;
  }

  const handleApply = () => {
    // In a real app, create an application
    alert('応募しました！');
  };

  const handleApprove = (applicantId: string) => {
    // In a real app, update application status
    alert(`${applicantId} を承認しました！`);
  };
  
  const handleConfirm = () => {
    // In a real app, update recruitment status
    alert('マッチングを確定しました！');
  }

  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>{recruitment.title}</Typography>
      <Typography variant="h6">募集元: {recruitment.user.name}</Typography>
      <Typography>種目: {recruitment.sport}</Typography>
      <Typography>日時: {recruitment.date.toLocaleString('ja-JP')}</Typography>
      <Typography>場所: {recruitment.location}</Typography>
      <Typography sx={{ mt: 2 }}>{recruitment.description}</Typography>
      
      <Box sx={{ mt: 3 }}>
        {/* This button would be conditional based on user auth */}
        <Button variant="contained" onClick={handleApply}>応募する</Button>
      </Box>

      <Divider sx={{ my: 3 }} />

      {/* This section would be visible only to the recruiter */}
      <Typography variant="h5">応募一覧</Typography>
      {recruitment.applicants.length > 0 ? (
        recruitment.applicants.map(app => (
          <Box key={app.id} sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
            <Typography sx={{ flexGrow: 1 }}>{app.user.name} ({app.status})</Typography>
            <Button size="small" onClick={() => handleApprove(app.id)}>承認</Button>
          </Box>
        ))
      ) : (
        <Typography>まだ応募はありません。</Typography>
      )}
      <Button variant="contained" color="primary" onClick={handleConfirm} sx={{mt: 2}}>
        マッチング確定
      </Button>
    </Paper>
  );
}

export default RecruitmentDetails;
