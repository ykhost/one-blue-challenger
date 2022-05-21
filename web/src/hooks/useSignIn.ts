import { setCookie } from "nookies";
import { api } from "../service/api";

export interface SignInProps {
  ok: boolean;
  login: string;
}

type SignInCredentialsProps = {
  name: string;
  password: string;
}

export function useSignIn(){

  async function execute({ name, password }: SignInCredentialsProps) {
    try {
      const { data } = await api.post<SignInProps>('login',  {
        name,
        password
      })

      setCookie(undefined, 'auth.session', data.ok.toString(), {
        maxAge: 20, //2 Minutes,
        path: '/'
      })

      return data
    }catch(err) {
      console.log(err);
      return {
        ok: false,
        login: ''
      }
    }
  }

  return {
    signIn: ({name, password}:SignInCredentialsProps) => execute({ name, password})
  }
}
