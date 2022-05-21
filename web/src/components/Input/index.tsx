import { TextField, OutlinedTextFieldProps } from "@mui/material";
import { forwardRef, ForwardRefRenderFunction } from "react";

interface InputProps extends OutlinedTextFieldProps {
  name: string;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps>
  = ({name, ...rest}, ref) => {
  return (
    <TextField
      fullWidth
      ref={ref}
      sx={{
        borderRadius:"15px"
      }}
      label={name}
      {...rest}
    />
  )
}

export const Input = forwardRef(InputBase)
