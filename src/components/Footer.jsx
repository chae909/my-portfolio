import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-white py-12">
            <div className="container mx-auto px-4 text-center text-gray-600">
                <p>&copy; {new Date().getFullYear()} 채정윤. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;