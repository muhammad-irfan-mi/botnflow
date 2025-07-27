import { useContext, useEffect, useState } from "react";
import {
    Add, Search, Group, PersonAdd, Person, EmojiEvents, Business, WhatsApp, Phone,
    Visibility, Edit, Delete, Upload, Download
} from "@mui/icons-material";
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import { ContentContext } from "../../context/ContextProvider";
import useAxios from "../../utils/useAxios";
import CreateContact from "../../component/modal/CreateContact";
import DeleteModal from "../../component/modal/DeleteModal";
import { faL } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";
import getToken from "../../utils/GetToken";
import { exportToCSV } from "../../utils/exportToCSV";
import Loader from "../../component/Loader";

const ITEMS_PER_PAGE = 5;

const Contacts = () => {
    const token = getToken()
    const { themeColor, secondaryThemeColor } = useContext(ContentContext);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [selectedContactId, setSelectedContactId] = useState(null);
    const [loading, setLoading] = useState(false)
    const [onLoad, setOnLoad] = useState(false)

    const [data, setData] = useState([
        {
            id: 1,
            name: `John Smith`,
            phone: `+1 (555) 123-45`,
            email: `john@example.com`,
            channels: ["chat", "whatsapp", "phone"],
            tags: ["Customer", "Inactive"],
            lastContact: `hours ago`,
            avatar: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg"
        },
        {
            id: 2,
            name: `John Smith`,
            phone: `+1 (555) 123-45`,
            email: `john@example.com`,
            channels: ["chat", "whatsapp", "phone"],
            tags: ["Customer", "Inactive"],
            lastContact: `hours ago`,
            avatar: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg"
        }
    ])

    useEffect(() => {
        setLoading(true)
        const getContact = async () => {
            const [responseData, fetchError] = await useAxios('GET', 'contacts', token, null);
            if (responseData) {
                setData(responseData.data.contacts)
                setLoading(false)
            }
            else {
                console.log(fetchError)
                setLoading(false)
            }
        }
        getContact();
    }, [])

    const toggleModal = () => setIsModalOpen(!isModalOpen);

    const paginatedData = data.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    );

    const handleDelete = async () => {
        try {
            const [responseData, fetchError] = await useAxios('DELETE', `contacts/${selectedContactId}`, token);
            if (responseData) {
                toast.success("Contact Delete Successfully", { autoClose: 2000 })
                setShowDeleteModal(false)
            }
            else {
                console.log(fetchError)
                toast.error("Failed to delete contact", { autoClose: 2000 });
            }
        } catch (error) {
            toast.error("Failed to delete contact", { autoClose: 2000 })
        }
    };

    const handleExport = () => {
        const headers = ["Name", "Email", "Phone"];
        const dataRows = data.map((user) => [
            `${user.firstName} ${user.lastName}`,
            user.email,
            user.phoneNumber,
        ]);

        exportToCSV("users.csv", headers, dataRows);
    };

    const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);

    if (loading) {
        return <Loader />
    }
    return (
        <div className="min-h-screen mt-16 bg-gray-50  font-sans">
            <div className="mb-6 p-3">
                <h1 className="text-2xl font-bold text-gray-900">Contact Management</h1>
                <p className="text-gray-600">Manage your contact groups and individual contacts</p>
            </div>

            <div className="lg:flex gap-6 py-3 pb-6 w-[97%] mx-auto">
                <div className="flex-1">
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                        <div className="p-4 border-b border-gray-200">
                            <div className="flex items-center justify-between mb-4">
                                <h2 className="text-lg font-semibold text-gray-900">Tags</h2>
                                <button
                                    className="px-3 py-2 text-white text-sm rounded-lg flex items-center gap-1"
                                    style={{ backgroundColor: themeColor }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.backgroundColor = secondaryThemeColor;
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.backgroundColor = themeColor;
                                    }}
                                >
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
                                    className={`group-item rounded-lg p-3 cursor-pointer flex justify-between items-center ${index !== 0 ? "text-gray-900 hover:bg-gray-50" : ""}`}
                                    style={
                                        index === 0
                                            ? {
                                                backgroundColor: themeColor,
                                                color: "#fff",
                                            }
                                            : {}
                                    }
                                    onMouseEnter={(e) => {
                                        if (index === 0) e.currentTarget.style.backgroundColor = secondaryThemeColor;
                                    }}
                                    onMouseLeave={(e) => {
                                        if (index === 0) e.currentTarget.style.backgroundColor = themeColor;
                                    }}
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
                <div className="md:flex-3 flex-2 mt-3 md:mt-0">
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
                        {/* Controls */}
                        <div className="md:flex items-center justify-between mb-4">
                            <div className="flex items-center space-x-2">
                                <div className="relative">
                                    <input
                                        type="text"
                                        placeholder="Search contacts..."
                                        className="pl-3 pr-3 py-2 border border-gray-300 rounded-lg w-40 md:w-64"
                                    />
                                </div>
                                <select className="px-3 py-2 border border-gray-300 rounded-lg">
                                    <option>All Channels</option>
                                    <option>SMS</option>
                                    <option>WhatsApp</option>
                                    <option>Voice</option>
                                </select>
                            </div>
                            <div className="md:flex items-center space-x-2">
                                <div className="flex gap-2">
                                    <button className="px-3 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center gap-1" onClick={handleExport}>
                                        <Upload fontSize="small" /> Export
                                    </button>
                                    <button className="px-3 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center gap-1">
                                        <Download fontSize="small" /> Import
                                    </button>
                                </div>
                                <button
                                    onClick={toggleModal}
                                    className="px-3 py-2 text-white rounded-lg flex items-center gap-1 mt-3 md:mt-0"
                                    style={{ backgroundColor: themeColor }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.backgroundColor = secondaryThemeColor;
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.backgroundColor = themeColor;
                                    }}
                                >
                                    <Add fontSize="small" /> Add Contact
                                </button>
                            </div>
                        </div>

                        {/* Table */}
                        <div className="overflow-x-auto w-[285px] md:w-[740px]">
                            <table className="w-full">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-4 py-3"><input type="checkbox" /></th>
                                        <th className="px-4 py-3">Avatar</th>
                                        <th className="px-4 py-3">Name</th>
                                        <th className="px-4 py-3">Phone</th>
                                        <th className="px-4 py-3">Email</th>
                                        <th className="px-4 py-3">Channels</th>
                                        <th className="px-4 py-3">Tags</th>
                                        <th className="px-4 py-3">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {paginatedData.map((contact) => (
                                        <tr key={contact.id} className="hover:bg-gray-50">
                                            <td className="px-4 py-4"><input type="checkbox" /></td>
                                            <td className="px-4 py-4">
                                                <img
                                                    src={contact.avatar}
                                                    alt="Avatar"
                                                    className="w-8 h-8 rounded-full mr-3"
                                                />
                                            </td>
                                            <td className="px-4 py-4 text-gray-900">
                                                {contact.firstName ? contact.firstName.slice(0, 7) : "--"}
                                            </td>
                                            <td className="px-4 py-4 text-gray-900">
                                                {contact.phoneNumber ? contact.phoneNumber.slice(0, 17) : "--"}</td>
                                            <td className="px-4 py-4 text-gray-600">
                                                {contact.email ? contact.email.slice(0, 15) : "--"}
                                            </td>
                                            <td
                                                className={`px-4 py-4 ${contact.channel === 'twilio'
                                                    ? 'text-blue-500'
                                                    : contact.channel === 'whatsapp'
                                                        ? 'text-green-500'
                                                        : contact.channel === 'webchat'
                                                            ? 'text-yellow-500'
                                                            : 'text-gray-600'
                                                    }`}
                                            >
                                                {contact.channel}
                                            </td>
                                            <td className="px-4 py-4">
                                                {Array.isArray(contact.tags) &&
                                                    contact.tags.filter(tag => typeof tag === 'string' && tag.trim() !== '').length > 0 ? (
                                                    <div className="flex flex-wrap gap-1">
                                                        {contact.tags
                                                            .filter(tag => typeof tag === 'string' && tag.trim() !== '')
                                                            .map((tag, idx) => (
                                                                <span
                                                                    key={idx}
                                                                    className={`inline-flex px-2 py-1 rounded-full text-xs font-medium ${tag === 'Active'
                                                                        ? 'bg-green-100 text-green-800'
                                                                        : 'bg-blue-100 text-blue-800'
                                                                        }`}
                                                                >
                                                                    {tag}
                                                                </span>
                                                            ))}
                                                    </div>
                                                ) : (
                                                    <span className="text-gray-500">--</span>
                                                )}
                                            </td>
                                            <td className="px-4 py-4">
                                                <div className="flex space-x-2">
                                                    <Visibility className="text-blue-600 hover:text-blue-800 cursor-pointer" />
                                                    <Edit className="text-green-600 hover:text-green-800 cursor-pointer" />
                                                    <Delete
                                                        className="text-red-600 hover:text-red-800 cursor-pointer"
                                                        onClick={() => {
                                                            setSelectedContactId(contact._id);
                                                            setShowDeleteModal(true);
                                                        }} />
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* Pagination */}
                        <div className="md:px-4 py-3 border-t border-gray-200 md:flex items-center justify-between">
                            <div className="text-sm text-gray-700">
                                Showing {(currentPage - 1) * ITEMS_PER_PAGE + 1} to {Math.min(currentPage * ITEMS_PER_PAGE, data.length)} of {data.length} contacts
                            </div>
                            <div className="flex space-x-2 mt-2 md:mt-0">
                                <button
                                    disabled={currentPage === 1}
                                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                                    className="px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-50 disabled:opacity-50"
                                >
                                    Previous
                                </button>
                                {[...Array(totalPages)].map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setCurrentPage(i + 1)}
                                        className={`px-3 py-1 border rounded text-sm ${currentPage === i + 1
                                            ? "text-white"
                                            : "text-gray-700 border-gray-300 hover:bg-gray-50"}`}
                                        style={currentPage === i + 1 ? { backgroundColor: themeColor } : {}}
                                    >
                                        {i + 1}
                                    </button>
                                ))}
                                <button
                                    disabled={currentPage === totalPages}
                                    onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                                    className="px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-50 disabled:opacity-50"
                                >
                                    Next
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Modal remains unchanged */}
            {isModalOpen && (
                <CreateContact toggleModal={toggleModal} />
            )}
            {showDeleteModal && (
                <DeleteModal onClose={() => setShowDeleteModal(false)} onDelete={handleDelete} />
            )}
        </div >
    );
};

export default Contacts;
