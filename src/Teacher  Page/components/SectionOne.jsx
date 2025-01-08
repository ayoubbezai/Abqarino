import { useContext } from "react"
import { sectionOnePartTwo } from "../../data"
import { LanguageContext } from "../../context/LanguageContext"
import sectionOneImage from "../../assets/logo/logo2.png"

const SectionOne = () => {
    const { language } = useContext(LanguageContext)
    return (
        <div className="flex flex-col mt-12 mb-8">
            <div className={`md:flex ${language === "en" && "flex-row-reverse"} justify-evenly`}>
                {/* Text Content */}
                <div className="md:hidden flex flex-col text-center align-middle mt-12">
                    <h1 className={`text-2xl md:text-4xl my-8 font-bold text-blue-dark text-center`}>
                        {sectionOnePartTwo.title[language]}
                    </h1>
                    <p className={`text-gray-600 text-base md:w-96 self-center px-8 md:px-0 text-center leading-relaxed`}>
                        {sectionOnePartTwo.description[language]}
                    </p>
                </div>

                {/* Image */}
                <div className="flex justify-center">
                    <img
                        src={sectionOneImage}
                        alt="hero"
                        className="w-80 h-auto rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 mb-4 md:mb-12"
                    />
                </div>

                {/* Desktop Text Content */}
                <div className="hidden md:flex flex-col text-center align-middle mt-12">
                    <h1 className={`text-2xl md:text-4xl my-8 font-bold text-blue-dark text-center ${language === 'ar' ? 'md:text-right' : 'md:text-left'}`}>
                        {sectionOnePartTwo.title[language]}
                    </h1>
                    <p className={`text-gray-600 text-base md:w-96 self-center px-8 md:px-0 text-center leading-relaxed`}>
                        {sectionOnePartTwo.description[language]}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default SectionOne
