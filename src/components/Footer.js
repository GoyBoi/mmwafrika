import React from 'react';

function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 py-12">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <p className="font-light text-gray-600 text-sm tracking-wide font-body">
            © {new Date().getFullYear()} MMWAFRIKA. All rights reserved.
          </p>
          <p className="font-light text-gray-500 text-xs mt-2 tracking-wide font-body">
            Celebrating African culture through authentic fashion
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;