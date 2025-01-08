import { useContext, useState } from 'react';
import { LanguageContext } from '../../context/LanguageContext';
import Button from '../../components/common/Button';

const Form = () => {
    const { language } = useContext(LanguageContext);
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phoneNumber: "",
        specialization: "",
        qualification: "",
        hasTeachingExperience: "",
        yearsOfExperience: "",
        nationality: "",
        residence: "",
        hasComputer: "",
        currentlyEmployed: "",
        teachingPreferences: ""
    });

    // Radio options for yes/no questions
    const radioOptions = {
        yesNo: {
            ar: ['نعم', 'لا'],
            en: ['Yes', 'No']
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        // Phone number validation - only allow numbers
        if (name === 'phoneNumber') {
            const numbersOnly = value.replace(/[^0-9]/g, '');
            if (numbersOnly.length <= 10) {
                setFormData(prevData => ({
                    ...prevData,
                    [name]: numbersOnly
                }));
            }
            return;
        }
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const [result, setResult] = useState("");
    const resultMessages = {
        sending: {
            ar: "جاري الإرسال...",
            en: "Sending..."
        },
        success: {
            ar: "تم الإرسال بنجاح",
            en: "Sent successfully"
        },
        error: {
            ar: "حدث خطأ أثناء الإرسال",
            en: "An error occurred during sending"
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        setResult(resultMessages.sending[language]);
        // gmail link 

        const formDataToSend = new FormData();

        // Add your Web3Forms access key here
        formDataToSend.append("access_key", "99c5e7f9-c94a-4e59-b83a-7f340a44433d");

        // Add additional form data
        formDataToSend.append("form type", "teacher form")
        formDataToSend.append("teacher full name", formData.fullName)
        formDataToSend.append("teacher phone", formData.phoneNumber)
        formDataToSend.append("teacher email", formData.email)
        formDataToSend.append("teacher specialization", formData.specialization)
        formDataToSend.append("teacher qualification", formData.qualification)
        formDataToSend.append("teacher has teaching experience", formData.hasTeachingExperience)
        if (formData.hasTeachingExperience === "yes") {
            formDataToSend.append("teacher years of experience", formData.yearsOfExperience)
        }
        formDataToSend.append("teacher nationality", formData.nationality)
        formDataToSend.append("teacher residence", formData.residence)
        formDataToSend.append("teacher has computer", formData.hasComputer)
        formDataToSend.append("teacher currently employed", formData.currentlyEmployed)
        formDataToSend.append("teacher teaching preferences", formData.teachingPreferences)

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
                setResult(resultMessages.error[language]);
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            setResult(resultMessages.error[language]);
        }
        //google sheet link  

        try {
            const response = await fetch("https://script.google.com/macros/s/AKfycbx4pjklr-UW2KTIeQ4iOJvb1zOlpMLRIczF64t22tB7gDoqZuMswygcydATGVGRoCvP/exec", {
                method: "POST",
                body: JSON.stringify(formData)
            })

            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error("Error submitting form:", error);
        }
    };

    return (
        <div className="max-w-6xl mx-auto p-4">
            <div className="bg-gradient-to-r from-blue-50  to-blue-50 rounded-xl shadow-lg overflow-hidden">
                <form onSubmit={handleSubmit} className="p-8">
                    {/* Form Title */}
                    <h2 className={`text-2xl font-bold text-blue-dark mb-8 text-center`}>
                        {language === 'ar' ? 'انضم الآن' : 'Join Now'}
                    </h2>
                    <p className='text-center text-base  w-2/3 mx-auto text-gray-800 mb-8'>{language === 'ar' ? 'كسب دخل إضافي مريح و جداول عمل مرنة ، مكافآت مالية ، بيئة آمنة ، سهولة الاستخدام ، توفير عدد كبير من الطلاب ، درِّس في أي مكان وزمان.' : 'Earn comfortable additional income with flexible work schedules, financial rewards, safe environment, ease of use, large number of students, teach anywhere and anytime.'}</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Left Column */}
                        <div className="bg-white p-6 rounded-lg shadow-sm space-y-6 h-fit">
                            <h3 className={`text-lg font-semibold text-blue-dark mb-4 ${language === 'ar' ? 'text-right' : 'text-left'}`}>
                                {language === 'ar' ? 'المعلومات الشخصية' : 'Personal Information'}
                            </h3>

                            {/* Full Name */}
                            <div className="space-y-2">
                                <label htmlFor="fullName" className="block text-sm text-gray-600">
                                    {language === 'ar' ? 'الاسم الكامل' : 'Full Name'}
                                    <span className="text-red-500 ml-1">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="fullName"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg"
                                    required
                                />
                            </div>

                            {/* Email */}
                            <div className="space-y-2">
                                <label htmlFor="email" className="block text-sm text-gray-600">
                                    {language === 'ar' ? 'البريد الالكتروني' : 'Email'}
                                    <span className="text-red-500 ml-1">*</span>
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg"
                                    required
                                />
                            </div>

                            {/* Phone Number */}
                            <div className="space-y-2">
                                <label htmlFor="phoneNumber" className="block text-sm text-gray-600">
                                    {language === 'ar' ? 'رقم الجوال' : 'Mobile Number'}
                                    <span className="text-red-500 ml-1">*</span>
                                </label>
                                <input
                                    type="tel"
                                    id="phoneNumber"
                                    name="phoneNumber"
                                    value={formData.phoneNumber}
                                    onChange={handleChange}
                                    placeholder="05xxxxxxxx"
                                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg"
                                    maxLength="10"
                                    required
                                />
                            </div>

                            {/* Specialization */}
                            <div className="space-y-2">
                                <label htmlFor="specialization" className="block text-sm text-gray-600">
                                    {language === 'ar' ? 'التخصص' : 'Specialization'}
                                    <span className="text-red-500 ml-1">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="specialization"
                                    name="specialization"
                                    value={formData.specialization}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg"
                                    required
                                />
                            </div>

                            {/* Qualification */}
                            <div className="space-y-2">
                                <label htmlFor="qualification" className="block text-sm text-gray-600">
                                    {language === 'ar' ? 'المؤهل العلمي' : 'Qualification'}
                                    <span className="text-red-500 ml-1">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="qualification"
                                    name="qualification"
                                    value={formData.qualification}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg"
                                    required
                                />
                            </div>

                            {/* Teaching Experience */}
                            <div className="space-y-2">
                                <label className="block text-sm text-gray-600">
                                    {language === 'ar' ? 'هل لديك خبرة سابقة في مجال التدريس' : 'Do you have previous teaching experience'}
                                    <span className="text-red-500 ml-1">*</span>
                                </label>
                                <div className="flex gap-4">
                                    {radioOptions.yesNo[language].map((option, index) => (
                                        <label key={index} className="flex items-center gap-2">
                                            <input
                                                type="radio"
                                                name="hasTeachingExperience"
                                                value={index === 0 ? 'yes' : 'no'}
                                                onChange={handleChange}
                                                className="text-blue-light"
                                                required
                                            />
                                            <span className="text-sm">{option}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* Years of Experience */}
                            <div className="space-y-2">
                                <label htmlFor="yearsOfExperience" className="block text-sm text-gray-600">
                                    {language === 'ar' ? 'سنوات الخبرة (إن وجدت)' : 'Years of Experience (if any)'}
                                </label>
                                <input
                                    type="text"
                                    id="yearsOfExperience"
                                    name="yearsOfExperience"
                                    value={formData.yearsOfExperience}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg"
                                />
                            </div>
                        </div>

                        {/* Right Column */}
                        <div className="bg-white p-6 rounded-lg shadow-sm space-y-6 h-fit">
                            <h3 className={`text-lg font-semibold text-blue-dark mb-4 ${language === 'ar' ? 'text-right' : 'text-left'}`}>
                                {language === 'ar' ? 'معلومات إضافية' : 'Additional Information'}
                            </h3>

                            {/* Nationality */}
                            <div className="space-y-2">
                                <label htmlFor="nationality" className="block text-sm text-gray-600">
                                    {language === 'ar' ? 'الجنسية' : 'Nationality'}
                                    <span className="text-red-500 ml-1">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="nationality"
                                    name="nationality"
                                    value={formData.nationality}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg"
                                    required
                                />
                            </div>

                            {/* Residence */}
                            <div className="space-y-2">
                                <label htmlFor="residence" className="block text-sm text-gray-600">
                                    {language === 'ar' ? 'مكان السكن' : 'Place of Residence'}
                                    <span className="text-red-500 ml-1">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="residence"
                                    name="residence"
                                    value={formData.residence}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg"
                                    required
                                />
                            </div>

                            {/* Has Computer */}
                            <div className="space-y-2">
                                <label className="block text-sm text-gray-600">
                                    {language === 'ar' ? 'هل لديك كمبيوتر شخصي واتصال بالانترنت' : 'Do you have a personal computer and internet connection'}
                                    <span className="text-red-500 ml-1">*</span>
                                </label>
                                <div className="flex gap-4">
                                    {radioOptions.yesNo[language].map((option, index) => (
                                        <label key={index} className="flex items-center gap-2">
                                            <input
                                                type="radio"
                                                name="hasComputer"
                                                value={index === 0 ? 'yes' : 'no'}
                                                onChange={handleChange}
                                                className="text-blue-light"
                                                required
                                            />
                                            <span className="text-sm">{option}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* Currently Employed */}
                            <div className="space-y-2">
                                <label className="block text-sm text-gray-600">
                                    {language === 'ar' ? 'هل أنت على رأس عمل حالياً' : 'Are you currently employed'}
                                    <span className="text-red-500 ml-1">*</span>
                                </label>
                                <div className="flex gap-4">
                                    {radioOptions.yesNo[language].map((option, index) => (
                                        <label key={index} className="flex items-center gap-2">
                                            <input
                                                type="radio"
                                                name="currentlyEmployed"
                                                value={index === 0 ? 'yes' : 'no'}
                                                onChange={handleChange}
                                                className="text-blue-light"
                                                required
                                            />
                                            <span className="text-sm">{option}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* Teaching Preferences */}
                            <div className="space-y-2">
                                <label htmlFor="teachingPreferences" className="block text-sm text-gray-600">
                                    {language === 'ar' ? 'المراحل الدراسية ومواد التدريس' : 'Teaching Levels and Subjects'}
                                    <span className="text-red-500 ml-1">*</span>
                                </label>
                                <textarea
                                    id="teachingPreferences"
                                    name="teachingPreferences"
                                    value={formData.teachingPreferences}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg min-h-[100px] resize-y"
                                    placeholder={language === 'ar' ? 'مثال: المرحلة الابتدائية - رياضيات، المرحلة المتوسطة - علوم' : 'Example: Primary Level - Mathematics, Middle School - Science'}
                                    required
                                />
                            </div>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-center mt-8">
                        <Button
                            type="submit"
                            className="bg-blue-light hover:bg-blue-bright/90 text-sm px-1- py-3 rounded-lg transition-colors duration-200"
                        >
                            {language === 'ar' ? 'إرسال' : 'Submit'}
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Form;