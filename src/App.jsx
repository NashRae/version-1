import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'
import { MainLayout } from './layouts/MainLayout'
import { Home } from './pages/Home'
import { Talent } from './pages/Talent'
import { Companies } from './pages/Companies'
import { Apply } from './pages/Apply'
import { Mission } from './pages/Mission'
import { About } from './pages/About'
import { Contact } from './pages/Contact'

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/talent" element={<Talent />} />
          <Route path="/companies" element={<Companies />} />
          <Route path="/apply" element={<Apply />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </MainLayout>
      <Analytics />
    </BrowserRouter>
  )
}

export default App
