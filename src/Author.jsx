import { useState } from 'react'
import './App.css'
import { Input } from './components/Input'
import { Button } from './components/Button/style'
import { Link, useNavigate } from 'react-router-dom'
import api from './api'


function Author() {
  const [name, setName] = useState('')
  const [sobrenome, setSobrenome] = useState('')
  const [dados, setDados] = useState({})


  // const navigate = useNavigate()
  // const token = localStorage.getItem('Token')

  async function handleSubmit(event) {
    event.preventDefault()

    try {
      // const data = {
      //   name,
      //   sobrenome,

      // }

      const doidas = await api.get(`/get-author/${name}`)

      setDados(doidas.data)

      console.log(doidas.data)

      // navigate('/author')
      // return alert('Cadastro realizado com sucesso!')

      return dados
    } catch (error) {
      console.log(error)
      return alert(`Deu erro no front ${error}`)
    }
  }

  return (
    <>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
      >
        <form onSubmit={handleSubmit}>
          <div
            style={{
              display: 'flex',
              width: '26rem',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
            }}
          >



            <Input
              placeholder="Nome"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />



            <Button className="confirm-Button" type="submit">
              Buscar por Nome
            </Button>
            {/* <br />
            <br />
            <Input
              placeholder="Sobrenome"
              type="text"
              id="sobrenome"
              value={sobrenome}
              onChange={(e) => setSobrenome(e.target.value)}
            />

            <Button className="confirm-Button" type="submit">
              Buscar por Sobrenome
            </Button> */}
          </div>
        </form>
        <br />
        <span>
          <strong style={{ marginRight: '9px' }}>
            Nome:
          </strong>
          {dados.name}
        </span>
        <br />


        <span>
          <strong style={{ marginRight: '9px' }}>
            Sobrenome:
          </strong>
          {dados.sobrenome}
        </span>
        <br />

        <span>
          <strong style={{ marginRight: '9px' }}>  Titulo:  </strong>  {dados.titulo}
        </span>
        <br />
        <Link to="/">Home</Link>
      </div>
    </>
  )
}

export default Author
