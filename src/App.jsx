import { BrowserRouter } from 'react-router-dom'
import NavBar from "./components/navBar/NavBar.jsx"
import { Routes, Route } from 'react-router-dom'
import Teacher from "./Teacher  Page/Teacher.jsx"
import { LanguageProvider } from './context/LanguageContext'
import MainPage from '../src/MainPage.jsx'
import { Footer } from './components/footer/Footer.jsx'

const App = () => {
    return (
        <LanguageProvider>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path="/teacher" element={<Teacher />} />
                    <Route path="/" element={<MainPage />} />
                </Routes>
                <Footer />

            </BrowserRouter>
        </LanguageProvider>
    )
}

export default App
