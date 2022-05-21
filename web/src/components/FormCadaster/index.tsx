import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import { Container } from './styled';
import { CadasterResponse } from '../../hooks/useCadaster';
import { SucessSubmit } from './SucessSubmit';
import { Form } from './Form';


export function FormCadaster() {
  const [isSuccessSubmit, setIsSuccessSubmit] = useState(false)
  const [userName, setUserName] = useState('')

  const navigate = useNavigate();

  function handleReturn() {
    navigate(`/login`)
  }

  function handleSuccessSubmit (getResponse: CadasterResponse){
    const { ok, user } = getResponse
    setIsSuccessSubmit(ok)
    setUserName(user.name)
  }

  return (
    <Container>
      { isSuccessSubmit ?
        <SucessSubmit userName={userName}/>
        :
        <Form onCadasterReturn={handleReturn} onCadasterSubmit={handleSuccessSubmit}/>
      }
    </Container>
  )
}
