import React from 'react'
import { useState } from 'react'
//import axios from 'axios'
import {Outlet} from "react-router-dom"
import { Link } from 'react-router-dom'
import axios from 'axios'

const Cadastrar = () => {
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [num, setNum] = useState('');
  const [desc, setDesc] = useState('');
  const [img, setImg] = useState('');
  const [id, setId] = useState('');

  const limparCampos = () => {
    setNome('');
    setCpf('');
    setNum('');
    setDesc('');
    setImg('');
    setId('');
  };

  const InserirNaAPI = async () => {
    try {
      const url = 'http://127.0.0.1:8000/doar/';
      const formData = new FormData();
      formData.append('nome', nome);
      formData.append('num', num);
      formData.append('cpf', cpf);
      formData.append('desc', desc);
      formData.append('img', img);
      formData.append('id', id);
  
      const response = await axios.post(url, formData);
      console.log(response.data);
      limparCampos();
    } catch (error) {
      console.error(error);
    }
  };
  
  return (
    <div style={styles.container}>
        <h1 style={styles.title}>Cadastrar</h1>
        Nome<br></br>
        <input style={styles.input} type="text" value={nome} onChange={(e) => setNome(e.target.value)}/><br></br>
        Numero<br></br>
        <input style={styles.input} type="text" value={num} onChange={(e) => setNum(e.target.value)}/><br></br>
        Cpf<br></br>
        <input style={styles.input}  type="number" value={cpf} onChange={(e) => setCpf(e.target.value)}/><br></br>
        ID<br></br>
        <input style={styles.input}  type="number" value={id} onChange={(e) => setId(e.target.value)}/><br></br>
        Descrição<br></br>
        <input style={styles.input}  type="text" value={desc} onChange={(e) => setDesc(e.target.value)}/>
        <br></br>
        Imagem<br></br>
        <input style={styles.input} type="file" onChange={(e) => setImg(e.target.files[0])} />
        <br></br>
          <button onClick={InserirNaAPI}>
            Cadastrar
          </button>
        <Link to="/Home">
          <br></br>
          <button>
            Voltar
          </button>
        </Link>
        </div>

  )
}


export default Cadastrar


const styles = {
  container: {
    position: 'relative',
    flexDirection: 'column',
    alignItems: 'center',
    border: '1px solid black',
    padding: '20px',
    left:'180%',
  },
  input: {
    width: '200px',
    height: '30px',
    fontSize: '16px',
    marginBottom: '10px',
  },
  title: {
    fontFamily: 'Myriad Pro Regular',
  },
};
