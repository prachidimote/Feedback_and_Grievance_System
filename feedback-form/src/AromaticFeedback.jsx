import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const defaultValue = {
  name: '',
  email: '',
  phone: '',
  serviceQuality: '',
  beverageQuality: '',
  cleanliness: '',
  overallExperience: '',
};

const AromaticFeedback = () => {
  
  const [formData, setFormData] = useState(defaultValue);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const onValueChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => {
      const updatedFormData = {
        ...prevFormData,
        [name]: value,
      };
      console.log(updatedFormData); // This will now log the updated formData
      return updatedFormData;
    });
  };

  const validate = () => {
    const newErrors = {};
    if(!formData.name) newErrors.name = "Please enter your name";
    if(!formData.email) newErrors.email = "Please enter your email id";
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please provide a valid email address";
    }
    if(!formData.phone) newErrors.phone = "Please enter your phone number";
    if(formData.phone && !/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(formData.phone)){
      newErrors.phone = "Please provide valid phone number";
    }
    if(!formData.serviceQuality) newErrors.serviceQuality = "Please rate the service quality";
    if(!formData.beverageQuality) newErrors.beverageQuality = "Please rate the beverage quality";
    if(!formData.cleanliness) newErrors.cleanliness = "Please rate the cleanliness";
    if(!formData.overallExperience) newErrors.overallExperience = "Please rate the overal experience";

    return newErrors;

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      // Retrieve existing records from localStorage
      let existingData = JSON.parse(localStorage.getItem('feedbackFormData'));
      // Check if existingData is not an array
      if (!Array.isArray(existingData)) {
        // If it's not an array or doesn't exist, initialize it as an empty array
        existingData = [];
      }
      // Add new form data to the existing records
      const updatedData = [...existingData, formData];
      // Save updated records back to localStorage
      localStorage.setItem('feedbackFormData', JSON.stringify(updatedData));
      setSubmitted(true);
      navigate('/table-page');
    }
  };
  

  if (submitted) {
    return <div className="text-green-500 font-semibold text-center mt-10 text-xl">Thank you for completing the information</div>;
  }

  return (
    <div className="bg-transparent p-6 rounded-lg shadow-lg max-w-sm mx-auto">
      <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
        <h3 className="mx-auto font-semibold">Aromatic Bar</h3>
        <p>We are committed to provide you with the best dining experience possible, so we welcome your comments. Please fill out this questionnaire. Thank you.</p>
        <div className="mb-5">
        <label className="block text-sm font-medium mb-1">Name</label>
          <input
            onChange={onValueChange}
            value={formData.name}
            name="name"
            type="text"
            id="name"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light shadow-md"
            placeholder="e.g John Doe"
          
          />
          {errors.name && <div className='text-red-500 text-lg'>{errors.name}</div>}
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            onChange={onValueChange}
            value={formData.email}
            name="email"
            type="text"
            id="email"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light shadow-md"
            placeholder="e.g John Doe"
          
          />
          {errors.email && <div className="text-red-500 text-lg">{errors.email}</div>}
        </div>
        <div className="mb-5">
        <label className="block text-sm font-medium mb-1">Phone No</label>
          <input
            onChange={onValueChange}
            value={formData.phone}
            name="phone"
            type="text"
            id="phone"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light shadow-md"
            placeholder="98*******3"
         />
         {errors.phone && <div className='text-red-500 text-lg'>{errors.phone}</div>}
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Please rate the quality of the service you received from your host:</label>
          <div className="flex gap-4">
            <label>
              <input type="radio" name="serviceQuality" value="Excellent" checked={formData.serviceQuality === 'Excellent'} onChange={onValueChange} /> Excellent
            </label>
            <label>
              <input type="radio" name="serviceQuality" value="Good" checked={formData.serviceQuality === 'Good'} onChange={onValueChange} /> Good
            </label>
            <label>
              <input type="radio" name="serviceQuality" value="Fair" checked={formData.serviceQuality === 'Fair'} onChange={onValueChange} /> Fair
            </label>
            <label>
              <input type="radio" name="serviceQuality" value="Bad" checked={formData.serviceQuality === 'Bad'} onChange={onValueChange} /> Bad
            </label>
          </div>
          {errors.serviceQuality && <div className='text-red-500 text-lg'>{errors.serviceQuality}</div>}
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Please rate the quality of your beverage:</label>
          <div className="flex gap-4">
            <label>
              <input type="radio" name="beverageQuality" value="Excellent" checked={formData.beverageQuality === 'Excellent'} onChange={onValueChange} /> Excellent
            </label>
            <label>
              <input type="radio" name="beverageQuality" value="Good" checked={formData.beverageQuality === 'Good'} onChange={onValueChange} /> Good
            </label>
            <label>
              <input type="radio" name="beverageQuality" value="Fair" checked={formData.beverageQuality === 'Fair'} onChange={onValueChange} /> Fair
            </label>
            <label>
              <input type="radio" name="beverageQuality" value="Bad" checked={formData.beverageQuality === 'Bad'} onChange={onValueChange} /> Bad
            </label>
          </div>
          {errors.beverageQuality && <div className='text-red-500 text-lg'>{errors.beverageQuality}</div>}
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Was our restaurant clean?</label>
          <div className="flex gap-4">
            <label>
              <input type="radio" name="cleanliness" value="Excellent" checked={formData.cleanliness === 'Excellent'} onChange={onValueChange} /> Excellent
            </label>
            <label>
              <input type="radio" name="cleanliness" value="Good" checked={formData.cleanliness === 'Good'} onChange={onValueChange} /> Good
            </label>
            <label>
              <input type="radio" name="cleanliness" value="Fair" checked={formData.cleanliness === 'Fair'} onChange={onValueChange} /> Fair
            </label>
            <label>
              <input type="radio" name="cleanliness" value="Bad" checked={formData.cleanliness === 'Bad'} onChange={onValueChange} /> Bad
            </label>
          </div>
          {errors.cleanliness && <div className='text-red-500 text-lg'>{errors.cleanliness}</div>}
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Please rate your overall dining experience:</label>
          <div className="flex gap-4">
            <label>
              <input type="radio" name="overallExperience" value="Excellent" checked={formData.overallExperience === 'Excellent'} onChange={onValueChange} /> Excellent
            </label>
            <label>
              <input type="radio" name="overallExperience" value="Good" checked={formData.overallExperience === 'Good'} onChange={onValueChange} /> Good
            </label>
            <label>
              <input type="radio" name="overallExperience" value="Fair" checked={formData.overallExperience === 'Fair'} onChange={onValueChange} /> Fair
            </label>
            <label>
              <input type="radio" name="overallExperience" value="Bad" checked={formData.overallExperience === 'Bad'} onChange={onValueChange} /> Bad
            </label>
          </div>
          {errors.overallExperience && <div className='text-red-500 text-lg'>{errors.overallExperience}</div>}
        </div>
        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
      </form>
    </div>
  );
};

export default AromaticFeedback;
