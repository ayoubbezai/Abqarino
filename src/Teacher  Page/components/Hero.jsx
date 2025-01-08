import { LanguageContext } from '../../context/LanguageContext';
import { useContext } from 'react';
import { hero } from '../../data';
import heroImage from '../../assets/sections/hero.jpg';

const Hero = () => {
    const { language } = useContext(LanguageContext)
    return (
        <div className="container mx-auto mt-12 px-4 py-8 md:py-12">
            <div className={`flex flex-col-reverse md:flex-row ${language === "en" && "md:flex-row-reverse"} items-start justify-between gap-16`}>
                <div className={`w-full md:w-3/5 space-y-6 ${language === 'ar' ? 'md:pl-8' : 'md:pr-8'}`}>
                    <div className="space-y-4">
                        <h1 className={`text-2xl md:text-4xl font-bold text-blue-dark text-center ${language === 'ar' ? 'md:text-right' : 'md:text-left'}`}>
                            {hero.title1[language]}
                        </h1>
                        <ul className={`space-y-2 text-gray-600 text-center ${language === 'ar' ? 'md:text-right' : 'md:text-left'}`}>
                            {hero.description1[language].map((item, index) => (
                                <li key={index} className={`flex items-center ${language === 'ar' ? 'justify-end' : 'justify-start'} gap-2 text-base`}>
                                    {language === 'ar' && <span className="text-base">{item}</span>}
                                    <span className="text-blue-light">•</span>
                                    {language === 'en' && <span className="text-base">{item}</span>}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h2 className={`text-xl md:text-3xl font-bold text-blue-dark text-center ${language === 'ar' ? 'md:text-right' : 'md:text-left'}`}>
                            {hero.title2[language]}
                        </h2>
                        <p className={`text-gray-600 text-base text-center ${language === 'ar' ? 'md:text-right' : 'md:text-left'} leading-relaxed`}>
                            {hero.description2[language]}
                        </p>
                    </div>
                </div>

                {/* Image */}
                <div className={`w-full md:w-1/3 ${language === 'ar' ? 'md:pr-8' : 'md:pl-8'}`}>
                    <div className="relative max-w-[250px] mx-auto">
                        <img
                            src={heroImage}
                            alt="hero"
                            className="w-full h-auto rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                        />
                        <div className="absolute inset-0 bg-blue-dark/5 rounded-xl" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;
