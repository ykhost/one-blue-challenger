import * as yup from 'yup'
import { Box, Stack } from '@mui/material';
import { ButtonForm, Input } from '../';
import { useFormik } from 'formik';
import { CadasterResponse, useCadaster } from '../../hooks/useCadaster';


interface FormProps {
  onCadasterReturn: () => void;
  onCadasterSubmit: (getResponse: CadasterResponse) => void;
}

const signUpFormSchema = yup.object({
  name: yup.string().required(),
  password: yup.string().required().min(6),
  password_confirmation: yup.string().oneOf([
    null, yup.ref('password')
  ], 'Passwords must be the same'),
})

export function Form({ onCadasterReturn, onCadasterSubmit}: FormProps) {
  const { cadaster } = useCadaster()

  const formik = useFormik({
    initialValues: {
      name: '',
      password: '',
      password_confirmation: ''
    },
    validationSchema: signUpFormSchema,
    onSubmit: async ({ name, password }) => {
      const getResponse = await cadaster({ name, password })
      if (!getResponse){
        return
      }
      onCadasterSubmit(getResponse)
    }
  });

  return (
    <Box component="form" onSubmit={formik.handleSubmit} sx={{ mt: 2 }}>
      <Stack spacing={2} >
        <Input
            id="name"
            name="Name"
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
        <Input
          id="password_confirmation"
          name="Confirm Password"
          type="password"
          variant="outlined"
          value={formik.values.password_confirmation}
          onChange={formik.handleChange}
          error={formik.touched.password_confirmation && Boolean(formik.errors.password_confirmation)}
          helperText={formik.touched.password_confirmation && formik.errors.password_confirmation}
        />
      </Stack>

      <Box mt={2} gap="12px" sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <ButtonForm type="submit" name="Sign Up" variant="contained"/>
        <ButtonForm name="Cancel" variant="outlined" onClick={onCadasterReturn}/>
      </Box>
    </Box>
  )
}
