import React from "react";
import { Logout } from "../../svgFile";
import { Link } from "react-router-dom";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <aside className={`app-sidebar ${isOpen ? 'show' : ''}`}>
      <div className="app-sidebar__brand">
        <div className="brand-logo d-flex align-items-center justify-content-between w-100">
          <Link to='/'>
          <img src="/image/logo.png" alt="Logo" /></Link>
<span className="d-lg-block d-none"><svg
  width={18}
  height={18}
  viewBox="0 0 18 18"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M2.25 8.25C2.25 5.42157 2.25 4.00736 3.12868 3.12868C4.00736 2.25 5.42157 2.25 8.25 2.25H9.75C12.5784 2.25 13.9927 2.25 14.8713 3.12868C15.75 4.00736 15.75 5.42157 15.75 8.25V9.75C15.75 12.5784 15.75 13.9927 14.8713 14.8713C13.9927 15.75 12.5784 15.75 9.75 15.75H8.25C5.42157 15.75 4.00736 15.75 3.12868 14.8713C2.25 13.9927 2.25 12.5784 2.25 9.75V8.25Z"
    stroke="#5E5873"
    strokeWidth="1.125"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
  <path
    d="M11.25 2.25V15.75"
    stroke="#5E5873"
    strokeWidth="1.125"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
  <path
    d="M6 6.75L6.83114 7.40901C7.77705 8.15903 8.25 8.53403 8.25 9C8.25 9.46597 7.77705 9.84097 6.83114 10.591L6 11.25"
    stroke="#5E5873"
    strokeWidth="1.125"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
</svg>
</span>
        </div>

        <button className="sidebar-close-btn ml-auto" onClick={toggleSidebar} style={{ border: 'none', background: 'none', cursor: 'pointer', color: '#718096' }}>
        <svg
  width={18}
  height={18}
  viewBox="0 0 18 18"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M2.25 8.25C2.25 5.42157 2.25 4.00736 3.12868 3.12868C4.00736 2.25 5.42157 2.25 8.25 2.25H9.75C12.5784 2.25 13.9927 2.25 14.8713 3.12868C15.75 4.00736 15.75 5.42157 15.75 8.25V9.75C15.75 12.5784 15.75 13.9927 14.8713 14.8713C13.9927 15.75 12.5784 15.75 9.75 15.75H8.25C5.42157 15.75 4.00736 15.75 3.12868 14.8713C2.25 13.9927 2.25 12.5784 2.25 9.75V8.25Z"
    stroke="#5E5873"
    strokeWidth="1.125"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
  <path
    d="M11.25 2.25V15.75"
    stroke="#5E5873"
    strokeWidth="1.125"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
  <path
    d="M6 6.75L6.83114 7.40901C7.77705 8.15903 8.25 8.53403 8.25 9C8.25 9.46597 7.77705 9.84097 6.83114 10.591L6 11.25"
    stroke="#5E5873"
    strokeWidth="1.125"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
</svg>

        </button>
      </div>

      <nav className="app-sidebar__nav">
        <a className="app-sidebar__link active" href="/campaign">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
            <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
          </svg>
          Campaign
        </a>
      </nav>

      <div className="app-sidebar__footer">
        <div className="profile-card">
          <div className="d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-start gap-2">
          <div className="profile-img-container">
            <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Profile" className="profile-img" />
            <span className="status-dot"></span>
          </div>
          <div className="profile-info">
            <p className="profile-name">John Doe</p>
            <p className="profile-role">Admin</p>
       
          </div>
       </div>
          <button className="logout-btn">
           <Logout/>
          </button>
             </div>
             <div className="mt-3">
                  <p className="profile-role">Email</p>
              <p className="profile-name">johndoe@gmail.com</p>
        
             </div>
        </div>

        <div className="theme-toggle">
          <button className="theme-btn active">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="5"></circle>
              <line x1="12" y1="1" x2="12" y2="3"></line>
              <line x1="12" y1="21" x2="12" y2="23"></line>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
              <line x1="1" y1="12" x2="3" y2="12"></line>
              <line x1="21" y1="12" x2="23" y2="12"></line>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
            </svg>
            Light
          </button>
          <button className="theme-btn">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
            Dark
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
