import AccordionItem from './AccordionItem';
import { useContext } from 'react';
import { LanguageContext } from '../../context/LanguageContext';
import { accordion } from '../../data';

const Accordion = () => {
    const { language } = useContext(LanguageContext);

    const accordionData = accordion.map((item) => ({
        title: language === 'ar' ? item.title.ar : item.title.en,
        content: language === 'ar' ? item.content.ar : item.content.en
    }));


    return (
        <div className="max-w-2xl mx-auto my-10 p-4">
            <h1 className="text-2xl font-semibold text-gray-600  text-center mb-8">
                {language === 'ar' ? "اطلع على قسم الأسئلة الشائعة لمعرفة المزيد عن خدماتنا." : "Check out the FAQ section to learn more about our services."}
            </h1>
            <div className="space-y-4 ">
                {accordionData.map((item, index) => (
                    <AccordionItem
                        key={index}
                        title={item.title}
                        content={item.content}
                    />
                ))}
            </div>
        </div>
    );
};

export default Accordion;
