import { useContext } from "react"
import { sectionThree } from "../../../data"
import { LanguageContext } from "../../../context/LanguageContext"
import sectionThreeImage from "../../../assets/sections/image3.jpg"
import Button from "../../common/Button"

const SectionThree = () => {
    const { language } = useContext(LanguageContext)
    return (
        <div className="flex flex-col my-24">
            <div className={`md:flex ${language === "en" && "flex-row-reverse"} justify-evenly`}>
                <div className="flex justify-center">
                    <img
                        src={sectionThreeImage}
                        alt="hero"
                        className="w-[25rem] h-auto rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 mb-4 md:mb-12"
                    />
                </div>
                <div className="md:flex flex-col text-center align-middle">
                    <h1 className={`text-2xl md:text-4xl mb-8 font-bold text-blue-dark text-center ${language === 'ar' ? 'md:text-right' : 'md:text-left'}`}>
                        {sectionThree.title[language]}
                    </h1>
                    <ul className={`space-y-2 text-gray-600 text-center ${language === 'ar' ? 'md:text-right' : 'md:text-left'}`}>
                        {sectionThree.description[language].map((item, index) => (
                            <li key={index} className={`flex items-center ${language === 'ar' ? 'justify-end' : 'justify-start'} gap-2 text-base ${language === 'ar' ? 'pr-10' : 'pl-10'}`}>
                                {language === 'ar' && <span className="text-base">{item}</span>}
                                <span className="text-blue-light">•</span>
                                {language === 'en' && <span className="text-base">{item}</span>}
                            </li>
                        ))}
                    </ul>
                    <div className={`mt-6`}>
                        <Button className="bg-blue-light hover:bg-blue-bright/90">
                            {language === 'ar' ? 'اكتشف المزيد' : 'Learn More'}
                        </Button>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default SectionThree
