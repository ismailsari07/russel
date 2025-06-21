import React, { useState } from 'react';
import { FILE_TYPES, type FileType } from '../config/fileTypes';
import QuickAccessButton from '../components/QuickAccessButton';
import RecentFileCard from '../components/RecentFileCard';

const Main: React.FC = () => {
  const [recentFiles, setRecentFiles] = useState<FileType[]>([]);

  const handleCreateFile = (file: FileType) => {
    setRecentFiles(prev => [...prev, file]);    
  }

  return (
    <main className="flex-1 overflow-auto p-4 md:p-6 bg-black">

      {/* QUICK ACCESS HEADER */}
      <div className="mb-6 flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white">Quick Access</h2>
      </div>

      {/* QUICK ACCESS CARD */}
      <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-2 mb-8">
        {FILE_TYPES.map((file, index) => (
          <QuickAccessButton key={index} file={file} onClick={handleCreateFile} />
        ))}
      </div>


      {/* RECENT FILES HEADER */}
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

      {/* RECENT FILE CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 ">
        {recentFiles.map((file, index) => (
          <RecentFileCard
            key={index}
            file={file}
            projectName={`Project ${index + 1}`}
            lastEditedDate={`Last edited ${new Date().toLocaleDateString()}`}
          />
        ))}
      </div>
    </main>
  );
};

export default Main;