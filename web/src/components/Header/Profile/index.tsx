import { Box, Typography } from "@mui/material";
import { MenuAvatar } from "./MenuAvatar";


export function Profile(){
  return (
    <Box sx={{ display:'inline-flex', alignItems: 'center' }} >

      <Box mr="1.5rem" color="#9e9e9e" textAlign="right" sx={{ display: {xs: 'none', md: 'block'}}}>
        <Typography color="#616161">Andre Heringer</Typography>
        <Typography fontSize="small">andre.heringer@oneblue.com</Typography>
      </Box>

      <MenuAvatar />

    </Box>
  )
}
