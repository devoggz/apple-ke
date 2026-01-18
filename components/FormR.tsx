// import React, { useState } from 'react';
// import { Camera, Upload, X } from 'lucide-react';
//
// export default function AppleRepairKYC() {
//     const [formData, setFormData] = useState({
//         fullName: '',
//         email: '',
//         phone: '',
//         address: '',
//         city: '',
//         postalCode: '',
//         productType: '',
//         model: '',
//         serialNumber: '',
//         purchaseDate: '',
//         warrantyStatus: '',
//         issueCategory: '',
//         issueDescription: '',
//         urgency: 'normal',
//         previousRepairs: 'no',
//         preferredContact: 'email'
//     });
//
//     const [images, setImages] = useState([]);
//     const [submitted, setSubmitted] = useState(false);
//
//     const productTypes = [
//         'iPhone',
//         'iPad',
//         'MacBook Pro',
//         'MacBook Air',
//         'iMac',
//         'Mac Mini',
//         'Apple Watch',
//         'AirPods',
//         'Other Apple Product'
//     ];
//
//     const issueCategories = [
//         'Screen/Display Issues',
//         'Battery Problems',
//         'Charging Issues',
//         'Water Damage',
//         'Physical Damage',
//         'Software Issues',
//         'Audio/Speaker Problems',
//         'Camera Issues',
//         'Connectivity (WiFi/Bluetooth)',
//         'Keyboard/Trackpad Issues',
//         'Other'
//     ];
//
//     const handleInputChange = (e) => {
//         const { name, value } = e;
//         setFormData(prev => ({ ...prev, [name]: value }));
//     };
//
//     const handleImageUpload = (e) => {
//         const files = Array.from(e.target.files);
//         const newImages = files.map(file => ({
//             file,
//             preview: URL.createObjectURL(file),
//             name: file.name
//         }));
//         setImages(prev => [...prev, ...newImages]);
//     };
//
//     const removeImage = (index) => {
//         setImages(prev => prev.filter((_, i) => i !== index));
//     };
//
//     const handleSubmit = () => {
//         if (!formData.fullName || !formData.email || !formData.phone ||
//             !formData.productType || !formData.model || !formData.issueCategory ||
//             !formData.issueDescription) {
//             alert('Please fill in all required fields');
//             return;
//         }
//
//         setSubmitted(true);
//         console.log('Form Data:', formData);
//         console.log('Images:', images);
//     };
//
//     const resetForm = () => {
//         setSubmitted(false);
//         setFormData({
//             fullName: '', email: '', phone: '', address: '', city: '', postalCode: '',
//             productType: '', model: '', serialNumber: '', purchaseDate: '', warrantyStatus: '',
//             issueCategory: '', issueDescription: '', urgency: 'normal',
//             previousRepairs: 'no', preferredContact: 'email'
//         });
//         setImages([]);
//     };
//
//     if (submitted) {
//         return (
//             <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
//                 <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center">
//                     <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                         <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
//                         </svg>
//                     </div>
//                     <h2 className="text-2xl font-bold text-gray-800 mb-2">Submission Successful!</h2>
//                     <p className="text-gray-600 mb-6">Thank you for submitting your repair request. We'll review your case and contact you within 24 hours.</p>
//                     <button
//                         onClick={resetForm}
//                         className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
//                     >
//                         Submit Another Request
//                     </button>
//                 </div>
//             </div>
//         );
//     }
//
//     return (
//         <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 px-4">
//             <div className="max-w-4xl mx-auto">
//                 <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
//                     <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-8 text-white">
//                         <h1 className="text-3xl font-bold mb-2">Apple Repair Service</h1>
//                         <p className="text-blue-100">Complete this form to get started with your repair</p>
//                     </div>
//
//                     <div className="p-8 space-y-8">
//                         {/* Customer Information */}
//                         <section>
//                             <h2 className="text-xl font-semibold text-gray-800 mb-4 pb-2 border-b-2 border-blue-500">
//                                 Customer Information
//                             </h2>
//                             <div className="grid md:grid-cols-2 gap-4">
//                                 <div>
//                                     <label className="block text-sm font-medium text-gray-700 mb-1">
//                                         Full Name <span className="text-red-500">*</span>
//                                     </label>
//                                     <input
//                                         type="text"
//                                         name="fullName"
//                                         value={formData.fullName}
//                                         onChange={(e) => handleInputChange(e.target)}
//                                         className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                                         placeholder="John Doe"
//                                     />
//                                 </div>
//                                 <div>
//                                     <label className="block text-sm font-medium text-gray-700 mb-1">
//                                         Email Address <span className="text-red-500">*</span>
//                                     </label>
//                                     <input
//                                         type="email"
//                                         name="email"
//                                         value={formData.email}
//                                         onChange={(e) => handleInputChange(e.target)}
//                                         className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                                         placeholder="john@example.com"
//                                     />
//                                 </div>
//                                 <div>
//                                     <label className="block text-sm font-medium text-gray-700 mb-1">
//                                         Phone Number <span className="text-red-500">*</span>
//                                     </label>
//                                     <input
//                                         type="tel"
//                                         name="phone"
//                                         value={formData.phone}
//                                         onChange={(e) => handleInputChange(e.target)}
//                                         className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                                         placeholder="+1 (555) 000-0000"
//                                     />
//                                 </div>
//                                 <div>
//                                     <label className="block text-sm font-medium text-gray-700 mb-1">
//                                         Preferred Contact Method <span className="text-red-500">*</span>
//                                     </label>
//                                     <select
//                                         name="preferredContact"
//                                         value={formData.preferredContact}
//                                         onChange={(e) => handleInputChange(e.target)}
//                                         className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                                     >
//                                         <option value="email">Email</option>
//                                         <option value="phone">Phone</option>
//                                         <option value="sms">SMS</option>
//                                     </select>
//                                 </div>
//                                 <div className="md:col-span-2">
//                                     <label className="block text-sm font-medium text-gray-700 mb-1">
//                                         Address
//                                     </label>
//                                     <input
//                                         type="text"
//                                         name="address"
//                                         value={formData.address}
//                                         onChange={(e) => handleInputChange(e.target)}
//                                         className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                                         placeholder="123 Main Street"
//                                     />
//                                 </div>
//                                 <div>
//                                     <label className="block text-sm font-medium text-gray-700 mb-1">
//                                         City
//                                     </label>
//                                     <input
//                                         type="text"
//                                         name="city"
//                                         value={formData.city}
//                                         onChange={(e) => handleInputChange(e.target)}
//                                         className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                                         placeholder="New York"
//                                     />
//                                 </div>
//                                 <div>
//                                     <label className="block text-sm font-medium text-gray-700 mb-1">
//                                         Postal Code
//                                     </label>
//                                     <input
//                                         type="text"
//                                         name="postalCode"
//                                         value={formData.postalCode}
//                                         onChange={(e) => handleInputChange(e.target)}
//                                         className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                                         placeholder="10001"
//                                     />
//                                 </div>
//                             </div>
//                         </section>
//
//                         {/* Product Information */}
//                         <section>
//                             <h2 className="text-xl font-semibold text-gray-800 mb-4 pb-2 border-b-2 border-blue-500">
//                                 Product Information
//                             </h2>
//                             <div className="grid md:grid-cols-2 gap-4">
//                                 <div>
//                                     <label className="block text-sm font-medium text-gray-700 mb-1">
//                                         Product Type <span className="text-red-500">*</span>
//                                     </label>
//                                     <select
//                                         name="productType"
//                                         value={formData.productType}
//                                         onChange={(e) => handleInputChange(e.target)}
//                                         className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                                     >
//                                         <option value="">Select a product</option>
//                                         {productTypes.map(type => (
//                                             <option key={type} value={type}>{type}</option>
//                                         ))}
//                                     </select>
//                                 </div>
//                                 <div>
//                                     <label className="block text-sm font-medium text-gray-700 mb-1">
//                                         Model <span className="text-red-500">*</span>
//                                     </label>
//                                     <input
//                                         type="text"
//                                         name="model"
//                                         value={formData.model}
//                                         onChange={(e) => handleInputChange(e.target)}
//                                         className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                                         placeholder="e.g., iPhone 15 Pro, MacBook Air M2"
//                                     />
//                                 </div>
//                                 <div>
//                                     <label className="block text-sm font-medium text-gray-700 mb-1">
//                                         Serial Number
//                                     </label>
//                                     <input
//                                         type="text"
//                                         name="serialNumber"
//                                         value={formData.serialNumber}
//                                         onChange={(e) => handleInputChange(e.target)}
//                                         className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                                         placeholder="C02XG0FDH7JY"
//                                     />
//                                 </div>
//                                 <div>
//                                     <label className="block text-sm font-medium text-gray-700 mb-1">
//                                         Purchase Date
//                                     </label>
//                                     <input
//                                         type="date"
//                                         name="purchaseDate"
//                                         value={formData.purchaseDate}
//                                         onChange={(e) => handleInputChange(e.target)}
//                                         className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                                     />
//                                 </div>
//                                 <div>
//                                     <label className="block text-sm font-medium text-gray-700 mb-1">
//                                         Warranty Status
//                                     </label>
//                                     <select
//                                         name="warrantyStatus"
//                                         value={formData.warrantyStatus}
//                                         onChange={(e) => handleInputChange(e.target)}
//                                         className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                                     >
//                                         <option value="">Select status</option>
//                                         <option value="under-warranty">Under Warranty</option>
//                                         <option value="applecare">AppleCare+</option>
//                                         <option value="expired">Warranty Expired</option>
//                                         <option value="unknown">Not Sure</option>
//                                     </select>
//                                 </div>
//                                 <div>
//                                     <label className="block text-sm font-medium text-gray-700 mb-1">
//                                         Previous Repairs?
//                                     </label>
//                                     <select
//                                         name="previousRepairs"
//                                         value={formData.previousRepairs}
//                                         onChange={(e) => handleInputChange(e.target)}
//                                         className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                                     >
//                                         <option value="no">No</option>
//                                         <option value="yes">Yes</option>
//                                     </select>
//                                 </div>
//                             </div>
//                         </section>
//
//                         {/* Issue Details */}
//                         <section>
//                             <h2 className="text-xl font-semibold text-gray-800 mb-4 pb-2 border-b-2 border-blue-500">
//                                 Issue Details
//                             </h2>
//                             <div className="space-y-4">
//                                 <div>
//                                     <label className="block text-sm font-medium text-gray-700 mb-1">
//                                         Issue Category <span className="text-red-500">*</span>
//                                     </label>
//                                     <select
//                                         name="issueCategory"
//                                         value={formData.issueCategory}
//                                         onChange={(e) => handleInputChange(e.target)}
//                                         className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                                     >
//                                         <option value="">Select issue category</option>
//                                         {issueCategories.map(cat => (
//                                             <option key={cat} value={cat}>{cat}</option>
//                                         ))}
//                                     </select>
//                                 </div>
//                                 <div>
//                                     <label className="block text-sm font-medium text-gray-700 mb-1">
//                                         Urgency Level <span className="text-red-500">*</span>
//                                     </label>
//                                     <div className="grid grid-cols-3 gap-2">
//                                         {['normal', 'urgent', 'critical'].map(level => (
//                                             <button
//                                                 key={level}
//                                                 type="button"
//                                                 onClick={() => setFormData(prev => ({ ...prev, urgency: level }))}
//                                                 className={`px-4 py-2 rounded-lg border-2 font-medium transition ${
//                                                     formData.urgency === level
//                                                         ? level === 'critical' ? 'bg-red-500 border-red-500 text-white'
//                                                             : level === 'urgent' ? 'bg-orange-500 border-orange-500 text-white'
//                                                                 : 'bg-blue-500 border-blue-500 text-white'
//                                                         : 'border-gray-300 text-gray-700 hover:border-gray-400'
//                                                 }`}
//                                             >
//                                                 {level.charAt(0).toUpperCase() + level.slice(1)}
//                                             </button>
//                                         ))}
//                                     </div>
//                                 </div>
//                                 <div>
//                                     <label className="block text-sm font-medium text-gray-700 mb-1">
//                                         Detailed Description <span className="text-red-500">*</span>
//                                     </label>
//                                     <textarea
//                                         name="issueDescription"
//                                         value={formData.issueDescription}
//                                         onChange={(e) => handleInputChange(e.target)}
//                                         rows="6"
//                                         className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
//                                         placeholder="Please describe the issue in detail. Include when it started, what you were doing when it occurred, and any error messages you've seen..."
//                                     />
//                                 </div>
//                             </div>
//                         </section>
//
//                         {/* Image Upload */}
//                         <section>
//                             <h2 className="text-xl font-semibold text-gray-800 mb-4 pb-2 border-b-2 border-blue-500">
//                                 Product Images
//                             </h2>
//                             <div className="space-y-4">
//                                 <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-400 transition">
//                                     <input
//                                         type="file"
//                                         id="imageUpload"
//                                         multiple
//                                         accept="image/*"
//                                         onChange={handleImageUpload}
//                                         className="hidden"
//                                     />
//                                     <label htmlFor="imageUpload" className="cursor-pointer">
//                                         <Upload className="w-12 h-12 mx-auto mb-4 text-gray-400" />
//                                         <p className="text-gray-600 mb-2">Click to upload images or drag and drop</p>
//                                         <p className="text-sm text-gray-500">PNG, JPG, HEIC up to 10MB each</p>
//                                     </label>
//                                 </div>
//
//                                 {images.length > 0 && (
//                                     <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//                                         {images.map((img, index) => (
//                                             <div key={index} className="relative group">
//                                                 <img
//                                                     src={img.preview}
//                                                     alt={`Upload ${index + 1}`}
//                                                     className="w-full h-32 object-cover rounded-lg border-2 border-gray-200"
//                                                 />
//                                                 <button
//                                                     type="button"
//                                                     onClick={() => removeImage(index)}
//                                                     className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition"
//                                                 >
//                                                     <X className="w-4 h-4" />
//                                                 </button>
//                                                 <p className="text-xs text-gray-600 mt-1 truncate">{img.name}</p>
//                                             </div>
//                                         ))}
//                                     </div>
//                                 )}
//                             </div>
//                         </section>
//
//                         {/* Submit Button */}
//                         <div className="pt-4">
//                             <button
//                                 onClick={handleSubmit}
//                                 className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-blue-800 transition shadow-lg"
//                             >
//                                 Submit Repair Request
//                             </button>
//                             <p className="text-sm text-gray-500 text-center mt-3">
//                                 By submitting, you agree to our terms of service and privacy policy
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }