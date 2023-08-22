type Usuario = {
  nome: string;
  email: string;
  cpf: string;
  rg: string;
  dataNacimento?: string;
};

const cadastrarUsuário = (info: Usuario): Usuario => {
  return info;
};

type UsuarioAtualizacao = Omit<Usuario, "rg">;

const atualizarUsuario = (info: UsuarioAtualizacao): Partial<Usuario> => {
  return info;
};
