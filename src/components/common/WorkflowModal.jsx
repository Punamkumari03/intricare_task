import React, { useState } from "react";
import * as bootstrap from 'bootstrap';

const WorkflowModal = () => {
  const [selectedWorkflow, setSelectedWorkflow] = useState("advanced");

  const handleNext = () => {
    if (selectedWorkflow === "advanced") {
      // Reset campaign step to 1 to ensure it starts at Define Target Audience
      localStorage.setItem('campaignStep', '1');

      // Close the modal using Bootstrap API
      const modalElement = document.getElementById("workflowModal");
      const modal = bootstrap.Modal.getInstance(modalElement) || new bootstrap.Modal(modalElement);
      if (modal) {
        modal.hide();
        // Remove backdrop manually if it persists
        const backdrop = document.querySelector('.modal-backdrop');
        if (backdrop) backdrop.remove();
        document.body.classList.remove('modal-open');
        document.body.style.overflow = '';
        document.body.style.paddingRight = '';
      }
      window.location.href = "/advance-campaign";
    }
  };

  return (
    <div className="modal fade" id="workflowModal" tabIndex="-1" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered" style={{ maxWidth: '683px' }}>
        <div className="modal-content workflow-modal-content">
          <div className="modal-header workflow-modal-header">
            <div>
              <h5 className="modal-title">Select Workflow Mode</h5>
              <p className="modal-subtitle">Choose how you want your campaign to behave</p>
            </div>
            <button type="button" className="btn-close-custom" data-bs-dismiss="modal" aria-label="Close">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#5E5873" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="15" y1="9" x2="9" y2="15"></line>
                <line x1="9" y1="9" x2="15" y2="15"></line>
              </svg>
            </button>
          </div>
          <div className="modal-body workflow-modal-body">
            {/* ... rest of the body ... */}
            <div
              className={`workflow-card ${selectedWorkflow === 'advanced' ? 'active' : ''}`}
              onClick={() => setSelectedWorkflow('advanced')}
            >
              <div className="workflow-card__top">
                <div className="workflow-radio">
                  <div className={`radio-outer ${selectedWorkflow === 'advanced' ? 'checked' : ''}`}>
                    <div className="radio-inner"></div>
                  </div>
                </div>
                <div className="workflow-info">
                  <div className="d-flex align-items-center gap-2">
                    <span className="workflow-name">Advanced Workflow</span>
                    <span className="badge-recommended">Recommended</span>
                  </div>
                  <p className="workflow-description">Best for high-volume outreach</p>
                  <ul className="workflow-features">
                    <li>Conditional logic</li>
                    <li>Multiple paths</li>
                    <li>More control</li>
                  </ul>
                </div>
                <div className="workflow-illustration">
             <img src="/image/advance.png" alt="" />
                </div>
              </div>
            </div>

            <div
              className={`workflow-card mt-4 ${selectedWorkflow === 'standard' ? 'active' : ''}`}
              onClick={() => setSelectedWorkflow('standard')}
            >
              <div className="workflow-card__top">
                <div className="workflow-radio">
                  <div className={`radio-outer ${selectedWorkflow === 'standard' ? 'checked' : ''}`}>
                    <div className="radio-inner"></div>
                  </div>
                </div>
                <div className="workflow-info">
                  <span className="workflow-name">Standard Workflow</span>
                  <p className="workflow-description">Best for beginners</p>
                  <ul className="workflow-features">
                    <li>Linear steps</li>
                    <li>No conditions</li>
                    <li>Easy Setup</li>
                  </ul>
                </div>
                <div className="workflow-illustration">
                <img src="/image/standard.png" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="modal-footer workflow-modal-footer">
            <button type="button" className="btn-modal-close" data-bs-dismiss="modal">Close</button>
            <button type="button" className="btn-modal-next" onClick={handleNext}>Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkflowModal;
