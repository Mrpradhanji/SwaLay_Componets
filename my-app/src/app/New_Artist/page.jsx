'use client'
import { useState } from 'react';

const SocialLinksForm = () => {
  const [formData, setFormData] = useState({
    aboutLabel: 'OFFICIAL SWALAY ACCOUNT',
    instagram: '',
    facebook: '',
    twitter: '',
    linkedin: '',
    youtube: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form data submitted:', formData);
  };

  const [activeTab, setActiveTab] = useState('aboutMe');

  return (
    <div className="max-w-xl mx-auto p-4">
      <div className="flex space-x-4 mb-4">
        <button
          onClick={() => setActiveTab('basicInfo')}
          className={`py-2 px-4 ${activeTab === 'basicInfo' ? 'bg-blue-500 text-white' : 'text-gray-500 hover:bg-gray-200'}`}
        >
          Basic Info
        </button>
        <button
          onClick={() => setActiveTab('aboutMe')}
          className={`py-2 px-4 ${activeTab === 'aboutMe' ? 'bg-blue-500 text-white' : 'text-gray-500 hover:bg-gray-200'}`}
        >
          About Me
        </button>
        <button
          onClick={() => setActiveTab('bankDetails')}
          className={`py-2 px-4 ${activeTab === 'bankDetails' ? 'bg-blue-500 text-white' : 'text-gray-500 hover:bg-gray-200'}`}
        >
          Bank Details
        </button>
        <button
          onClick={() => setActiveTab('support')}
          className={`py-2 px-4 ${activeTab === 'support' ? 'bg-blue-500 text-white' : 'text-gray-500 hover:bg-gray-200'}`}
        >
          Support
        </button>
      </div>

      {activeTab === 'aboutMe' && (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="aboutLabel" className="block text-sm font-medium text-gray-700">
              About Label
            </label>
            <input
              type="text"
              name="aboutLabel"
              id="aboutLabel"
              value={formData.aboutLabel}
              onChange={handleChange}
              className="mt-1 block w-full border-b border-gray-300 focus:outline-none focus:border-blue-500 p-2"
              disabled
            />
          </div>
          <div>
            <label htmlFor="instagram" className="block text-sm font-medium text-gray-700">
              Instagram Profile Link
            </label>
            <input
              type="url"
              name="instagram"
              id="instagram"
              placeholder="enter profile link"
              value={formData.instagram}
              onChange={handleChange}
              className="mt-1 block w-full border-b border-gray-300 focus:outline-none focus:border-blue-500 p-2"
            />
          </div>
          <div>
            <label htmlFor="facebook" className="block text-sm font-medium text-gray-700">
              Facebook Profile Link
            </label>
            <input
              type="url"
              name="facebook"
              id="facebook"
              placeholder="enter profile link"
              value={formData.facebook}
              onChange={handleChange}
              className="mt-1 block w-full border-b border-gray-300 focus:outline-none focus:border-blue-500 p-2"
            />
          </div>
          <div>
            <label htmlFor="twitter" className="block text-sm font-medium text-gray-700">
              Twitter Profile Link
            </label>
            <input
              type="url"
              name="twitter"
              id="twitter"
              placeholder="enter profile link"
              value={formData.twitter}
              onChange={handleChange}
              className="mt-1 block w-full border-b border-gray-300 focus:outline-none focus:border-blue-500 p-2"
            />
          </div>
          <div>
            <label htmlFor="linkedin" className="block text-sm font-medium text-gray-700">
              LinkedIn Profile Link
            </label>
            <input
              type="url"
              name="linkedin"
              id="linkedin"
              placeholder="enter profile link"
              value={formData.linkedin}
              onChange={handleChange}
              className="mt-1 block w-full border-b border-gray-300 focus:outline-none focus:border-blue-500 p-2"
            />
          </div>
          <div>
            <label htmlFor="youtube" className="block text-sm font-medium text-gray-700">
              YouTube Profile Link
            </label>
            <input
              type="url"
              name="youtube"
              id="youtube"
              placeholder="enter profile link"
              value={formData.youtube}
              onChange={handleChange}
              className="mt-1 block w-full border-b border-gray-300 focus:outline-none focus:border-blue-500 p-2"
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md shadow-sm hover:bg-blue-600"
            >
              Save Changes
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default SocialLinksForm;
