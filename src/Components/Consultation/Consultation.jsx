import React from "react";
import ConsultationData from "./ConsultationData";

const Consultation = () => {
  return (
    <section className="w-full  py-12">
  <div className="max-w-4xl mx-auto shadow-lg rounded p-8">
    
    {/* Header */}
    <div className="mb-6 flex items-center space-x-4">
      <h2 className="text-2xl font-bold text-gray-800">Virtual Consultation</h2>
      <span className="text-yellow-500">★★★★★</span>
      <p className="text-gray-600 font-medium">5.0 (980 Reviews)</p>
    </div>

    <form className="flex flex-col md:flex-row gap-6">
  
  <div className="flex flex-col flex-1">
    <label className="text-sm font-medium text-gray-700 mb-2">
      Name
    </label>
    <input
      type="text"
      defaultValue="hamza"
      className="border border-gray-300 rounded-full px-4 py-3 bg-gray-100 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
    />
  </div>

  <div className="flex flex-col flex-1">
    <label className="text-sm font-medium text-gray-700 mb-2">
      Doctor
    </label>
    <input
      type="text"
      defaultValue="Dr Maria Cleven"
      className="border border-gray-300 rounded-full px-4 py-3 bg-gray-100 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
    />
  </div>

  <div className="flex flex-col flex-1">
    <label className="text-sm font-medium text-gray-700 mb-2">
      Location
    </label>
    <input
      type="text"
      defaultValue="Amsterdam"
      className="border border-gray-300 rounded-full px-4 py-3 bg-gray-100 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
    />
  </div>

  <div className="flex items-end">
    <button
      type="submit"
      className="bg-blue-400 text-white px-8 py-3 rounded-full hover:bg-blue-500 transition"
    >
      Submit
    </button>
  </div>

</form>


   <div className="mt-8 flex items-center gap-4">
  <p className="text-5xl font-bold text-gray-900">200K+</p>
  <p className="text-gray-600 max-w-xs">
    Cured satisfied patients around the globe
  </p>
</div>

  </div>
</section>

  );
};

export default Consultation;
