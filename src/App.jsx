import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import api from './api'
import './App.css'

const List = styled.div`
  display: flex;
  width: 100vw;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media screen and (max-width: 800px){
  width: 99%;

  }
`

function Register() {
  const [url, setUrls] = useState([])

  async function handleUrls() {
    const { data } = await api.get('/all')

    setUrls(data)
  }

  useEffect(() => {
    handleUrls()
  }, [])

  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          width: '100%',
          background: 'gray',
          alignItems: 'center',
          paddingTop: '5px',
          paddingBottom: '6px',
          paddingLeft: '5px',
          paddingRight: '5px',
          height: '2rem',
        }}
      >
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

      <div
        style={{
          display: 'flex',
          width: '100%',
          justifyContent: 'flex-start',
          flexDirection: 'column',
          height: '100vh',
          marginTop: '80px',
        }}
      >
        <div
          style={{
            display: 'flex',
            width: '100vw',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            marginBottom: '60px',
          }}
        >
          <h2>Lista de Bibliografias</h2>
        </div>

        <List >
          {url.map((items) => {
            return (
              <div key={items.id}>
                <span style={{ fontSize: '18px' }}>
                  {' '}
                  {items.sobrenome +
                    ', ' +
                    items.name +
                    ',   ' +
                    items.area +
                    ':   ' +
                    items.titulo +
                    ', ' +
                    items.cidade +
                    ', ' +
                    items.ano +
                    ', ' +
                    items.edicao}
                </span>
                <br />
                <br />
              </div>
            )
          })}
        </List>
      </div >
    </>
  )
}

export default Register
