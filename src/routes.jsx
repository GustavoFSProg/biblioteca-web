import { BrowserRouter, Routes, Route } from "react-router-dom"
import App from "./App"
import Author from "./Author"
import Register from "./Register"

function Routers() {
  return (
    <BrowserRouter >
      <Routes>
        <Route path="/" exact element={<App />} />
        <Route path="/register" element={<Register />} />
        <Route path="/author" element={<Author />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Routers

