import React from 'react';
import ShieldIcon from '@mui/icons-material/Shield';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-300 transition-all duration-300">
      <div className="px-6 md:py-4 pt-10">
        <div className="md:flex items-center justify-between">
          <div className="sm:flex items-center space-x-6">
            <h1 className="text-sm text-gray-600 hover:text-blue-600 transition-colors cursor-pointer">
              Privacy Policy
            </h1>
            <h1 className="text-sm text-gray-600 hover:text-blue-600 transition-colors cursor-pointer">
              Terms of Service
            </h1>
            <h1 className="text-sm text-gray-600 hover:text-blue-600 transition-colors cursor-pointer">
              Support
            </h1>
          </div>
          <div className="flex items-center text-sm text-gray-500 mt-1 md:mt-0">
            <ShieldIcon fontSize="small" className="mr-2 text-green-600" />
            <span>Enterprise-grade security &amp; compliance</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
