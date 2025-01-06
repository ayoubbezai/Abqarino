import { FaFacebook, FaTwitter, FaTelegram, FaYoutube } from 'react-icons/fa'
import { useContext } from 'react'
import { LanguageContext } from '../../context/LanguageContext'

export const Footer = () => {
    const { language } = useContext(LanguageContext);
    return (
        <div className="bg-blue-dark text-white py-8 relative">
            <div className="mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col sm:flex-row-reverse justify-between gap-8 sm:gap-0 items-center">
                    <div>
                        <h1 className="text-base font-bold text-center text-blue-light mb-4"> {`${language === 'ar' ? 'تواصل معنا' : 'Contact Us'} `}</h1>
                        <div className="flex flex-col gap-2 items-center justify-center">
                            <h2 className="text-sm rtl"> {`${language === 'ar' ? 'العنوان :الجزائر حي 50 مسكن ' : 'Address: Algeria, 50 Msken, Street'} `}</h2>
                            <h2 className="text-sm rtl"> {`${language === 'ar' ? 'الهاتف: 0599999999' : 'Phone: 0599999999'} `}</h2>
                            <h2 className="text-sm rtl"> {`${language === 'ar' ? '  info@example.com :البريد الإلكتروني' : 'Email: info@example.com'} `}</h2>
                        </div>
                    </div>
                    <div>
                        <h1 className="text-base font-bold text-center text-blue-light mb-4"> {`${language === 'ar' ? 'روابط مهمة' : 'Important Links'} `}</h1>
                        <div className="flex flex-col gap-2 items-center justify-center">
                            <h2 className="text-sm"> {`${language === 'ar' ? 'الاستفسارات' : 'Questions'} `}    </h2>
                            <h2 className="text-sm"> {`${language === 'ar' ? 'الاسئلة الشائعة' : 'Frequently Asked Questions'} `}</h2>
                            <h2 className="text-sm"> {`${language === 'ar' ? 'الشروط والأحكام' : 'Terms and Conditions'} `}</h2>
                        </div>
                    </div>
                    <div className=''>
                        <h1 className="text-base font-bold text-center text-blue-light mb-4"> {`${language === 'ar' ? 'تابعنا' : 'Follow Us'} `}</h1>
                        <div className='flex flex-row gap-4 items-center justify-center'>
                            <FaFacebook className="hover:text-blue-bright text-2xl text-white cursor-pointer" />
                            <FaTelegram className="hover:text-blue-bright text-2xl text-white cursor-pointer" />
                            <FaYoutube className="hover:text-blue-bright text-2xl text-white cursor-pointer" />
                            <FaTwitter className="hover:text-blue-bright text-2xl text-white cursor-pointer" />
                        </div>
                    </div>
                </div>
            </div>
            <h3 className='text-center text-sm text-gray-400  bottom-3 left-0 right-0 mt-6'> {`${language === 'ar' ? '© 2024 جميع الحقوق محفوظة' : '© 2024 All rights reserved'} `}</h3>
        </div>
    )
}
