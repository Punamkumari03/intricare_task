import React from "react";
import { useLocation, Link } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const isAdvanceCampaign = location.pathname === "/advance-campaign";
  return (
    <header className="app-header">
      <div className="header-left">
        <div className="breadcrumbs">
          <span className="breadcrumb-item">
            <Link to="/">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4C78FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9 22 9 12 15 12 15 22"></polyline>
              </svg>
            </Link>
          </span>
          <span className="breadcrumb-separator mx-2">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#B9B9C3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </span>
          <span className={`breadcrumb-item ${(!isAdvanceCampaign && location.pathname !== '/campaign/dashboard') ? 'active' : ''}`}>
            {(isAdvanceCampaign || location.pathname === '/campaign/dashboard') ? <Link to="/advance-campaign" className="text-decoration-none" style={{ color: '#4C78FF' }}>Campaign</Link> : 'Campaign'}
          </span>
          {isAdvanceCampaign && (
            <>
              <span className="breadcrumb-separator mx-2">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#B9B9C3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </span>
              <span className="breadcrumb-item active">Advance Campaign</span>
            </>
          )}
          {location.pathname === '/campaign/dashboard' && (
            <>
              <span className="breadcrumb-separator mx-2">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#B9B9C3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </span>
              <span className="breadcrumb-item active">Tech Founder</span>
            </>
          )}
        </div>
      </div>

      <div className="header-user">
        <div className="user-text">
          <span className="profile-name">John Doe</span>
          <span className="profile-role d-block">Admin</span>
        </div>
        <div className="profile-img-container">
          <img src="/image/user.png" alt="User" className="profile-img" />
          <span className="status-dot"></span>
        </div>
      </div>
    </header>
  );
};

export default Header;
