import Image from "next/image";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white py-8 border-t">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Logo and Social Icons */}
        <div className="flex flex-col items-center md:items-start">
          <Image
            src="/assets/images/footer-logo.svg"
            alt="Pho-Tawn Logo"
            width={150}
            height={50}
          />
          <div className="flex space-x-4 mt-4">
            <a href="#" aria-label="Facebook">
              <FaFacebook size={24} />
            </a>
            <a href="#" aria-label="Instagram">
              <FaInstagram size={24} />
            </a>
            <a href="#" aria-label="Twitter">
              <FaTwitter size={24} />
            </a>
            <a href="#" aria-label="LinkedIn">
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>

        {/* Contact Info */}
        <div className="text-center md:text-left mt-8 md:mt-0">
          <h3 className="font-bold text-lg">Contact Us</h3>
          <hr className="my-2 border-gray-300" />
          <p className="mt-2">102 Manpada, Thane West</p>
          <p>PIN Code 400607</p>
          <p className="mt-2">onboarding@photawn.com</p>
        </div>

        {/* Quick Links */}
        <div className="mt-8 md:mt-0 ">
          <h3 className="font-bold text-lg">Quick Links</h3>
          <hr className="my-2 border-gray-300" />
        
        </div>
      </div>

      <div className="text-center mt-8 text-sm text-gray-500">
        © 2025 Photawn Logistics. All Rights Reserved.
      </div>
    </footer>
  );
}