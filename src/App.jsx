import { BrowserRouter } from 'react-router-dom'
import NavBar from "./components/navBar/NavBar.jsx"
import { Routes, Route } from 'react-router-dom'
import Page2 from "./components/Page2/App.jsx"
import { LanguageProvider } from './context/LanguageContext'
import { Footer } from './components/footer/Footer.jsx'

const App = () => {
    return (
        <LanguageProvider>
            <BrowserRouter>
                <NavBar  />
                <div  className='h-[60vh]'>
                <Routes>
                    <Route path="/plans" element={<Page2 />} />
                </Routes>
                </div>
                <Footer />
            </BrowserRouter>
        </LanguageProvider>
    )
}

export default App
