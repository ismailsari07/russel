interface DashboardProps {
    mobileMenuOpen: boolean;
    setMobileMenuOpen: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({mobileMenuOpen, setMobileMenuOpen}: DashboardProps) => {

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
            <a href="#" className="sidebar-item flex items-center px-4 py-3 text-sm font-medium rounded-md text-white bg-gray-800 hover:bg-white/5">
              <i className="fas fa-home mr-3 text-gray-400"></i>
              Dashboard
            </a>
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
