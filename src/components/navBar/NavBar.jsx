import { Link } from "react-router-dom"
import { useState, useContext } from "react"
import { LanguageContext } from "../../context/LanguageContext"
import logo from "../../assets/logo.png"
import ukFlag from "../../assets/flags/gb.png"
import saFlag from "../../assets/flags/sa.png"

const NavBar = () => {
    const { language, setLanguage } = useContext(LanguageContext)
    const [isOpen, setIsOpen] = useState(false)

    const toggleLanguage = (lang) => {
        setLanguage(lang)
        setIsOpen(false)
    }

    return (
        <nav className="bg-blue-dark shadow-md shadow-blue-dark/30 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-row justify-between h-16 items-center">
                    {/* Logo Section */}
                    <div className="flex-shrink-0 mt-4">
                        <img src={logo} alt="Logo" className="h-24 w-24" />
                    </div>

                    {/* Navigation Links */}
                    <div className={`hidden md:flex ${language === 'ar' ? 'flex-row-reverse' : 'flex-row'} gap-6 items-center`}>
                        <Link
                            to="/"
                            className="text-white hover:text-blue-light px-3 py-2 rounded-md text-sm font-medium transition-colors"
                        >
                            {language === 'ar' ? 'الرئيسية' : 'Home'}
                        </Link>
                        <Link
                            to="/about"
                            className="text-white hover:text-blue-light px-3 py-2 rounded-md text-sm font-medium transition-colors"
                        >
                            {language === 'ar' ? 'الخطط' : 'Plans'}
                        </Link>
                        <Link
                            to="/about-us"
                            className="text-white hover:text-blue-light px-3 py-2 rounded-md text-sm font-medium transition-colors"
                        >
                            {language === 'ar' ? 'تعرف علينا' : 'About Us'}
                        </Link>
                        <Link
                            to="/contact"
                            className="text-white hover:text-blue-light px-3 py-2 rounded-md text-sm font-medium transition-colors"
                        >
                            {language === 'ar' ? 'تواصل معنا' : 'Contact Us'}
                        </Link>
                    </div>

                    {/* Language Switcher and CTA Button */}
                    <div className="flex items-center gap-4">
                        <div className="relative">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="text-white hover:text-blue-light text-sm font-medium transition-colors flex items-center gap-2"
                            >
                                <img
                                    src={language === 'ar' ? saFlag : ukFlag}
                                    alt={language === 'ar' ? 'SA' : 'UK'}
                                    className="w-5 h-3 object-cover"
                                />
                                {language === 'ar' ? 'عربي' : 'English'} ▼
                            </button>

                            {isOpen && (
                                <div className="absolute mt-2 py-2 w-32 bg-white rounded-md shadow-lg">
                                    <button
                                        onClick={() => toggleLanguage('ar')}
                                        className="block w-full text-right px-4 py-2 text-sm text-gray-700 hover:bg-blue-light hover:text-white flex items-center gap-2"
                                    >
                                        <img src={saFlag} alt="SA" className="w-5 h-3 object-cover" />
                                        عربي
                                    </button>
                                    <button
                                        onClick={() => toggleLanguage('en')}
                                        className="block w-full text-right px-4 py-2 text-sm text-gray-700 hover:bg-blue-light hover:text-white flex items-center gap-2"
                                    >
                                        <img src={ukFlag} alt="UK" className="w-5 h-3 object-cover" />
                                        English
                                    </button>
                                </div>
                            )}
                        </div>
                        <Link
                            to="/plans"
                            className="bg-blue-light text-white px-4 py-2 rounded-md text-sm font-medium
                                         hover:bg-blue-bright transition-colors duration-200">
                            {language === 'ar' ? 'اختر خطة' : 'Choose a plan'}
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar
