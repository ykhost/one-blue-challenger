import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../../components";
import { useAuthContext } from "../../contexts/AuthContext";

export function Home(){
  const { isAuthenticated } = useAuthContext();
  const navigate = useNavigate()

  useEffect(() => {
    const Authenticated = isAuthenticated()
    if(!Authenticated){
      navigate('/login')
    }
  }, [])

  return (
    <Header />
  )
}
