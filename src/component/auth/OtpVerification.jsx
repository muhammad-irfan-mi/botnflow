import VisualPanel from './VisualPanel';
import logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom';

const OtpVerification = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('OTP Submitted');
  };

  return (
    // <div className="bg-gray-50 min-h-screen flex flex-col lg:flex-row">
    <div className="lg:flex justify-between bg-gray-50">

      <div className="lg:w-[50%] w-full flex flex-col items-center px-3 md:px-6 py-3 md:py-6 lg:py-12 lg:px-8">
        <div className="w-full max-w-md space-y-8 bg-white p-3 md:p-5 lg:p-8 rounded-xl shadow-lg">
          <div className="flex justify-center items-center">
            <img src={logo} alt="logo" className='w-60' />
          </div>

          <div className="text-center">
            <p className="mt-2 text-sm text-gray-600">Enter Verification Code</p>
          </div>

          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="otp" className="block text-sm font-medium text-gray-700 mb-1">
                Authenticator OTP
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <i className="fa-solid fa-key text-gray-400"></i>
                </div>
                <input
                  id="otp"
                  name="otp"
                  type="text"
                  required
                  className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 text-gray-900"
                  placeholder="******"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full bg-primary-600 flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500 transition duration-150"
              >
                Send OTP
              </button>
            </div>
          </form>

          <div className="mt-[41px] text-center"></div>
        </div>

        <div className="mt-8 text-center text-xs text-gray-500">
          <div className="mb-4">
            <p className="text-sm text-gray-600 flex items-center justify-center">
              <i className="fa-solid fa-shield-halved mr-2 text-primary-600"></i>
              Your data is protected with enterprise-grade security.
            </p>
          </div>
          <div className="flex justify-center space-x-4 mb-2">
            <a href="#" className="hover:text-primary-600">Privacy Policy</a>
            <a href="#" className="hover:text-primary-600">Terms of Service</a>
            <a href="#" className="hover:text-primary-600">Support</a>
          </div>
          <p>© 2025 BotnFlow. All rights reserved.</p>
        </div>
      </div>

      <div className='lg:w-[50%] w-full'>
        <VisualPanel />
      </div>
    </div>
  );
};

export default OtpVerification;
