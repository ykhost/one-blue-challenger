import { api } from "../service/api";

interface CadasterProps {
  name: string;
  password: string;
}

export type CadasterResponse = {
  ok: boolean;
  user: {
    name: string;
  }
}

export function useCadaster(  ) {

  async function execute({ name, password}: CadasterProps){
    try {
      const { data } = await api.post<CadasterResponse>('user/cadaster', {
        name,
        password
      });

      return data;

    } catch(err) {
      console.error(err);
    }
  }

  return {
    cadaster: ({name, password}: CadasterProps) => execute({ name, password})
  }
}
