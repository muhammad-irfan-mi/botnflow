// import { NavLink } from 'react-router-dom';
// import { FaChartLine, FaMessage, FaBullhorn, FaAddressBook, FaPhone, FaWhatsapp, FaChartBar } from 'react-icons/fa6';
// import ForumIcon from '@mui/icons-material/Forum';
// import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
// import SchemaIcon from '@mui/icons-material/Schema';
// import SupportAgentIcon from '@mui/icons-material/SupportAgent';
// import AnalyticsIcon from '@mui/icons-material/Analytics';
// import CreditCardIcon from '@mui/icons-material/CreditCard';
// import Diversity3Icon from '@mui/icons-material/Diversity3';
// import SettingsIcon from '@mui/icons-material/Settings';
// import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

// import { useContext, useState } from 'react';
// import { ContentContext } from '../../context/ContextProvider';

// const navItems = [
//     { label: 'Dashboard', icon: FaChartLine, path: '/dashboard' },
//     { label: 'Conversation', icon: ForumIcon, path: '/conversation' },
//     { label: 'Contacts', icon: FaAddressBook, path: '/contact' },
//     { label: 'Broadcast', icon: FaBullhorn, path: '/broadcast' },
//     { label: 'Flow Builder', icon: SchemaIcon, path: '/flow-builder' },
//     { label: 'AI Agent', icon: SupportAgentIcon, path: '/ai-agent' },
//     { label: 'Report & Analytics', icon: AnalyticsIcon, path: '/report' },
//     { label: 'Settings', icon: SettingsIcon, path: '/setting' },
//     {
//         label: 'Call Center',
//         icon: HeadsetMicIcon,
//         submenu: [
//             { label: 'Live Dashboard', path: '/agent-dashboard' },
//             { label: 'Call Logs', path: '/call-logs' },
//             { label: 'Queue Management', path: '/call-queue' },
//             { label: 'Call Analytics', path: '/call-analytic' },
//             { label: 'Dialer', path: '/dialer' },
//         ]
//     },

// ];

// const navItemsAdmin = [
//     {
//         label: 'All Companies',
//         icon: HeadsetMicIcon,
//         submenu: [
//             { label: 'Company Profile', path: '/company-profile' },
//             { label: 'Users & Roles', path: '/user-role' },
//             { label: 'Billing & Payments', path: '/billing-payment' },
//             { label: 'Usage & Limits', path: 'usage-limit' },
//         ]
//     },
//     {
//         label: 'Audit Logs',
//         icon: HeadsetMicIcon,
//         submenu: [
//             { label: 'User Activity Logs', path: '/user-activity-log' },
//             { label: 'Company Activity Logs', path: '/company-activity-log' },
//             { label: 'API Access Logs', path: '/api-access-log' },
//         ]
//     },
//     {
//         label: 'System Configuration',
//         icon: HeadsetMicIcon,
//         submenu: [
//             { label: 'Global Settings', path: '/global-setting' },
//             { label: 'Channel Defaults', path: '/channel-default' },
//             { label: 'SLA & Thresholds', path: '/sla-threshold' },
//             { label: 'Feature Flags', path: '/feature-flag' },
//         ]
//     },
// ]

// const Sidebar = () => {
//     const [openSubmenu, setOpenSubmenu] = useState(null);
//     const { role } = useContext(ContentContext);

//     const toggleSubmenu = (label) => {
//         setOpenSubmenu(openSubmenu === label ? null : label);
//     };

//     return (
//         <aside className={`h-full bg-primary-600 text-white border-r border-gray-200 overflow-y-auto`}>
//             <nav className="p-3 px-2">
//                 <ul className="space-y-2">
//                     {(role !== 'admin' ? navItems : navItemsAdmin).map((item) => (
//                         <li key={item.label}>
//                             {item.path ? (
//                                 <NavLink
//                                     to={item.path}
//                                     className={({ isActive }) =>
//                                         `flex items-center space-x-2 px-2 py-3 rounded-lg cursor-pointer ${isActive ? 'bg-blue-900 text-white' : 'text-white hover:bg-blue-900'
//                                         }`
//                                     }
//                                 >
//                                     <item.icon className="text-gray-200" />
//                                     <span>{item.label}</span>
//                                 </NavLink>
//                             ) : (
//                                 <div>
//                                     <div
//                                         onClick={() => toggleSubmenu(item.label)}
//                                         className={`flex items-center justify-between px-1 py-3 rounded-lg cursor-pointer ${openSubmenu === item.label ? 'bg-blue-900 text-white' : 'text-white hover:bg-blue-900'
//                                             }`}
//                                     >
//                                         <div className="flex items-center space-x-3">
//                                             <item.icon className="text-gray-200" />
//                                             <span>{item.label}</span>
//                                         </div>
//                                         {openSubmenu === item.label ? (
//                                             <KeyboardArrowUpIcon className="text-gray-200" />
//                                         ) : (
//                                             <KeyboardArrowDownIcon className="text-gray-200" />
//                                         )}
//                                     </div>
//                                     {openSubmenu === item.label && (
//                                         <ul className="ml-6 mt-1 space-y-1">
//                                             {item.submenu.map((subItem) => (
//                                                 <li key={subItem.label}>
//                                                     <NavLink
//                                                         to={subItem.path}
//                                                         className={({ isActive }) =>
//                                                             `flex items-center space-x-3 px-3 py-2 rounded-lg cursor-pointer ${isActive ? 'bg-blue-900 text-white' : 'hover:bg-blue-900'
//                                                             }`
//                                                         }
//                                                     >
//                                                         <span>{subItem.label}</span>
//                                                     </NavLink>
//                                                 </li>
//                                             ))}
//                                         </ul>
//                                     )}
//                                 </div>
//                             )}
//                         </li>
//                     ))}
//                 </ul>
//             </nav>
//         </aside>
//     );
// };

