import { useState } from 'react'
import './App.css'
import { Input } from './components/Input'
import { Button } from './components/Button/style'
import { Link, useNavigate } from 'react-router-dom'
import api from './api'

function App() {
  const [name, setName] = useState('')
  const [sobrenome, setSobrenome] = useState('')
  const [edicao, setEdicao] = useState('')
  const [titulo, setTitulo] = useState('')
  const [ano, setAno] = useState('')
  const [cidade, setCidade] = useState('')
  const [area, setArea] = useState('')

   const navigate = useNavigate()
  // const token = localStorage.getItem('Token')

  async function handleSubmit(event) {
    event.preventDefault()


    try {

      if (name || sobrenome || edicao || titulo
        || area || ano || cidade === '') {
        return alert("Favor preencher todos os campos!!")
      }

      const data = {
        name, sobrenome, edicao, titulo,
        ano, cidade, area
      }

      await api.post('/register', data)

      navigate('/')
      return alert('Cadastro realizado com sucesso!')

    } catch (error) {
      console.log(error)
      return alert(`Deu erro no front ${error}`)
    }
  }

  return (
    <>
      <div style={{
        display: 'flex',
        justifyContent: 'space-around',
        width: '100%',
        background: 'gray',
        alignItems: 'center',
        paddingTop: '5px',
        paddingBottom: '6px',
        paddingLeft: '5px',
        paddingRight: '5px',
        height: '2rem'

      }}>

        <Link to="/author" style={{ color: 'white' }}>
          Buscar
        </Link>

        <Link to="/register" style={{ color: 'white' }}>
          Cadastro
        </Link>


        <Link to="/" style={{ color: 'white' }}>
          Home
        </Link>
      </div>

      <br />
      <br />

      <h2 >Cadastro de Bibliografias</h2>


      <div style={{
        display: 'flex', width: '100vw', height: '100vh',
        alignItems: 'center', justifyContent: 'center', flexDirection: 'column'
      }}>

        {/* <div style={{
      display: 'flex',
        alignItems: 'center', justifyContent: 'center', flexDirection: 'column',
        width: '100%'
      }}> */}

        {/* onSubmit={handleSubmit} */}

        <form onSubmit={() => alert("Sem permissao pra cadastrar!!")}>

            <Input placeholder="Nome" id="name" value={name}
              onChange={(e) => setName(e.target.value)} />
            
            <Input
              placeholder="Sobrenome"
              type="text"
              id="sobrenome"
              value={sobrenome}
              onChange={(e) => setSobrenome(e.target.value)}
            />
            <Input placeholder="Edição"
            
              type="text"
              id="edicao"
              value={edicao}
              onChange={(e) => setEdicao(e.target.value)}
            />

          <Input placeholder="Cidade"
              type="text"
              id="cidade"
              value={cidade}
              onChange={(e) => setCidade(e.target.value)}
            />

            <Input id="titulo" value={titulo}
              placeholder="Título"
              onChange={(e) => setTitulo(e.target.value)} />
            
            <Input id="ano" value={ano}
              placeholder="Ano"
              onChange={(e) => setAno(e.target.value)} />
            
            <Input id="area" value={area}
              placeholder="Área"
              onChange={(e) => setArea(e.target.value)} />



          <Button className="confirm-Button" type="submit">
                Cadastrar
          </Button>
        </form>
        <br />

      </div>
    </>

  )
}

export default App
