export default function validateLogin(formData) {
  const errors = {};

  // Email validation
  if (!formData.email.trim()) {
    errors.email = "Email is required";
  } else if (formData.email.length < 4) {
    errors.email = "Email must be at least 4 characters";
  } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    errors.email = "Email is invalid";
  }

  // Password validation
  if (!formData.password) {
    errors.password = "Password is required";
  } else if (formData.password.length < 4) {
    errors.password = "Password must be at least 4 characters";
  }

  return errors;
}