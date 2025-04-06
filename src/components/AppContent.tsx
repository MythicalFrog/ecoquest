import { Routes, Route, useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { ReactNode } from "react";
import Index from "../pages/Index";
import Journey from "../pages/Journey";
import Adventure from "../pages/Adventure";
import MapView from "./MapView";
import StatsPage from "../pages/Stats";
import RewardsPage from "../pages/Rewards";
import LeaderboardPage from "../pages/Leaderboard";
import About from "../pages/About";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import NotFound from "../pages/NotFound";
import AuthWrapper from "./AuthWrapper";

interface LayoutProps {
  children: ReactNode;
}

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/login');
  };

  return (
    <button
      onClick={handleLogout}
      style={{
        position: 'fixed',
        top: '20px',
        right: '20px',
        backgroundColor: '#dc3545',
        color: 'white',
        padding: '8px 16px',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        transition: 'background-color 0.2s ease',
        zIndex: 1000, // Add this line
      }}
      onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#bb2d3b'}
      onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#dc3545'}
    >
      Logout
    </button>
  );
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      <LogoutButton />
      {children}
    </div>
  );
};

const ProtectedRoutes = () => (
  <AuthWrapper>
    <Layout>
      <Routes>
        <Route index element={<Index />} />
        <Route path="journey" element={<Journey />} />
        <Route path="adventure" element={<Adventure />} />
        <Route path="map" element={<MapView />} />
        <Route path="stats" element={<StatsPage />} />
        <Route path="rewards" element={<RewardsPage />} />
        <Route path="leaderboard" element={<LeaderboardPage />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  </AuthWrapper>
);

const AppContent = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (session) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
        navigate('/login');
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  return (
    <Routes>
      {!isAuthenticated ? (
        <>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </>
      ) : null}
      <Route path="*" element={<ProtectedRoutes />} />
    </Routes>
  );
};

export default AppContent;