const validateRegister = (formData) => {
  const errors = {};

 
  if (!formData.firstName.trim()) errors.firstName = "First Name is required";
  if (!formData.lastName.trim()) errors.lastName = "Last Name is required";

  
  if (!formData.email.trim()) {
    errors.email = "Email is required";
  } else if (formData.email.length < 4) {
    errors.email = "Email must be at least 4 characters";
  } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    errors.email = "Email is invalid";
  }

  
  if (!formData.password) {
    errors.password = "Password is required";
  } else if (formData.password.length < 4) {
    errors.password = "Password must be at least 4 characters";
  }

  
  // if (!formData.phone) {
  //   errors.phone = "Phone number is required";
  // } else if (!/^\d{10}$/.test(formData.phone)) {
  //   errors.phone = "Phone number must be 10 digits";
  // }

  if (!formData.gender) errors.gender = "Gender is required";
  if (!formData.role) errors.role = "Role is required";

  return errors;
}

export default validateRegister