// export default Sidebar;








import { NavLink } from 'react-router-dom';
import { FaChartLine, FaMessage, FaBullhorn, FaAddressBook } from 'react-icons/fa6';
import ForumIcon from '@mui/icons-material/Forum';
import SchemaIcon from '@mui/icons-material/Schema';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import SettingsIcon from '@mui/icons-material/Settings';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import CloseIcon from '@mui/icons-material/Close';

import { useContext, useState } from 'react';
import { ContentContext } from '../../context/ContextProvider';

const navItems = [
    { label: 'Dashboard', icon: FaChartLine, path: '/dashboard' },
    { label: 'Conversation', icon: ForumIcon, path: '/conversation' },
    { label: 'Lead Generation', icon: ForumIcon, path: '/lead-generation' },
    { label: 'Contacts', icon: FaAddressBook, path: '/contact' },
    { label: 'Broadcast', icon: FaBullhorn, path: '/broadcast' },
    { label: 'Flow Builder', icon: SchemaIcon, path: '/flow-builder' },
    { label: 'AI Agent', icon: SupportAgentIcon, path: '/aiagent-list' },
    { label: 'Settings', icon: SettingsIcon, path: '/setting' },
    {
        label: 'Call Center',
        icon: HeadsetMicIcon,
        submenu: [
            { label: 'Live Dashboard', path: '/agent-dashboard' },
            { label: 'Call Logs', path: '/call-logs' },
            { label: 'Queue Management', path: '/call-queue' },
            { label: 'Call Analytics', path: '/call-analytic' },
            { label: 'Dialer', path: '/dialer' },
        ]
    },

];

const navItemsAdmin = [
    {
        label: 'All Companies',
        icon: HeadsetMicIcon,
        submenu: [
            { label: 'Company Profile', path: '/company-profile' },
            { label: 'Users & Roles', path: '/user-role' },
            { label: 'Billing & Payments', path: '/billing-payment' },
            { label: 'Usage & Limits', path: 'usage-limit' },
        ]
    },
    {
        label: 'Audit Logs',
        icon: HeadsetMicIcon,
        submenu: [
            { label: 'User Activity Logs', path: '/user-activity-log' },
            { label: 'Company Activity Logs', path: '/company-activity-log' },
            { label: 'API Access Logs', path: '/api-access-log' },
        ]
    },
    {
        label: 'System Configuration',
        icon: HeadsetMicIcon,
        submenu: [
            { label: 'Global Settings', path: '/global-setting' },
            { label: 'Channel Defaults', path: '/channel-default' },
            { label: 'SLA & Thresholds', path: '/sla-threshold' },
            { label: 'Feature Flags', path: '/feature-flag' },
        ]
    },
]

const Sidebar = ({ onClose, isCompact }) => {
    const [openSubmenu, setOpenSubmenu] = useState(null);
    const { role } = useContext(ContentContext);

    const toggleSubmenu = (label) => {
        setOpenSubmenu(openSubmenu === label ? null : label);
    };

    return (
        <aside className={`h-full bg-primary-600 text-white border-r border-gray-200 overflow-y-auto ${isCompact ? 'w-64' : ''}`}>
            <nav className="p-3 px-2 relative h-full">
                {/* Close button for mobile and small laptop */}
                {/* {(isCompact || onClose) && (
                    <button
                        className="lg:hidden absolute top-2 right-2 text-white p-1 rounded-full hover:bg-blue-700"
                        onClick={onClose}
                    >
                        <CloseIcon />
                    </button>
                )} */}

                <ul className="space-y-2 lg:mt-0">
                    {(role !== 'admin' ? navItems : navItemsAdmin).map((item) => (
                        <li key={item.label}>
                            {item.path ? (
                                <NavLink
                                    to={item.path}
                                    className={({ isActive }) =>
                                        `flex items-center space-x-2 px-2 py-3 rounded-lg cursor-pointer ${isActive ? 'bg-blue-900 text-white' : 'text-white hover:bg-blue-900'
                                        }`}
                                    onClick={onClose}
                                >
                                    <item.icon className="text-gray-200" />
                                    <span>{item.label}</span>
                                </NavLink>
                            ) : (
                                <div>
                                    <div
                                        onClick={() => toggleSubmenu(item.label)}
                                        className={`flex items-center justify-between px-1 py-3 rounded-lg cursor-pointer ${openSubmenu === item.label ? 'bg-blue-900 text-white' : 'text-white hover:bg-blue-900'
                                            }`}
                                    >
                                        <div className="flex items-center space-x-3">
                                            <item.icon className="text-gray-200" />
                                            <span>{item.label}</span>
                                        </div>
                                        {openSubmenu === item.label ? (
                                            <KeyboardArrowUpIcon className="text-gray-200" />
                                        ) : (
                                            <KeyboardArrowDownIcon className="text-gray-200" />
                                        )}
                                    </div>
                                    {openSubmenu === item.label && (
                                        <ul className="ml-6 mt-1 space-y-1">
                                            {item.submenu.map((subItem) => (
                                                <li key={subItem.label}>
                                                    <NavLink
                                                        to={subItem.path}
                                                        className={({ isActive }) =>
                                                            `flex items-center space-x-3 px-3 py-2 rounded-lg cursor-pointer ${isActive ? 'bg-blue-900 text-white' : 'hover:bg-blue-900'
                                                            }`}
                                                        onClick={onClose}
                                                    >
                                                        <span>{subItem.label}</span>
                                                    </NavLink>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            )}
                        </li>
                    ))}
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;