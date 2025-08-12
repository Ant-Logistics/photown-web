'use client';
import React, { useEffect, useState } from 'react';

const texts = ["10 minutes", "1 Hour", "2 Hour", "Same-Day"];

export default function HomeDeliveryAnimation() {

    const [text, setText] = useState("Faster Deliveries");
    const [animate, setAnimate] = useState(false);
    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setAnimate(true);
            setTimeout(() => {
                index = (index + 1) % texts.length;
                setText(texts[index]);
                setAnimate(false);
            }, 400);
        }, 2000);

        return () => clearInterval(interval);
    }, []);
    return (
        <span className={`text-brand-blue inline-block text-left min-w-[50px] transition-all duration-400 ${animate ? "blur-xs opacity-0" : "blur-0 opacity-100"}`}>
            {text}
        </span>
    );
}