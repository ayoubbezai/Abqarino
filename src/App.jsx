import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Teacher from "./Teacher  Page/Teacher.jsx";
import { LanguageProvider } from './context/LanguageContext';
import MainPage from '../src/MainPage.jsx';
import { Footer } from './components/footer/Footer.jsx';
import ScrollToTop from './components/helpful/ScrollToTop.jsx';

const App = () => {
    return (
        <LanguageProvider>
            <BrowserRouter>
                <ScrollToTop />

                <Routes>
                    <Route path="/teacher" element={<Teacher />} />
                    <Route path="/" element={<MainPage />} />
                </Routes>

                <Footer />
            </BrowserRouter>
        </LanguageProvider>
    );
};

export default App;
