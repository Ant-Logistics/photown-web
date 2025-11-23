'use client';
import React from 'react';

export default function GettingStartedButton() {
    const scrollToPartnerWithUs = () => {
        const partnerSection = document.getElementById('partner-with-us-section');

      
        if (partnerSection) {
            partnerSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <div className="flex justify-center mt-20">
                <button onClick={scrollToPartnerWithUs} className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-900 transition duration-300">
                    Getting Started
                </button>
            </div>
        </>
    );
}
