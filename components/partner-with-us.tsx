"use client"

import React, { useState } from 'react';

export default function PartnerWithUs() {
    const [formData, setFormData] = useState({
        brandName: '',
        category: '',
        contactPerson: '',
        contactDetails: ''
    });
    const [message, setMessage] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await fetch("https://formspree.io/f/mgvqqoba", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    brandName: formData.brandName,
                    category: formData.category,
                    contactPerson: formData.contactPerson,
                    contactDetails: formData.contactDetails
                })
            });

            if (response.ok) {
                console.log('Mail sent successfully');
                setFormData({
                    brandName: '',
                    category: '',
                    contactPerson: '',
                    contactDetails: ''
                });
                setMessage('Form submitted successfully!');
            } else {
                throw new Error('Failed to send mail');
            }
        } catch (error) {
            console.error('Error sending mail:', error);
            setMessage('Failed to submit the form. Please try again.');
        }
    };

    return (
        <>
            <section  id="partner-with-us-section" className="background-brand-dark py-16 items-center justify-center">
                <div className="container mx-auto px-6 text-center text-white">
                    <h2 className="text-5xl font-bold mb-4">Partner With Us</h2>
                    <p className="text-2xl mb-8">Let's discuss how we can supercharge your deliveries!</p>
                </div>
                <div className="container  mx-auto px-6 text-center items-center justify-center">
                    {message && <p className="mb-4 text-green-500">{message}</p>}
                    <form onSubmit={handleSubmit} className="py-6 mx-auto max-w-[600px] w-full rounded-lg shadow-md text-white">
                        <div className="mb-4">
                            <label htmlFor="brandName" className="block text-left font-bold mb-2">Brand Name</label>
                            <input
                                type="text"
                                id="brandName"
                                name="brandName"
                                value={formData.brandName}
                                onChange={handleChange}
                                placeholder="Enter your brand name"
                                className="w-full bg-white text-black p-2 border border-gray-300 rounded-lg"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="category" className="block text-left font-bold mb-2">Category</label>
                            <select
                                id="category"
                                name="category"
                                value={formData.category}
                                onChange={handleChange}
                                className="w-full p-2 bg-white text-black border border-gray-300 rounded-lg"
                                required
                            >
                                <option value="">Select a category</option>
                                <option value="Beauty">Beauty</option>
                                <option value="Children">Children</option>
                                <option value="Consumer_Electronics">Consumer Electronics</option>
                                <option value="Eyewear">Eyewear</option>
                                <option value="E-commerce">E-commerce</option>
                                <option value="Logistics">Logistics</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="contactPerson" className="block text-left font-bold mb-2">Contact Person</label>
                            <input
                                type="text"
                                id="contactPerson"
                                name="contactPerson"
                                value={formData.contactPerson}
                                onChange={handleChange}
                                placeholder="Enter contact person name"
                                className="w-full p-2 bg-white text-black border border-gray-300 rounded-lg"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="contactDetails" className="block text-left font-bold mb-2">Contact Details</label>
                            <input
                                type="text"
                                id="contactDetails"
                                name="contactDetails"
                                value={formData.contactDetails}
                                onChange={handleChange}
                                placeholder="Enter email or phone number"
                                className="w-full p-2 bg-white text-black border border-gray-300 rounded-lg"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-50 mt-7 bg-gray-100 text-black py-2 px-4 rounded-lg hover:bg-gray-300"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </section>
        </>
    );
}
