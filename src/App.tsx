import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';

import Home from './pages/Home';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import NewRecruitment from './pages/NewRecruitment';
import RecruitmentDetails from './pages/RecruitmentDetails';
import MyPage from './pages/MyPage';

function App() {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              MeetPoint
            </Link>
          </Typography>
          <Button color="inherit" component={Link} to="/login">
            Login
          </Button>
          <Button color="inherit" component={Link} to="/signup">
            Sign Up
          </Button>
          <Button color="inherit" component={Link} to="/recruitments/new">
            Create Recruitment
          </Button>
          <Button color="inherit" component={Link} to="/mypage">
            My Page
          </Button>
        </Toolbar>
      </AppBar>
      <Container sx={{ mt: 4 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/recruitments/new" element={<NewRecruitment />} />
          <Route path="/recruitments/:id" element={<RecruitmentDetails />} />
          <Route path="/mypage" element={<MyPage />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
