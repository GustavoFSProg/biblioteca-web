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
      alignItems: 'center', justifyContent: 'center', flexDirection: 'column'
      }}>
        
        <form onSubmit={handleSubmit}>
          <div style={{
            display: 'flex', width: '26rem', 
            alignItems: 'center', justifyContent: 'center',
            flexDirection: 'column'
          }}>
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


              {/* <Button className="confirm-Button" type="submit">
                Cadastrar
              </Button> */}
           
          </div>
        </form>
        <br />
        <br />
        <Link to="/" >
          Home
        </Link>
      </div>
    </>

  )
}

export default App
