import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Home = () => {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    const mostraDados = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/doar/');
        setDados(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    mostraDados();
  }, []);

  const botaoExcluir = async (id) => {
    try {
      await axios.delete(`http://127.0.0.1:8000/doar/${id}`);
      const updatedDados = dados.filter(item => item.id !== id);
      setDados(updatedDados);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.tab}>
        <div style={styles.top}>
          <h1>MarketPlace</h1>
          <Link to="/Cadastrar">
            <button style={styles.btnD}>Doar</button>
          </Link>
        </div>
        <div style={styles.painel}>
                {dados.map((item) => (
          <div style={styles.item} key={item.id}>
            <img src={item.img} alt="Imagem do item" style={styles.image} />
            <div style={styles.itemDetails}>
              <h2>Nome: {item.nome}</h2>
              <p>ID: {item.id}</p>
              <p>Numero: {item.num}</p>
              <p>Cpf: {item.cpf}</p>
              <p>Descrição: {item.desc}</p>
            </div>
              <button
                style={styles.btnExcluir}
                onClick={() => botaoExcluir(item.id)}
              >
                Excluir
              </button>
          </div>
        ))}
        </div>
        <div style={styles.btnVoltarContainer}>
          <Link to="/">
            <button style={styles.btnVoltar}>Voltar</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: '#888c8b',
    backgroundRepeat: 'repeat',
    width: '100vw',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tab: {
    display: 'flex',
    flexDirection: 'column',
    width: '70vw',
    justifyContent: 'space-between',
    margin: '20px',
  },
  top: {
    display: 'flex',
    justifyContent: 'space-between',
    background: '#888c8b',
    borderRadius: 25,
    padding: '20px',
    alignItems: 'center',
    marginBottom: '20px',
  },
  painel: {
    background: 'black',
    borderRadius: 10,
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    color: 'white'
  },
  item: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: '20px',
  },
  itemDetails: {
    marginLeft: '20px',
  },
  image: {
    maxWidth: '100%',
    maxHeight: '200px',
    objectFit: 'cover',
    borderRadius: '10px',
    marginTop: '10px',
  },
  btnD: {
    backgroundColor: '#68C9FF',
    borderRadius: 25,
    padding: '10px',
    height: 40,
  },
  btnVoltarContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px',
  },
  btnVoltar: {
    backgroundColor: '#565958',
    borderRadius: 25,
    padding: '10px',
    height: 40,
    width: 100,
  },
  btnExcluir: {
    backgroundColor: 'red',
    borderRadius: 25,
    padding: '10px',
    height: 40,
    marginLeft: 'auto',
  },
};

export default Home;
