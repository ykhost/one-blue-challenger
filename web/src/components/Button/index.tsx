import { Button, ButtonProps, ButtonPropsVariantOverrides } from '@mui/material'
import { OverridableStringUnion } from '@mui/types'


interface ButtonFormProps extends ButtonProps {
  name: string;
  variant: OverridableStringUnion<
    'text' | 'outlined' | 'contained',
    ButtonPropsVariantOverrides
  >;
  onClick?: () => void;
}

export function ButtonForm({name, variant, onClick, ...rest}: ButtonFormProps){

  if (variant === 'outlined'){
    return (
      <Button
        fullWidth
        variant={variant}
        sx={{ height:"59px", mb:2, border:3, borderRadius:"15px", fontWeight:'bold' }}
        onClick={onClick}
        {...rest}
      >
      {name}
    </Button>
    )
  }

  return(
    <Button
      fullWidth
      variant={variant}
      sx={{ height:"59px", mb:2, borderRadius:"15px", fontWeight:'bold' }}
      onClick={onClick}
      {...rest}
    >
      {name}
    </Button>
  )
}
