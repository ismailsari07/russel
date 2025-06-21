import type { FileType } from "../config/fileTypes";
import {motion} from "framer-motion";

type RecentFileProps = {
    file: FileType;
    projectName: string;
    lastEditedDate: string
}

const RecentFileCard: React.FC<RecentFileProps> = ({ file, projectName, lastEditedDate }) => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        style={{ borderColor: file.color }}
        className={`file-card w-full transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(0,0,0,0.3)] bg-gray-800 rounded-xl p-4 border border-gray-700 hover:border-${file.borderColor} cursor-pointer animate-fade-in`}>
          <div className="flex justify-between items-start mb-3">
            <div className={`p-2 rounded-lg bg-${file.color}/30`}>
                <i className={`fas ${file.icon} text-${file.color} text-lg`}></i>
            </div>
            <div className="flex space-x-2">
              <button className={`text-gray-400 hover:text-${file.color}`}>
                <i className="fas fa-share-alt"></i>
              </button>
              <button className={`text-gray-400 hover:text-${file.color}`}>
                <i className="fas fa-ellipsis-v"></i>
              </button>
            </div>
          </div>
          <h3 className="text-white font-medium mb-1">{projectName}</h3>
          <p className="text-gray-400 text-sm mb-3">{lastEditedDate}</p>

          {/* 
          <div className="flex items-center text-xs text-gray-500">
            <div className="flex -space-x-1 mr-2">
              <img className="h-5 w-5 rounded-full border border-gray-800" src="https://ui-avatars.com/api/?name=John+Doe&background=1e3a8a&color=fff" alt="" />
              <img className="h-5 w-5 rounded-full border border-gray-800" src="https://ui-avatars.com/api/?name=Jane+Smith&background=7c3aed&color=fff" alt="" />
            </div>
            <span>Shared with 2 people</span>
          </div>
          */}
        </motion.div>
    )
}

export default RecentFileCard;