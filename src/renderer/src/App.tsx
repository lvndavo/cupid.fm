import { HashRouter, Routes, Route } from 'react-router-dom'
import { Home, Begin } from './pages'

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/begin" element={<Begin />} />
      </Routes>
    </HashRouter>
  )
}

export default App
