import { useState, useEffect } from "react";
import { registerUser } from "../api/authApi";

const useRegister = (formData, triggerSubmit) => {
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!triggerSubmit) return;

    const submitData = async () => {
      setLoading(true);
      try {
        const response = await registerUser(formData);
        if (response.status === 201) {
          setMsg("Registered Successfully!");
          setSuccess(true);
        }
      } catch (err) {
        setMsg(err.msg || "Registration Failed");
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    submitData();
  }, [triggerSubmit]); 

  return { loading, msg, success, error, setSuccess, setError };
};

export default useRegister;