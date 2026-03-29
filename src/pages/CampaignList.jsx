import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import WorkflowModal from "../components/common/WorkflowModal";

const CampaignList = () => {
  const [openDropdownId, setOpenDropdownId] = useState(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.dropdown')) {
        setOpenDropdownId(null);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const campaigns = [
    { id: 1, name: "Tech Founder", platforms: ["LinkedIn", "Email"], created: "21 Jan, 2026", crm: "Synced", crmTime: "2h ago", invites: "265", invitesAcc: "15%", reply: "125", replyRec: "10%", email: "400", emailOp: "10%", status: "Running", limit: "40 invites/day", senders: ["/image/user.png", "/image/user2.png"] },
    { id: 2, name: "Growth Ca...", platforms: ["LinkedIn", "Email"], created: "21 Jan, 2026", crm: "Sync to CRM", invites: "265", invitesAcc: "15%", reply: "125", replyRec: "10%", email: "400", emailOp: "10%", status: "Running", limit: "40 invites/day", senders: ["/image/user.png", "/image/user2.png"] },
    { id: 3, name: "Campaign P...", platforms: ["LinkedIn", "Email"], created: "21 Jan, 2026", crm: "Sync to CRM", invites: "265", invitesAcc: "15%", reply: "125", replyRec: "10%", email: "400", emailOp: "10%", status: "Running", limit: "40 invites/day", senders: ["/image/user.png", "/image/user2.png"] },
    { id: 4, name: "Lead Engine", platforms: ["LinkedIn", "Email"], created: "21 Jan, 2026", crm: "Synced", crmTime: "1d ago", invites: "265", invitesAcc: "15%", reply: "125", replyRec: "10%", email: "400", emailOp: "10%", status: "Running", limit: "40 invites/day", senders: ["/image/user.png", "/image/user2.png"] },
    { id: 5, name: "Campaign Hub", platforms: ["LinkedIn", "Email"], created: "21 Jan, 2026", crm: "Synced", crmTime: "5h ago", invites: "265", invitesAcc: "15%", reply: "125", replyRec: "10%", email: "400", emailOp: "10%", status: "Running", limit: "40 invites/day", senders: ["/image/user.png", "/image/user2.png"] },
    { id: 6, name: "Tech Founder", platforms: ["LinkedIn", "Email"], created: "21 Jan, 2026", crm: "Synced", crmTime: "6h ago", invites: "265", invitesAcc: "15%", reply: "125", replyRec: "10%", email: "400", emailOp: "10%", status: "Running", limit: "40 invites/day", senders: ["/image/user.png", "/image/user2.png"] },
    { id: 7, name: "Tech Founder", platforms: ["LinkedIn", "Email"], created: "21 Jan, 2026", crm: "Synced", crmTime: "6h ago", invites: "265", invitesAcc: "15%", reply: "125", replyRec: "10%", email: "400", emailOp: "10%", status: "Running", limit: "40 invites/day", senders: ["/image/user.png", "/image/user2.png"] },
    { id: 8, name: "Tech Founder", platforms: ["LinkedIn", "Email"], created: "21 Jan, 2026", crm: "Synced", crmTime: "6h ago", invites: "265", invitesAcc: "15%", reply: "125", replyRec: "10%", email: "400", emailOp: "10%", status: "Running", limit: "40 invites/day", senders: ["/image/user.png", "/image/user2.png"] },
  ];

  return (
    <div className="campaign-list-container">
      <div className="listing-card">
        {/* Header Section */}
        <div className="listing-header-section">
          <div>
            <h2 className="listing-title">All Campaigns List</h2>
            <p className="listing-subtitle">A quick look at all of your outreach initiatives.</p>
          </div>
          <button className="btn-primary" data-bs-toggle="modal" data-bs-target="#workflowModal">
            New Campaign
          </button>
        </div>

        {/* Filter Bar */}
        <div className="filter-action-bar">
          <div className="filter-group">
            <select className="filter-select form-select">
              <option>Channel</option>
            </select>
            <select className="filter-select form-select">
              <option>Status</option>
            </select>
            <button className="btn-clear-all">Clear All</button>
          </div>
          <button className="btn-export">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" /></svg>
            Export List
          </button>
        </div>

        {/* Campaign Table */}
        <div className="table-responsive">
          <table className="table campaign-table">
            <thead>
              <tr>
                <th style={{ width: '40px' }}><input type="checkbox" className="form-check-input" /></th>
                <th>ALL CAMPAIGNS</th>
                <th>CRM</th>
                <th>INVITES SENT</th>
                <th>REPLY RATE</th>
                <th>EMAIL SENT</th>
                <th>SENDER</th>
                <th>STATUS</th>
                <th>DAILY LIMIT</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {campaigns.map((item) => (
                <tr key={item.id}>
                  <td><input type="checkbox" className="form-check-input" /></td>
                  <td>
                    <div className="d-flex flex-column">
                      <div className="d-flex align-items-center mb-1">
                        <Link to="/campaign/dashboard" className="text-decoration-none campaign-name">{item.name}</Link>
                        {item.platforms.map((p, i) => (
                          <span key={i} className="platform-pill">{p}</span>
                        ))}
                      </div>
                      <span className="campaign-date">Created On: {item.created}</span>
                    </div>
                  </td>
                  <td>
                    {item.crm === 'Synced' ? (
                      <div className="crm-status-row">
                        <span className="crm-synced-label">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" /></svg>
                          Synced
                        </span>
                        <span className="crm-synced-time">{item.crmTime}</span>
                      </div>
                    ) : (
                      <button className="btn badge-sync-crm">Sync to CRM</button>
                    )}
                  </td>
                  <td>
                    <div className="d-flex flex-column">
                      <span className="table-stats-val">{item.invites}</span>
                      <span className="table-stats-sub">{item.invitesAcc} Accepted</span>
                    </div>
                  </td>
                  <td>
                    <div className="d-flex flex-column">
                      <span className="table-stats-val">{item.reply}</span>
                      <span className="table-stats-sub">{item.replyRec} Received</span>
                    </div>
                  </td>
                  <td>
                    <div className="d-flex flex-column">
                      <span className="table-stats-val">{item.email}</span>
                      <span className="table-stats-sub">{item.emailOp} Mail Opened</span>
                    </div>
                  </td>
                  <td>
                    <div className="avatar-stack">
                      {item.senders.map((s, i) => (
                        <img key={i} src={s} alt="" />
                      ))}
                    </div>
                  </td>
                  <td>
                    <span className="status-badge badge-running">
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 5.25C3 4.18934 3 3.65901 3.32951 3.32951C3.65901 3 4.18934 3 5.25 3C6.31066 3 6.84099 3 7.1705 3.32951C7.5 3.65901 7.5 4.18934 7.5 5.25V12.75C7.5 13.8106 7.5 14.341 7.1705 14.6705C6.84099 15 6.31066 15 5.25 15C4.18934 15 3.65901 15 3.32951 14.6705C3 14.341 3 13.8106 3 12.75V5.25Z" stroke="#549A75" strokeWidth="1.125" />
                        <path d="M10.5 5.25C10.5 4.18934 10.5 3.65901 10.8295 3.32951C11.159 3 11.6894 3 12.75 3C13.8106 3 14.341 3 14.6705 3.32951C15 3.65901 15 4.18934 15 5.25V12.75C15 13.8106 15 14.341 14.6705 14.6705C14.341 15 13.8106 15 12.75 15C11.6894 15 11.159 15 10.8295 14.6705C10.5 14.341 10.5 13.8106 10.5 12.75V5.25Z" stroke="#549A75" strokeWidth="1.125" />
                      </svg>
                      Running
                    </span>
                  </td>
                  <td>
                    <span className="daily-limit-badge">{item.limit}</span>
                  </td>
                  <td>
                    <div className="dropdown">
                      <button
                        className="btn p-0 border-0 dropdown-toggle no-caret"
                        type="button"
                        onClick={() => setOpenDropdownId(openDropdownId === item.id ? null : item.id)}
                      >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#B9B9C3" strokeWidth="2"><circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/></svg>
                      </button>
                      <ul className={`dropdown-menu dropdown-menu-end action-dropdown-menu ${openDropdownId === item.id ? 'show' : ''}`} style={{ position: 'absolute', inset: '0px 0px auto auto', margin: '0px', transform: 'translate(0px, 32px)' }}>
                        <li>
                          <Link to="/campaign/dashboard" className="action-dropdown-item">
                            <span className="action-icon-box">
                              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="8" y1="12" x2="8" y2="16"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="16" y1="13" x2="16" y2="16"/></svg>
                            </span>
                            View Analytics
                          </Link>
                        </li>
                        <li>
                          <div className="action-dropdown-item">
                            <span className="action-icon-box">
                              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                            </span>
                            Edit Sequence
                          </div>
                        </li>
                        <li>
                          <div className="action-dropdown-item">
                            <span className="action-icon-box">
                              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/><line x1="12" y1="12" x2="12" y2="15"/><line x1="12" y1="15" x2="15" y2="15"/></svg>
                            </span>
                            Duplicate
                          </div>
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <WorkflowModal />
    </div>
  );
};

export default CampaignList;
