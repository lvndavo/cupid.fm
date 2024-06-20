import { HashRouter, Routes, Route } from 'react-router-dom'
import { Home, Begin, SongSearchOptions } from './pages'

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/begin" element={<Begin />} />
        <Route path="/songsearchoptions" element={<SongSearchOptions />} />
      </Routes>
    </HashRouter>
  )
}

export default App
