import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, Clock, CheckCircle } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-green-800 to-green-700 relative overflow-hidden rounded-3xl mt-10">
      {/* Glowing bubbles */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-green-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-emerald-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 left-40 w-72 h-72 bg-lime-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-neutral-50 mb-4">
            Get In Touch
          </h1>
          <p className="text-xl text-lime-300 font-bold  max-w-2xl mx-auto leading-relaxed">
            Have questions about GreenCart? We’d love to hear from you. Send us a message and we’ll respond as soon as possible.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-black bg-opacity-30 backdrop-blur-lg rounded-2xl p-8 border border-emerald-500 border-opacity-30 shadow-2xl hover:bg-opacity-40 transition-all duration-300">
              <h2 className="text-3xl font-bold text-neutral-50 mb-8 flex items-center gap-3">
                <MessageCircle className="text-emerald-400" size={32} />
                Contact Information
              </h2>

              <div className="space-y-6">
                <div className="flex items-center gap-4 group hover:translate-x-2 transition-transform duration-300">
                  <div className="bg-emerald-500 p-3 rounded-full group-hover:bg-emerald-400 transition-colors">
                    <Mail className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="text-lime-300 font-semibold">Email</h3>
                    <p className="text-neutral-100">support@greencart.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 group hover:translate-x-2 transition-transform duration-300">
                  <div className="bg-emerald-500 p-3 rounded-full group-hover:bg-emerald-400 transition-colors">
                    <Phone className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="text-lime-300 font-semibold">Phone</h3>
                    <p className="text-neutral-100">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 group hover:translate-x-2 transition-transform duration-300">
                  <div className="bg-emerald-500 p-3 rounded-full group-hover:bg-emerald-400 transition-colors">
                    <MapPin className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="text-lime-300 font-semibold">Address</h3>
                    <p className="text-neutral-100">123 Green Street, Eco City, EC 12345</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 group hover:translate-x-2 transition-transform duration-300">
                  <div className="bg-emerald-500 p-3 rounded-full group-hover:bg-emerald-400 transition-colors">
                    <Clock className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="text-lime-300 font-semibold">Business Hours</h3>
                    <p className="text-neutral-100">Mon - Fri: 9:00 AM - 6:00 PM</p>
                    <p className="text-neutral-100">Sat - Sun: 10:00 AM - 4:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-black bg-opacity-30 backdrop-blur-lg rounded-xl p-6 border border-emerald-500 border-opacity-30 text-center hover:bg-opacity-40 transition-all duration-300">
                <div className="text-3xl font-bold text-lime-300 mb-2">24/7</div>
                <div className="text-neutral-200">Customer Support</div>
              </div>
              <div className="bg-black bg-opacity-30 backdrop-blur-lg rounded-xl p-6 border border-emerald-500 border-opacity-30 text-center hover:bg-opacity-40 transition-all duration-300">
                <div className="text-3xl font-bold text-lime-300 mb-2">2hrs</div>
                <div className="text-neutral-200">Response Time</div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-black bg-opacity-30 backdrop-blur-lg rounded-2xl p-8 border border-emerald-500 border-opacity-30 shadow-2xl">
            <h2 className="text-3xl font-bold text-neutral-50 mb-8 flex items-center gap-3">
              <Send className="text-emerald-400" size={32} />
              Send Message
            </h2>

            {isSubmitted ? (
              <div className="text-center py-12">
                <CheckCircle className="mx-auto text-lime-400 mb-4" size={64} />
                <h3 className="text-2xl font-bold text-neutral-50 mb-2">Message Sent!</h3>
                <p className="text-neutral-200">Thank you for contacting us. We will get back to you soon.</p>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-lime-300 font-semibold mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-black bg-opacity-30 border border-emerald-500 border-opacity-30 rounded-lg text-neutral-100 placeholder-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition-all duration-300"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-lime-300 font-semibold mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-black bg-opacity-30 border border-emerald-500 border-opacity-30 rounded-lg text-neutral-100 placeholder-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition-all duration-300"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-lime-300 font-semibold mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-black bg-opacity-30 border border-emerald-500 border-opacity-30 rounded-lg text-neutral-100 placeholder-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition-all duration-300"
                    placeholder="What is this about?"
                    required  
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-lime-300 font-semibold mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="w-full px-4 py-3 bg-black bg-opacity-30 border border-emerald-500 border-opacity-30 rounded-lg text-neutral-100 placeholder-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition-all duration-300 resize-none"
                    placeholder="Tell us more about your inquiry..."
                  ></textarea>
                </div>

                <button
                  onClick={handleSubmit}
                  className="w-full bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 text-green-950 font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center gap-3"
                >
                  <Send size={20} />
                  Send Message
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="bg-black bg-opacity-30 backdrop-blur-lg rounded-2xl p-8 border border-emerald-500 border-opacity-30 shadow-2xl max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-neutral-50 mb-4">
              Ready to Go Green with GreenCart?
            </h3>
            <p className="text-xl text-neutral-200 mb-6">
              Join thousands of eco-conscious shoppers making a difference, one purchase at a time.
            </p>
            <button className="bg-gradient-to-r from-emerald-400 to-green-400 hover:from-emerald-500 hover:to-green-500 text-green-950 font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              Explore GreenCart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
