import React from 'react';
import type { FileType } from '../config/fileTypes';  

type FileCardProps = {
    file: FileType;
    onClick: (file: FileType) => void;
};

const QuickAccessButton: React.FC<FileCardProps> = ({ file, onClick }) => (
  <button 
        className={`flex flex-col items-center justify-center p-3 bg-gray-800 rounded-lg border border-dashed border-gray-600 hover:border-${file.borderColor} text-gray-400 hover:text-${file.color} transition-all glow-on-hover cursor-pointer`} 
        onClick={() => onClick(file)}    
    >
    <i className={`fas ${file.icon} text-lg mb-2`}></i>
    <span className="text-xs">{file.label}</span>
  </button>
);

export default QuickAccessButton;
