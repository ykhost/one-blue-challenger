import { Grid } from "@mui/material";

export function Banner(){
  return(
    <Grid
      item
      xs={false}
      sm={4}
      md={7}
      sx={{
        backgroundImage: 'url(https://i.pinimg.com/1200x/0e/c9/7b/0ec97bb5a5259ac462b11c91f522ac13.jpg)',
        backgroundRepeat: 'no-repeat',
        backgroundColor: (t) =>
          t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    />
  )
}
