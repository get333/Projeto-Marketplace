import React, { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

const Login = () => {
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');
  const [erroLogin, setErroLogin] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    if (login === 'admin' && senha === 'admin') {
      // Autenticação bem-sucedida, redirecione para a página desejada
      navigate('/Home'); // Substitua "/dashboard" pelo caminho da página após o login
    } else {
      // Credenciais incorretas, exiba uma mensagem de erro
      setErroLogin(true);
    }
  };

  return (
    <>
      <h1 style={style.title}>Login</h1>
      <br />
      <input
        style={style.input}
        placeholder="Nome"
        type="text"
        onChange={(e) => setLogin(e.target.value)}
      />
      <br />
      <br />
      <input
        style={style.input}
        placeholder="Senha"
        type="password"
        onChange={(e) => setSenha(e.target.value)}
      />
      <br />
      <button style={style.button} onClick={handleLogin}>
        Entrar
      </button>
      {erroLogin && <p style={style.error}>Credenciais incorretas. Por favor, tente novamente.</p>}
      <Outlet />
    </>
  );
};

export default Login;

const style = {
  input: {
    position: 'relative',
    width: '170px',
    height: '40px',
    fontSize: 15,
    left: '330%',
  },
  title: {
    position: 'absolute',
    fontFamily: 'Myriad Pro Regular',
    left: '45%',
    top: '23%',
  },
  button: {
    position: 'absolute',
    left: '46%',
    bottom: '30%',
  },
  error: {
    position: 'absolute',
    color: 'red',
    left: '38%',
    bottom: '24%',
  },
};
