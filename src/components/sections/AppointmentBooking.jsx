import React, { useState } from 'react';

const AppointmentBooking = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    termsAccepted: false
  });

  const [errors, setErrors] = useState({
    name: '',
    mobile: '',
    terms: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
    
  
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { name: '', mobile: '', terms: '' };
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      valid = false;
    }
    
    if (!formData.mobile.trim()) {
      newErrors.mobile = 'Mobile number is required';
      valid = false;
    } else if (!/^\d{10}$/.test(formData.mobile)) {
      newErrors.mobile = 'Please enter a valid 10-digit mobile number';
      valid = false;
    }
    
    if (!formData.termsAccepted) {
      newErrors.terms = 'You must accept the terms and conditions';
      valid = false;
    }
    
    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      
      console.log('Form submitted:', formData);
  
      setFormData({
        name: '',
        mobile: '',
        termsAccepted: false
      });
      alert('Appointment booking request submitted!');
    }
  };

  return (
    <div className="sm:bg-[#F5FAFE] bg-white py-10 sm:py-8">
      <div className=" bg-white shadow-md rounded-lg p-4 sm:p-8 max-w-6xl mx-4 sm:mx-auto my-6 sm:my-10 border font-roboto border-[#DEE2E6]">
        <div className="text-center mb-4 sm:mb-6">
          <h2 className="text-lg sm:text-xl font-bold text-[#231F20]">
            <span className="sm:hidden">Consult with hair our <span className="text-[#1167B1]">doctor</span></span>
            <span className="hidden sm:inline text-4xl leading-[33.6px]">Book an Appointment with our <span className="text-[#1167B1]">Doctors</span></span>
          </h2>
          <p className="text-[#231F20] text-xs sm:text-base mt-1 font-light leading-[25px]">Unmatched Expertise & Results</p>
        </div>
        
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-4">
            <div className="w-full sm:w-1/2">
              <input
                type="text"
                name="name"
                placeholder="Enter Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full placeholder-[#B3B3B3] text-[#231F20] px-4 py-2 border border-[#DEE2E6] rounded-md focus:outline-none  text-sm sm:text-base"
              />
            </div>
            
            <div className="w-full sm:w-1/2">
              <input
                type="text"
                name="mobile"
                placeholder="Enter Mobile Number"
                value={formData.mobile}
                onChange={handleChange}
                className="w-full placeholder-[#B3B3B3] text-[#231F20] px-4 py-2 border border-[#DEE2E6] rounded-md focus:outline-none  text-sm sm:text-base"
              />
            </div>
          </div>
          
          <div className="flex items-center justify-center mb-4 sm:mb-6">
            <div className="flex items-center h-5">
              <input
                id="terms"
                name="termsAccepted"
                type="checkbox"
                checked={formData.termsAccepted}
                onChange={handleChange}
                className="w-4 h-4 border-2 border-white bg-[#0C4679] rounded-xl "
              />
            </div>
            <label htmlFor="terms" className="ml-2 text-xs sm:text-sm whitespace-nowrap text-[#B3B3B3]">
              I understand and accept the terms and conditions
            </label>
          </div>
          {errors.terms && <p className="text-[#231F20] text-xs mt-1 mb-4 text-center">{errors.terms}</p>}
          
          <div className="text-center">
            <button 
              type="submit"
              className="bg-[#231F20] dark:bg-[#231F20] text-white dark:text-white py-2.5 sm:py-2 px-2.5 sm:px-6 rounded-md uppercase text-[10px] sm:text-base shadow-[0px_4px_15px_0px_#AFADAD2E] font-semibold cursor-pointer w-2/3 sm:w-auto mx-auto"
            >
              BOOK YOUR APPOINTMENT
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AppointmentBooking;