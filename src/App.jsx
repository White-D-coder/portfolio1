import { Routes, Route } from 'react-router-dom'
import Home from './app/page'
import ExplorePage from './app/explore/page'

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/explore" element={<ExplorePage />} />
        </Routes>
    )
}
