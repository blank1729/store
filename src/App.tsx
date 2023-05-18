import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<div className='text-6xl underline text-blue-600'>Hello</div>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
