import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white p-4 mt-4">
            <div className="flex justify-between">
                <div>
                    <a href="/privacy" className="hover:text-gray-400">Privacy Policy</a>
                    <span className="mx-2">|</span>
                    <a href="/terms" className="hover:text-gray-400">Terms of Service</a>
                </div>
                <div>
                    <a href="https://facebook.com" className="hover:text-gray-400 mx-2">Facebook</a>
                    <a href="https://twitter.com" className="hover:text-gray-400 mx-2">Twitter</a>
                    <a href="https://instagram.com" className="hover:text-gray-400 mx-2">Instagram</a>
                </div>
            </div>
            <p className="text-center mt-2">© 2025 Second Hand Phones. All rights reserved.</p>
        </footer>
    );
};

export default Footer;