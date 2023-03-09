import { BrowserRouter, Routes, Route } from "react-router-dom"
import App from "./App"
import Register from "./Register"

function Routers() {
  return (
    <BrowserRouter >
      <Routes>
        <Route path="/" exact element={<App />} />
        <Route path="/register"  element={<Register />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Routers