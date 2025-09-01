import React, { useState } from 'react';
import { TextField, Button, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function NewRecruitment() {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [sport, setSport] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you'd save this to a database
    console.log('New Recruitment:', { title, sport, date, location, description });
    alert('募集を作成しました！');
    navigate('/');
  };

  return (
    <>
      <Typography variant="h4" gutterBottom>
        新規募集作成
      </Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
        <TextField margin="normal" required fullWidth label="タイトル" value={title} onChange={(e) => setTitle(e.target.value)} />
        <TextField margin="normal" required fullWidth label="種目" value={sport} onChange={(e) => setSport(e.target.value)} />
        <TextField margin="normal" required fullWidth label="日時" type="datetime-local" InputLabelProps={{ shrink: true }} value={date} onChange={(e) => setDate(e.target.value)} />
        <TextField margin="normal" required fullWidth label="場所" value={location} onChange={(e) => setLocation(e.target.value)} />
        <TextField margin="normal" fullWidth label="詳細" multiline rows={4} value={description} onChange={(e) => setDescription(e.target.value)} />
        <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
          作成
        </Button>
      </Box>
    </>
  );
}

export default NewRecruitment;
