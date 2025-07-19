import { useState } from "react";
import {
    Add,
    Search,
    Group,
    PersonAdd,
    Person,
    EmojiEvents,
    Business,
    WhatsApp,
    Phone,
    Visibility,
    Edit,
    Delete,
    Upload,
    Download,
} from "@mui/icons-material";
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';

const Contacts = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => setIsModalOpen(!isModalOpen);

    return (
        <div className="min-h-screen mt-16 bg-gray-50 p-3 font-sans">
            <div className="mb-6">
                <h1 className="text-2xl font-bold text-gray-900">Contact Management</h1>
                <p className="text-gray-600">Manage your contact groups and individual contacts</p>
            </div>

            <div className="grid grid-cols-12 gap-6">
                <div className="col-span-3">
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                        <div className="p-4 border-b border-gray-200">
                            <div className="flex items-center justify-between mb-4">
                                <h2 className="text-lg font-semibold text-gray-900">Groups</h2>
                                <button className="px-3 py-1 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 flex items-center gap-1">
                                    <Add fontSize="small" /> New
                                </button>
                            </div>
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Search groups..."
                                    className="w-full pl-8 pr-3 py-2 border border-gray-300 rounded-lg text-sm"
                                />
                                <Search className="absolute left-2.5 top-2.5 text-gray-400" fontSize="small" />
                            </div>
                        </div>

                        <div className="p-2 space-y-2">
                            {[
                                { name: "All Contacts", count: 1247, icon: <Group />, bg: "bg-blue-600", text: "text-white" },
                                { name: "Customers", count: 856, icon: <Person />, text: "text-green-500" },
                                { name: "Leads", count: 234, icon: <PersonAdd />, text: "text-yellow-500" },
                                { name: "VIP", count: 89, icon: <EmojiEvents />, text: "text-purple-500" },
                                { name: "Internal", count: 68, icon: <Business />, text: "text-blue-500" },
                            ].map((group, index) => (
                                <div
                                    key={index}
                                    className={`group-item rounded-lg p-3 cursor-pointer flex justify-between items-center ${index === 0 ? `${group.bg} ${group.text} hover:bg-blue-700` : "text-gray-900 hover:bg-gray-50"
                                        }`}
                                >
                                    <div>
                                        <h3 className={`font-medium ${group.text}`}>{group.name}</h3>
                                        <p className={`text-sm ${group.text ? "opacity-80" : "text-gray-600"}`}>
                                            {group.count} contacts
                                        </p>
                                    </div>
                                    <div className={`${group.text}`}>{group.icon}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Contact Table */}
                <div className="col-span-9">
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
                        {/* Controls */}
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center space-x-4">
                                <div className="relative">
                                    <input
                                        type="text"
                                        placeholder="Search contacts..."
                                        className="pl-8 pr-3 py-2 border border-gray-300 rounded-lg w-64"
                                    />
                                    <i className="fa-solid fa-search absolute left-2.5 top-2.5 text-gray-400"></i>
                                </div>
                                <select className="px-3 py-2 border border-gray-300 rounded-lg">
                                    <option>All Channels</option>
                                    <option>SMS</option>
                                    <option>WhatsApp</option>
                                    <option>Voice</option>
                                </select>
                            </div>
                            <div className="flex items-center space-x-2">
                                <button className="px-3 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center gap-1">
                                    <Download fontSize="small" /> Export
                                </button>
                                <button className="px-3 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center gap-1">
                                    <Upload fontSize="small" /> Import
                                </button>
                                <button
                                    onClick={toggleModal}
                                    className="px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center gap-1"
                                >
                                    <Add fontSize="small" /> Add Contact
                                </button>
                            </div>
                        </div>

                        {/* Table */}
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            <input type="checkbox" className="rounded" />
                                        </th>
                                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th>
                                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Channels</th>
                                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tags</th>
                                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Contact</th>
                                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {/* Sample Contact 1 */}
                                    <tr className="hover:bg-gray-50">
                                        <td className="px-4 py-4"><input type="checkbox" className="rounded" /></td>
                                        <td className="px-4 py-4">
                                            <div className="flex items-center">
                                                <img
                                                    src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg"
                                                    alt="Avatar"
                                                    className="w-8 h-8 rounded-full mr-3"
                                                />
                                                <span className="font-medium text-gray-900">John Smith</span>
                                            </div>
                                        </td>
                                        <td className="px-4 py-4 text-gray-900">+1 (555) 123-4567</td>
                                        <td className="px-4 py-4 text-gray-600">john@example.com</td>
                                        <td className="px-4 py-4">
                                            <div className="flex space-x-2">
                                                <ChatBubbleIcon fontSize="small" className="text-blue-500" />
                                                <WhatsApp fontSize="small" className="text-green-500" />
                                                <Phone fontSize="small" className="text-gray-400" />
                                            </div>
                                        </td>
                                        <td className="px-4 py-4">
                                            <span className="inline-flex px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 mr-1">Customer</span>
                                            <span className="inline-flex px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">Active</span>
                                        </td>
                                        <td className="px-4 py-4 text-gray-600">2 hours ago</td>
                                        <td className="px-4 py-4">
                                            <div className="flex space-x-2">
                                                <Visibility className="text-blue-600 hover:text-blue-800 cursor-pointer" />
                                                <Edit className="text-green-600 hover:text-green-800 cursor-pointer" />
                                                <Delete className="text-red-600 hover:text-red-800 cursor-pointer" />
                                            </div>
                                        </td>
                                    </tr>
                                    {/* Additional rows can be added here */}
                                </tbody>
                            </table>
                        </div>
                        <div className="px-4 py-3 border-t border-gray-200 flex items-center justify-between">
                            <div className="text-sm text-gray-700">
                                Showing 1 to 20 of 1,247 contacts
                            </div>
                            <div className="flex space-x-2">
                                <button className="px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-50">Previous</button>
                                <button className="px-3 py-1 bg-primary-600 text-white rounded text-sm">1</button>
                                <button className="px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-50">2</button>
                                <button className="px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-50">3</button>
                                <button className="px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-50">Next</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Add Contact Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center">
                    <div
                        className="fixed inset-0 bg-black opacity-70"
                        onClick={toggleModal}
                    ></div>

                    <div
                        className="bg-white rounded-lg max-w-md w-full p-6 relative z-50 mx-4"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex justify-between items-center border-b pb-3 mb-4">
                            <h3 className="text-lg font-semibold text-gray-900">Add New Contact</h3>
                            <button
                                onClick={toggleModal}
                                className="text-gray-400 hover:text-gray-600"
                            >
                                <i className="fa-solid fa-times"></i>
                            </button>
                        </div>
                        <form className="space-y-4">
                            {["First Name", "Last Name", "Phone", "Email"].map((label, i) => (
                                <div key={i}>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
                                    <input
                                        type="text"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    />
                                </div>
                            ))}
                            <div className="flex justify-end">
                                <button
                                    type="button"
                                    onClick={toggleModal}
                                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                                >
                                    Save Contact
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Contacts;
