import { useState } from 'react';
import { toast } from "react-toastify";

export default function QuezonContactForm() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    // التحقق من صحة البيانات والانتقال إلى الحقل المطلوب
    const validateFormAndFocus = () => {
        if (!formData.firstName.trim()) {
            document.querySelector('input[name="firstName"]').focus();
            return false;
        }

        if (!formData.lastName.trim()) {
            document.querySelector('input[name="lastName"]').focus();
            return false;
        }

        if (!formData.email.trim()) {
            document.querySelector('input[name="email"]').focus();
            return false;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            document.querySelector('input[name="email"]').focus();
            return false;
        }

        if (!formData.subject.trim()) {
            document.querySelector('input[name="subject"]').focus();
            return false;
        }

        if (!formData.message.trim()) {
            document.querySelector('textarea[name="message"]').focus();
            return false;
        }

        return true;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // التحقق من صحة البيانات والانتقال إلى الحقل المطلوب
        if (!validateFormAndFocus()) {
            return;
        }

        setIsSubmitting(true);

        // محاكاة إرسال البيانات
        setTimeout(() => {
            console.log('Form Data to be sent:', formData);
            toast.success('Message sent successfully!');

            // إعادة تعيين النموذج
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                subject: '',
                message: ''
            });
            setIsSubmitting(false);
        }, 1000);
    };
    return (
        <div className="min-h-screen bg-gray-50 py-6 md:py-12 px-4 md:px-10">
            {/* Container - يتغير من flex-row إلى flex-col في الشاشات الصغيرة */}
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 max-w-7xl mx-auto">

                {/* Map Section - يظهر أولاً في الشاشات الصغيرة */}
                <div className="w-full lg:w-1/2 relative rounded-2xl shadow-lg order-1 lg:order-1">
                    <div className="relative h-[300px] md:h-[400px] lg:h-[700px]">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15443.91427503713!2d121.0366668783454!3d14.62916940866576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b7b134810793%3A0xc39f8646b9a89680!2sQuezon%20City%2C%20Metro%20Manila%2C%20Philippines!5e0!3m2!1sen!2s!4v1709295557005!5m2!1sen!2s"
                            width="100%"
                            height="100%"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="w-full h-full rounded-2xl"
                        ></iframe>
                    </div>
                </div>

                {/* Contact Form Section - يظهر ثانياً في الشاشات الصغيرة */}
                <div className="w-full lg:w-1/2 p-4 md:p-8 bg-white rounded-2xl shadow-lg order-2 lg:order-2">
                    <div className="max-w-lg mx-auto">
                        <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6">Send us a message</h1>

                        <p className="text-gray-600 mb-6 md:mb-8 leading-relaxed text-sm md:text-base">
                            We'd love to hear from you! Send us a message and we'll respond as soon as possible.
                        </p>

                        <div className="space-y-4 md:space-y-6">
                            {/* Name Fields */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <input
                                        type="text"
                                        name="firstName"
                                        placeholder="First Name *"
                                        value={formData.firstName}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 text-gray-600 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all placeholder-gray-400 text-sm md:text-base"
                                    />
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        name="lastName"
                                        placeholder="Last Name *"
                                        value={formData.lastName}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 text-gray-600 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all placeholder-gray-400 text-sm md:text-base"
                                    />
                                </div>
                            </div>

                            {/* Contact Fields */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Your Email *"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 text-gray-600 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all placeholder-gray-400 text-sm md:text-base"
                                    />
                                </div>
                                <div>
                                    <input
                                        type="tel"
                                        name="phone"
                                        placeholder="Your Phone Number"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 text-gray-600 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all placeholder-gray-400 text-sm md:text-base"
                                    />
                                </div>
                            </div>

                            {/* Subject */}
                            <div>
                                <input
                                    type="text"
                                    name="subject"
                                    placeholder="Subject *"
                                    value={formData.subject}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 py-3 text-gray-600 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all placeholder-gray-400 text-sm md:text-base"
                                />
                            </div>

                            {/* Message */}
                            <div>
                                <textarea
                                    name="message"
                                    placeholder="Message *"
                                    rows="4"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 text-gray-600 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all placeholder-gray-400 resize-none text-sm md:text-base"
                                ></textarea>
                            </div>

                            {/* Submit Button */}
                            <div>
                                <button
                                    type="button"
                                    onClick={handleSubmit}
                                    disabled={isSubmitting}
                                    className={`w-full py-3 px-6 rounded-lg font-medium text-base md:text-lg shadow-lg cursor-pointer transition-all duration-200 ${isSubmitting
                                        ? 'bg-gray-400 cursor-not-allowed'
                                        : 'bg-gray-900 hover:bg-gray-800 hover:shadow-xl transform hover:-translate-y-0.5'
                                        } text-white`}
                                >
                                    {isSubmitting ? 'Sending...' : 'Send Message'}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

};

