import React from "react";
import { motion } from "framer-motion";
import { XCircle } from "lucide-react"; // red error icon

const ErrorMessage = ({ message = "Something went wrong!", onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm bg-transparent z-50">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-white/80 backdrop-blur-md rounded-2xl shadow-2xl p-8 text-center max-w-sm w-full"
      >
        <div className="flex flex-col items-center justify-center space-y-4">
          <XCircle className="text-red-500 w-16 h-16" />
          <h2 className="text-2xl font-semibold text-red-600">Error!</h2>
          <p className="text-gray-700">{message}</p>
          <button
            onClick={onClose}
            className="mt-4 px-6 py-2 bg-red-500 text-white font-medium rounded-lg hover:bg-red-600 transition-all"
          >
            Close
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default ErrorMessage;
