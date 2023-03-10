import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import api from './api'
import './App.css'

function Register() {
  const [url, setUrls] = useState([])

  async function handleUrls() {
    const {data} = await api.get('/all')

    setUrls(data)

  }

  useEffect(() => {
    handleUrls()
  }, [])

  return (
    <div style={{
      display: 'flex', width: '100%',
      alignItems: 'center', justifyContent: 'center', flexDirection: 'column'
    }}>
      <Link to="/author">
        Buscar
      </Link>
      <br />


      <Link to="/register">
        Cadastro
      </Link>
      <br />
      <br />
      {url.map(items => {
        return (
          <div key={items.id}>
          <span style={{fontSize: '18px'}} > {items.sobrenome + ', ' + items.name + ',   '
            +  items.area + ':   '
            + items.titulo + ', ' + items.cidade + ', ' + items.ano + ', '
            + items.edicao + '.' }</span>
            <br />
            <br />
          </div>
        )
      })}
     
    </div>
  )
}

export default Register
