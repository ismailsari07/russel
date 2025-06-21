import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface DashboardProps {
    mobileMenuOpen: boolean;
    setMobileMenuOpen: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({mobileMenuOpen, setMobileMenuOpen}: DashboardProps) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }
    if (dropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [dropdownOpen]);

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex md:flex-shrink-0">
        <div className="flex flex-col w-64 bg-black border-r border-gray-800">
          <div className="flex items-center h-16 w-[300px] px-6 py-3 border-b border-gray-800">
            <div className="flex items-center">
              <i className="fas fa-compass text-[#8BEDEB] mr-2 text-xl"></i>
              <span className="text-xl font-semibold text-white">MyOffice</span>
            </div>
          </div>
          <nav className="flex-1 px-2 space-y-1">
            <div className="relative flex items-center group">
              <a href="#" className="sidebar-item w-full flex items-center px-4 py-3 text-sm font-medium rounded-md text-white bg-gray-800 hover:bg-white/5">
                <i className="fas fa-home mr-3 text-gray-400"></i>
                Dashboard
              </a>
              <button
                className="ml-2 px-3 py-2 rounded hover:bg-gray-700 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-[#8BEDEB]"
                onClick={() => setDropdownOpen((open) => !open)}
                aria-label="Add New"
              >
                <i className="fas fa-plus"></i>
              </button>
              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div
                    ref={dropdownRef}
                    className="absolute left-63 top-0 z-50 mt-2 w-56 bg-gray-800 border border-gray-700 rounded-lg shadow-lg py-2 text-sm"
                    initial={{ opacity: 0, y: -10, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.98 }}
                    transition={{ duration: 0.18, ease: 'easeOut' }}
                  >
                    <div className="px-3 py-1 text-xs text-gray-400">Create</div>
                    <a href="#" className="flex items-center px-4 py-2 hover:bg-gray-800 text-gray-200">
                      <i className="fas fa-folder mr-2 text-gray-400"></i> Folder
                    </a>
                    <a href="#" className="flex items-center px-4 py-2 hover:bg-gray-800 text-gray-200">
                      <i className="fas fa-folder-open mr-2 text-gray-400"></i> Shared folder
                    </a>
                    <a href="#" className="flex items-center px-4 py-2 hover:bg-gray-800 text-red-400">
                      <i className="fas fa-upload mr-2"></i> Upload files
                    </a>
                    <a href="#" className="flex items-center px-4 py-2 hover:bg-gray-800 text-red-400">
                      <i className="fas fa-folder-plus mr-2"></i> Upload folder
                    </a>
                    <a href="#" className="flex items-center px-4 py-2 hover:bg-gray-800 text-blue-400">
                      <i className="fas fa-link mr-2"></i> New Link
                    </a>
                    <div className="border-t border-gray-700 my-2"></div>
                    <a href="#" className="flex items-center px-4 py-2 hover:bg-gray-800 text-green-400">
                      <i className="fas fa-table mr-2"></i> Sheet
                    </a>
                    <a href="#" className="flex items-center px-4 py-2 hover:bg-gray-800 text-[#8BEDEB]">
                      <i className="fas fa-file-alt mr-2"></i> Document
                    </a>
                    <a href="#" className="flex items-center px-4 py-2 hover:bg-gray-800 text-purple-400">
                      <i className="fas fa-chart-pie mr-2"></i> Presentation
                    </a>
                    <a href="#" className="flex items-center px-4 py-2 hover:bg-gray-800 text-blue-400">
                      <i className="fas fa-file-lines mr-2"></i> Rich text
                    </a>
                    <a href="#" className="flex items-center px-4 py-2 hover:bg-gray-800 text-green-500">
                      <i className="fas fa-columns mr-2"></i> Kanban
                    </a>
                    <a href="#" className="flex items-center px-4 py-2 hover:bg-gray-800 text-gray-300">
                      <i className="fas fa-code mr-2"></i> Code
                    </a>
                    <a href="#" className="flex items-center px-4 py-2 hover:bg-gray-800 text-pink-400">
                      <i className="fas fa-clipboard-list mr-2"></i> Form
                    </a>
                    <a href="#" className="flex items-center px-4 py-2 hover:bg-gray-800 text-yellow-400">
                      <i className="fas fa-sticky-note mr-2"></i> Whiteboard
                    </a>
                    <a href="#" className="flex items-center px-4 py-2 hover:bg-gray-800 text-indigo-400">
                      <i className="fas fa-file-code mr-2"></i> Markdown slides
                    </a>
                    <a href="#" className="flex items-center px-4 py-2 hover:bg-gray-800 text-orange-400">
                      <i className="fas fa-project-diagram mr-2"></i> Diagram
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <a href="#" className="sidebar-item flex items-center px-4 py-3 text-sm font-medium rounded-md text-gray-300 hover:text-white hover:bg-white/5">
              <i className="fas fa-folder mr-3 text-[#8BEDEB]"></i>
              <span>Folders</span>
            </a>
            <a href="#" className="sidebar-item flex items-center px-4 py-3 text-sm font-medium rounded-md text-gray-300 hover:text-white hover:bg-white/5">
              <i className="fas fa-file-alt mr-3 text-[#8BEDEB]"></i>
              <span>Documents</span>
            </a>
            <a href="#" className="sidebar-item flex items-center px-4 py-3 text-sm font-medium rounded-md text-gray-300 hover:text-white hover:bg-white/5">
              <i className="fas fa-table mr-3 text-green-400"></i>
              <span>Spreadsheets</span>
            </a>
            <a href="#" className="sidebar-item flex items-center px-4 py-3 text-sm font-medium rounded-md text-gray-300 hover:text-white hover:bg-white/5">
              <i className="fas fa-chart-pie mr-3 text-purple-400"></i>
              <span>Presentations</span>
            </a>
            <a href="#" className="sidebar-item flex items-center px-4 py-3 text-sm font-medium rounded-md text-gray-300 hover:text-white hover:bg-white/5">
              <i className="fas fa-sticky-note mr-3 text-yellow-400"></i>
              <span>Whiteboards</span>
            </a>
            <a href="#" className="sidebar-item flex items-center px-4 py-3 text-sm font-medium rounded-md text-gray-300 hover:text-white hover:bg-white/5">
              <i className="fas fa-users mr-3 text-pink-400"></i>
              <span>Collaborators</span>
            </a>
            <a href="#" className="sidebar-item flex items-center px-4 py-3 text-sm font-medium rounded-md text-gray-300 hover:text-white hover:bg-white/5">
              <i className="fas fa-cog mr-3 text-gray-400"></i>
              <span>Settings</span>
            </a>
          </nav>
          <div className="mt-auto p-4 border-t border-gray-800">
            <div className="flex items-center">
              <img className="h-9 w-9 rounded-full" src="https://ui-avatars.com/api/?name=User+Name&background=1e3a8a&color=fff" alt="" />
              <div className="ml-3">
                <p className="text-sm font-medium text-white">User Name</p>
                <p className="text-xs font-medium text-gray-400">user@example.com</p>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Mobile Sidebar (Drawer) */}
      {mobileMenuOpen && (
        <div id="mobileMenu" className="fixed inset-0 z-50 bg-black opacity-95 flex md:hidden">
            <div className="flex flex-col h-full w-full">
                <div className="flex items-center justify-between p-4 border-b border-gray-800">
                    <div className="flex items-center">
                        <i className="fas fa-compass text-[#8BEDEB] mr-2 text-xl"></i>
                        <span className="text-xl font-semibold text-white">MyOffice</span>
                    </div>
                    <button className="text-gray-400 hover:text-white" onClick={setMobileMenuOpen}>
                        <i className="fas fa-times text-xl"></i>
                    </button>
                </div>
                <div className="flex-1 overflow-y-auto p-4">
                    <nav className="space-y-2">
                        <a href="#" className="sidebar-item flex items-center px-4 py-3 text-sm font-medium rounded-md text-white bg-gray-800">
                            <i className="fas fa-home mr-3 text-gray-400"></i>
                            Dashboard
                        </a>
                        <a href="#" className="sidebar-item flex items-center px-4 py-3 text-sm font-medium rounded-md text-gray-300 hover:text-white">
                            <i className="fas fa-folder mr-3 text-[#8BEDEB]"></i>
                            <span>Folders</span>
                        </a>
                        <a href="#" className="sidebar-item flex items-center px-4 py-3 text-sm font-medium rounded-md text-gray-300 hover:text-white">
                            <i className="fas fa-file-alt mr-3 text-[#8BEDEB]"></i>
                            <span>Documents</span>
                        </a>
                        <a href="#" className="sidebar-item flex items-center px-4 py-3 text-sm font-medium rounded-md text-gray-300 hover:text-white">
                            <i className="fas fa-table mr-3 text-green-400"></i>
                            <span>Spreadsheets</span>
                        </a>
                        <a href="#" className="sidebar-item flex items-center px-4 py-3 text-sm font-medium rounded-md text-gray-300 hover:text-white">
                            <i className="fas fa-chart-pie mr-3 text-purple-400"></i>
                            <span>Presentations</span>
                        </a>
                        <a href="#" className="sidebar-item flex items-center px-4 py-3 text-sm font-medium rounded-md text-gray-300 hover:text-white">
                            <i className="fas fa-sticky-note mr-3 text-yellow-400"></i>
                            <span>Whiteboards</span>
                        </a>
                        <a href="#" className="sidebar-item flex items-center px-4 py-3 text-sm font-medium rounded-md text-gray-300 hover:text-white">
                            <i className="fas fa-users mr-3 text-pink-400"></i>
                            <span>Collaborators</span>
                        </a>
                        <a href="#" className="sidebar-item flex items-center px-4 py-3 text-sm font-medium rounded-md text-gray-300 hover:text-white">
                            <i className="fas fa-cog mr-3 text-gray-400"></i>
                            <span>Settings</span>
                        </a>
                    </nav>
                </div>
                <div className="p-4 border-t border-gray-800">
                    <div className="flex items-center">
                        <img className="h-9 w-9 rounded-full" src="https://ui-avatars.com/api/?name=User+Name&background=1e3a8a&color=fff" alt="" />
                        <div className="ml-3">
                            <p className="text-sm font-medium text-white">User Name</p>
                            <p className="text-xs font-medium text-gray-400">user@example.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      )}
    </>
  );
};

export default Dashboard;
