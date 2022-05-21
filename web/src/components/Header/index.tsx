import { AppBar, Toolbar, Container } from '@mui/material'
import { Logo } from './Logo';
import { Profile } from './Profile';

export function Header() {
  return (
    <AppBar position="static" sx={{ bgcolor: "#ffff", borderBottom: "1px solid", boxShadow: 0 }}>
      <Container maxWidth="xl" >
        <Toolbar disableGutters sx={{ display: "flex", justifyContent: "space-between" }}>

          <Logo />

          <Profile />

        </Toolbar>
      </Container>
    </AppBar>
  );
};
