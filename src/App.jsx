import { BrowserRouter as Router, useLocation, useNavigate } from 'react-router-dom';
import './App.css';
import AppRoute from './routes/AppRoute';
import Header from './component/global/Header';
import Sidebar from './component/global/SideBar';
import { useState, useEffect, useContext } from 'react';
import Footer from './component/global/Footer';
import { ReactFlowProvider } from '@xyflow/react';
import CustomizationModal from './component/modal/CustomizationModal';
import { ContentContext } from './context/ContextProvider';
import { toast, ToastContainer } from 'react-toastify';
import isTokenValid from './utils/ValidateToken';
import getToken from './utils/GetToken';
import useAxios from './utils/useAxios';


function AppContent() {
  const location = useLocation();
  const navigate = useNavigate();
  const token = getToken()
  const [showSidebar, setShowSidebar] = useState(true);
  const [isSidebarHovered, setIsSidebarHovered] = useState(false);
  const [screenSize, setScreenSize] = useState('desktop');
  const { setUserInfo, customizationModal, setCustomizationModal } = useContext(ContentContext)

  // const token = localStorage.getItem('token')
  const validToken = isTokenValid(token);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setScreenSize('mobile');
        setShowSidebar(false);
      } else if (width >= 768 && width < 1280) {
        setScreenSize('small-laptop');
        setShowSidebar(false);
      } else {
        setScreenSize('desktop');
        setShowSidebar(true);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if ((screenSize === 'mobile' || screenSize === 'small-laptop') && showSidebar) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [showSidebar, screenSize]);

  useEffect(() => {
    if (token && !validToken) {
      toast.info('Session expired, please login again');
      localStorage.removeItem('token');
      navigate('/');
    }
    else if (token) {
      navigate('/dashboard');
    }
    else {
      if (!token && !['/login', '/signup', '/forgot-password', '/verify-otp', '/email-verification'].includes(location.pathname)) {
        navigate('/');
      }
    }
  }, [token]);

  useEffect(() => {
    const getUserInfo = async () => {
      try {
        const [responseData, fetchError] = await useAxios('GET', 'users', token);
        if (responseData) {
          setUserInfo(responseData.data.user)
        }
      } catch (error) {
        console.log(error)
      }
    }
    getUserInfo();
  }, [token])

  const isAuthPage = ['/', '/login', '/signup', '/email-verification', '/forgot-password', '/verify-otp', '/flow'].includes(location.pathname);

  return (
    <>
      {(screenSize === 'mobile' || screenSize === 'small-laptop') && showSidebar && (
        <div
          className="fixed inset-0 z-30 bg-gray-200 opacity-50"
          onClick={() => setShowSidebar(false)}
        />
      )}

      <div className='h-1'>
        {!isAuthPage && (
          <Header
            onToggleSidebar={() => setShowSidebar(!showSidebar)}
            showSidebarButton={screenSize !== 'desktop'}
            isSidebarOpen={showSidebar && (screenSize === 'mobile' || screenSize === 'small-laptop')}
          />
        )}
        <div className="flex relative min-h-[calc(100vh-4rem)]">
          {!isAuthPage && (
            <div
              className={`${screenSize === 'mobile' || screenSize === 'small-laptop'
                ? `fixed top-0 left-0 z-40 h-full w-64 transform ${showSidebar ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`
                : `transition-all duration-300 ease-in-out ${showSidebar || isSidebarHovered ? 'w-64' : 'w-14'} fixed h-[90vh] top-16`} flex-shrink-0 bg-primary-600 shadow-xl`}
            >

              <Sidebar
                onClose={() => (screenSize === 'mobile' || screenSize === 'small-laptop') && setShowSidebar(false)}
                isCompact={screenSize === 'small-laptop'}
                showSidebar={showSidebar || isSidebarHovered}
                onMouseEnter={() => setIsSidebarHovered(true)}
                onMouseLeave={() => setIsSidebarHovered(false)}
              />
            </div>
          )}

          <div className={`flex-1 transition-all duration-300 ease-in-out ${isAuthPage ? 'ml-0' : screenSize === 'desktop' ? (showSidebar || isSidebarHovered ? 'ml-64 pb-12' : 'ml-14 pb-12') : 'ml-0 pb-12'}  min-h-[calc(100vh-4rem)]`}>
            <AppRoute />
            <div className={`
              md:fixed top-[90%] 
              ${showSidebar && screenSize === 'desktop' ? 'w-[calc(100%-16rem)]' : 'w-[100%]'}
            `}>
              {!isAuthPage && <Footer />}
            </div>
          </div>
        </div>

        {customizationModal && <CustomizationModal />}
        <ToastContainer position="bottom-right" />
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