import { Link } from 'react-router-dom'
import { LanguageContext } from '../../context/LanguageContext'
import { useContext } from 'react'

const App = () => {
    const { language } = useContext(LanguageContext)
    return (
        <div className="mt-4 ml-4">
            <Link to="/"
                className="bg-blue-light text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-bright"
            > {language === 'ar' ? 'العودة الى الرئيسية' : 'Return to Home'}</Link>
        </div>

    )
}

export default App
