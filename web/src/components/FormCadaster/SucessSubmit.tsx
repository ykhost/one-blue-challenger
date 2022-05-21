import { Box, Typography } from "@mui/material";
import { ButtonForm } from "../Button";
import { useNavigate } from "react-router-dom";

interface userProps {
  userName: string;
}

export function SucessSubmit({ userName }: userProps) {
  const navigate = useNavigate()

  function handleSignIn(){
    navigate('/login')
  }

  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: 'center', justifyContent: 'center', textAlign: 'center', mt: 4}}>
      <Typography variant="h4">{userName}</Typography>
      <Typography>Congratulations, you have been successfully registered.</Typography>
      <Box sx={{mt: 4, width: '15rem' }}>
        <ButtonForm name="Sign In" variant="outlined" onClick={handleSignIn}/>
      </Box>
    </Box>
  )
}
