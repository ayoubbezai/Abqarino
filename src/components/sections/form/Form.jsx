import { useContext, useEffect, useState } from 'react';
import { LanguageContext } from '../../../context/LanguageContext';
import Button from '../../common/Button';
import React from 'react';
const Form = () => {

    const serviceOptions = {
        ar: [
            'اختر الصف الدراسي',
            'الصف الأول ابتدائي',
            'الصف الثاني ابتدائي',
            'الصف الثالث ابتدائي',
            'الصف الرابع ابتدائي',
            'الصف الخامس ابتدائي',
            ' الصف السادس ابتدائي',

        ],
        en: [
            'Select Grade',
            'Grade 1 Primary',
            'Grade 2 Primary',
            'Grade 3 Primary',
            'Grade 4 Primary',
            'Grade 5 Primary',
            'Grade 6 Primary',

        ],
        name: ["grade", "grade1", "grade2", "grade3", "grade4", "grade5", "grade6"]
    };


    const { language } = useContext(LanguageContext);

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phoneNumber: "",
        service: "",
        selectedOptions: []
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        // Handle checkboxes
        if (type === 'checkbox') {
            setFormData((prevData) => ({
                ...prevData,
                selectedOptions: checked
                    ? [...prevData.selectedOptions, value] // Add value if checked
                    : prevData.selectedOptions.filter((item) => item !== value), // Remove value if unchecked
            }));
        } else {
            // Handle other input types
            setFormData((prevData) => ({
                ...prevData,
                [name]: value,
            }));
        }
    };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log('Form Data:', formData);
    //     // Add your form submission logic here
    // };


    const [result, setResult] = React.useState("");

    // Add translations for result messages

    const resultMessages = {
        sending: {
            ar: "جاري الإرسال...",
            en: "Sending...."
        },
        success: {
            ar: "تم إرسال النموذج بنجاح",
            en: "Form Submitted Successfully"
        },
        error: {
            ar: "حدث خطأ أثناء إرسال النموذج. يرجى المحاولة مرة أخرى",
            en: "An error occurred while submitting the form. Please try again later."
        }
    };
    useEffect(() => {
        setResult(resultMessages.sending[language]);
    }, [language])

    const onSubmit = async (event) => {
        event.preventDefault();




        // gmail link 
        setResult(resultMessages.sending[language]);

        const formDataToSend = new FormData();

        // Add your Web3Forms access key here
        formDataToSend.append("access_key", "99c5e7f9-c94a-4e59-b83a-7f340a44433d");

        // Add additional form data
        formDataToSend.append("form type", "student form")
        formDataToSend.append("student full name", formData.fullName)
        formDataToSend.append("student phone", formData.phoneNumber)
        formDataToSend.append("student email", formData.email)
        formDataToSend.append("student grade", formData.service)
        formDataToSend.append("student subjects", formData.selectedOptions.join(", "))

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formDataToSend
            });

            const data = await response.json();

            if (data.success) {
                setResult(resultMessages.success[language]);
                // Reset form
                // setFormData({
                //     fullName: "",
                //     email: "",
                //     phoneNumber: "",
                //     service: "",
                //     selectedOptions: []
                // });
            } else {
                setResult(data.message);
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            setResult(resultMessages.error[language]);
        }
        //google sheet link  

        try {
            const response = await fetch("https://script.google.com/macros/s/AKfycbxb0EBnhpjX5UvMR_0dO91m2Er4QpUKxU3WLKE7QdfMGr8dv-X48EdBNNz8OgC6mQmS/exec", {
                method: "POST",
                body: JSON.stringify(formData)
            })

            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error("Error submitting form:", error);
            setResult(resultMessages.error[language]);
        }
    };




    return (
        <div className="bg-blue-light/5 py-16">
            <div className="container mx-auto px-4 max-w-5xl">
                <div className={`flex flex-col md:flex-row justify-between ${language === 'ar' ? 'md:flex-row-reverse' : ''} gap-12 `}>
                    {/* Info Section */}
                    <div className="w-full md:w-2/5 space-y-8 p-6 mt-8">
                        <div className="flex flex-col gap-4 ">
                            <h1 className={`text-2xl md:text-3xl font-bold text-center text-blue-dark mb-4 `}>
                                {language === 'ar' ? 'ابدأ رحلتك التعليمية معنا' : 'Start Your Learning Journey'}
                            </h1>
                            <p className={`text-gray-600 leading-relaxed text-base text-center`}>
                                {language === 'ar'
                                    ? 'ابدأ رحلتك التعليمية مع معلمك المناسب وصمم خطتك الدراسية حسب احتياجك .سجل بياناتك وسيتم التواصل معك في اقرب وقت'
                                    : 'Start your learning journey with the right teacher and design your study plan according to your needs. Register your information and we will contact you as soon as possible.'}
                            </p>
                        </div>


                    </div>

                    {/* Form Section */}
                    <div className="w-full md:w-3/5 md:max-w-md">
                        <div className="bg-white rounded-xl shadow-lg p-6">
                            <form onSubmit={onSubmit} className="space-y-4 ">
                                <div className="space-y-2 ">
                                    <label htmlFor="fullName" className="block text-gray-700 text-sm font-medium">
                                        {language === 'ar' ? 'الاسم الكامل' : 'Full Name'}
                                    </label>
                                    <input
                                        type="text"
                                        id="fullName"
                                        name="fullName"
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-light focus:border-transparent"
                                        required
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="phoneNumber" className="block text-gray-700 text-sm font-medium">
                                        {language === 'ar' ? 'رقم الجوال' : 'Phone Number'}
                                    </label>
                                    <input
                                        type="tel"
                                        id="phoneNumber"
                                        name="phoneNumber"
                                        value={formData.phoneNumber}
                                        onChange={handleChange}
                                        pattern="[0-9]{10}"
                                        placeholder={language === 'ar' ? '05xxxxxxxx' : '05xxxxxxxx'}
                                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-light focus:border-transparent"
                                        required
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="email" className="block text-gray-700 text-sm font-medium">
                                        {language === 'ar' ? 'البريد الإلكتروني' : 'Email'}
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-light focus:border-transparent"
                                        required
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="service" className="block text-gray-700 text-sm font-medium">
                                        {language === 'ar' ? 'المستوى الدراسي' : ' Grade'}
                                        <span className="text-red-500">*</span>
                                    </label>
                                    <select
                                        id="service"
                                        name="service"
                                        value={formData.service}
                                        onChange={handleChange}
                                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-light focus:border-transparent bg-white"
                                        required
                                    >
                                        <option value="" disabled>
                                            {serviceOptions[language][0]}
                                        </option>
                                        {serviceOptions[language].slice(1).map((option, index) => (
                                            <option
                                                key={index + 1}
                                                value={serviceOptions.name[index + 1]}
                                            >
                                                {option}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div className={`space-y-3  text-left `}>
                                    <label className="block text-gray-700 text-sm font-medium mb-4">
                                        {language === 'ar' ? 'المادة الدراسية' : 'Subject'}
                                        <span className="text-red-500">*</span>
                                    </label>
                                    <div className="space-y-3 text-sm">
                                        <div className={`flex items-center gap-2 `}>
                                            <input
                                                type="checkbox"
                                                id="math"
                                                name="serviceType"
                                                value="math"
                                                onChange={handleChange}
                                                checked={formData.selectedOptions.includes('math')}
                                                className="w-4 h-4 text-blue-light rounded border-gray-300 focus:ring-blue-light"
                                                required={formData.selectedOptions.length === 0}
                                            />
                                            <label htmlFor="math">
                                                {language === 'ar' ? '  رياضيات ' : 'Math'}
                                            </label>
                                        </div>
                                        <div className={`flex items-center gap-2 `}>
                                            <input
                                                type="checkbox"
                                                id="arabic"
                                                name="serviceType"
                                                value="arabic"
                                                onChange={handleChange}
                                                checked={formData.selectedOptions.includes('arabic')}
                                                className="w-4 h-4 text-blue-light rounded border-gray-300 focus:ring-blue-light"
                                            />
                                            <label htmlFor="arabic">
                                                {language === 'ar' ? 'لغة عربية ' : 'Arabic'}
                                            </label>
                                        </div>
                                        <div className={`flex items-center gap-2 `}>
                                            <input
                                                type="checkbox"
                                                id="english"
                                                name="serviceType"
                                                value="english"
                                                onChange={handleChange}
                                                checked={formData.selectedOptions.includes('english')}
                                                className="w-4 h-4 text-blue-light rounded border-gray-300 focus:ring-blue-light"
                                            />
                                            <label htmlFor="english">
                                                {language === 'ar' ? 'لغة انجليزية' : 'English'}
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                <div className={`flex justify-center pt-2`}>
                                    <Button
                                        className="bg-blue-light hover:bg-blue-bright/90 text-sm px-10"
                                        type="submit"
                                        disabled={!formData.service || formData.selectedOptions.length === 0}
                                    >
                                        {language === 'ar' ? 'إرسال' : 'Submit'}

                                    </Button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Form;
