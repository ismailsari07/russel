import { useState } from 'react';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import Main from './pages/Main';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  return (
    <div className="flex w-full h-screen bg-black text-[#e0e0e0] font-inter">
      {/* Sidebar */}
      <Dashboard mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={() => setMobileMenuOpen(false)} />
      {/* Main content area */}
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Top Navbar */}
        <Navbar onMobileMenuOpen={() => setMobileMenuOpen(true)} />
        {/* Main Page Content */}
        <Main />
      </div>
    </div>
  );
}

export default App;
