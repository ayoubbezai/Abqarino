import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Teacher from "./Teacher Page/Teacher.jsx";
import { LanguageProvider } from './context/LanguageContext';
import MainPage from './MainPage.jsx';
import { Footer } from './components/footer/Footer.jsx';
import ScrollToTop from './components/helpful/ScrollToTop.jsx';

const App = () => {
    return (
        <LanguageProvider>
            <Router>
                <ScrollToTop />

                <Routes>
                    <Route path="/teacher" element={<Teacher />} />
                    <Route path="/" element={<MainPage />} />
                </Routes>

                <Footer />
            </Router>
        </LanguageProvider>
    );
};

export default App;
