import { FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa'
import { useContext } from 'react'
import { LanguageContext } from '../../context/LanguageContext'
import { Link } from 'react-router-dom'
import { socialLinks } from '../../data'


export const Footer = () => {
    const { language } = useContext(LanguageContext);
    return (
        <div className="bg-blue-dark text-white py-8 relative">
            <div className="mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row-reverse justify-between gap-8 sm:gap-0 items-center">
                    <div className='flex flex-col gap-2 items-center justify-center'>
                        <h1 className="text-base font-bold text-center text-blue-light mb-4">
                            {language === 'ar' ? 'تواصل معنا' : 'Contact Us'}
                        </h1>
                        <div className="flex flex-col gap-2 items-center justify-center">
                            <p className='text-center text-sm'>
                                {language === 'ar' ? 'عبقرينو منصة سعودية مسجلة' : 'Abqarinno Saudi platform registered'}
                            </p>
                            <p className='text-center text-sm'>
                                {language === 'ar' ? '(1009152474) بموجب السجل التجاري' : 'by the commercial register (1009152474)'}
                            </p>
                            <p className='text-center text-sm mt-2'>
                                {language === 'ar' ? '+966 53 847 رقم الواتساب : 4025' : 'Whatsapp : +966 53 847 4025'}
                            </p>
                        </div>
                    </div>
                    <div className={`flex flex-col gap-2 items-center justify-center ${language === 'ar' ? 'md:ml-14' : 'md:ml-24'} mt-10 md:mt-0`}>
                        <h1 className="text-base font-bold text-center text-blue-light mb-4 ml-8">
                            {language === 'ar' ? 'روابط مهمة' : 'Important Links'}
                        </h1>
                        <div className="flex flex-col gap-2 items-center justify-center ml-8">
                            <Link
                                onClick={() => window.scrollTo({ top: 300, behavior: 'smooth' })}
                                className="text-sm text-white transition-colors duration-200"
                            >{language === 'ar' ? 'الاستفسارات' : 'Questions'}</Link>
                            <Link
                                onClick={() => window.scrollTo({ top: 2400, behavior: 'smooth' })}
                                className='text-sm text-white transition-colors duration-200'
                            >{language === 'ar' ? 'الاسئلة الشائعة' : 'Frequently Asked Questions'}</Link>
                            <Link
                                className='text-sm text-white transition-colors duration-200'
                            >{language === 'ar' ? 'الشروط والأحكام' : 'Terms and Conditions'}</Link>
                        </div>
                    </div>
                    <div className='mt-10 md:mt-0 mb-10'>
                        <h1 className="text-base font-bold text-center text-blue-light mb-6">
                            {language === 'ar' ? 'تابعنا' : 'Follow Us'}
                        </h1>
                        <div className='flex flex-row gap-6 items-center justify-center'>
                            <a
                                href={socialLinks.instagram}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-blue-bright text-2xl text-white transition-colors duration-200"
                            >
                                <FaInstagram />
                            </a>
                            <a
                                href={socialLinks.tiktok}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-blue-bright text-2xl text-white transition-colors duration-200"
                            >
                                <FaTiktok />
                            </a>
                            <a
                                href={socialLinks.whatsapp}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-blue-bright text-2xl text-white transition-colors duration-200"
                            >
                                <FaWhatsapp />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <h3 className='text-center text-sm text-gray-400 bottom-3 left-0 right-0 mt-8 mb-6 md:mb-0'>
                {language === 'ar' ? 'مسجلة في وزارة التجارة' : 'Licensed by the Ministry of Commerce'}
            </h3>
        </div>
    )
}
