import React from 'react';
import { FiMapPin, FiPhone, FiMail } from 'react-icons/fi';

const Contact = () => {
    return (
        <section id="contact" className="min-h-screen py-20">
            <div className="max-w-4xl">
                <span className="text-sm font-bold text-blue-500 uppercase tracking-wider block mb-2">Get in Touch</span>
                <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-12 uppercase tracking-wide transition-colors duration-300">Contact</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

                    {/* Contact Info Cards */}
                    <div className="space-y-6">
                        <div className="flex items-start gap-6">
                            <div className="bg-gray-50 dark:bg-gray-800 p-4 text-blue-500 text-2xl rounded-md shadow-sm transition-colors duration-300">
                                <FiMail />
                            </div>
                            <div>
                                <h3 className="text-gray-800 dark:text-white font-bold mb-1 transition-colors duration-300">Email</h3>
                                <p className="text-gray-500 dark:text-gray-400 text-sm">sourosan@gmail.com</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-6">
                            <div className="bg-gray-50 dark:bg-gray-800 p-4 text-blue-500 text-2xl rounded-md shadow-sm transition-colors duration-300">
                                <FiMapPin />
                            </div>
                            <div>
                                <h3 className="text-gray-800 dark:text-white font-bold mb-1 transition-colors duration-300">Address</h3>
                                <p className="text-gray-500 dark:text-gray-400 text-sm">Phnom Penh, Cambodia</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-6">
                            <div className="bg-gray-50 dark:bg-gray-800 p-4 text-blue-500 text-2xl rounded-md shadow-sm transition-colors duration-300">
                                <FiPhone />
                            </div>
                            <div>
                                <h3 className="text-gray-800 dark:text-white font-bold mb-1 transition-colors duration-300">Phone</h3>
                                <p className="text-gray-500 dark:text-gray-400 text-sm">+855 97 211 72 61</p>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div>
                        <form className="space-y-4">
                            <input
                                type="text"
                                placeholder="Name"
                                className="w-full p-3 bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 text-gray-800 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500 rounded text-sm focus:outline-none focus:border-blue-500 transition-colors"
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full p-3 bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 text-gray-800 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500 rounded text-sm focus:outline-none focus:border-blue-500 transition-colors"
                            />
                            <input
                                type="text"
                                placeholder="Subject"
                                className="w-full p-3 bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 text-gray-800 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500 rounded text-sm focus:outline-none focus:border-blue-500 transition-colors"
                            />
                            <textarea
                                placeholder="Message"
                                rows="5"
                                className="w-full p-3 bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 text-gray-800 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500 rounded text-sm focus:outline-none focus:border-blue-500 transition-colors resize-none"
                            ></textarea>
                            <button
                                type="submit"
                                className="bg-blue-500 text-white px-8 py-3 text-sm font-bold tracking-wider uppercase rounded hover:bg-blue-600 transition-colors shadow-md"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Contact;