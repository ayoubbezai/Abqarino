import { useContext } from "react"
import { sectionOne } from "../../../data"
import { LanguageContext } from "../../../context/LanguageContext"
import sectionOneImage from "../../../assets/sections/image1.jpg"
import Button from "../../common/Button"

const SectionOne = () => {
    const { language } = useContext(LanguageContext)
    return (
        <div className="flex flex-col mt-12">
            <div className={`md:flex ${language === "en" && "flex-row-reverse"} justify-evenly`}>
                <div className="flex justify-center">
                    <img
                        src={sectionOneImage}
                        alt="hero"
                        className="w-80 h-auto rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 mb-4 md:mb-12"
                    />
                </div>
                <div className="md:flex flex-col text-center align-middle">
                    <h1 className={`text-2xl md:text-4xl my-8 font-bold text-blue-dark text-center ${language === 'ar' ? 'md:text-right' : 'md:text-left'}`}>
                        {sectionOne.title[language]}
                    </h1>
                    <p className={`text-gray-600 text-base md:w-96 self-center px-8 md:px-0  text-center leading-relaxed`}>
                        {sectionOne.description[language]}
                    </p>

                    <div className={`mt-6`}>
                        <Button className="bg-yellow-bright hover:bg-yellow-500">
                            {language === 'ar' ? 'اكتشف المزيد' : 'Learn More'}
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionOne
