import WorkflowModal from "../components/common/WorkflowModal";

const Home = () => {
  return (
    <div className="dashboard-body">
      <div className="dashboard-filters">
        <div className="filter-select-wrapper">
          <select className="filter-select form-select form-control">
            <option value="all">All</option>
          </select>
        </div>
        <div className="search-input-wrapper">
          <div className="search-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </div>
          <input type="text" className="search-input form-control" placeholder="Search" />
        </div>
      </div>

      <div className="empty-state">
        <div className="empty-state__content">
          <div className="empty-state__image">
            <img src="/image/dashboard.png" alt="No Campaigns" />
          </div>
          <button
            className="btn-primary mt-4"
            data-bs-toggle="modal"
            data-bs-target="#workflowModal"
          >
            New Campaign
          </button>
        </div>
      </div>

      <WorkflowModal />
    </div>
  );
};

export default Home;
