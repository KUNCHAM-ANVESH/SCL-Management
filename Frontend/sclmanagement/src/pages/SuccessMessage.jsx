import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const SuccessMessage = ({ message = "Operation Successful!", onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800/50 backdrop-blur-sm z-50">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-white/80 backdrop-blur-md rounded-2xl shadow-2xl p-8 text-center max-w-sm w-full"
      >
        <div className="flex flex-col items-center justify-center space-y-4">
          <CheckCircle className="text-green-500 w-16 h-16" />
          <h2 className="text-2xl font-semibold text-green-600">Success!</h2>
          <p className="text-gray-700">{message}</p>
        </div>
      </motion.div>
    </div>
  );
};

export default SuccessMessage;
