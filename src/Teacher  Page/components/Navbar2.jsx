import { useContext, useState } from "react"
import { LanguageContext } from "../../context/LanguageContext"
import saFlag from "../../assets/flags/sa.png"
import ukFlag from "../../assets/flags/gb.png"
import { Link } from "react-router-dom"

const Navbar2 = () => {
    const { language, setLanguage } = useContext(LanguageContext)
    const [isOpen, setIsOpen] = useState(false)
  return (
      <div className="flex flex-row-reverse px-8  items-center justify-between">
          <div className="relative">
              <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="text-blue-dark hover:text-blue-light text-sm font-medium transition-colors flex items-center gap-2 mt-2"
              >
                  <img
                      src={language === 'ar' ? saFlag : ukFlag}
                      alt={language === 'ar' ? 'عربي' : 'English'}
                      className="w-5 h-3 object-cover"
                  />
                  {language === 'ar' ? 'عربي' : 'English'} ▼
              </button>

              {isOpen && (
                  <div className="absolute mt-2 py-2 w-32 bg-white rounded-md shadow-lg">
                      <button
                          onClick={() => {setLanguage('ar'); setIsOpen(false)}}
                          className="block w-full text-right px-4 py-2 text-sm text-gray-700 hover:bg-blue-light hover:text-white flex items-center gap-2"
                      >
                          <img src={saFlag} alt="SA" className="w-5 h-3 object-cover" />
                          عربي
                      </button>
                      <button
                          onClick={() => {setLanguage('en'); setIsOpen(false)}}
                          className="block w-full text-right px-4 py-2 text-sm text-gray-700 hover:bg-blue-light hover:text-white flex items-center gap-2"
                      >
                          <img src={ukFlag} alt="UK" className="w-5 h-3 object-cover" />
                          English
                      </button>
                  </div>
              )}
          </div>

          <Link to="/"
              className="bg-blue-light text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-bright"
          >
              {language === 'ar' ? 'العودة الى الرئيسية' : 'Return to Home'}
          </Link>
      </div>
  )
}

export default Navbar2
