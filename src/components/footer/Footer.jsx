import { FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa';
import { useContext } from 'react';
import { LanguageContext } from '../../context/LanguageContext';
import { Link } from 'react-router-dom';
import { socialLinks } from '../../data';
import termsAndConditions from "../../assets/pdf/termsAndConditions.pdf"

export const Footer = () => {
    const { language } = useContext(LanguageContext);
    return (
        <div className="bg-blue-dark text-white py-10">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className={`flex flex-col ${language === 'ar' ? 'md:flex-row-reverse' : 'md:flex-row'} justify-between items-start gap-16`}>

                    {/* Contact Section */}
                    <div className="flex-1 text-center md:text-center">
                        <h1 className="text-lg font-bold text-blue-light mb-4 ">
                            {language === 'ar' ? ' من نحن' : 'Who We Are'}
                        </h1>
                        <p className="text-sm leading-6 text-white/90">
                            {language === 'ar' ? 'عبقرينو هي منصة الكترونية سعودية تختص بمساعدة الطلاب في الدروس وحل الواجبات والاستعداد للاختبارات عن طريق دروس خصوصية بجودة عالية , وربط الطلاب مع معلمين معتمدين وذو كفاءة عالية باستخدام وسائل التقنية الحديثة .' : 'Abqarino is a Saudi electronic platform specializing in helping students with lessons, homework, and test preparation through high-quality private lessons, connecting students with certified and highly skilled teachers using modern technology.'}
                        </p>
                    </div>

                    {/* Important Links Section */}
                    <div className="flex-1 text-center md:text-center">
                        <h1 className="text-lg font-bold text-blue-light mb-6">
                            {language === 'ar' ? 'روابط مهمة' : 'Important Links'}
                        </h1>
                        <ul className="space-y-4">
                            <li>
                                <Link
                                    onClick={() => window.scrollTo({ top: 300, behavior: 'smooth' })}
                                    className="text-sm text-white/90     hover:text-blue-bright transition duration-200"
                                >
                                    {language === 'ar' ? 'الاستفسارات' : 'Questions'}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    onClick={() => window.scrollTo({ top: 2400, behavior: 'smooth' })}
                                    className="text-sm text-white/90 hover:text-blue-bright transition duration-200"
                                >
                                    {language === 'ar' ? 'الاسئلة الشائعة' : 'Frequently Asked Questions'}
                                </Link>
                            </li>
                            <li>
                                <a
                                    download={true}
                                    href={termsAndConditions}
                                    className="text-sm text-white/90 hover:text-blue-bright transition duration-200"
                                >
                                    {language === 'ar' ? 'الشروط والأحكام' : 'Terms and Conditions'}
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Social Media Section */}
                    <div className="flex-1 text-center md:text-center ">
                        <h1 className="text-lg font-bold text-blue-light mb-6">
                            {language === 'ar' ? 'تابعنا' : 'Follow Us'}
                        </h1>
                        <div className="flex flex-col space-y-6 justify-center items-center mt-4 ">
                            <a
                                href={socialLinks.instagram}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`flex   items-center justify-center  ${language === 'ar' ? 'md:justify-end  ' : 'md:justify-start flex-row-reverse'} gap-3 text-white/90    hover:text-[#C13584] transition duration-200`}
                            >
                                <span className="text-sm">
                                    {language === 'ar' ? 'تابعنا على الانستقرام' : 'Follow Us on Instagram'}
                                </span>
                                <FaInstagram size={20} />
                            </a>
                            <a
                                href={socialLinks.tiktok}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`flex items-center justify-center ${language === 'ar' ? 'md:justify-end  ' : 'md:justify-start flex-row-reverse'} gap-3 text-white/90    hover:text-[#EE1D52] transition duration-200`}
                            >
                                <span className="text-sm">
                                    {language === 'ar' ? 'تابعنا على تيكتوك' : 'Follow Us on Tiktok'}
                                </span>
                                <FaTiktok size={20} />
                            </a>
                            <a
                                href={socialLinks.whatsapp}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`flex items-center justify-center ${language === 'ar' ? 'md:justify-end  ' : 'md:justify-start flex-row-reverse'} gap-3 text-white/90    hover:text-[#25D366] transition duration-200`}
                            >
                                <span className="text-sm">
                                    {language === 'ar' ? 'تواصل معنا على واتساب' : 'Contact Us on Whatsapp'}
                                </span>
                                <FaWhatsapp size={20} />
                            </a>
                        </div>
                    </div>
                </div>
                <p className="text-center text-sm text-gray-400 mt-8">
                    {language === 'ar' ? 'مسجلة في وزارة التجارة' : 'Licensed by the Ministry of Commerce'}
                </p>
            </div>
        </div>
    );
};
