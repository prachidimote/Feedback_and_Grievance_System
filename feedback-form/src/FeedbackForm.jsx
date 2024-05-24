import { useState } from 'react';

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    customerName: '',
    email: '',
    phone: '',
    serviceQuality: '',
    beverageQuality: '',
    cleanliness: '',
    overallExperience: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.customerName) newErrors.customerName = 'Customer Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.phone) newErrors.phone = 'Phone is required';
    if (formData.phone && !/^\d{10}$/.test(formData.phone)) newErrors.phone = 'Phone is invalid';
    if (!formData.serviceQuality) newErrors.serviceQuality = 'Please rate the service quality';
    if (!formData.beverageQuality) newErrors.beverageQuality = 'Please rate the beverage quality';
    if (!formData.cleanliness) newErrors.cleanliness = 'Please rate the cleanliness';
    if (!formData.overallExperience) newErrors.overallExperience = 'Please rate the overall experience';

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      localStorage.setItem('feedbackFormData', JSON.stringify(formData));
      setSubmitted(true);
    }
  };

  if (submitted) {
    return <div className="text-center mt-10 text-xl">Thank you for completing the information</div>;
  }

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Aromatic Bar</h2>
      <p className="mb-6">We are committed to providing you with the best dining experience possible, so we welcome your comments. Please fill out this questionnaire. Thank you.</p>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Customer Name:</label>
          <input
            type="text"
            name="customerName"
            value={formData.customerName}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          {errors.customerName && <div className="text-red-500 text-sm">{errors.customerName}</div>}
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          {errors.email && <div className="text-red-500 text-sm">{errors.email}</div>}
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Phone:</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          {errors.phone && <div className="text-red-500 text-sm">{errors.phone}</div>}
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Please rate the quality of the service you received from your host:</label>
          <div className="flex gap-4">
            <label><input type="radio" name="serviceQuality" value="Excellent" onChange={handleChange} /> Excellent</label>
            <label><input type="radio" name="serviceQuality" value="Good" onChange={handleChange} /> Good</label>
            <label><input type="radio" name="serviceQuality" value="Fair" onChange={handleChange} /> Fair</label>
            <label><input type="radio" name="serviceQuality" value="Bad" onChange={handleChange} /> Bad</label>
          </div>
          {errors.serviceQuality && <div className="text-red-500 text-sm">{errors.serviceQuality}</div>}
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Please rate the quality of your beverage:</label>
          <div className="flex gap-4">
            <label><input type="radio" name="beverageQuality" value="Excellent" onChange={handleChange} /> Excellent</label>
            <label><input type="radio" name="beverageQuality" value="Good" onChange={handleChange} /> Good</label>
            <label><input type="radio" name="beverageQuality" value="Fair" onChange={handleChange} /> Fair</label>
            <label><input type="radio" name="beverageQuality" value="Bad" onChange={handleChange} /> Bad</label>
          </div>
          {errors.beverageQuality && <div className="text-red-500 text-sm">{errors.beverageQuality}</div>}
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Was our restaurant clean?</label>
          <div className="flex gap-4">
            <label><input type="radio" name="cleanliness" value="Excellent" onChange={handleChange} /> Excellent</label>
            <label><input type="radio" name="cleanliness" value="Good" onChange={handleChange} /> Good</label>
            <label><input type="radio" name="cleanliness" value="Fair" onChange={handleChange} /> Fair</label>
            <label><input type="radio" name="cleanliness" value="Bad" onChange={handleChange} /> Bad</label>
          </div>
          {errors.cleanliness && <div className="text-red-500 text-sm">{errors.cleanliness}</div>}
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Please rate your overall dining experience:</label>
          <div className="flex gap-4">
            <label><input type="radio" name="overallExperience" value="Excellent" onChange={handleChange} /> Excellent</label>
            <label><input type="radio" name="overallExperience" value="Good" onChange={handleChange} /> Good</label>
            <label><input type="radio" name="overallExperience" value="Fair" onChange={handleChange} /> Fair</label>
            <label><input type="radio" name="overallExperience" value="Bad" onChange={handleChange} /> Bad</label>
          </div>
          {errors.overallExperience && <div className="text-red-500 text-sm">{errors.overallExperience}</div>}
        </div>
        <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded">Submit</button>
      </form>
    </div>
  );
};

export default FeedbackForm;
