import { Paper, Box, Grid, Typography } from "@mui/material"
import { Container } from './styled';
import { useLocation } from "react-router-dom";

import { FormCadaster, FormLogin } from "../../components"
import { Banner } from "./banner";


export function Login() {
  const { pathname } = useLocation()
  const isPathRegister = (pathname === '/cadaster')

  return (
    <Container>
      <Grid container component="main" sx={{ height: '100vh' }}>

        <Banner />

        <Grid
          container
          justifyContent="center"
          alignItems="center"
          item
          xs={12}
          sm={8}
          md={5}
          component={Paper}
          elevation={6}
          square
        >
          <Box
            sx={{
              mb: 6,
              mx: {xs:5, md:8},
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Box>
              <img
                className="logo"
                src="https://oneblue.io/wp-content/uploads/2022/03/oneblue-500-01-01.png"
                alt="One Blue" />
            </Box>

            <Typography
              component="h1"
              variant="h4"
              fontSize="36px"
              textAlign="center"
              sx={{
                color:"#404048"
              }}
            >
              Welcome to One Blue
            </Typography>

            {isPathRegister ? <FormCadaster /> : <FormLogin />}

          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
