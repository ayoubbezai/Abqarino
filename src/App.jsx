import { BrowserRouter } from 'react-router-dom'
import NavBar from "./components/navBar/NavBar.jsx"
import { Routes, Route } from 'react-router-dom'
import Page2 from "./components/Page2/App.jsx"
import { LanguageProvider } from './context/LanguageContext'

const App = () => {
    return (
        <LanguageProvider>
            <BrowserRouter>
                <NavBar  />
                <Routes>
                    <Route path="/plans" element={<Page2 />} />
                </Routes>
            </BrowserRouter>
        </LanguageProvider>
    )
}

export default App
