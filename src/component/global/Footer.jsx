import React from 'react';
import ShieldIcon from '@mui/icons-material/Shield';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 transition-all duration-300">
      <div className="px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <span className="text-sm text-gray-600 hover:text-blue-600 transition-colors cursor-pointer">
              Privacy Policy
            </span>
            <span className="text-sm text-gray-600 hover:text-blue-600 transition-colors cursor-pointer">
              Terms of Service
            </span>
            <span className="text-sm text-gray-600 hover:text-blue-600 transition-colors cursor-pointer">
              Support
            </span>
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <ShieldIcon fontSize="small" className="mr-2 text-green-600" />
            <span>Enterprise-grade security &amp; compliance</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
