import { useState } from 'react'
import './App.css'
import Cakes from './assets/components/Cakes'
import {BrowserRouter, Route, Routes, NavLink} from 'react-router-dom'
import { CartProvider } from 'react-use-cart'
import Header from './assets/components/Header'
function App() {
  const [count, setCount] = useState(0)


  return (
    <>
      <CartProvider>

                <BrowserRouter>
                <nav>
                  <Header />
                </nav>
                  <main>
                    <Cakes />
                  </main>

                  

                </BrowserRouter>

      </CartProvider>
      

      
      
    </>
  )
}

export default App
