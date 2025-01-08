import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Teacher from "./pages/Teacher  Page/Teacher.jsx";
import { LanguageProvider } from './context/LanguageContext';
import MainPage from '../src/MainPage.jsx';
import ScrollToTop from './components/helpful/ScrollToTop.jsx';
import PageNotFound from './pages/pageNotFound/PageNotFound.jsx';

const App = () => {
    return (
        <LanguageProvider>
            <BrowserRouter>
                <ScrollToTop />

                <Routes>
                    <Route path="/teacher" element={<Teacher />} />
                    <Route path="/" element={<MainPage />} />
                    <Route path="*" element={<PageNotFound />} />

                </Routes>

            </BrowserRouter>
        </LanguageProvider>
    );
};

export default App;
