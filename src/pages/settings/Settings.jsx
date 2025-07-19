import React, { useState } from 'react';
import {
    AppBar,
    Toolbar,
    IconButton,
    Avatar,
    Menu,
    MenuItem,
    ListItemIcon,
    Divider,
    Switch,
    Tab,
    Tabs,
    Box,
    Paper,
    TextField,
    Select,
    InputAdornment,
    Button,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    Chip,
    Card,
    CardContent,
    Typography,
    LinearProgress
} from '@mui/material';
import {
    Menu as MenuIcon,
    Search as SearchIcon,
    Notifications as NotificationsIcon,
    DarkMode as DarkModeIcon,
    LightMode as LightModeIcon,
    Person as PersonIcon,
    Settings as SettingsIcon,
    Logout as LogoutIcon,
    Language as LanguageIcon,
    CameraAlt as CameraAltIcon,
    Visibility as VisibilityIcon,
    Edit as EditIcon,
    Delete as DeleteIcon,
    Add as AddIcon,
    CreditCard as CreditCardIcon,
    CheckCircle as CheckCircleIcon,
    MoreVert as MoreVertIcon,
    Comment as CommentIcon,
    Phone as PhoneIcon,
    Email as EmailIcon,
    ShoppingCart as ShoppingCartIcon,
    Analytics as AnalyticsIcon,
    Support as SupportIcon,
    ArrowForward as ArrowForwardIcon
} from '@mui/icons-material';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const Settings = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [anchorElUser, setAnchorElUser] = useState(null);
    const [anchorElLang, setAnchorElLang] = useState(null);
    const [currentTab, setCurrentTab] = useState('general');
    const [sidebarOpen, setSidebarOpen] = useState(true);

    const [smsActive, setSmsActive] = useState(true);
    const [smsSenderId, setSmsSenderId] = useState('CPAAS');
    const [smsApiKey, setSmsApiKey] = useState('•••••••••••••••••••');
    const [showSmsApiKey, setShowSmsApiKey] = useState(false);

    // State for WhatsApp channel
    const [whatsappActive, setWhatsappActive] = useState(true);
    const [whatsappNumber, setWhatsappNumber] = useState('+1 (555) 123-4567');
    const [whatsappApiKey, setWhatsappApiKey] = useState('•••••••••••••••••••');
    const [showWhatsappApiKey, setShowWhatsappApiKey] = useState(false);

    // State for Email channel
    const [emailActive, setEmailActive] = useState(true);
    const [emailFrom, setEmailFrom] = useState('notifications@cpaasportal.com');
    const [emailName, setEmailName] = useState('CPaaS Portal');

    // State for Voice channel
    const [voiceActive, setVoiceActive] = useState(false);
    const [voiceNumber, setVoiceNumber] = useState('');
    const [voiceApiKey, setVoiceApiKey] = useState('');
    const [showVoiceApiKey, setShowVoiceApiKey] = useState(false);

    const handleSaveChanges = () => {
        console.log('Saving changes...');
    };

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const handleOpenLangMenu = (event) => {
        setAnchorElLang(event.currentTarget);
    };

    const handleCloseLangMenu = () => {
        setAnchorElLang(null);
    };

    const handleTabChange = (event, newValue) => {
        setCurrentTab(newValue);
    };

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <div className={`flex flex-col min-h-screen ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
            {/* Main Content */}
            <main
                className={`flex-1 mt-16 p-3 transition-all duration-300`}
            >
                <div className="max-w-7xl mx-auto">
                    {/* Page Header */}
                    <div className="mb-6">
                        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Profile Management</h1>
                        <p className="text-gray-600 dark:text-gray-300 mt-1">Manage your account settings and preferences</p>
                    </div>

                    {/* Tabs Navigation */}
                    <div className="border-b border-gray-200 dark:border-gray-700 mb-6">
                        <div className="flex overflow-x-auto hide-scrollbar">
                            <button
                                onClick={() => setCurrentTab('general')}
                                className={`py-3 px-4 border-b-2 ${currentTab === 'general' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700'} font-medium text-sm whitespace-nowrap`}
                            >
                                General
                            </button>
                            <button
                                onClick={() => setCurrentTab('channels')}
                                className={`py-3 px-4 border-b-2 ${currentTab === 'channels' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700'} font-medium text-sm whitespace-nowrap`}
                            >
                                Channels
                            </button>
                            <button
                                onClick={() => setCurrentTab('integrations')}
                                className={`py-3 px-4 border-b-2 ${currentTab === 'integrations' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700'} font-medium text-sm whitespace-nowrap`}
                            >
                                Integrations
                            </button>
                            <button
                                onClick={() => setCurrentTab('user-management')}
                                className={`py-3 px-4 border-b-2 ${currentTab === 'user-management' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700'} font-medium text-sm whitespace-nowrap`}
                            >
                                User Management
                            </button>
                            <button
                                onClick={() => setCurrentTab('billing')}
                                className={`py-3 px-4 border-b-2 ${currentTab === 'billing' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700'} font-medium text-sm whitespace-nowrap`}
                            >
                                Billing
                            </button>
                        </div>
                    </div>

                    {/* Tab Content: General */}
                    {currentTab === 'general' && (
                        <div className="space-y-6">
                            {/* Profile Section */}
                            <div className="bg-white dark:bg-gray-800 shadow-sm rounded-lg overflow-hidden">
                                <div className="p-6">
                                    <h2 className="text-lg font-medium text-gray-800 dark:text-white mb-4">Profile Information</h2>

                                    <div className="flex flex-col md:flex-row gap-6">
                                        {/* Avatar Section */}
                                        <div className="flex flex-col items-center md:w-1/4">
                                            <div className="mb-4">
                                                <div className="relative">
                                                    <img src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-1.jpg" alt="User avatar" className="h-32 w-32 rounded-full object-cover border-4 border-gray-200 dark:border-gray-600" />
                                                    <button className="absolute bottom-0 right-0 bg-blue-600 text-white rounded-full p-2 shadow-md hover:bg-blue-700">
                                                        <CameraAltIcon fontSize="small" />
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="text-center">
                                                <h3 className="font-medium text-gray-800 dark:text-white">Sarah Johnson</h3>
                                                <p className="text-gray-600 dark:text-gray-300 text-sm">Administrator</p>
                                            </div>
                                        </div>

                                        {/* Form Section */}
                                        <div className="md:w-3/4">
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                <div>
                                                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">First Name</label>
                                                    <input type="text" id="firstName" name="firstName" value="Sarah" className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm border p-2 dark:bg-gray-700 dark:border-gray-600 dark:text-white" />
                                                </div>

                                                <div>
                                                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Last Name</label>
                                                    <input type="text" id="lastName" name="lastName" value="Johnson" className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm border p-2 dark:bg-gray-700 dark:border-gray-600 dark:text-white" />
                                                </div>

                                                <div>
                                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email Address</label>
                                                    <input type="email" id="email" name="email" value="sarah.johnson@example.com" className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm border p-2 dark:bg-gray-700 dark:border-gray-600 dark:text-white" />
                                                </div>

                                                <div>
                                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Phone Number</label>
                                                    <input type="tel" id="phone" name="phone" value="+1 (555) 123-4567" className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm border p-2 dark:bg-gray-700 dark:border-gray-600 dark:text-white" />
                                                </div>

                                                <div>
                                                    <label htmlFor="country" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Country</label>
                                                    <select id="country" name="country" className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm border p-2 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                                                        <option value="us">United States</option>
                                                        <option value="ca">Canada</option>
                                                        <option value="uk">United Kingdom</option>
                                                        <option value="au">Australia</option>
                                                        <option value="de">Germany</option>
                                                        <option value="fr">France</option>
                                                    </select>
                                                </div>

                                                <div>
                                                    <label htmlFor="timezone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Timezone</label>
                                                    <select id="timezone" name="timezone" className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm border p-2 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                                                        <option value="pst">Pacific Time (UTC-8)</option>
                                                        <option value="mst">Mountain Time (UTC-7)</option>
                                                        <option value="cst">Central Time (UTC-6)</option>
                                                        <option value="est" selected>Eastern Time (UTC-5)</option>
                                                        <option value="gmt">GMT (UTC+0)</option>
                                                        <option value="cet">Central European Time (UTC+1)</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="px-6 py-3 bg-gray-50 dark:bg-gray-700 text-right">
                                    <button type="button" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                        Save Changes
                                    </button>
                                </div>
                            </div>

                            {/* Brand Color & Language Settings */}
                            <div className="bg-white dark:bg-gray-800 shadow-sm rounded-lg overflow-hidden">
                                <div className="p-6">
                                    <h2 className="text-lg font-medium text-gray-800 dark:text-white mb-4">Appearance Settings</h2>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label htmlFor="brandColor" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Brand Color</label>
                                            <div className="flex">
                                                <input type="color" id="brandColor" name="brandColor" value="#0284c7" className="h-10 w-10 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
                                                <input type="text" value="#0284c7" className="ml-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm border p-2 dark:bg-gray-700 dark:border-gray-600 dark:text-white" />
                                            </div>
                                            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">This color will be used for the portal branding elements</p>
                                        </div>

                                        <div>
                                            <label htmlFor="language" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Language</label>
                                            <select id="language" name="language" className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm border p-2 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                                                <option value="en" selected>English</option>
                                                <option value="es">Español</option>
                                                <option value="fr">Français</option>
                                                <option value="de">Deutsch</option>
                                                <option value="zh">中文</option>
                                                <option value="ja">日本語</option>
                                            </select>
                                            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">This setting affects the portal interface language</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="px-6 py-3 bg-gray-50 dark:bg-gray-700 text-right">
                                    <button type="button" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                        Save Changes
                                    </button>
                                </div>
                            </div>

                            {/* Danger Zone */}
                            <div className="bg-white dark:bg-gray-800 shadow-sm rounded-lg overflow-hidden border border-red-200 dark:border-red-700">
                                <div className="p-6">
                                    <h2 className="text-lg font-medium text-red-600 dark:text-red-400 mb-4">Danger Zone</h2>

                                    <div className="border-t border-b border-gray-200 dark:border-gray-600 py-4">
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <h3 className="text-base font-medium text-gray-800 dark:text-white">Delete Account</h3>
                                                <p className="text-sm text-gray-500 dark:text-gray-400">Permanently delete your account and all associated data. This action cannot be undone.</p>
                                            </div>
                                            <button type="button" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                                                Delete Account
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Tab Content: Channels */}
                    {currentTab === 'channels' && (
                        <div className="space-y-6">
                            <div className="bg-white dark:bg-gray-800 shadow-sm rounded-lg overflow-hidden">
                                <div className="p-6">
                                    <h2 className="text-lg font-medium text-gray-800 dark:text-white mb-4">Communication Channels</h2>
                                    <p className="text-gray-600 dark:text-gray-300 mb-6">Configure your messaging channels and sender settings</p>

                                    {/* SMS Channel */}
                                    <div className="border-t border-gray-200 dark:border-gray-600 pt-4 mb-6">
                                        <div className="flex items-center justify-between mb-4">
                                            <div className="flex items-center">
                                                <CommentIcon className="text-xl text-gray-700 dark:text-gray-300 mr-3" />
                                                <h3 className="text-base font-medium text-gray-800 dark:text-white">SMS</h3>
                                            </div>
                                            <div className="flex items-center">
                                                <span className={`mr-3 text-sm ${smsActive ? 'text-green-600' : 'text-gray-500'} font-medium`}>
                                                    {smsActive ? 'Active' : 'Inactive'}
                                                </span>
                                                <Switch
                                                    checked={smsActive}
                                                    onChange={() => setSmsActive(!smsActive)}
                                                    color="primary"
                                                />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                            <div>
                                                <label htmlFor="smsName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Sender ID</label>
                                                <input
                                                    type="text"
                                                    id="smsName"
                                                    name="smsName"
                                                    value={smsSenderId}
                                                    onChange={(e) => setSmsSenderId(e.target.value)}
                                                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm border p-2 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor="smsApiKey" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">API Key</label>
                                                <div className="relative">
                                                    <input
                                                        type={showSmsApiKey ? "text" : "password"}
                                                        id="smsApiKey"
                                                        name="smsApiKey"
                                                        value={smsApiKey}
                                                        onChange={(e) => setSmsApiKey(e.target.value)}
                                                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm border p-2 pr-10 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                                                    />
                                                    <button
                                                        className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-600 dark:text-gray-300"
                                                        onClick={() => setShowSmsApiKey(!showSmsApiKey)}
                                                    >
                                                        {showSmsApiKey ? <VisibilityOffIcon fontSize="small" /> : <VisibilityIcon fontSize="small" />}
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* WhatsApp Channel */}
                                    <div className="border-t border-gray-200 dark:border-gray-600 pt-4 mb-6">
                                        <div className="flex items-center justify-between mb-4">
                                            <div className="flex items-center">
                                                <CommentIcon className="text-xl text-gray-700 dark:text-gray-300 mr-3" />
                                                <h3 className="text-base font-medium text-gray-800 dark:text-white">WhatsApp</h3>
                                            </div>
                                            <div className="flex items-center">
                                                <span className={`mr-3 text-sm ${whatsappActive ? 'text-green-600' : 'text-gray-500'} font-medium`}>
                                                    {whatsappActive ? 'Active' : 'Inactive'}
                                                </span>
                                                <Switch
                                                    checked={whatsappActive}
                                                    onChange={() => setWhatsappActive(!whatsappActive)}
                                                    color="primary"
                                                />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                            <div>
                                                <label htmlFor="waNumber" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Business Phone Number</label>
                                                <input
                                                    type="text"
                                                    id="waNumber"
                                                    name="waNumber"
                                                    value={whatsappNumber}
                                                    onChange={(e) => setWhatsappNumber(e.target.value)}
                                                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm border p-2 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor="waApiKey" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">API Key</label>
                                                <div className="relative">
                                                    <input
                                                        type={showWhatsappApiKey ? "text" : "password"}
                                                        id="waApiKey"
                                                        name="waApiKey"
                                                        value={whatsappApiKey}
                                                        onChange={(e) => setWhatsappApiKey(e.target.value)}
                                                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm border p-2 pr-10 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                                                    />
                                                    <button
                                                        className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-600 dark:text-gray-300"
                                                        onClick={() => setShowWhatsappApiKey(!showWhatsappApiKey)}
                                                    >
                                                        {showWhatsappApiKey ? <VisibilityOffIcon fontSize="small" /> : <VisibilityIcon fontSize="small" />}
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Email Channel */}
                                    <div className="border-t border-gray-200 dark:border-gray-600 pt-4 mb-6">
                                        <div className="flex items-center justify-between mb-4">
                                            <div className="flex items-center">
                                                <EmailIcon className="text-xl text-gray-700 dark:text-gray-300 mr-3" />
                                                <h3 className="text-base font-medium text-gray-800 dark:text-white">Email</h3>
                                            </div>
                                            <div className="flex items-center">
                                                <span className={`mr-3 text-sm ${emailActive ? 'text-green-600' : 'text-gray-500'} font-medium`}>
                                                    {emailActive ? 'Active' : 'Inactive'}
                                                </span>
                                                <Switch
                                                    checked={emailActive}
                                                    onChange={() => setEmailActive(!emailActive)}
                                                    color="primary"
                                                />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                            <div>
                                                <label htmlFor="emailFrom" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">From Email</label>
                                                <input
                                                    type="email"
                                                    id="emailFrom"
                                                    name="emailFrom"
                                                    value={emailFrom}
                                                    onChange={(e) => setEmailFrom(e.target.value)}
                                                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm border p-2 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor="emailName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">From Name</label>
                                                <input
                                                    type="text"
                                                    id="emailName"
                                                    name="emailName"
                                                    value={emailName}
                                                    onChange={(e) => setEmailName(e.target.value)}
                                                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm border p-2 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Voice Channel */}
                                    <div className="border-t border-gray-200 dark:border-gray-600 pt-4">
                                        <div className="flex items-center justify-between mb-4">
                                            <div className="flex items-center">
                                                <PhoneIcon className="text-xl text-gray-700 dark:text-gray-300 mr-3" />
                                                <h3 className="text-base font-medium text-gray-800 dark:text-white">Voice</h3>
                                            </div>
                                            <div className="flex items-center">
                                                <span className={`mr-3 text-sm ${voiceActive ? 'text-green-600' : 'text-gray-500'} font-medium`}>
                                                    {voiceActive ? 'Active' : 'Inactive'}
                                                </span>
                                                <Switch
                                                    checked={voiceActive}
                                                    onChange={() => setVoiceActive(!voiceActive)}
                                                    color="primary"
                                                />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                            <div>
                                                <label htmlFor="voiceNumber" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Phone Number</label>
                                                <input
                                                    type="text"
                                                    id="voiceNumber"
                                                    name="voiceNumber"
                                                    placeholder="Enter phone number"
                                                    value={voiceNumber}
                                                    onChange={(e) => setVoiceNumber(e.target.value)}
                                                    className={`block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm border p-2 dark:bg-gray-700 dark:border-gray-600 dark:text-white ${!voiceActive ? 'opacity-50 cursor-not-allowed' : ''}`}
                                                    disabled={!voiceActive}
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor="voiceApiKey" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">API Key</label>
                                                <div className="relative">
                                                    <input
                                                        type={showVoiceApiKey ? "text" : "password"}
                                                        id="voiceApiKey"
                                                        name="voiceApiKey"
                                                        placeholder="Enter API key"
                                                        value={voiceApiKey}
                                                        onChange={(e) => setVoiceApiKey(e.target.value)}
                                                        className={`block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm border p-2 pr-10 dark:bg-gray-700 dark:border-gray-600 dark:text-white ${!voiceActive ? 'opacity-50 cursor-not-allowed' : ''}`}
                                                        disabled={!voiceActive}
                                                    />
                                                    <button
                                                        className={`absolute inset-y-0 right-0 pr-3 flex items-center ${!voiceActive ? 'text-gray-400' : 'text-gray-600 dark:text-gray-300'}`}
                                                        onClick={() => setShowVoiceApiKey(!showVoiceApiKey)}
                                                        disabled={!voiceActive}
                                                    >
                                                        {showVoiceApiKey ? <VisibilityOffIcon fontSize="small" /> : <VisibilityIcon fontSize="small" />}
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="px-6 py-3 bg-gray-50 dark:bg-gray-700 text-right">
                                    <button
                                        type="button"
                                        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                        onClick={handleSaveChanges}
                                    >
                                        Save Changes
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Tab Content: Integrations */}
                    {currentTab === 'integrations' && (
                        <div className="space-y-6">
                            <div className="bg-white dark:bg-gray-800 shadow-sm rounded-lg overflow-hidden">
                                <div className="p-6">
                                    <div className="flex justify-between items-center mb-4">
                                        <div>
                                            <h2 className="text-lg font-medium text-gray-800 dark:text-white">Integrations</h2>
                                            <p className="text-gray-600 dark:text-gray-300">Connect your CPaaS portal to other services</p>
                                        </div>
                                        <button type="button" className="inline-flex items-center justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                            <AddIcon className="mr-2" />
                                            Add Integration
                                        </button>
                                    </div>

                                    {/* Active Integrations */}
                                    <div className="mb-8">
                                        <h3 className="text-base font-medium text-gray-800 dark:text-white mb-4">Active Integrations</h3>

                                        <div className="space-y-4">
                                            {/* Salesforce Integration */}
                                            <div className="border rounded-lg p-4">
                                                <div className="flex justify-between items-center">
                                                    <div className="flex items-center">
                                                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                                                            <CommentIcon className="text-blue-600 text-xl" />
                                                        </div>
                                                        <div>
                                                            <h4 className="font-medium text-gray-800 dark:text-white">Salesforce</h4>
                                                            <p className="text-sm text-gray-500 dark:text-gray-400">Connected on Jun 15, 2023</p>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center space-x-2">
                                                        <button className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white">
                                                            <EditIcon fontSize="small" />
                                                        </button>
                                                        <button className="text-gray-600 dark:text-gray-300 hover:text-red-600">
                                                            <DeleteIcon fontSize="small" />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Zapier Integration */}
                                            <div className="border rounded-lg p-4">
                                                <div className="flex justify-between items-center">
                                                    <div className="flex items-center">
                                                        <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                                                            <CommentIcon className="text-orange-600 text-xl" />
                                                        </div>
                                                        <div>
                                                            <h4 className="font-medium text-gray-800 dark:text-white">Zapier</h4>
                                                            <p className="text-sm text-gray-500 dark:text-gray-400">Connected on May 3, 2023</p>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center space-x-2">
                                                        <button className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white">
                                                            <EditIcon fontSize="small" />
                                                        </button>
                                                        <button className="text-gray-600 dark:text-gray-300 hover:text-red-600">
                                                            <DeleteIcon fontSize="small" />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Available Integrations */}
                                    <div>
                                        <h3 className="text-base font-medium text-gray-800 dark:text-white mb-4">Available Integrations</h3>

                                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                            {/* Slack */}
                                            <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                                                <div className="flex items-center mb-3">
                                                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                                                        <CommentIcon className="text-purple-600 text-xl" />
                                                    </div>
                                                    <h4 className="font-medium text-gray-800 dark:text-white">Slack</h4>
                                                </div>
                                                <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">Get notifications and send messages directly from Slack.</p>
                                                <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                                                    Connect <ArrowForwardIcon className="ml-1" fontSize="small" />
                                                </button>
                                            </div>

                                            {/* HubSpot */}
                                            <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                                                <div className="flex items-center mb-3">
                                                    <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                                                        <CommentIcon className="text-orange-600 text-xl" />
                                                    </div>
                                                    <h4 className="font-medium text-gray-800 dark:text-white">HubSpot</h4>
                                                </div>
                                                <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">Sync contacts and automate communications with HubSpot CRM.</p>
                                                <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                                                    Connect <ArrowForwardIcon className="ml-1" fontSize="small" />
                                                </button>
                                            </div>

                                            {/* Google Analytics */}
                                            <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                                                <div className="flex items-center mb-3">
                                                    <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center mr-4">
                                                        <AnalyticsIcon className="text-yellow-600 text-xl" />
                                                    </div>
                                                    <h4 className="font-medium text-gray-800 dark:text-white">Google Analytics</h4>
                                                </div>
                                                <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">Track message performance and campaign analytics.</p>
                                                <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                                                    Connect <ArrowForwardIcon className="ml-1" fontSize="small" />
                                                </button>
                                            </div>

                                            {/* Shopify */}
                                            <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                                                <div className="flex items-center mb-3">
                                                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                                                        <ShoppingCartIcon className="text-green-600 text-xl" />
                                                    </div>
                                                    <h4 className="font-medium text-gray-800 dark:text-white">Shopify</h4>
                                                </div>
                                                <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">Send order updates and promotional messages to customers.</p>
                                                <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                                                    Connect <ArrowForwardIcon className="ml-1" fontSize="small" />
                                                </button>
                                            </div>

                                            {/* Zendesk */}
                                            <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                                                <div className="flex items-center mb-3">
                                                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                                                        <SupportIcon className="text-blue-600 text-xl" />
                                                    </div>
                                                    <h4 className="font-medium text-gray-800 dark:text-white">Zendesk</h4>
                                                </div>
                                                <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">Integrate messaging with your customer support workflow.</p>
                                                <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                                                    Connect <ArrowForwardIcon className="ml-1" fontSize="small" />
                                                </button>
                                            </div>

                                            {/* More Integrations */}
                                            <div className="border rounded-lg p-4 hover:shadow-md transition-shadow bg-gray-50 dark:bg-gray-700">
                                                <div className="h-full flex flex-col items-center justify-center text-center">
                                                    <div className="w-10 h-10 bg-gray-200 dark:bg-gray-600 rounded-full flex items-center justify-center mb-3">
                                                        <MoreHorizIcon className="text-gray-600 dark:text-gray-300" />
                                                    </div>
                                                    <h4 className="font-medium text-gray-800 dark:text-white mb-2">More Integrations</h4>
                                                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">Explore our marketplace for more integration options.</p>
                                                    <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                                                        View All <ArrowForwardIcon className="ml-1" fontSize="small" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Tab Content: User Management */}
                    {currentTab === 'user-management' && (
                        <div className="space-y-6">
                            <div className="bg-white dark:bg-gray-800 shadow-sm rounded-lg overflow-hidden">
                                <div className="p-6">
                                    <div className="flex justify-between items-center mb-6">
                                        <div>
                                            <h2 className="text-lg font-medium text-gray-800 dark:text-white">User Management</h2>
                                            <p className="text-gray-600 dark:text-gray-300">Manage users and permissions</p>
                                        </div>
                                        <button type="button" className="inline-flex items-center justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                            <AddIcon className="mr-2" />
                                            Add User
                                        </button>
                                    </div>

                                    {/* Search and Filters */}
                                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
                                        <div className="relative w-full md:w-64">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <SearchIcon className="text-gray-400" />
                                            </div>
                                            <input type="text" className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white" placeholder="Search users..." />
                                        </div>

                                        <div className="flex flex-wrap gap-2">
                                            <select className="block w-full md:w-auto border border-gray-300 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 py-2 px-3 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                                                <option value="">All Roles</option>
                                                <option value="admin">Admin</option>
                                                <option value="developer">Developer</option>
                                                <option value="viewer">Viewer</option>
                                            </select>

                                            <select className="block w-full md:w-auto border border-gray-300 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 py-2 px-3 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                                                <option value="">All Status</option>
                                                <option value="active">Active</option>
                                                <option value="inactive">Inactive</option>
                                                <option value="pending">Pending</option>
                                            </select>
                                        </div>
                                    </div>

                                    {/* Users Table */}
                                    <div className="overflow-x-auto">
                                        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                            <thead className="bg-gray-50 dark:bg-gray-700">
                                                <tr>
                                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                        User
                                                    </th>
                                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                        Role
                                                    </th>
                                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                        Status
                                                    </th>
                                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                        Last Active
                                                    </th>
                                                    <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                        Actions
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                                                {/* User 1 */}
                                                <tr>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div className="flex items-center">
                                                            <div className="flex-shrink-0 h-10 w-10">
                                                                <img className="h-10 w-10 rounded-full" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-1.jpg" alt="" />
                                                            </div>
                                                            <div className="ml-4">
                                                                <div className="text-sm font-medium text-gray-900 dark:text-white">Sarah Johnson</div>
                                                                <div className="text-sm text-gray-500 dark:text-gray-400">sarah.johnson@example.com</div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                                                            Admin
                                                        </span>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                                                            Active
                                                        </span>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                                                        Just now
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                        <button className="text-blue-600 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300 mr-3">Edit</button>
                                                        <button className="text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-300">Delete</button>
                                                    </td>
                                                </tr>

                                                {/* User 2 */}
                                                <tr>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div className="flex items-center">
                                                            <div className="flex-shrink-0 h-10 w-10">
                                                                <img className="h-10 w-10 rounded-full" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg" alt="" />
                                                            </div>
                                                            <div className="ml-4">
                                                                <div className="text-sm font-medium text-gray-900 dark:text-white">Michael Chen</div>
                                                                <div className="text-sm text-gray-500 dark:text-gray-400">michael.chen@example.com</div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                                                            Admin
                                                        </span>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                                                            Active
                                                        </span>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                                                        2 hours ago
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                        <button className="text-blue-600 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300 mr-3">Edit</button>
                                                        <button className="text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-300">Delete</button>
                                                    </td>
                                                </tr>

                                                {/* User 3 */}
                                                <tr>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div className="flex items-center">
                                                            <div className="flex-shrink-0 h-10 w-10">
                                                                <img className="h-10 w-10 rounded-full" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-3.jpg" alt="" />
                                                            </div>
                                                            <div className="ml-4">
                                                                <div className="text-sm font-medium text-gray-900 dark:text-white">Emily Davis</div>
                                                                <div className="text-sm text-gray-500 dark:text-gray-400">emily.davis@example.com</div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                                                            Developer
                                                        </span>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                                                            Active
                                                        </span>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                                                        1 day ago
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                        <button className="text-blue-600 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300 mr-3">Edit</button>
                                                        <button className="text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-300">Delete</button>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Tab Content: Billing */}
                    {currentTab === 'billing' && (
                        <div className="space-y-6">
                            {/* Billing Overview */}
                            <div className="bg-white dark:bg-gray-800 shadow-sm rounded-lg overflow-hidden">
                                <div className="p-6">
                                    <div className="flex justify-between items-center mb-6">
                                        <div>
                                            <h2 className="text-lg font-medium text-gray-800 dark:text-white">Billing & Usage</h2>
                                            <p className="text-gray-600 dark:text-gray-300">Manage your subscription and billing information</p>
                                        </div>
                                        <div className="flex items-center space-x-3">
                                            <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full dark:bg-green-900 dark:text-green-200">
                                                Pro Plan
                                            </span>
                                            <button type="button" className="inline-flex items-center justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                                <CreditCardIcon className="mr-2" />
                                                Add Credits
                                            </button>
                                        </div>
                                    </div>

                                    {/* Current Usage */}
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                                        <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                                            <div className="flex items-center justify-between">
                                                <div>
                                                    <p className="text-sm font-medium text-gray-600 dark:text-gray-300">SMS Messages</p>
                                                    <p className="text-2xl font-bold text-gray-900 dark:text-white">8,542</p>
                                                    <p className="text-sm text-gray-500 dark:text-gray-400">of 10,000 used</p>
                                                </div>
                                                <div className="text-blue-600 dark:text-blue-400">
                                                    <CommentIcon className="text-2xl" />
                                                </div>
                                            </div>
                                            <div className="mt-3">
                                                <div className="bg-gray-200 rounded-full h-2 dark:bg-gray-600">
                                                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                                            <div className="flex items-center justify-between">
                                                <div>
                                                    <p className="text-sm font-medium text-gray-600 dark:text-gray-300">WhatsApp Messages</p>
                                                    <p className="text-2xl font-bold text-gray-900 dark:text-white">2,156</p>
                                                    <p className="text-sm text-gray-500 dark:text-gray-400">of 5,000 used</p>
                                                </div>
                                                <div className="text-green-600 dark:text-green-400">
                                                    <CommentIcon className="text-2xl" />
                                                </div>
                                            </div>
                                            <div className="mt-3">
                                                <div className="bg-gray-200 rounded-full h-2 dark:bg-gray-600">
                                                    <div className="bg-green-600 h-2 rounded-full" style={{ width: '43%' }}></div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                                            <div className="flex items-center justify-between">
                                                <div>
                                                    <p className="text-sm font-medium text-gray-600 dark:text-gray-300">Email Messages</p>
                                                    <p className="text-2xl font-bold text-gray-900 dark:text-white">12,847</p>
                                                    <p className="text-sm text-gray-500 dark:text-gray-400">of 25,000 used</p>
                                                </div>
                                                <div className="text-blue-600 dark:text-blue-400">
                                                    <EmailIcon className="text-2xl" />
                                                </div>
                                            </div>
                                            <div className="mt-3">
                                                <div className="bg-gray-200 rounded-full h-2 dark:bg-gray-600">
                                                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '51%' }}></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Subscription Plans */}
                            <div class="bg-white shadow-sm rounded-lg overflow-hidden">
                                <div class="p-6">
                                    <h3 class="text-lg font-medium text-gray-800 mb-6">Choose Your Plan</h3>

                                    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                                        <div class="border-2 border-gray-200 rounded-lg p-6 relative">
                                            <div class="text-center">
                                                <h4 class="text-lg font-semibold text-gray-900">Starter</h4>
                                                <div class="mt-4">
                                                    <span class="text-4xl font-bold text-gray-900">$29</span>
                                                    <span class="text-gray-500">/month</span>
                                                </div>
                                                <p class="mt-2 text-sm text-gray-500">Perfect for small businesses</p>
                                            </div>

                                            <ul class="mt-6 space-y-3">
                                                <li class="flex items-center">
                                                    <i class="fa-solid fa-check text-green-500 mr-3"></i>
                                                    <span class="text-sm text-gray-700">5,000 SMS messages</span>
                                                </li>
                                                <li class="flex items-center">
                                                    <i class="fa-solid fa-check text-green-500 mr-3"></i>
                                                    <span class="text-sm text-gray-700">2,000 WhatsApp messages</span>
                                                </li>
                                                <li class="flex items-center">
                                                    <i class="fa-solid fa-check text-green-500 mr-3"></i>
                                                    <span class="text-sm text-gray-700">10,000 Email messages</span>
                                                </li>
                                                <li class="flex items-center">
                                                    <i class="fa-solid fa-check text-green-500 mr-3"></i>
                                                    <span class="text-sm text-gray-700">Basic integrations</span>
                                                </li>
                                                <li class="flex items-center">
                                                    <i class="fa-solid fa-check text-green-500 mr-3"></i>
                                                    <span class="text-sm text-gray-700">Email support</span>
                                                </li>
                                            </ul>

                                            <button class="w-full mt-6 py-2 px-4 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
                                                Select Plan
                                            </button>
                                        </div>

                                        <div class="border-2 border-primary-600 rounded-lg p-6 relative">
                                            <div class="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                                <span class="bg-primary-600 text-white px-3 py-1 text-xs font-medium rounded-full">Current Plan</span>
                                            </div>

                                            <div class="text-center">
                                                <h4 class="text-lg font-semibold text-gray-900">Pro</h4>
                                                <div class="mt-4">
                                                    <span class="text-4xl font-bold text-gray-900">$99</span>
                                                    <span class="text-gray-500">/month</span>
                                                </div>
                                                <p class="mt-2 text-sm text-gray-500">Best for growing businesses</p>
                                            </div>

                                            <ul class="mt-6 space-y-3">
                                                <li class="flex items-center">
                                                    <i class="fa-solid fa-check text-green-500 mr-3"></i>
                                                    <span class="text-sm text-gray-700">10,000 SMS messages</span>
                                                </li>
                                                <li class="flex items-center">
                                                    <i class="fa-solid fa-check text-green-500 mr-3"></i>
                                                    <span class="text-sm text-gray-700">5,000 WhatsApp messages</span>
                                                </li>
                                                <li class="flex items-center">
                                                    <i class="fa-solid fa-check text-green-500 mr-3"></i>
                                                    <span class="text-sm text-gray-700">25,000 Email messages</span>
                                                </li>
                                                <li class="flex items-center">
                                                    <i class="fa-solid fa-check text-green-500 mr-3"></i>
                                                    <span class="text-sm text-gray-700">All integrations</span>
                                                </li>
                                                <li class="flex items-center">
                                                    <i class="fa-solid fa-check text-green-500 mr-3"></i>
                                                    <span class="text-sm text-gray-700">Priority support</span>
                                                </li>
                                                <li class="flex items-center">
                                                    <i class="fa-solid fa-check text-green-500 mr-3"></i>
                                                    <span class="text-sm text-gray-700">Advanced analytics</span>
                                                </li>
                                            </ul>

                                            <button class="w-full mt-6 py-2 px-4 border border-transparent rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
                                                Current Plan
                                            </button>
                                        </div>

                                        <div class="border-2 border-gray-200 rounded-lg p-6 relative">
                                            <div class="text-center">
                                                <h4 class="text-lg font-semibold text-gray-900">Enterprise</h4>
                                                <div class="mt-4">
                                                    <span class="text-4xl font-bold text-gray-900">$299</span>
                                                    <span class="text-gray-500">/month</span>
                                                </div>
                                                <p class="mt-2 text-sm text-gray-500">For large organizations</p>
                                            </div>

                                            <ul class="mt-6 space-y-3">
                                                <li class="flex items-center">
                                                    <i class="fa-solid fa-check text-green-500 mr-3"></i>
                                                    <span class="text-sm text-gray-700">50,000 SMS messages</span>
                                                </li>
                                                <li class="flex items-center">
                                                    <i class="fa-solid fa-check text-green-500 mr-3"></i>
                                                    <span class="text-sm text-gray-700">25,000 WhatsApp messages</span>
                                                </li>
                                                <li class="flex items-center">
                                                    <i class="fa-solid fa-check text-green-500 mr-3"></i>
                                                    <span class="text-sm text-gray-700">100,000 Email messages</span>
                                                </li>
                                                <li class="flex items-center">
                                                    <i class="fa-solid fa-check text-green-500 mr-3"></i>
                                                    <span class="text-sm text-gray-700">Custom integrations</span>
                                                </li>
                                                <li class="flex items-center">
                                                    <i class="fa-solid fa-check text-green-500 mr-3"></i>
                                                    <span class="text-sm text-gray-700">24/7 phone support</span>
                                                </li>
                                                <li class="flex items-center">
                                                    <i class="fa-solid fa-check text-green-500 mr-3"></i>
                                                    <span class="text-sm text-gray-700">Dedicated account manager</span>
                                                </li>
                                            </ul>

                                            <button class="w-full mt-6 py-2 px-4 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
                                                Upgrade
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Payment Method & Invoices */}
                            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                <div class="bg-white shadow-sm rounded-lg overflow-hidden">
                                    <div class="p-6">
                                        <div class="flex justify-between items-center mb-4">
                                            <h3 class="text-lg font-medium text-gray-800">Payment Method</h3>
                                            <button class="text-primary-600 hover:text-primary-700 text-sm font-medium">
                                                Update
                                            </button>
                                        </div>

                                        <div class="flex items-center p-4 border rounded-lg">
                                            <div class="flex-shrink-0">
                                                <i class="fa-brands fa-cc-visa text-2xl text-blue-600"></i>
                                            </div>
                                            <div class="ml-4">
                                                <p class="font-medium text-gray-900">•••• •••• •••• 4242</p>
                                                <p class="text-sm text-gray-500">Expires 12/25</p>
                                            </div>
                                            <div class="ml-auto">
                                                <span class="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded">
                                                    Default
                                                </span>
                                            </div>
                                        </div>

                                        <div class="mt-4">
                                            <p class="text-sm text-gray-600">Next billing date: <span class="font-medium">January 15, 2024</span></p>
                                            <p class="text-sm text-gray-600">Amount: <span class="font-medium">$99.00</span></p>
                                        </div>
                                    </div>
                                </div>

                                <div class="bg-white shadow-sm rounded-lg overflow-hidden">
                                    <div class="p-6">
                                        <div class="flex justify-between items-center mb-4">
                                            <h3 class="text-lg font-medium text-gray-800">Recent Invoices</h3>
                                            <button class="text-primary-600 hover:text-primary-700 text-sm font-medium">
                                                View All
                                            </button>
                                        </div>

                                        <div class="space-y-3">
                                            <div class="flex items-center justify-between p-3 border rounded-lg">
                                                <div>
                                                    <p class="font-medium text-gray-900">
                                                        <span class="text-sm text-gray-500">Jan 15, 2024</span>
                                                    </p>
                                                    <p class="text-sm text-gray-500">Pro Plan - $99.00</p>
                                                </div>
                                                <div class="text-right">
                                                    <p class="text-sm text-gray-500">Paid</p>
                                                    <p class="text-sm text-gray-500">Status: <span class="font-medium">Paid</span></p>
                                                </div>
                                            </div>

                                            <div class="flex items-center justify-between p-3 border rounded-lg">
                                                <div>
                                                    <p class="font-medium text-gray-900">
                                                        <span class="text-sm text-gray-500">Dec 15, 2023</span>
                                                    </p>
                                                    <p class="text-sm text-gray-500">Pro Plan - $99.00</p>
                                                </div>
                                                <div class="text-right">
                                                    <p class="text-sm text-gray-500">Paid</p>
                                                    <p class="text-sm text-gray-500">Status: <span class="font-medium">Paid</span></p>
                                                </div>
                                            </div>

                                            <div class="flex items-center justify-between p-3 border rounded-lg">
                                                <div>
                                                    <p class="font-medium text-gray-900">
                                                        <span class="text-sm text-gray-500">Nov 15, 2023</span>
                                                    </p>
                                                    <p class="text-sm text-gray-500">Pro Plan - $99.00</p>
                                                </div>
                                                <div class="text-right">
                                                    <p class="text-sm text-gray-500">Paid</p>
                                                    <p class="text-sm text-gray-500">Status: <span class="font-medium">Paid</span></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
};

export default Settings;