import { describe } from '@jest/globals';
import AuthService from '../../services/authService';

const authService = new AuthService();
/*
- O usuario deve possuir um nome, email e senha
- A senha do usuario precisa ser criptorgrafada quando for salva no banco de dados
- Nao pode ser cadastrado um usuario com email duplicado
- Ao cadastrar um usuario deve ser retornado uma mensagem informando que o usuario foi cadastrado
- Ao cadastrar um usuario validar retorno do usuario
*/

describe('Testando a authService.cadastrarUsuario', () => {
  it('O usuario deve possuir um nome, email e senha', async () => {
    // arrange
    const usuarioMock = {
      nome: 'Andre',
      email: 'andre@gmail.com',
    };

    // act
    const usuarioSalvo = authService.cadastrarUsuario(usuarioMock);

    // assert
    await expect(usuarioSalvo).rejects.toThrowError('A senha de usuário é obrigatório!');
  });
});
