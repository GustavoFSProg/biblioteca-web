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


      <h2 style={{ marginBottom: '70px' }}>Pesquisa por Autor</h2>


      <div style={{
        display: 'flex', width: '100vw', height: '100vh',
        alignItems: 'center', justifyContent: 'center',
        marginTop: '-150px',
        flexDirection: 'column'
      }}>

      <form
        onSubmit={handleSubmit}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          width: '31%',
        }}
      >
        {/* <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
            }}
          > */}

        <Input
          placeholder="Nome"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          // onChange={"Chico"}

          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
          }}
        />
        {/*
        <Input
          placeholder="Nome"
          type="checkbox"
          id="aaa"
          value={(e) => setName("Chico")}

          onChange={name}
          // onChange={(e) => setName(e.target.value)}

          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
          }}
        /> */}

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
        {/* </div> */}
      </form>
      <br />
      <div style={{ marginTop: '2px' }}>

        <span >
          <strong style={{ marginRight: '9px' }}>Nome:</strong>
          {dados.name}
        </span>
      </div>

      <br />
      <div style={{ marginTop: '-20px' }}>
        <span style={{ marginBottom: '13px' }}>
          <strong style={{ marginRight: '9px' }}>Sobrenome:</strong>
          {dados.sobrenome}
        </span>
      </div>

      <br />
      <div style={{ marginTop: '-20px' }}>
        <span>
          <strong style={{ marginRight: '9px' }}>Área:</strong>
          {dados.area}
        </span>
      </div>

      <br />

      <div style={{ marginTop: '-20px' }}>

        <span>
          <strong style={{ marginRight: '9px' }}>Ano:</strong>
          {dados.ano}
        </span>
        <br />
      </div>

      <div style={{ marginTop: '5px' }}>

        <span>
          <strong style={{ marginRight: '9px' }}> Titulo: </strong> {dados.titulo}
        </span>
      </div>


      <div style={{ marginTop: '5px' }}>

        <span>
          <strong style={{ marginRight: '9px' }}> Edição: </strong> {dados.edicao}
        </span>
      </div>

      <div style={{ marginTop: '5px' }}>

        <span>
          <strong style={{ marginRight: '9px' }}> Cidade: </strong> {dados.cidade}
        </span>
        </div>
      </div>


      <br />
      <br />
    </>

  )
}

export default Author
