import React from "react";
import { useNavigate } from "react-router";
export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-blue-50 flex items-center justify-center px-6 py-12">
      <div className="text-center max-w-2xl mx-auto">
        <div >
          <img 
            src="/Under-Development.png" 
            alt="404 Error" 
            className="w-90 h-90 mx-auto"
          />
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Oops! Page Not Found
        </h2>
        <p className="text-gray-600 mb-8 text-lg">
        We're crafting something amazing for you. This page will be available shortly with enhanced features and capabilities.
        </p>
        <div className="space-x-4">
          <button
            onClick={() => navigate(-1)}
            className="bg-transparent hover:bg-blue-600 text-blue-600 hover:text-white py-2 px-6 border border-blue-600 hover:border-transparent rounded-lg transition-all duration-300 font-medium"
          >
            Go Back
          </button>
          <button
            onClick={() => navigate("/")}
            className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg transition-all duration-300 font-medium shadow-lg hover:shadow-xl"
          >
            Return Home
          </button>
        </div>
        <div className="mt-8 text-sm text-gray-500">
          Need assistance? {" "}
          <a 
            href="#" 
            className="text-blue-600 hover:underline font-medium"
          >
            Contact Support
          </a>
        </div>
      </div>
    </div>
  );
}