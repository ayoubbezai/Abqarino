import { useContext } from "react"
import { sectionTwo } from "../../../data"
import { LanguageContext } from "../../../context/LanguageContext"
import sectionTwoImage from "../../../assets/sections/image2.jpg"

const SectionTwo = () => {
    const { language } = useContext(LanguageContext)
    return (
        <div className="flex flex-col mt-20 mb-10 ">
            <div className={`md:flex ${language === "ar" && "flex-row-reverse"} justify-evenly`}>
                <div className="flex justify-center">
                    <img
                        src={sectionTwoImage}
                        alt="hero"
                        className="w-80 h-auto rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 mb-4 md:mb-12"
                    />
                </div>
                <div className="md:flex flex-col text- mt-8 align-middle mr-10">
                    <h1 className={`text-2xl md:text-4xl my-8 font-bold text-blue-dark text-center ${language === 'ar' ? 'md:text-right' : 'md:text-left'}`}>
                        {sectionTwo.title[language]}
                    </h1>
                    <ul className={`space-y-2 text-gray-600 text-center ${language === 'ar' ? 'md:text-right' : 'md:text-left'} `}>
                        {sectionTwo.description[language].map((item, index) => (
                            <li key={index} className={`flex items-center ${language === 'ar' ? 'justify-end' : 'justify-start'} gap-2 text-base ${language === 'ar' ? 'pr-10' : 'pl-10'}`}>
                                {language === 'ar' && <span className="text-base">{item}</span>}
                                <span className="text-blue-light">•</span>
                                {language === 'en' && <span className="text-base">{item}</span>}
                            </li>
                        ))}
                    </ul>


                </div>
            </div>
        </div>
    )
}

export default SectionTwo
