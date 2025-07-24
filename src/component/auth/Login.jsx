import { useState } from 'react';
import { FaHeadphones, FaEnvelope, FaLock, FaEye, FaShieldHalved } from 'react-icons/fa6';
import { FaGoogle, FaFacebook } from 'react-icons/fa';
import VisualPanel from './VisualPanel';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png'

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="lg:flex justify-between bg-gray-50">
            <div className="lg:w-[50%] w-full flex flex-col items-center px-3 md:px-6 py-3 md:py-6 lg:py-12 lg:px-8">
                <div className="w-full max-w-md space-y-8 bg-white p-3 md:p-5 lg:p-8 rounded-xl shadow-lg">
                    <div className="flex justify-center items-center">
                        <img src={logo} alt="" className='w-60' />
                    </div>

                    <div className="text-center">
                        <p className="mt-2 text-sm text-gray-600">Sign in to access your account</p>
                    </div>

                    <form className="space-y-5">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                Email Address
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <FaEnvelope className="text-gray-400" />
                                </div>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 text-gray-900"
                                    placeholder="you@company.com"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between mb-1">
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                    Password
                                </label>
                            </div>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <FaLock className="text-gray-400" />
                                </div>
                                <input
                                    id="password"
                                    name="password"
                                    type={showPassword ? "text" : "password"}
                                    autoComplete="current-password"
                                    required
                                    className="block w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 text-gray-900"
                                    placeholder="••••••••••"
                                />
                                <button
                                    type="button"
                                    onClick={togglePasswordVisibility}
                                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                                >
                                    <FaEye className="text-gray-400" />
                                </button>
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center"></div>
                            <div>
                                <Link to='/forgot-password' className='text-sm font-medium text-primary-600 hover:text-brand-500 cursor-pointer'>
                                    Forgot password?
                                </Link>
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="w-full bg-primary-600 flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500 transition duration-150"
                            >
                                Sign In
                            </button>
                        </div>
                    </form>

                    <div className="relative my-6">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-300"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="bg-white px-2 text-gray-500">Or continue with</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                        <button
                            type="button"
                            className="inline-flex justify-center items-center py-2.5 px-4 border border-gray-300 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500 transition duration-150"
                        >
                            <FaGoogle className="text-red-500 mr-2" />
                            Google
                        </button>
                        <button
                            type="button"
                            className="inline-flex justify-center items-center py-2.5 px-4 border border-gray-300 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500 transition duration-150"
                        >
                            <FaFacebook className="text-blue-600 mr-2" />
                            Facebook
                        </button>
                    </div>

                    <div className="mt-8 text-center">
                        <p className="text-sm text-gray-600">
                            Don't have an account?
                            <Link to='/signup' className='font-medium text-primary-600 hover:text-brand-500 cursor-pointer ml-1'>
                                Signup for Account!
                            </Link>
                        </p>
                    </div>
                </div>

                <div className="mt-8 text-center text-xs text-gray-500">
                    <div className="mb-4">
                        <p className="text-sm text-gray-600 flex items-center justify-center">
                            <FaShieldHalved className="mr-2 text-primary-600" />
                            Your data is protected with enterprise-grade security.
                        </p>
                    </div>
                    <div className="flex justify-center space-x-4 mb-2">
                        <a href="#" className="hover:text-primary-600">
                            Privacy Policy
                        </a>
                        <a href="#" className="hover:text-primary-600">
                            Terms of Service
                        </a>
                        <a href="#" className="hover:text-primary-600">
                            Support
                        </a>
                    </div>

                    <p>© 2025 BotnFlow. All rights reserved.</p>
                </div>
            </div>

            <div className='lg:w-[50%] w-full'>
                {/* Right Side (Visual Panel) */}
                <VisualPanel />
            </div>
        </div >
    );
};

export default Login;