import { useState } from 'react';

const defaultValue = {
  name : '',
  email : '',
  phone : ''
}

const AromaticFeedback = () => {
    const [formData, setFormData] = useState(defaultValue);

    const onValueChange = (event) => {
      const { name, value } = event.target;
      const updatedFormData = {
          ...formData,
          [name]: value
      };
      setFormData(updatedFormData);
      console.log(updatedFormData);
  };

  //   const onValueChange = (e) => {
  //     const { name, value } = e.target;
  //     setFormData(prevFormData => {
  //         const updatedFormData = {
  //             ...prevFormData,
  //             [name]: value
  //         };
  //         console.log(updatedFormData);
  //         return updatedFormData;
  //     });
  // };


    // const handleChange = (event) => {
    //     const { name, value } = event.target;
    //     console.log(setFormData({
    //         ...formData,
    //         [name]: value
    //     }));
    // };

    return (
        <div>
            <h3>AromaticFeedback</h3>
            <form className="max-w-sm mx-auto">
                <h3 className="mx-auto font-semibold">Aromatic Bar</h3>
                <p>We are committed to provide you with the best dining experience possible, so we welcome your comments. Please fill out this questionnaire. Thank you.</p>
                <div className="mb-5">
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">e.g John Doe</label>
                    <input
                        onChange={onValueChange}
                        // value={formData.name}
                        name="name"
                        type="text"
                        id="name"
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light shadow-md"
                        placeholder="e.g John Doe"
                        required
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">e.g abc@gmail.com</label>
                    <input
                        onChange={(e) => onValueChange(e)}
                        // value={formData.email}
                        name="email"
                        type="email"
                        id="email"
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light shadow-md"
                        placeholder="e.g abc@gmail.com"
                        required
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">e.g 98*****45</label>
                    <input
                        onChange={(e) => onValueChange(e)}
                        // value={formData.phone}
                        name="phone"
                        type="text"
                        id="phone"
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light shadow-md"
                        placeholder="98*******3"
                        required
                    />
                </div>
                <div className="flex items-start mb-5">
                    <div className="flex items-center h-5">
                        <input
                            id="terms"
                            type="checkbox"
                            value=""
                            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                            required
                        />
                    </div>
                    {/* <label htmlFor="terms" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a></label> */}
                </div>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register new account</button>
            </form>
        </div>
    );
}

export default AromaticFeedback;
