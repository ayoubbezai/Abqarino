import { useContext, useEffect, useState } from 'react';
import { LanguageContext } from '../../../context/LanguageContext';
import Button from '../../common/Button';
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
    const [result, setResult] = useState('');
    const resultMessages = {
        sending: {
            ar: "جاري إرسال النموذج...",
            en: "Sending form..."
        },
        success: {
            ar: "تم إرسال النموذج بنجاح",
            en: "Form submitted successfully"
        },
        error: {
            ar: "حدث خطأ أثناء إرسال النموذج. يرجى المحاولة مرة أخرى",
            en: "An error occurred while submitting the form. Please try again later."
        }
    };

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phoneNumber: "",
        service: "",
        selectedOptions1: [],
        selectedOptions2: [],
        selectedOptions3: []
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        if (type === 'checkbox') {
            const [groupName, optionValue] = name.split('-');
            setFormData(prevData => {
                // Get current array or initialize empty array
                const currentArray = prevData[groupName] || [];

                if (checked) {
                    // Only add if not already present
                    if (!currentArray.includes(optionValue)) {
                        return {
                            ...prevData,
                            [groupName]: [...currentArray, optionValue]
                        };
                    }
                } else {
                    // Remove the value
                    return {
                        ...prevData,
                        [groupName]: currentArray.filter(item => item !== optionValue)
                    };
                }
                // If no changes needed, return previous state
                return prevData;
            });
        } else {
            setFormData(prevData => ({
                ...prevData,
                [name]: value
            }));
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
        formDataToSend.append("student goal", formData.selectedOptions1)
        formDataToSend.append("student curriculum", formData.selectedOptions2)
        formDataToSend.append("student subjects", formData.selectedOptions3)

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
            const response = await fetch("https://script.google.com/macros/s/AKfycbz-v6VqNW5pdCvhWfiKLgeH51mCJbWIhRKeZkAzvwux5mvTsNOwcv9FtjGajLow3UJ6/exec", {
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

    const handleSubmit = (e) => {
        e.preventDefault();

        // Check required text fields
        if (!formData.fullName.trim()) {
            alert(language === 'ar' ? 'الرجاء�دخال الاسم الكامل' : 'Please enter your full name');
            return;
        }

        if (!formData.email.trim()) {
            alert(language === 'ar' ? 'الرجاء�دخال البريد الإلكتروني' : 'Please enter your email');
            return;
        }

        if (!formData.phoneNumber.trim()) {
            alert(language === 'ar' ? 'الرجاء�دخال رقم الجوال' : 'Please enter your phone number');
            return;
        }

        if (!formData.service) {
            alert(language === 'ar' ? 'الرجاء اختيار ال�ف الدراسي' : 'Please select your grade');
            return;
        }

        // Check checkbox groups
        if (formData.selectedOptions1.length === 0) {
            alert(language === 'ar' ? 'الرجاء اختيار الهدف' : 'Please select a goal');
            return;
        }

        if (formData.selectedOptions2.length === 0) {
            alert(language === 'ar' ? 'الرجاء اختيار المنهج' : 'Please select a curriculum');
            return;
        }

        if (formData.selectedOptions3.length === 0) {
            alert(language === 'ar' ? 'الرجاء اختيار المادة' : 'Please select a subject');
            return;
        }

        // If all validations pass, proceed with form submission
        onSubmit(e);
    };




    return (
        <div className="bg-blue-light/5 py-8">
            <div className="container mx-auto px-4 max-w-6xl">
                {/* Title Section */}
                <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                        {language === 'ar' ? 'سجل الآن' : 'Register Now'}
                    </h2>
                    <p className="text-gray-600 w-2/3 mx-auto">
                        {language === 'ar'
                            ? 'ابدأ رحلتك التعليمية مع معلمك المناسب وصمم خطتك الدراسية حسب احتياجك .سجل بياناتك وسيتم التواصل معك في اقرب وقت'
                            : 'Start your educational journey with the right teacher and design your study plan according to your needs. Fill out your details and we will contact you as soon as possible'}
                    </p>
                </div>

                {/* Single container for mobile, split for desktop */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                    <form onSubmit={handleSubmit}>
                        <div className={`flex flex-col-reverse
                             md:flex-row ${language === 'en' ? 'md:flex-row-reverse' : ''}`}>
                            {/* Left/Right Column - Radio Groups */}
                            <div className="w-full md:w-1/2">
                                <div className="p-6 md:border-r border-gray-200 space-y-6">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                                        {language === 'ar' ? 'اختر المواد' : 'Select Subjects'}
                                    </h3>
                                    {/* First Selection Group - Goal */}
                                    <div className="space-y-4">
                                        <label className="block text-sm font-medium text-gray-700">
                                            {language === 'ar' ? 'الهدف' : 'Goal'}
                                            <span className="text-red-500 ml-1">*</span>
                                        </label>
                                        <div className="flex flex-wrap md:grid md:grid-cols-2 gap-3">
                                            <label className="flex items-center gap-2 p-3 border rounded hover:bg-gray-50 flex-grow sm:flex-grow-0">
                                                <input
                                                    type="checkbox"
                                                    name="selectedOptions1-foundation"
                                                    onChange={handleChange}
                                                    checked={formData.selectedOptions1?.includes('foundation')}
                                                    className="text-blue-light rounded"
                                                />
                                                <span className="text-sm whitespace-nowrap">
                                                    {language === 'ar' ? 'تأسيس وتقوية' : 'Foundation and Strengthening'}
                                                </span>
                                            </label>
                                            <label className="flex items-center gap-2 p-3 border rounded hover:bg-gray-50 flex-grow sm:flex-grow-0">
                                                <input
                                                    type="checkbox"
                                                    name="selectedOptions1-followup"
                                                    onChange={handleChange}
                                                    checked={formData.selectedOptions1?.includes('followup')}
                                                    className="text-blue-light rounded"
                                                />
                                                <span className="text-sm whitespace-nowrap">
                                                    {language === 'ar' ? 'متابعة للمنهج الدراسي' : 'Curriculum Follow-up'}
                                                </span>
                                            </label>
                                        </div>
                                    </div>

                                    {/* Second Selection Group - Curriculum */}
                                    <div className="space-y-4">
                                        <label className="block text-sm font-medium text-gray-700">
                                            {language === 'ar' ? 'المنهج' : 'Curriculum'}
                                            <span className="text-red-500 ml-1">*</span>
                                        </label>
                                        <div className="flex flex-wrap md:grid md:grid-cols-2 gap-3">
                                            <label className="flex items-center gap-2 p-3 border rounded hover:bg-gray-50 flex-grow sm:flex-grow-0">
                                                <input
                                                    type="checkbox"
                                                    name="selectedOptions2-saudi"
                                                    onChange={handleChange}
                                                    checked={formData.selectedOptions2?.includes('saudi')}
                                                    className="text-blue-light rounded"
                                                />
                                                <span className="text-sm whitespace-nowrap">
                                                    {language === 'ar' ? 'سعودي' : 'Saudi'}
                                                </span>
                                            </label>
                                            <label className="flex items-center gap-2 p-3 border rounded hover:bg-gray-50 flex-grow sm:flex-grow-0">
                                                <input
                                                    type="checkbox"
                                                    name="selectedOptions2-international"
                                                    onChange={handleChange}
                                                    checked={formData.selectedOptions2?.includes('international')}
                                                    className="text-blue-light rounded"
                                                />
                                                <span className="text-sm whitespace-nowrap">
                                                    {language === 'ar' ? 'عالمي' : 'International'}
                                                </span>
                                            </label>
                                        </div>
                                    </div>

                                    {/* Third Selection Group - Subject */}
                                    <div className="space-y-4">
                                        <label className="block text-sm font-medium text-gray-700">
                                            {language === 'ar' ? 'المادة' : 'Subject'}
                                            <span className="text-red-500 ml-1">*</span>
                                        </label>
                                        <div className="flex flex-wrap md:grid md:grid-cols-3 gap-3">
                                            <label className="flex items-center gap-2 p-3 border rounded hover:bg-gray-50 flex-grow sm:flex-grow-0">
                                                <input
                                                    type="checkbox"
                                                    name="selectedOptions3-math"
                                                    onChange={handleChange}
                                                    checked={formData.selectedOptions3?.includes('math')}
                                                    className="text-blue-light rounded"
                                                />
                                                <span className="text-sm whitespace-nowrap">
                                                    {language === 'ar' ? 'رياضيات' : 'Mathematics'}
                                                </span>
                                            </label>
                                            <label className="flex items-center gap-2 p-3 border rounded hover:bg-gray-50 flex-grow sm:flex-grow-0">
                                                <input
                                                    type="checkbox"
                                                    name="selectedOptions3-arabic"
                                                    onChange={handleChange}
                                                    checked={formData.selectedOptions3?.includes('arabic')}
                                                    className="text-blue-light rounded"
                                                />
                                                <span className="text-sm whitespace-nowrap">
                                                    {language === 'ar' ? 'لغة عربية' : 'Arabic'}
                                                </span>
                                            </label>
                                            <label className="flex items-center gap-2 p-3 border rounded hover:bg-gray-50 flex-grow sm:flex-grow-0">
                                                <input
                                                    type="checkbox"
                                                    name="selectedOptions3-english"
                                                    onChange={handleChange}
                                                    checked={formData.selectedOptions3?.includes('english')}
                                                    className="text-blue-light rounded"
                                                />
                                                <span className="text-sm whitespace-nowrap">
                                                    {language === 'ar' ? 'لغة انجليزية' : 'English'}
                                                </span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right/Left Column - Form Fields */}
                            <div className="w-full md:w-1/2">
                                <div className="p-6 border-t md:border-t-0 md:border-l border-gray-200">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-6">
                                        {language === 'ar' ? 'المعلومات الشخصية' : 'Personal Information'}
                                    </h3>
                                    <div className="space-y-6">
                                        <div className="space-y-4">
                                            <label className="block text-sm font-medium text-gray-700">
                                                {language === 'ar' ? 'معلومات الاتصال' : 'Contact Details'}
                                            </label>
                                            <div className="grid grid-cols-2 gap-4">
                                                <div className="space-y-2">
                                                    <label htmlFor="fullName" className="block text-sm text-gray-600">
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
                                                    <label htmlFor="phoneNumber" className="block text-sm text-gray-600">
                                                        {language === 'ar' ? 'رقم الجوال' : 'Phone Number'}
                                                        <span className="text-red-500 ml-1">*</span>
                                                    </label>
                                                    <input
                                                        type="tel"
                                                        id="phoneNumber"
                                                        name="phoneNumber"
                                                        value={formData.phoneNumber}
                                                        onChange={handleChange}
                                                        placeholder={language === 'ar' ? '05xxxxxxxx' : '05xxxxxxxx'}
                                                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-light focus:border-transparent"
                                                        pattern="05[0-9]{8}"
                                                        maxLength="10"
                                                        required
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label htmlFor="email" className="block text-sm text-gray-600">
                                                {language === 'ar' ? 'البريد اللكتروني' : 'Email'}
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                onChange={handleChange}
                                                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-light focus:border-transparent"
                                                required
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <label htmlFor="service" className="block text-sm text-gray-600">
                                                {language === 'ar' ? 'الصف الدراسي' : 'Grade Level'}
                                            </label>
                                            <select
                                                id="service"
                                                name="service"
                                                value={formData.service}
                                                onChange={handleChange}
                                                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-light focus:border-transparent bg-white"
                                                required
                                            >
                                                <option value="">{serviceOptions[language][0]}</option>
                                                {serviceOptions[language].slice(1).map((option, index) => (
                                                    <option key={index + 1} value={serviceOptions.name[index + 1]}>
                                                        {option}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="flex justify-center p-6">
                            <Button
                                type="submit"
                                className="bg-blue-light hover:bg-blue-bright/90 text-sm px-10"
                            >
                                {language === 'ar' ? 'إرسال' : 'Submit'}
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Form;
