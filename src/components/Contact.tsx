import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
    alert('Thank you for your message! We\'ll get back to you soon.');
  };

  return (
    <section id="contact" className="py-16 lg:py-20 bg-white">
      <div className="container-responsive-xl">
        <div className="text-center mb-12 lg:mb-16 space-responsive-md">
          <h2 className="text-responsive-2xl lg:text-responsive-3xl xl:text-responsive-4xl font-bold text-gray-900 mb-4 lg:mb-6">
            Get in
            <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent block mt-2 lg:mt-4">
              Touch
            </span>
          </h2>
          <p className="text-responsive-base lg:text-responsive-lg text-gray-600 max-w-4xl mx-auto px-4 sm:px-0">
            Have questions about BlueGuard? Want to partner with us? We'd love to hear from you.
          </p>
        </div>

        <div className="grid-responsive-2 gap-8 lg:gap-12 px-4 sm:px-0">
          {/* Contact Information */}
          <div className="space-responsive-md">
            <div className="space-responsive-sm">
              <h3 className="text-responsive-xl lg:text-responsive-2xl xl:text-responsive-3xl font-bold text-gray-900 mb-4 lg:mb-6">
                Let's Start a Conversation
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
                Whether you're an environmental enthusiast, a potential partner, or someone who 
                wants to contribute to water conservation efforts, we're here to help you get started.
              </p>
            </div>

            <div className="space-responsive-md">
              <div className="flex-responsive items-start space-x-3 lg:space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                  <Mail className="h-5 w-5 lg:h-6 lg:w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-base lg:text-lg font-semibold text-gray-900 mb-1">Email Us</h4>
                  <p className="text-gray-600 text-sm lg:text-base">contact@blueguard.com</p>
                  <p className="text-gray-600 text-sm lg:text-base">support@blueguard.com</p>
                </div>
              </div>

              <div className="flex-responsive items-start space-x-3 lg:space-x-4">
                <div className="bg-teal-100 p-3 rounded-lg flex-shrink-0">
                  <Phone className="h-5 w-5 lg:h-6 lg:w-6 text-teal-600" />
                </div>
                <div>
                  <h4 className="text-base lg:text-lg font-semibold text-gray-900 mb-1">Call Us</h4>
                  <p className="text-gray-600 text-sm lg:text-base">+1 (555) 123-4567</p>
                  <p className="text-gray-600 text-sm lg:text-base">Mon-Fri 9AM-6PM EST</p>
                </div>
              </div>

              <div className="flex-responsive items-start space-x-3 lg:space-x-4">
                <div className="bg-green-100 p-3 rounded-lg flex-shrink-0">
                  <MapPin className="h-5 w-5 lg:h-6 lg:w-6 text-green-600" />
                </div>
                <div>
                  <h4 className="text-base lg:text-lg font-semibold text-gray-900 mb-1">Visit Us</h4>
                  <p className="text-gray-600 text-sm lg:text-base">123 Environmental Way</p>
                  <p className="text-gray-600 text-sm lg:text-base">San Francisco, CA 94102</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-2xl p-4 lg:p-6">
              <h4 className="text-base lg:text-lg font-semibold text-gray-900 mb-3 lg:mb-4">
                Join Our Community
              </h4>
              <p className="text-gray-600 mb-4 text-sm lg:text-base">
                Connect with other environmental guardians and stay updated on our latest features.
              </p>
              <div className="flex-responsive gap-3 lg:gap-4">
                <button className="bg-blue-600 text-white px-4 py-2 lg:px-6 lg:py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm lg:text-base font-medium btn-touch-friendly">
                  Discord
                </button>
                <button className="bg-teal-600 text-white px-4 py-2 lg:px-6 lg:py-3 rounded-lg hover:bg-teal-700 transition-colors duration-200 text-sm lg:text-base font-medium btn-touch-friendly">
                  Twitter
                </button>
                <button className="bg-green-600 text-white px-4 py-2 lg:px-6 lg:py-3 rounded-lg hover:bg-green-700 transition-colors duration-200 text-sm lg:text-base font-medium btn-touch-friendly">
                  Telegram
                </button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 rounded-2xl p-6 lg:p-8 order-first lg:order-last">
            <form onSubmit={handleSubmit} className="space-responsive-sm">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm lg:text-base"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm lg:text-base"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm lg:text-base"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none text-sm lg:text-base"
                  placeholder="Tell us how we can help you..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-teal-600 text-white py-3 lg:py-4 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-teal-700 transition-all duration-200 transform hover:scale-105 flex-responsive-center space-x-2 text-sm lg:text-base btn-touch-friendly"
              >
                <Send className="h-5 w-5" />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;