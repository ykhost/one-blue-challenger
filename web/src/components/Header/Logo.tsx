import { Box } from "@mui/material";

export function Logo(){
  return(
    <Box
      component="img"
      src="https://oneblue.io/wp-content/uploads/2022/03/oneblue-500-01-01.png"
      sx={{ maxWidth: 70, flexGrow: 1, display:{xs:'flex', md:'flex'}, mr:1 }}
    />
  )
}
