import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import './App.css';
import AppRoute from './routes/AppRoute';
import Header from './component/global/Header';
import Sidebar from './component/global/SideBar';
import { useState } from 'react';
import Footer from './component/global/Footer';
import { ReactFlowProvider } from '@xyflow/react';

function AppContent() {
  const location = useLocation();
  const [showSidebar, setShowSidebar] = useState(true);

  const isAuthPage = ['/', '/login', '/signup', '/forgot-password', '/verify-opt', '/flow'].includes(location.pathname);
console.log('Hello World')
  return (
    <>
      <div className='h-1'>

        {!isAuthPage && (
          <Header onToggleSidebar={() => setShowSidebar(!showSidebar)} />
        )}
        <div className="flex relative min-h-[calc(100vh-4rem)]">
          {!isAuthPage && (
            <div
              className={`transition-all duration-300 ease-in-out ${showSidebar ? 'w-64' : 'w-0 overflow-hidden'
                } flex-shrink-0 fixed h-[90vh] top-16`}
            >
              <Sidebar />
            </div>
          )}

          <div className={`flex-1 pb-12 transition-all duration-300 ease-in-out ${isAuthPage ? 'ml-0' : showSidebar ? 'ml-64' : 'ml-0'
            } min-h-[calc(100vh-4rem)]`}>
            <AppRoute />
            <div className={`fixed top-[92%] ${showSidebar ? 'w-[82%]': 'w-[100%]'}`}>
              {!isAuthPage && <Footer />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function App() {
  return (
    <ReactFlowProvider>
      <Router>
        <AppContent />
      </Router>
    </ReactFlowProvider>
  );
}

export default App;
