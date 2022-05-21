
import { Box, Grid, Link, Stack } from '@mui/material';
import { ButtonForm, Input } from '../';
import { Container } from './styled';
import * as yup from 'yup'

import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik';
import { useSignIn, SignInProps } from '../../hooks/useSignIn';
import { useState } from 'react';


const signInFormSchema = yup.object({
  name: yup.string().required(),
  password: yup.string().required()
})

export function FormLogin(){
  const [ isErrorSignIn, setIsErrorSignIn ] = useState(true)
  const navigate = useNavigate();
  const { signIn } = useSignIn()

  const formik = useFormik({
    initialValues: {
      name: '',
      password: ''
    },
    validationSchema: signInFormSchema,
    onSubmit: async ({ name, password },{resetForm}) =>{
      const getResponse = await signIn({name, password});
      resetForm();

      if(!getResponse){
        return
      }
      handleSubmitLogin(getResponse)
    }
  });

  function handleSubmitLogin(getResponse: SignInProps ) {
    const { ok } = getResponse
    setIsErrorSignIn(ok)
    if (ok){
      navigate('/home')
    }
    console.log(ok)
  }

  function handleSignUp (){
    navigate(`/cadaster`)
  }

  return(
    <Container>
      <Box component="form" onSubmit={formik.handleSubmit} sx={{ mt: 2 }}>

        <Stack spacing={2} >
          <Input
            id="name"
            name="E-mail"
            type="text"
            variant="outlined"
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />

          <Input
            id="password"
            name="Password"
            type="password"
            variant="outlined"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
        </Stack>

        <Grid container justifyContent="center" item xs mt={3} mb={2} fontSize="1.5rem" textAlign="center">
            {!isErrorSignIn ?
              <Link href="/home" variant="body2" sx={{color: 'red'}}>
                Incorrect username or password, <br/>Forgot password?
              </Link>
              :
              <Link href="/home" variant="body2">
                Forgot password?
              </Link>
            }
        </Grid>

        <Box gap="12px" sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <ButtonForm type="submit" name="Sign In" variant="contained"/>
          <ButtonForm name="Sign Up" variant="outlined" onClick={handleSignUp}/>
        </Box>
      </Box>
    </Container>
  )
}

