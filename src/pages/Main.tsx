import React from 'react';

const Main: React.FC = () => {
  return (
    <main className="flex-1 overflow-auto p-4 md:p-6 bg-black">
      {/* Quick Access */}
      <div className="mb-6 flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white">Quick Access</h2>
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-2 mb-8">
        <button className="flex flex-col items-center justify-center p-3 bg-gray-800 rounded-lg border border-dashed border-gray-600 hover:border-[#8BEDEB] text-gray-400 hover:text-[#8BEDEB] transition-all glow-on-hover">
          <i className="fas fa-file-alt text-lg mb-2"></i>
          <span className="text-xs">Document</span>
        </button>
        <button className="flex flex-col items-center justify-center p-2 bg-gray-800 rounded-lg border border-dashed border-gray-600 hover:border-green-500 text-gray-400 hover:text-green-400 transition-all glow-on-hover">
          <i className="fas fa-table text-lg mb-1"></i>
          <span className="text-xs">Spreadsheet</span>
        </button>
        <button className="flex flex-col items-center justify-center p-2 bg-gray-800 rounded-lg border border-dashed border-gray-600 hover:border-purple-500 text-gray-400 hover:text-purple-400 transition-all glow-on-hover">
          <i className="fas fa-chart-pie text-lg mb-1"></i>
          <span className="text-xs">Presentation</span>
        </button>
        <button className="flex flex-col items-center justify-center p-2 bg-gray-800 rounded-lg border border-dashed border-gray-600 hover:border-yellow-500 text-gray-400 hover:text-yellow-400 transition-all glow-on-hover">
          <i className="fas fa-sticky-note text-lg mb-1"></i>
          <span className="text-xs">Whiteboard</span>
        </button>
        <button className="flex flex-col items-center justify-center p-2 bg-gray-800 rounded-lg border border-dashed border-gray-600 hover:border-pink-500 text-gray-400 hover:text-pink-400 transition-all glow-on-hover">
          <i className="fas fa-clipboard-list text-lg mb-1"></i>
          <span className="text-xs">Form</span>
        </button>
        <button className="flex flex-col items-center justify-center p-2 bg-gray-800 rounded-lg border border-dashed border-gray-600 hover:border-indigo-500 text-gray-400 hover:text-indigo-400 transition-all glow-on-hover">
          <i className="fas fa-upload text-lg mb-1"></i>
          <span className="text-xs">Upload</span>
        </button>
      </div>
      {/* Recent Files */}
      <div className="mb-6 flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white">Recent Files</h2>
        <div className="flex space-x-2">
          <button className="px-2 py-0.5 text-xs bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-md transition-all">
            <i className="fas fa-sort-amount-down mr-0.5 text-xs"></i> Sort
          </button>
          <button className="px-2 py-0.5 text-xs bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-md transition-all">
            <i className="fas fa-filter mr-0.5 text-xs"></i> Filter
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {/* File Cards */}
        <div className="file-card w-full transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(0,0,0,0.3)] bg-gray-800 rounded-xl p-4 border border-gray-700 hover:border-[#8BEDEB] cursor-pointer animate-fade-in">
          <div className="flex justify-between items-start mb-3">
            <div className="p-2 rounded-lg bg-[#8BEDEB]/30">
              <i className="fas fa-file-alt text-[#8BEDEB] text-xl"></i>
            </div>
            <div className="flex space-x-2">
              <button className="text-gray-400 hover:text-[#8BEDEB]">
                <i className="fas fa-share-alt"></i>
              </button>
              <button className="text-gray-400 hover:text-[#8BEDEB]">
                <i className="fas fa-ellipsis-v"></i>
              </button>
            </div>
          </div>
          <h3 className="text-white font-medium mb-1">Project Proposal</h3>
          <p className="text-gray-400 text-sm mb-3">Last edited 2 hours ago</p>
          <div className="flex items-center text-xs text-gray-500">
            <div className="flex -space-x-1 mr-2">
              <img className="h-5 w-5 rounded-full border border-gray-800" src="https://ui-avatars.com/api/?name=John+Doe&background=1e3a8a&color=fff" alt="" />
              <img className="h-5 w-5 rounded-full border border-gray-800" src="https://ui-avatars.com/api/?name=Jane+Smith&background=7c3aed&color=fff" alt="" />
            </div>
            <span>Shared with 2 people</span>
          </div>
        </div>
        <div className="file-card w-full transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(0,0,0,0.3)] bg-gray-800 rounded-xl p-4 border border-gray-700 hover:border-green-500 cursor-pointer animate-fade-in">
          <div className="flex justify-between items-start mb-3">
            <div className="p-2 rounded-lg bg-green-900/30">
              <i className="fas fa-table text-green-400 text-xl"></i>
            </div>
            <div className="flex space-x-2">
              <button className="text-gray-400 hover:text-green-400">
                <i className="fas fa-share-alt"></i>
              </button>
              <button className="text-gray-400 hover:text-green-400">
                <i className="fas fa-ellipsis-v"></i>
              </button>
            </div>
          </div>
          <h3 className="text-white font-medium mb-1">Q1 Financials</h3>
          <p className="text-gray-400 text-sm mb-3">Last edited yesterday</p>
          <div className="flex items-center text-xs text-gray-500">
            <div className="flex -space-x-1 mr-2">
              <img className="h-5 w-5 rounded-full border border-gray-800" src="https://ui-avatars.com/api/?name=Finance+Team&background=0d9488&color=fff" alt="" />
            </div>
            <span>Only you</span>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;