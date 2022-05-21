import { createContext, ReactNode, useContext } from "react";
import { parseCookies  } from "nookies"

type AuthContextData = {
  isAuthenticated: () => boolean;
};

type AuthProviderProps = {
  children: ReactNode;
};

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps){
  function isAuthenticated () {
      const { 'auth.session': token } = parseCookies()
      var isToken = (token === "true")
      return(isToken)
  }


  return (
    <AuthContext.Provider value={{ isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuthContext() {
  const context = useContext(AuthContext);
  return context
}
