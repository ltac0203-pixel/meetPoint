import React, { useState } from 'react';
import { TextField, Button, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function SignUp() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [university, setUniversity] = useState('');
  const [sport, setSport] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you'd send this to a server
    console.log('New User:', { name, university, sport });
    alert('ユーザー登録が完了しました！');
    navigate('/');
  };

  return (
    <>
      <Typography variant="h4" gutterBottom>
        ユーザー登録
      </Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="name"
          label="サークル名"
          name="name"
          autoFocus
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="university"
          label="大学名"
          name="university"
          value={university}
          onChange={(e) => setUniversity(e.target.value)}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="sport"
          label="種目"
          name="sport"
          value={sport}
          onChange={(e) => setSport(e.target.value)}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          登録
        </Button>
      </Box>
    </>
  );
}

export default SignUp;
