import React, { useContext, useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ContentContext } from '../../context/ContextProvider';
import getToken from '../../utils/GetToken';
import useAxios from '../../utils/useAxios';

function CreateContact({ toggleModal }) {
  const { userInfo } = useContext(ContentContext)
  const token = getToken()

  const channels = userInfo.companyId.companyIntegratedChannels || [];
  const companyName = userInfo.companyId.companyName || ' ';

  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    gender: 'male',
    channel: channels[0]?.type || '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    const { firstName, lastName, phoneNumber, email, channel } = formData;

    if (!firstName || !lastName || !phoneNumber || !email || !channel) {
      toast.error('Please fill in all fields!');
      return;
    }

    const selectedChannel = channels.find((ch) => ch.type === channel);

    const fullData = {
      ...formData,
      channelId: selectedChannel?.channelId || null,
      clientBusinessDetail: companyName,
    };

    try {
      setLoading(true);
      const [responseData, fetchError] = await useAxios('POST', 'contacts', token, fullData);
      if (responseData) {
        console.log("object", responseData)
        toast.success('Contact Created successfully!', { autoClose: 2000 });
        setTimeout(() => {
          setLoading(false)
          toggleModal();
        }, 2000);
      } else {
        toast.error(fetchError?.message || 'Contact Creation failed', { autoClose: 2000 });
      }
    } catch (err) {
      toast.error(err.message || 'Something went wrong', { autoClose: 2000 });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-black opacity-70" onClick={toggleModal}></div>

      <div
        className="bg-white rounded-lg max-w-md w-full p-6 relative z-50 mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center border-b pb-3 mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Add New Contact</h3>
          <button onClick={toggleModal} className="text-gray-400 hover:text-gray-600">
            <i className="fa-solid fa-times"></i>
          </button>
        </div>

        <form className="space-y-2" onSubmit={(e) => e.preventDefault()}>
          {[
            { label: 'First Name', name: 'firstName' },
            { label: 'Last Name', name: 'lastName' },
            { label: 'Phone', name: 'phoneNumber' },
            { label: 'Email', name: 'email' },
          ].map(({ label, name }, i) => (
            <div key={i}>
              <label className="block text-sm font-medium text-gray-700">{label}</label>
              <input
                name={name}
                value={formData[name]}
                onChange={handleChange}
                type="text"
                className="w-full px-3 py-1.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          ))}

          <div>
            <label className="block text-sm font-medium text-gray-700">Channel</label>
            <select
              name="channel"
              value={formData.channel}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            >
              {channels.map((ch) => (
                <option key={ch._id} value={ch.type}>
                  {ch.type.charAt(0).toUpperCase() + ch.type.slice(1)}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Gender</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="flex justify-end">
            <button
              type="button"
              onClick={handleSubmit}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Save Contact
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateContact;
