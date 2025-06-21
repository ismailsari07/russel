import React from 'react';

interface NavbarProps {
  onMobileMenuOpen: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onMobileMenuOpen }: NavbarProps) => {
  return (
    <>
      {/* Mobile header */}
      <div className="md:hidden flex items-center justify-between px-4 py-3 bg-black border-b border-gray-800">
        <div className="flex items-center">
          <button className="text-gray-400 hover:text-white mr-4" onClick={onMobileMenuOpen}>
            <i className="fas fa-bars text-xl"></i>
          </button>
          <div className="flex items-center">
            <i className="fas fa-compass text-[#8BEDEB] mr-2 text-xl"></i>
            <span className="text-xl font-semibold text-white">MyOffice</span>
          </div>
        </div>
        <div className="flex items-center">
          <button className="text-gray-400 hover:text-[#8BEDEB]">
            <i className="fas fa-search text-xl"></i>
          </button>
        </div>
      </div>
      {/* Main header */}
      <div className="hidden md:flex md:w-full md:h-16 items-center justify-between px-6 py-3 bg-black border-b border-gray-800">
        <div className="flex-1 flex justify-center">
          <div className="relative w-96">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <i className="fas fa-search text-[#8BEDEB]"></i>
            </div>
            <input className="block w-full pl-10 pr-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#8BEDEB] focus:border-[#8BEDEB]" placeholder="Search files..." type="text" />
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <button className="text-gray-400 hover:text-white">
            <i className="fas fa-bell text-xl"></i>
          </button>
          <button className="text-gray-400 hover:text-white">
            <i className="fas fa-question-circle text-xl"></i>
          </button>
          <div className="flex items-center">
            <img className="h-8 w-8 rounded-full" src="https://ui-avatars.com/api/?name=User+Name&background=1e3a8a&color=fff" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
